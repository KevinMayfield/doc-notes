import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TdTextEditorComponent} from '@covalent/text-editor';
import SimpleMDE from 'simplemde';
import {StepState, TdStepComponent} from '@covalent/core';
import {CcriFhirServiceService} from './ccri-fhir-service.service';
import {HttpParams} from '@angular/common/http';
import {MatMenuTrigger} from '@angular/material';
import Bundle = fhir.Bundle;
import Patient = fhir.Patient;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor (public ccri: CcriFhirServiceService) {
  }

  sectionOne = '';
  sectionTwo = '';

  searchPatientTerm = '';
  patients: any[] = [];
  patient = 'Patient';
  selectedPatient: fhir.Patient;

  searchPractitionerTerm = '';
  practitioners: any[] = [];
  practitioner = 'Practitioner';
  selectedPractitioner: fhir.Practitioner;

  disabled = false;

  @ViewChild('textEditorOne') private _textEditorOne: TdTextEditorComponent;
  @ViewChild('textEditorTwo') private _textEditorTwo: TdTextEditorComponent;


  @ViewChild('stepPatient') private _stepPatient: TdStepComponent;
  @ViewChild('stepPractitioner') private _stepPractitioner: TdStepComponent;
  @ViewChild('stepSection1') private _stepSection1: TdStepComponent;

  options: any = {
    lineWrapping: true,
    toolbar: ['bold', 'italic', 'heading', '|', 'quote', '|', 'preview'],
    showIcons: ['code', 'table']
  };

  ngAfterViewInit(): void {
    // this._textEditor.togglePreview();
  }

  onPatientSearch(event) {
    this.searchPatientTerm = event;
    console.log(event);
    const query: HttpParams = new HttpParams().set('name', event);
    this.ccri.getPatientSearchResponse(query).subscribe(
      results => {
        const bundle: Bundle = <Bundle> <unknown> results;
        for (const entry of bundle.entry) {
           if (entry.resource.resourceType === 'Patient') {
              const patient = <Patient> entry.resource;
             this.patients.push( {
               name: patient.name[0].family + ', ' + patient.name[0].given,
                resource: patient } );
           }

        }
        console.log(results);
      }
    );
  }

  onPractitionerSearch(event) {
    this.searchPractitionerTerm = event;
    const query: HttpParams = new HttpParams().set('name', event);
    this.ccri.getPractitionerSearchResponse(query).subscribe(
      results => {
        const bundle: Bundle = <Bundle> <unknown> results;
        for (const entry of bundle.entry) {
          if (entry.resource.resourceType === 'Practitioner') {
            const practitioner = <fhir.Practitioner> entry.resource;
            this.patients.push( {
              name: practitioner.name[0].family + ', ' + practitioner.name[0].given,
              resource: practitioner } );
          }

        }
        console.log(results);
      }
    );
  }

  onPatientSelect(event) {
    console.log(event);
    this.patient = event.name;
    this.selectedPatient = event.resource;
    this._stepPatient.active = false;
    this._stepPractitioner.active = true;
  }

  onPractitionerSelect(event) {
    this.practitioner = event.name;
    this.selectedPractitioner = event.resource;
    this._stepPractitioner.active = false;
    this._stepSection1.active = true;
  }
  onTest() {
    // console.log(this._textEditor.value);
    console.log(SimpleMDE.prototype.markdown( this._textEditorOne.value));
  }
}

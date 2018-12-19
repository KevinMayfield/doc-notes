import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentLayoutModule, CovalentSearchModule, CovalentStepsModule} from '@covalent/core';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';
import {CovalentTextEditorModule} from '@covalent/text-editor';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatListModule, MatMenuModule, MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CcriFhirServiceService} from './ccri-fhir-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,

    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentTextEditorModule,
    CovalentSearchModule
  ],
  providers: [
    CcriFhirServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

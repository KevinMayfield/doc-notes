import {Component, ViewChild} from '@angular/core';
import {TdTextEditorComponent} from "@covalent/text-editor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  text = '';

  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;


  options: any = {
    lineWrapping: true,
    toolbar: true
  };
  title = 'doc-notes';

  ngAfterViewInit(): void {
    // this._textEditor.togglePreview();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CovalentHttpModule} from "@covalent/http";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentLayoutModule, CovalentStepsModule} from "@covalent/core";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentDynamicFormsModule} from "@covalent/dynamic-forms";
import {CovalentTextEditorModule} from "@covalent/text-editor";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,

    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {DatePickerDisplayModalComponent} from './datePickerDisplayModal/datePickerDisplayModal.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerDisplayModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  entryComponents: [
    DatePickerDisplayModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

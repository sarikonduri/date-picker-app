import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DatePickerDisplayModalComponent} from './datePickerDisplayModal/datePickerDisplayModal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _modalService: NgbModal) {
  }

  /*
  * Opens the date picker modal
  */
  openDateModal() {
    this._modalService.open(DatePickerDisplayModalComponent, {size: 'lg'});
  }
}

import {Component, OnInit} from '@angular/core';
import {response} from '../validDates';
import {NgbActiveModal, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker-display-modal',
  templateUrl: './datePickerDisplayModal.component.html',
  styleUrls:  ['datePickerDisplayModal.component.scss']
})

export class DatePickerDisplayModalComponent implements OnInit {
  date: {year: number, month: number, day: number};
  timeSlots: any;
  selectedTimeSlot: any;
  response = response;
  // @BlockUI('datePickerDisplayModal') blockUI: NgBlockUI;
  constructor(public activeModal: NgbActiveModal) {
    this.timeSlots = [];

    const now = new Date();
    this.date = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  ngOnInit() {
    this.select(this.date);
  }

  /*
  * Highlight the dates provided in JSON input
  */
  isValid = (date: NgbDateStruct) => {
    const dt = moment(new Date(date.year, date.month - 1, date.day)).format('L');
    return this.response.availableDates.findIndex((item) => item.date === dt) > -1;
  }

  /*
  * Disable weekends and days before start date
  */
  markDisabled = (date: NgbDateStruct) => {
    const d = moment(new Date(date.year, date.month - 1, date.day));
    const startDate = moment(this.response.availableDates[0].date, 'MM/DD/YYYY');
    return d.isBefore(startDate) || d.day() === 0 || d.day() === 6;
  };

  //Select default date as current date
  select = (date: NgbDateStruct) => {
    const dt = moment(new Date(date.year, date.month - 1, date.day)).format('L');

    const availableTimeSlots = this.response.availableDates.filter((item) => item.date === dt);

    this.timeSlots = availableTimeSlots;
    this.selectedTimeSlot = null;
  }

  /*
  * Format slot display text on time slot selection
  */
  formatSlot(slot) {
    const date = moment(slot.date, 'MM/DD/YYYY');
    return `${date.format('LL')}    ${slot.startTime} - ${slot.endTime} ${slot.timeSlotDescription.toLowerCase()}`;
  }
}

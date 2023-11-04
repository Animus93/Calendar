import { Component } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-cell-input',
  templateUrl: './cell-input.component.html',
  styleUrls: ['./cell-input.component.css'],
})
export class CellInputComponent {
  constructor(public modal: ModalService, public calendar: CalendarService) {}
  inputData: any;
  ngOnInit() {
    this.inputData = this.modal.getData();
  }
  upd(){
    localStorage.setItem('data', JSON.stringify(this.calendar.data));
  }
}


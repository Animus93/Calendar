import { Component } from '@angular/core';
import { iView } from 'src/app/calendar.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(public calendar: CalendarService, public modal: ModalService) {}

  currentDate = new Date();
  year = this.currentDate.getFullYear(); // Получаем текущий год
  currentView!: iView;

  currentMonth = Number(this.currentDate.getMonth());

  ngOnInit() {
    if (localStorage.getItem('data')) {
      const data = localStorage.getItem('data');
      // @ts-ignore
      this.calendar.data = JSON.parse(data);
      return this.fillCells(this.currentMonth);
    }
    this.calendar.getYear(this.year);
    this.fillCells(this.currentMonth);
  }

  asd() {
    console.log(this.currentView);
  }

  back(): any {
    if (this.currentMonth == 11) {
      this.currentMonth = 0;
      return this.fillCells();
    }
    this.currentMonth += 1;
    return this.fillCells(this.currentMonth);
  }

  forward(): any {
    if (this.currentMonth == 0) {
      this.currentMonth = 11;
      return this.fillCells(this.currentMonth);
    }
    this.currentMonth -= 1;
    return this.fillCells(this.currentMonth);
  }

  fillCells(currMonth: number = 0) {
    const date = new Date(this.year, currMonth, 1);
    let firstDay: number = 6;
    let prevMonth;

    if (date.getDay() !== 0) {
      firstDay = Number(date.getDay()) - 1;
    }

    if (currMonth !== 0) {
      prevMonth = this.calendar.data[currMonth - 1].monthDays.slice(-firstDay);
      console.log('prevMonth: ', prevMonth);
    } else {
      prevMonth = this.calendar.data[11].monthDays.slice(-firstDay);
    }
    let view = [...this.calendar.data[currMonth].monthDays];
    view.unshift(...prevMonth);

    if (view.length < 35) {
      const nextmonth = this.calendar.data[currMonth + 1].monthDays.slice(
        0,
        35 - view.length
      );
      view.push(...nextmonth);
    }
    if (view.length > 35) {
      view = view.slice(0, 35);
    }
    this.currentView = { currMonth, view };
  }
}

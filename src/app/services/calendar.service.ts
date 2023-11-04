import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}
  data!: any[];

  daysOfWeek: string[] = [
    'Воскресенье',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Понедельник',
  ];

  monthsNames: string[] = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  getYear(year: any): any[] {
    const monthLengths = [];
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month + 1, 0);
      const days = date.getDate();
      const monthLength = { month, monthDays: this.getDays(days) };
      monthLengths.push(monthLength);
    }
    return (this.data = monthLengths);
  }

  getDays(date: any) {
    const days = [];
    for (let day = 1; day <= date; day += 1) {
      days.push({ day, event: '', caption: '', names: '' });
    }
    return days;
  }
}

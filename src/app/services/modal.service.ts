import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  data: any;
  dataView: any;

  getData() {
    return this.data;
  }

  setData(data: any, monthName: number) {
    this.data = { monthName, data };
  }
  clearData() {
    this.data = '';
  }
}

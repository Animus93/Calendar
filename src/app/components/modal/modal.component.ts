import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(private modal: ModalService) {}

  hide(e: Event) {
    if (e.currentTarget === e.target) {
      this.modal.clearData();
    }
  }
}

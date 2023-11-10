import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent  {
  @Input() message: string = "";
  @Output() closeModal: EventEmitter<void> = new EventEmitter();

  onClose(): void {
    this.closeModal.emit();
    this.message = "";
  }
}

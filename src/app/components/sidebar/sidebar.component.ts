import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() modal = false;
  @Output() closeEmit = new EventEmitter<void>();

  close() {
    this.closeEmit.emit();
  }
}

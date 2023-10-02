import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css'],
})
export class TabListComponent {
  @Input() text: string = '';
  @Input() desc: string = '';
  @Input() src: string = '';
}

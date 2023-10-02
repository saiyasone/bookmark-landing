import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isToggle: boolean = false;
  width = 0;

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {
    this.width = (e.target as Window).innerWidth;

    if (this.width >= 680) {
      this.isToggle = false;
    }
  }

  ngOnInit(): void {}

  setToggle() {
    this.isToggle = !this.isToggle;
  }
}

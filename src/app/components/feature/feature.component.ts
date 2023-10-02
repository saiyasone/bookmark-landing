import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent {
  activeTab = 'first';

  setActiveTab(str: string) {
    if (this.activeTab.includes(str)) {
      return;
    }

    this.activeTab = str;
  }
}

import { Component } from '@angular/core';
import { CollapseComponent } from '../../components/collapse/collapse.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CollapseComponent, ButtonComponent],
  template: `
    <h1 class="text-center mb-4">About creator</h1>
    <ui-collapse title="Qui suis-je ?" [isOpen]="isOpen">
      <p>Je suis Guilian, développeur depuis presque 10 ans...</p>
    </ui-collapse>
    <div class="mt-4"></div>
    <ui-button (click)="toggle()">open</ui-button>
  `,
  styles: [``]
})
export class AboutComponent {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}

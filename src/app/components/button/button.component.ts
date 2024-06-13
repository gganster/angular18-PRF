import { Component } from '@angular/core';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [],
  template: `
    <button 
      class="border px-6 py-1 rounded text-xl font-bold hover:bg-slate-700 shadow shadow-slate-400"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: ``
})
export class ButtonComponent {

}

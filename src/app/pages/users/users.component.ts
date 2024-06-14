import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <form #userForm="ngForm" (submit)="handleSubmit()">
        <div>
          <label for="name">Name: </label>
          <input 
            id="name"
            type="text"
            class="text-slate-900"
            [(ngModel)]="name"
            name="name"
          />
        </div>
        @if (error) {
          <p class="text-red-500">{{error}}</p>
        }
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  `,
  styles: ``
})
export class UsersComponent {
  name: string = "";
  surname: string = "";

  error: string = "";

  async handleSubmit() {
    if (!this.name) {
      this.error = "Name is required";
      return;
    };
    console.log(this.name);
  }
}

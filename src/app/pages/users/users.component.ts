import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import type {User} from '../../types';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div>
      <form #userForm="ngForm" (submit)="handleSubmit($event)" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="email">Email: </label>
          <input 
            id="email"
            type="text"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="email"
            name="email"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="password">Password: </label>
          <input 
            id="password"
            type="password"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="password"
            name="password"
          />
        </div>
        @if (error) {
          <p class="text-red-500">{{error}}</p>
        }
        <div class="flex justify-center">
          <button 
            type="submit"
            class="bg-slate-600 text-white rounded px-4 py-2"
          >Submit</button>
        </div>
      </form>
      <div class="flex flex-col gap-2 mt-4">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            @for (user of users; track user.id) {
              <tr class="border">
                <td>{{user.email}}</td>
                <td>{{user.password}}</td>
                <td>
                  <a [routerLink]="'/users/' + user.id">voir plus</a>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: ``
})
export class UsersComponent {
  email: string = "";
  password: string = "";

  users: User[] = [
    //mocking some Users
    {
      id: 1,
      email: "gregre@gre.com",
      password: "gregre"
    },
    {
      id: 2,
      email: "gregre@gre.com",
      password: "gregre"
    },
    {
      id: 3,
      email: "gregre@gre.com",
      password: "gregre"
    },
    {
      id: 4,
      email: "gregre@gre.com",
      password: "gregre"
    },
    {
      id: 5,
      email: "gregre@gre.com",
      password: "gregre"
    },
  ];

  error: string = "";

 handleSubmit(e: SubmitEvent) {
    if (!this.email) {
      this.error = "Email is required";
      return;
    }
    if (!this.password) {
      this.error = "Password is required";
      return;
    }

    this.users = [
      ...this.users,
      {
        id: Math.ceil(Math.random() * 1000000),
        email: this.email,
        password: this.password
      }
    ]

    console.log(this.users);

    this.email = "";
    this.password = "";
    this.error = "";
  }
}

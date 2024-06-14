import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = new BehaviorSubject<User[]>([
    //mocking some Users
    {
      id: 1,
      email: "ooooooooo@gre.com",
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
  ]);
  currentUsers = this.users.asObservable();

  constructor() { }

  addUser(user: Omit<User, "id">) {
    const id = Math.ceil(Math.random() * 1000000);
    const newUser: User = { id, ...user };

    this.users.next([
      ...this.users.getValue(),
      newUser
    ]);

    console.log(this.users);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = new BehaviorSubject<User[]>([]);
  currentUsers = this.users.asObservable();

  constructor() {
    const stringData = localStorage.getItem("users");
    if (stringData) {
      const users = JSON.parse(stringData);
      this.users.next(users);
    }
  }

  addUser(user: Omit<User, "id">) {
    const id = Math.ceil(Math.random() * 1000000);
    const newUser: User = { id, ...user };

    this.users.next([
      ...this.users.getValue(),
      newUser
    ]);
    this.saveLocalStorage();
  }

  removeUser(id: number) {
    const newUsers = this.users.getValue();

    this.users.next(newUsers.filter(user => user.id !== id));
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    const stringData = JSON.stringify(this.users.getValue());
    localStorage.setItem("users", stringData);
    console.log(stringData);;
  }

}

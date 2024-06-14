import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import type { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = new BehaviorSubject<User[]>([]);
  currentUsers = this.users.asObservable();

  constructor(
    private http: HttpClient
  ) {
    this.http.get<User[]>("http://localhost:3000/users")
             .pipe()
             .toPromise()
             .then((r) => {
                if (!r) return;
                this.users.next(r);
             })
  }

  addUser(user: Omit<User, "id">) {
    this.http.post<User>("http://localhost:3000/users", user)
             .subscribe((r) => {
               this.users.next([...this.users.getValue(), r]);
             })
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

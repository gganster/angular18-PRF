import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { CounterComponent } from './pages/counter/counter.component';
import { ChronoComponent } from './pages/chrono/chrono.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "counter", component: CounterComponent},
  {path: "chrono", component: ChronoComponent},
  {path: "users", component: UsersComponent},
  {path: "error/:code", component: ErrorComponent},
  {path: "**", redirectTo: "error/404"}
];

import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import type { TimeOut } from '../../types';
import { Format4digitsPipe } from '../../pipes/format4digits.pipe';

@Component({
  selector: 'app-chrono',
  standalone: true,
  imports: [CommonModule, Format4digitsPipe],
  template: `
    <div class="container flex flex-col justify-center items-center gap-6">
      <div class="flex items-end">
        <h2 class="text-6xl font-bold select-none">{{ counter | format4digits }}</h2>
        @if(intervalId !== null) {
          <span 
            class="w-2 h-2 bg-red-600 rounded-full mb-1.5 ml-1">
          </span>
        }
      </div>
      <h2 class="text-2xl font-semibold select-none text-center">
        {{ currentTime | date: "HH:mm:ss"}}
      </h2>
      
      <div class="flex gap-3">
        <button 
          class="border px-6 py-1 rounded text-xl font-bold hover:bg-slate-700 shadow shadow-slate-400"
          (click)="pause()"
        >
          ⏸️
        </button>
        <button 
          class="border px-6 py-1 rounded text-xl font-bold hover:bg-slate-700 shadow shadow-slate-400"
          (click)="start()"
        >
          ▶️
        </button>
        <button 
          class="border px-6 py-1 rounded text-xl font-bold hover:bg-slate-700 shadow shadow-slate-400"
          (click)="reset()"
        >
          🔄
        </button>
      </div>
    </div>
  `,
  styles: `
  .container {
    min-height: calc(100vh - 100px);
  }
  `
})
export class ChronoComponent implements OnInit {
  currentTime = new Date();
  counter = 0;
  intervalId: TimeOut | null = null;

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000)
  }

  start() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000)
  }
  pause() {
    clearInterval(Number(this.intervalId));
    this.intervalId = null;
  }
  reset() {
    this.counter = 0;
    this.pause();
  }
}

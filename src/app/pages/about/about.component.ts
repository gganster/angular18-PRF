import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <h1>About creator</h1>
    <p>
      This is a simple Angular application created by me
    </p>
    <p>
      I am a student at the University of Arizona studying computer science
    </p>
    <p>
      I enjoy learning new things, especially about technology and programming
    </p>
  `,
  styles: [``]
})
export class AboutComponent {

}

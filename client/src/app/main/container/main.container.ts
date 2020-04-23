import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<img src="assets/images/pitch.jpg" class="pitch" />`,
  styles: [
    `
      img.pitch {
        width: 90vw;
      }
    `,
  ],
})
export class MainComponent {}

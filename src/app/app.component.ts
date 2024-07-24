import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-display-card',
  standalone: true,
  template: `
    <div>
      <h1>
        <ng-content select="app-title"></ng-content>
      </h1>
      And some other stuff
    </div>
  `,
})
export class DisplayCardComponent {}

@Component({
  selector: 'app-title',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class TitleComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent, DisplayCardComponent],
  template: `
    <app-display-card>
      <app-title i18n ngSkipHydration> Title! </app-title>
    </app-display-card>
  `,
})
export class AppComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-text',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class TextComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextComponent],
  template: `
    <!-- OK -->
    <div i18n>
      <app-text ngSkipHydration> Title! </app-text>
    </div>

    <!-- OK -->
    <app-text ngSkipHydration>
      <div i18n>Title!</div>
    </app-text>

    <!-- not ok -->
    <!-- <app-text i18n ngSkipHydration> Title! </app-text> -->
  `,
})
export class AppComponent {}

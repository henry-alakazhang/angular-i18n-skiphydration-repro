import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-text',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class TextComponent {}

@Component({
  selector: 'app-unhydrated-text',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class UnhydratedTextComponent {
  @HostBinding('attr.ngSkipHydration') skipHydration = true;
}

@Component({
  selector: 'app-has-i18n',
  template: '<div i18n> Text </div>',
  standalone: true,
})
export class HasI18nComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TextComponent,
    UnhydratedTextComponent,
    HasI18nComponent,
  ],
  template: `
    <!-- OK -->
    <div i18n>
      <app-text ngSkipHydration> Text </app-text>
    </div>

    <!-- ASSERTION ERROR: Expected root i18n node during hydration -->
    <!-- <app-text i18n ngSkipHydration> Text </app-text> -->
    <!-- <app-unhydrated-text i18n> Text </app-unhydrated-text> -->

    <!-- TypeError: rootNode is null -->
    <!-- <app-text ngSkipHydration>
      <div i18n>Text</div>
    </app-text> -->

    <!-- NG0502 During hydration Angular was unable to locate a node using the "firstChild" path,
     starting from the <app-unhydrated-text ngskiphydration="true">…</app-unhydrated-text> node.-->
    <!-- <app-unhydrated-text>
      <div i18n>Title!</div>
    </app-unhydrated-text> -->

    <!-- Also OK -->
    <app-has-i18n ngSkipHydration />
  `,
})
export class AppComponent {}

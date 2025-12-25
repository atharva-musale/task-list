import {
 CdkDrag, CdkDropList,
} from '@angular/cdk/drag-drop';
import {
 enableProdMode, importProvidersFrom,
} from '@angular/core';
import {
 FormsModule,
} from '@angular/forms';
import {
 bootstrapApplication, BrowserModule,
} from '@angular/platform-browser';
import {
 AppComponent,
} from './app/app.component';
import {
 environment,
} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, FormsModule, CdkDropList, CdkDrag)]
}).catch(err => console.error(err));

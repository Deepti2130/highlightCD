import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cssHighlighter } from './shared/directive/cssHighlighter.directive';
import { CssRendrerDirective } from './shared/directive/css-rendrer.directive';
import { LowercaseDirective } from './shared/directive/lowercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    cssHighlighter,
    CssRendrerDirective,
    LowercaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AutoCompleteModule } from 'primeng/primeng'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PreviewSearchComponent } from './shared//preview-search/preview-search.component'

@NgModule({
  declarations: [
    AppComponent,
    PreviewSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

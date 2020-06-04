import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PackageInputComponent } from './package-input/package-input.component';
import { TimeRangeInputComponent } from './time-range-input/time-range-input.component';
import { PackageListComponent } from './package-list/package-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageInputComponent,
    TimeRangeInputComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

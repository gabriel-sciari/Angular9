import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({

    imports: [
		BrowserModule
	],

    declarations: [
		AppComponent,
		HomeContentComponent
	],

    providers: [],
    
    bootstrap: [AppComponent]
})
export class AppModule { }
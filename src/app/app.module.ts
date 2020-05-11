
/* =======================================================
 *
 * Created by anele on 2020/05/04.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [ AppComponent, HomeComponent ],

    imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],

    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule { }

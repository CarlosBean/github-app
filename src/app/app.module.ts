import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { MainComponent } from './layouts/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

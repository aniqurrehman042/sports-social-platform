import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordsComponent } from './pages/records/records.component';
import { SaveRecordsComponent } from './pages/save-records/save-records.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    TopPanelComponent,
    RecordsComponent,
    SaveRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AlbumsListComponent,
    HeaderComponent,
    PhotosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {artistsReducer} from "./store/artists.reducer";
import {HttpClientModule} from "@angular/common/http";
import { ArtistsComponent } from './artists/artists.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FlexModule} from "@angular/flex-layout";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ArtistsEffects} from "./store/artists.effects";
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {ImagePipe} from "./pipes/image.pipe";
import {albumsReducer} from "./store/albums.reducer";
import { AlbumsComponent } from './albums/albums.component';
import {AlbumsEffects} from "./store/albums.effects";

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    LayoutComponent,
    ImagePipe,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({artists: artistsReducer, albums: albumsReducer} , {}),
    EffectsModule.forRoot([ArtistsEffects, AlbumsEffects]),
    MatProgressSpinnerModule,
    FlexModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

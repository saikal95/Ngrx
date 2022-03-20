import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {artistsReducer} from "./store/artists.reducer";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {usersReducer} from "./store/users.reducer";
import {UsersEffects} from "./store/users.effects";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ValidateIdenticalDirective} from "./register/validate-identical.directive";
import {FileInputComponent} from "./ui/file-input/file-input.component";
import {MatMenuModule} from "@angular/material/menu";
import { LoginComponent } from './pages/login/login.component';
import { CenterCardComponent } from './ui/center-card/center-card.component';
import {MatListModule} from "@angular/material/list";
import {localStorageSync} from "ngrx-store-localstorage";
import { TrackHistoryComponent } from './track-history/track-history.component';
import { TracksComponent } from './tracks/tracks.component';
import {tracksReducer} from "./store/tracks.reducer";
import {TracksEffects} from "./store/tracks.effects";
import {trackHistoryReducer} from "./store/trackHistory.reducer";
import {TrackHistoryEffects} from "./store/trackHistory.effects";
import {AuthInterceptor} from "./auth.interceptor";
import { AddArtistComponent } from './add-artist/add-artist.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AddTrackComponent } from './add-track/add-track.component';

const localStorageSyncReducer = (reducer: ActionReducer<any>) => {
  return localStorageSync({
    keys: [{users: ['user']}],
    rehydrate: true
  })(reducer);
}

const metaReducers : MetaReducer[] = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    LayoutComponent,
    ImagePipe,
    AlbumsComponent,
    RegisterComponent,
    ValidateIdenticalDirective,
    FileInputComponent,
    LoginComponent,
    CenterCardComponent,
    TrackHistoryComponent,
    TracksComponent,
    AddArtistComponent,
    AddAlbumComponent,
    AddTrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({artists: artistsReducer, albums: albumsReducer, users: usersReducer, tracks: tracksReducer, trackHistory: trackHistoryReducer}, {metaReducers}),
    EffectsModule.forRoot([ArtistsEffects, AlbumsEffects, UsersEffects, TracksEffects, TrackHistoryEffects]),
    MatProgressSpinnerModule,
    FlexModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatListModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

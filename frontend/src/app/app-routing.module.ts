import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistsComponent} from "./artists/artists.component";
import {AlbumsComponent} from "./albums/albums.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {TrackHistoryComponent} from "./track-history/track-history.component";
import {TracksComponent} from "./tracks/tracks.component";

const routes: Routes = [
  {path: '', component: ArtistsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: 'trackHistory', component: TrackHistoryComponent},
  {path: ':id', component: AlbumsComponent},
  {path: ':id/tracks/:id', component: TracksComponent},
  {path: ':id/tracks/:id/trackH/:id', component: TrackHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

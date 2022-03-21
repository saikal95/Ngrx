import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistsComponent} from "./artists/artists.component";
import {AlbumsComponent} from "./albums/albums.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {TrackHistoryComponent} from "./track-history/track-history.component";
import {TracksComponent} from "./tracks/tracks.component";
import {AddTrackComponent} from "./add-track/add-track.component";
import {RoleGuardService} from "./services/role-guard.service";
import {AddAlbumComponent} from "./add-album/add-album.component";
import {AddArtistComponent} from "./add-artist/add-artist.component";

const routes: Routes = [
  {path: '', component: ArtistsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: 'trackHistory', component: TrackHistoryComponent},
  {path: ':id', component: AlbumsComponent},
  {path: ':id/tracks/:id', component: TracksComponent},
  {path: ':id/tracks/:id/trackH/:id', component: TrackHistoryComponent},
  {
    path: 'artists/new',
    component: AddArtistComponent,
    canActivate: [RoleGuardService],
    data: {roles: ['user', 'admin']}
  },
  {
    path: 'albums/new',
    component: AddAlbumComponent,
    canActivate: [RoleGuardService],
    data:{roles: ['user', 'admin']}
  },
  {
    path: 'track/new',
    component: AddTrackComponent,
    canActivate: [RoleGuardService],
    data: {roles: ['user', 'admin']},

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

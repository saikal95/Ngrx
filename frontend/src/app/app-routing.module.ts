import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistsComponent} from "./artists/artists.component";
import {AlbumsComponent} from "./albums/albums.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: ArtistsComponent},
  {path: 'register', component: RegisterComponent},
  {path: ':id', component: AlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

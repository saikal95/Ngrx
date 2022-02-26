import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistsComponent} from "./artists/artists.component";
import {AlbumsComponent} from "./albums/albums.component";

const routes: Routes = [
  {path: '', component: ArtistsComponent},
  {path: ':id', component: AlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

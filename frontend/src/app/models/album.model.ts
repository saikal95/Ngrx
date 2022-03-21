export class Album {
  constructor(
    public id: string,
    public title: string,
    public artist: string,
    public year: number,
    public image: string,
    public is_published: boolean = false,
  ) {}
}



export interface AlbumData {
  [key: string]: any,
  title: string,
  artist: string,
  year: number,
  image: File | null,
   is_published: boolean,
}






export interface ApiAlbumData {
  _id: string,
  title: string,
  artist: string,
  year: number,
  image: string,
  is_published: boolean,

}




export class Album {
  constructor(
    public id: string,
    public title: string,
    public artist: string,
    public year: number,
    public image: string,
  ) {}
}



export interface AlbumData {
  [key: string]: any,
  title: string,
  artist: string,
  year: number,
  image: File | null,
}






export interface ApiAlbumData {
  _id: string,
  title: string,
  artist: string,
  year: number,
  image: string,

}




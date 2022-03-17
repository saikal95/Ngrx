export class Artist {
  constructor(
    public id: string,
    public title: string,
    public image: string,
    public information: string,
  ) {}
}



export interface ArtistData {
  [key: string]: any;
  title: string;
  price: number;
  image: File | null;
  information: string;
}


export interface ApiArtistData {
  _id: string,
  title: string,
  image: string,
  information: string,

}


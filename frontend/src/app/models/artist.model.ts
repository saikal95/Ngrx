export class Artist {
  constructor(
    public id: string,
    public title: string,
    public image: string,
    public information: string,
    public is_published: boolean = false,
  ) {}
}



export interface ArtistData {
  [key: string]: any;
  title: string;
  image: File | null;
  information: string;
  is_published: boolean,
}


export interface ApiArtistData {
  _id: string,
  title: string,
  image: string,
  information: string,
  is_published:boolean,

}


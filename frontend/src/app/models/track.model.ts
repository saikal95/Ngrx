export class Track {
  constructor(
    public _id: string,
    public title: string,
    public album: string,
    public duration: string,
    public is_published: boolean ,
  ) {}
}


export interface TrackData {
  [key: string]: any,
  title: string,
  album: string,
  duration: number,
  is_published: boolean,
}




export interface ApiTrackData {
  _id: string,
  title: string,
  album: string,
  duration: string,
  is_published: boolean,

}



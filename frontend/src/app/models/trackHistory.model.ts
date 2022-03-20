
export class TrackHistory {
  constructor(
    public id: string,
    public user: string,
    public track: string,
    public artist: string,
    public dateTime: string,
    public token: string,

  ) {}
}

export interface TrackHistoryData {
  user: string,
  track: string,
}


export interface ApiTrackHistory {
   _id: string,
  user: string,
  track:  string,
  artist: string,
  dateTime: string
  token: string,
}



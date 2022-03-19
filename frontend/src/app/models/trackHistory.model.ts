
export class TrackHistory {
  constructor(
    public id: string,
    public user: string,
    public track: string,
    public dateTime: string,
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
  dateTime: string
}



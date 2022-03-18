import {Artist} from "./artist.model";

export class TrackHistory {
  constructor(
    public user: string,
    public track: string,
    // public dateTime: string,
  ) {}
}



export class TrackHistoryData {
  constructor(
     public _id: string,
    public user: string,
    public track: string,
  ) {}

}



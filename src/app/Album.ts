export class Album {
  pos: number;
  name: string;
  imgUrl: string;
  iTunesLink: string;
  artist: string;

  constructor(pos: number, name: string, imgUrl: string, iTunesLink: string, artist: string) {
    this.pos = pos;
    this.name = name;
    this.imgUrl = imgUrl;
    this.iTunesLink = iTunesLink;
    this.artist = artist;
  }
}

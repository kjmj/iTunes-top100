export class Album {
  name: string;
  imgUrl: string;
  iTunesLink: string;
  artist: string;

  constructor(name: string, imgUrl: string, iTunesLink: string, artist: string) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.iTunesLink = iTunesLink;
    this.artist = artist;
  }
}

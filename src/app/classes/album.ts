export class Album {
  popularityRank: number; // 1 if this album is the most popular, 2 if it is the second most popular, etc.
  name: string; // name of the album
  albumCoverUrl: string; // url of the album cover image
  albumUrl: string; // url of this album on iTunes
  artist: string; // artist of this album
  artistUrl: string; // url of this album on iTunes

  // Represents a music album
  // Parameters are passed as named since there are many
  constructor(private params: {
    popularityRank: number, name: string, albumCoverUrl: string, albumUrl: string, artist: string, artistUrl: string
  }) {
    this.popularityRank = params.popularityRank;
    this.name = params.name;
    this.albumCoverUrl = params.albumCoverUrl;
    this.albumUrl = params.albumUrl;
    this.artist = params.artist;
    this.artistUrl = params.artistUrl;
  }
}

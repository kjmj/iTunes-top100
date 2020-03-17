import { Album } from './album';

describe('Album', () => {
  const expectedPopularityRank = 0;
  const expectedName = 'Abbey Road (Remastered)';
  // tslint:disable-next-line:max-line-length
  const expectedAlbumCoverUrl = 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/9f/25/76/9f257622-612c-3861-23dc-c4045f3eb26e/00602567713449.rgb.jpg/828x0w.jpg';
  const expectedAlbumUrl  = 'https://music.apple.com/us/album/abbey-road-remastered/1441164426';
  const expectedArtist = 'The Beatles';
  const expectedArtistUrl = 'https://music.apple.com/us/artist/the-beatles/136975';
  const expectedGenre = 'Rock';
  const expectedGenreUrl = 'https://itunes.apple.com/us/genre/id21';

  let album: Album;

  beforeEach(() => {
    album = new Album({
      popularityRank: expectedPopularityRank,
      name: expectedName,
      albumCoverUrl: expectedAlbumCoverUrl,
      albumUrl: expectedAlbumUrl,
      artist: expectedArtist,
      artistUrl: expectedArtistUrl,
      genre: expectedGenre,
      genreUrl: expectedGenreUrl
    });
  });


  it('should create an instance', () => {
    expect(album).toBeTruthy();
  });

  it('should have all fields initialized correctly', () => {
    expect(album.popularityRank).toEqual(expectedPopularityRank);
    expect(album.artist).toEqual(expectedArtist);
    expect(album.albumCoverUrl).toEqual(expectedAlbumCoverUrl);
    expect(album.name).toEqual(expectedName);
    expect(album.albumUrl).toEqual(expectedAlbumUrl);
    expect(album.artistUrl).toEqual(expectedArtistUrl);
    expect(album.genre).toEqual(expectedGenre);
    expect(album.genreUrl).toEqual(expectedGenreUrl);
  });
});

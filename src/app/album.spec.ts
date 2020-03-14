import { Album } from './album';

describe('Album', () => {
  const expectedName = 'Abbey Road (Remastered)';
  // tslint:disable-next-line:max-line-length
  const expectedImgUrl = 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/9f/25/76/9f257622-612c-3861-23dc-c4045f3eb26e/00602567713449.rgb.jpg/828x0w.jpg';
  const expectedItunesLink  = 'https://music.apple.com/us/album/abbey-road-remastered/1441164426';
  const expectedArtist = 'The Beatles';

  let album: Album;

  beforeEach(() => {
    album = new Album(expectedName, expectedImgUrl, expectedItunesLink, expectedArtist);
  });


  it('should create an instance', () => {
    expect(album).toBeTruthy();
  });

  it('should have all fields initialized correctly', () => {
    expect(album.artist).toEqual(expectedArtist);
    expect(album.imgUrl).toEqual(expectedImgUrl);
    expect(album.name).toEqual(expectedName);
    expect(album.iTunesLink).toEqual(expectedItunesLink);
  });
});

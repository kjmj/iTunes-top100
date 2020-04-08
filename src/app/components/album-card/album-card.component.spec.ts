import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCardComponent } from './album-card.component';
import {Album} from '../../classes/album';

describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;

  const expectedPopularityRank = 0;
  const expectedName = 'Abbey Road (Remastered)';
  // tslint:disable-next-line:max-line-length
  const expectedAlbumCoverUrl = 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/9f/25/76/9f257622-612c-3861-23dc-c4045f3eb26e/00602567713449.rgb.jpg/828x0w.jpg';
  const expectedAlbumUrl  = 'https://music.apple.com/us/album/abbey-road-remastered/1441164426';
  const expectedArtist = 'The Beatles';
  const expectedArtistUrl = 'https://music.apple.com/us/artist/the-beatles/136975';
  const expectedGenre = 'Rock';
  const expectedGenreUrl = 'https://itunes.apple.com/us/genre/id21';
  const album = new Album({
    popularityRank: expectedPopularityRank,
    name: expectedName,
    albumCoverUrl: expectedAlbumCoverUrl,
    albumUrl: expectedAlbumUrl,
    artist: expectedArtist,
    artistUrl: expectedArtistUrl,
    genre: expectedGenre,
    genreUrl: expectedGenreUrl
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCardComponent);
    component = fixture.componentInstance;
    component.album = album;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the correct link to the album cover', () => {
    expect(fixture.nativeElement.querySelector('img').src).toEqual(expectedAlbumCoverUrl);
  });
});

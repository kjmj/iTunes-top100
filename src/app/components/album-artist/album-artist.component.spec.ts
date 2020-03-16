import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumArtistComponent } from './album-artist.component';

describe('AlbumArtistComponent', () => {
  let component: AlbumArtistComponent;
  let fixture: ComponentFixture<AlbumArtistComponent>;
  const expectedArtistName = 'Billy Joel';
  const expectedArtistUrl = 'https://music.apple.com/us/artist/billy-joel/485953';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show album artist as hyperlink', () => {
    component.artistName = expectedArtistName;
    component.artistUrl = expectedArtistUrl;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(expectedArtistName);
    expect(fixture.nativeElement.querySelector('a').href).toEqual(expectedArtistUrl);
  });

  it('should not hyperlink if no url is provided', () => {
    component.artistName = expectedArtistName;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(expectedArtistName);
    expect(fixture.nativeElement.querySelector('a')).toBeNull();
  });
});

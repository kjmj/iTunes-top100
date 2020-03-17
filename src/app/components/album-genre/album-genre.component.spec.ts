import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumGenreComponent } from './album-genre.component';

describe('AlbumGenreComponent', () => {
  let component: AlbumGenreComponent;
  let fixture: ComponentFixture<AlbumGenreComponent>;
  const expectedGenre = 'Rock';
  const expectedGenreUrl = 'https://itunes.apple.com/us/genre/id21';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show genre as hyperlink', () => {
    component.genre = expectedGenre;
    component.genreUrl = expectedGenreUrl;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(expectedGenre);
    expect(fixture.nativeElement.querySelector('a').href).toEqual(expectedGenreUrl);
  });
});

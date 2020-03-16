import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumNameComponent } from './album-name.component';

describe('AlbumNameComponent', () => {
  let component: AlbumNameComponent;
  let fixture: ComponentFixture<AlbumNameComponent>;
  const expectedAlbumName = '52nd Street';
  const expectedAlbumUrl = 'https://music.apple.com/us/album/52nd-street/259573387';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show album name as hyperlink', () => {
    component.albumName = expectedAlbumName;
    component.albumUrl = expectedAlbumUrl;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(expectedAlbumName);
    expect(fixture.nativeElement.querySelector('a').href).toEqual(expectedAlbumUrl);
  });
});

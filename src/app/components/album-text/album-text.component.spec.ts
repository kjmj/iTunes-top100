import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTextComponent } from './album-text.component';

describe('AlbumTextComponent', () => {
  let component: AlbumTextComponent;
  let fixture: ComponentFixture<AlbumTextComponent>;
  const expectedText = 'Billy Joel';
  const expectedUrl = 'https://music.apple.com/us/artist/billy-joel/485953';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show album artist as hyperlink', () => {
    component.text = expectedText;
    component.url = expectedUrl;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(expectedText);
    expect(fixture.nativeElement.querySelector('a').href).toEqual(expectedUrl);
  });

  it('should not hyperlink if no url is provided', () => {
    component.text = expectedText;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(expectedText);
    expect(fixture.nativeElement.querySelector('a')).toBeNull();
  });
});

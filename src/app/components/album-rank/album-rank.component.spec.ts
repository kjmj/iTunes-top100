import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumRankComponent } from './album-rank.component';

describe('AlbumRankComponent', () => {
  let component: AlbumRankComponent;
  let fixture: ComponentFixture<AlbumRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the album rank correctly', () => {
    component.albumRank = 1;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual('1');
  });
});

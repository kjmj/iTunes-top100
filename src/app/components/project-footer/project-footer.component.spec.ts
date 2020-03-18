import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFooterComponent } from './project-footer.component';

describe('ProjectFooterComponent', () => {
  let component: ProjectFooterComponent;
  let fixture: ComponentFixture<ProjectFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contain correct hyperlinks', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelectorAll('a')[0].textContent).toContain('Ken Morton');
    expect(compiled.querySelectorAll('a')[0].href).toContain('https://github.com/kjmj');

    expect(compiled.querySelectorAll('a')[1].textContent).toContain('Angular');
    expect(compiled.querySelectorAll('a')[1].href).toContain('https://angular.io');

    expect(compiled.querySelectorAll('a')[2].textContent).toContain('GitHub');
    expect(compiled.querySelectorAll('a')[2].href).toContain('https://github.com/kjmj/iTunes-top100');
  });
});

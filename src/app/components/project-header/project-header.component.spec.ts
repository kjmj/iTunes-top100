import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHeaderComponent } from './project-header.component';

describe('ProjectHeaderComponent', () => {
  let component: ProjectHeaderComponent;
  let fixture: ComponentFixture<ProjectHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('iTunes Top 100 Albums');
  });

  it('should have a hyperlink to refresh the page', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a')[0].href).toContain('');
  });

  it('should have a hyperlink to the github repo', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a')[1].href).toContain('https://github.com/kjmj/iTunes-top100');
  });
});

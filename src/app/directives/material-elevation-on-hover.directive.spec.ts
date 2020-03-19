import { MaterialElevationOnHoverDirective } from './material-elevation-on-hover.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: `<mat-card appMaterialElevationOnHover="8">Hover to elevate</mat-card>`
})
class TestHoverComponent {
}

describe('MaterialElevationOnHoverDirective', () => {
  let component: TestHoverComponent;
  let fixture: ComponentFixture<TestHoverComponent>;
  let element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHoverComponent, MaterialElevationOnHoverDirective]
    });
    fixture = TestBed.createComponent(TestHoverComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('mat-card'));
  });

  it('should start with no class', () => {
    expect(element.classes['']).toBeTrue();
  });

  it('mouseover should add elevation class, mouseout should remove elevation class', () => {
    element.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(element.classes['mat-elevation-z8']).toBeTrue();

    element.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(element.classes['']).toBeTrue();
  });
});

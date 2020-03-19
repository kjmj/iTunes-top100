import {Directive, ElementRef, HostListener, Input} from '@angular/core';

/**
 * Add an elevation effect to an element on mouseover, and remove the elevation effect on mouseout.
 * Usage Example: <mat-card appMaterialElevationOnHover="8">Hover to elevate</mat-card>
 */
@Directive({
  selector: '[appMaterialElevationOnHover]'
})
export class MaterialElevationOnHoverDirective {

  constructor(
    private elementRef: ElementRef,
  ) { }

  @Input('appMaterialElevationOnHover')
  elevation: string;

  @HostListener('mouseover') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(`mat-elevation-z${this.elevation}`);
  }

  @HostListener('mouseout') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(`mat-elevation-z${this.elevation}`);
  }
}

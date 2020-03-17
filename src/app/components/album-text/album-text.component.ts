import {Component, Input, OnInit} from '@angular/core';

/**
 * This component is designed for use in an album card. It will show the provided text,
 * and hyperlink to a url if provided.
 */
@Component({
  selector: 'app-album-text',
  templateUrl: './album-text.component.html',
  styleUrls: ['./album-text.component.scss']
})
export class AlbumTextComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  url: string;

  constructor() { }

  ngOnInit(): void {
  }

}

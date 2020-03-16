import { Component, Input, OnInit } from '@angular/core';

/**
 * This component shows the artist name, and will hyperlink to that artist if they have an iTunes profile.
 */
@Component({
  selector: 'app-album-artist',
  templateUrl: './album-artist.component.html',
  styleUrls: ['./album-artist.component.scss']
})
export class AlbumArtistComponent implements OnInit {

  @Input()
  artistName: string;

  @Input()
  artistUrl: string;

  constructor() { }

  ngOnInit(): void {
  }
}

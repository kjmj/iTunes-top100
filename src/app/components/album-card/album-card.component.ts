import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../classes/album';

/**
 * This component renders a card that contains the information for a given Album.
 */
@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  constructor() { }

  // The album whose information you want to display in a card
  @Input()
  album: Album;

  ngOnInit(): void {
  }

}

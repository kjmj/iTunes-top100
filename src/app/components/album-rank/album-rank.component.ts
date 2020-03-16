import {Component, Input, OnInit} from '@angular/core';

/**
 * This component represents the popularity rank of an album.
 */
@Component({
  selector: 'app-album-rank',
  templateUrl: './album-rank.component.html',
  styleUrls: ['./album-rank.component.scss']
})
export class AlbumRankComponent implements OnInit {

  @Input()
  albumRank: number;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Album} from '../../classes/album';
import {ItunesService} from '../../services/itunes.service';

/**
 * This component creates a card for each album in the top 100 list.
 */
@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.scss']
})
export class TopAlbumsComponent implements OnInit {
  topAlbums: Observable<Album[]>;
  searchText: string;

  constructor(
    private itunesService: ItunesService
  ) { }

  ngOnInit(): void {
    this.topAlbums = this.itunesService.getTopAlbums();
  }

}

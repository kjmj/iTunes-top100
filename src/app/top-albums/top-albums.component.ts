import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Album} from '../album';
import {ItunesService} from '../itunes.service';

@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.scss']
})
export class TopAlbumsComponent implements OnInit {
  topAlbums: Observable<Album[]>;

  constructor(
    private itunesService: ItunesService
  ) { }

  ngOnInit(): void {
    this.topAlbums = this.itunesService.getTopAlbums();
  }

}

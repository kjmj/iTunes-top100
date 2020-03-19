import { Component, OnInit } from '@angular/core';
import {Album} from '../../classes/album';
import {ItunesService} from '../../services/itunes.service';
import {FormControl} from '@angular/forms';
import {finalize} from 'rxjs/operators';

/**
 * This component creates a card for each album in the top 100 list.
 */
@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.scss']
})
export class TopAlbumsComponent implements OnInit {
  topAlbums: Album[];
  searchText: string;

  // filter by genre controls
  genres = new FormControl();
  genreList: string[];

  hasLoaded = false; // true if the iTunes data has finished loading

  constructor(
    private itunesService: ItunesService
  ) { }

  ngOnInit(): void {
    this.itunesService.getTopAlbums().pipe(
      finalize(() => this.hasLoaded = true)
    ).subscribe(value => {
      this.topAlbums = value;
      this.genreList = this.getGenres(this.topAlbums);
    });
  }

  /**
   * Returns a list of the genres in this list of albums. There will be no duplicates, and the
   * list will be sorted alphabetically.
   *
   * @param topAlbums A list of albums from which we want to get the genres from.
   */
  getGenres(topAlbums: Album[]): string[] {
    const genres = [];

    for (const obj of topAlbums) {
      genres.push(obj.genre);
    }

    // remove duplicates and sort
    return [...new Set(genres)].sort();
  }

}

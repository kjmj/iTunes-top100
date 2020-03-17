import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-album-genre',
  templateUrl: './album-genre.component.html',
  styleUrls: ['./album-genre.component.scss']
})
export class AlbumGenreComponent implements OnInit {

  @Input()
  genre: string;

  @Input()
  genreUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}

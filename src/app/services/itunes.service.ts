import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Album} from '../classes/album';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  itunesApi = 'https://itunes.apple.com/us/rss/topalbums/limit=100/explicit=true/json';

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Get the top albums on iTunes as an Observable list of Album
   */
  getTopAlbums(): Observable<Album[]> {
    return this.http.get<any>(this.itunesApi)
      .pipe(
        map(data => {
          return data.feed.entry.map((item, idx) => {
            // TODO better parsing of null/undefined
            return new Album(
              {
                popularityRank: idx + 1,
                name: item['im:name'].label,
                artist: item['im:artist'].label,
                artistUrl: item['im:artist'].attributes === undefined ? null : item['im:artist'].attributes.href,
                albumUrl: item.link.attributes.href,
                albumCoverUrl: item['im:image'][2].label,
                genre: item.category.attributes.term,
                genreUrl: item.category.attributes.scheme,
              }
            );
          });
        })
      );
  }
}

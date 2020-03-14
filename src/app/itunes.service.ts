import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Album} from './album';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  itunesApi = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

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
            return new Album(
              idx + 1,
              item['im:name'].label,
              item['im:image'][2].label,
              item.link.attributes.href,
              item['im:artist'].label
            );
          });
        })
      );
  }
}

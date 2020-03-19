import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Album} from '../classes/album';
import {GlobalConstants} from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  itunesApi = GlobalConstants.iTunesApi;

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Get the top albums on iTunes as an Observable list of Album.
   */
  getTopAlbums(): Observable<Album[]> {
    return this.http.get<any>(this.itunesApi)
      .pipe(
        map(data => {
          return data.feed.entry.map((item, idx) => {
            // create an album by parsing info from iTunes json
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

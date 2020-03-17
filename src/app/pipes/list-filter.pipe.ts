import {Pipe, PipeTransform} from '@angular/core';
import {Album} from '../classes/album';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  /**
   * Return a list of albums that has been filtered by a search term and genre(s).
   *
   * @param list The original list of albums which you want to filter on.
   * @param searchText The search term that the list of albums will be filtered on.
   * @param matchKeys Provide a list of keys. The searchText will be matched on the value associated with the given key(s).
   * @param genres Provide a list of genres, and the list will be filtered to songs that match the specified genre(s).
   */
  transform(list: Album[], searchText: string, matchKeys: string[], genres: string[]): any {
    // a list of items that match the search text on the given keys
    const filteredBySearch = this.filterBySearchTerm(list, searchText, matchKeys);

    // a list of items filtered by genre
    const filteredByGenre = this.filterByStrings(list, genres, 'genre');

    // return the intersection of things filtered by search term and genre
    return filteredBySearch.filter(value => filteredByGenre.includes(value));
  }

  /**
   * Return a filtered list of items by a search term.
   *
   * If there is a match between the searchText and the value at any one of the specified keys, the function will
   * include that object in the filtered list.
   *
   * If an invalid key is provided, then the error will be logged and program execution will continue.
   *
   * @param list The list of objects to filter on
   * @param searchText The search text, generally a string entered by a user
   * @param matchKeys The object keys you want to filter on
   *        Example:
   *        {id: 0, firstName: 'john', lastName, 'stamos'}
   *        provide matchKeys=['firstName', 'lastName'] to filter only on the 'firstName' and 'lastName' keys, and ignore the 'id' field
   */
  filterBySearchTerm(list: any[], searchText: string, matchKeys: string[]) {
    return list ? list.filter(item => {
      // try to find a match for each key specified
      for (let i = 0; i < matchKeys.length; i++) {
        // if this key doesnt provide a match and this isn't the last item, continue and try to match another key
        if (this.doesTextMatch(item, searchText, matchKeys[i]) === false && i < (matchKeys.length - 1)) {
          continue;
        }
        return this.doesTextMatch(item, searchText, matchKeys[i]);
      }
    }) : [];
  }

  /**
   * Return true if the searchText matches the value of item[key].
   * Log an error if an exception is encountered.
   *
   * @param item The object which you are interested matching the key and search text on
   * @param key The object key whose value you are interested in matching searchText on
   * @param searchText The searchText, usually a string entered by a user
   */
  doesTextMatch(item: any, searchText: string, key: string) {
    try {
      return item[key].search(new RegExp(searchText, 'i')) > -1;
    } catch (e) {
      console.error('Please make sure the \'' + key + '\' key exists on this object');
    }
  }

  /**
   * Filter the given list by the given strings. The filtered list will contain objects
   * whose value at the given key matches any of the filterStrings.
   *
   * @param list The list of objects which you want to filter.
   * @param filterStrings The strings which you want to filter the list of objects by.
   * @param key The object key that you want to filter on.
   */
  filterByStrings(list: any[], filterStrings: string[], key: string) {
    // true if there aren't any strings to filter on
    const noFilters = filterStrings == null || filterStrings.length === 0;

    return list ? list.filter(item => {
      if (noFilters) {
        return true;
      }
      // try to find a match for each filter string specified
      for (let i = 0; i < filterStrings.length; i++) {
        const filterString = filterStrings[i];
        // if this string doesnt provide a match and this isn't the last item, continue and try to match another string
        if (!(item[key] === filterString) && i < (filterStrings.length - 1)) {
          continue;
        }
        return item[key] === filterString;
      }
    }) : [];
  }
}

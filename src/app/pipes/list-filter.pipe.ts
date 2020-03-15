import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  /**
   * Return a filtered list of items.
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
  transform(list: any[], searchText: string, matchKeys: string[]): any {
    return list ? list.filter(item => {
      // try to find a match for each key specified
      for (let i = 0; i < matchKeys.length; i++) {
          // if this key doesnt provide a match and this isnt the last item, continue and try to match another key
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
}

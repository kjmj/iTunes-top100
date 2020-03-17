import { ListFilterPipe } from './list-filter.pipe';

describe('ListFilterPipe', () => {
  const testList = [
    {firstName: 'Brock', lastName: 'Holt'},
    {firstName: 'John', lastName: 'Holt'},
    {firstName: 'Xander', lastName: 'Bogaerts'},
    {firstName: 'J.D.', lastName: 'Martinez'},
    {firstName: 'Bogaerts', lastName: 'TestName'},
  ];
  const testObject = {id: '0', firstName: 'Xander', lastName: 'Bogaerts'};

  let pipe: ListFilterPipe;

  beforeEach(() => {
    pipe = new ListFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter with one field specified correctly', () => {
    const expected = [{firstName: 'Brock', lastName: 'Holt'}];
    expect(pipe.filterBySearchTerm(testList, 'Brock', ['firstName'])).toEqual(expected);
  });

  it('should filter with two fields specified correctly', () => {
    const expected = [{firstName: 'Xander', lastName: 'Bogaerts'}, {firstName: 'Bogaerts', lastName: 'TestName'}];
    expect(pipe.filterBySearchTerm(testList, 'Bogaerts', ['firstName', 'lastName'])).toEqual(expected);
  });

  it('should return an empty list if no matches', () => {
    const expected = [];
    expect(pipe.filterBySearchTerm(testList, 'hello world', ['firstName'])).toEqual(expected);
  });

  it('should return an empty list if an invalid search field is provided', () => {
    const expected = [];
    expect(pipe.filterBySearchTerm(testList, 'Bogaerts', ['nonExistantField'])).toEqual(expected);
  });

  it('should filter correctly if one good field and one bad field is provided', () => {
    const expected = [{firstName: 'Xander', lastName: 'Bogaerts'}];
    expect(pipe.filterBySearchTerm(testList, 'Bogaerts', ['lastName', 'nonExistantField'])).toEqual(expected);
  });

  it('should match object correctly', () => {
    expect(pipe.doesTextMatch(testObject, 'Bogaerts', 'lastName')).toBeTrue();
  });

  it('should not search on all fields', () => {
    // search for value in another field
    expect(pipe.doesTextMatch(testObject, '0', 'lastName')).toBeFalse();

    // search with id
    expect(pipe.doesTextMatch(testObject, '0', 'id')).toBeTrue();
  });

  it('should filter by string correctly', () => {
    const expected = [
      {firstName: 'Brock', lastName: 'Holt'},
      {firstName: 'John', lastName: 'Holt'},
    ];
    expect(pipe.filterByStrings(testList, ['Holt'], 'lastName')).toEqual(expected);
  });

  it('should filter by string correctly with multiple fields provided', () => {
    const expected = [
      {firstName: 'Brock', lastName: 'Holt'},
      {firstName: 'John', lastName: 'Holt'},
      {firstName: 'J.D.', lastName: 'Martinez'},
    ];
    expect(pipe.filterByStrings(testList, ['Holt', 'Martinez'], 'lastName')).toEqual(expected);
  });
});



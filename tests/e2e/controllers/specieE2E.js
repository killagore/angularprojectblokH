describe('E2E: Species test', function () {

  beforeEach(function () {
    browser.get('http://localhost:8080/#!/species');
  });

  it('Search should return 2 species', function () {
    element(by.model('search')).sendKeys("fruit");

    var species = element.all(by.repeater('specie in species')).count();
    expect(species).toBe(2);
  });

   it('Should return 4 species', function () {
     var species = element.all(by.repeater('specie in species')).count();
     expect(species).toBe(4);
   });

});

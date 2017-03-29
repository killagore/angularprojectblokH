describe('E2E: Species test', function () {

  beforeEach(function () {
    browser.get('http://localhost:8080/#!/cages');
  });

  it('Search should return 2 species', function () {
    element(by.model('search')).sendKeys("middelgroot");

    var cages = element.all(by.repeater('cage in cages')).count();
    expect(cages).toBe(1);
  });

   it('Should return 4 species', function () {
     var cages = element.all(by.repeater('cage in cages')).count();
     expect(cages).toBe(3);
   });

});

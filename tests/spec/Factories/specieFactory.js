describe("Factory: AnimalFactory", function () {


    var species;
    var factory;

    beforeEach(function () {
        species = [{ id: 1, name: "gorilla", food: "fruit" },
        { id: 2, name: "pig", food: "everything" },
        { id: 3, name: "rabbit", food: "plants" },
        { id: 4, name: "ape", food: "fruit" }]
        localStorage.setItem("species", angular.toJson(species));

        module('zooApp');
        inject(function ($injector) {
            factory = $injector.get('SpecieFactory');
        });


    });

    it("should return all species", function () {
        var input = factory.getSpecies();
        var output = 4;

        expect(input.length).toBe(output);
    });

});
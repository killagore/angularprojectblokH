describe("Factory: AnimalFactory", function () {


    var animals;
    var factory;

    beforeEach(function () {
        animals = [{ id: 1, name: "henk", gender: "male", specie: 1, cage: 1, zookeeper: 1 },
        { id: 2, name: "carl", gender: "female", specie: 2, cage: 3, zookeeper: 1},
        { id: 3, name: "hagrid", gender: "male", specie: 2, cage: 2, zookeeper: 1}]
        localStorage.setItem("animals", angular.toJson(animals));

        module('zooApp');
        inject(function ($injector) {
            factory = $injector.get('AnimalFactory');
        });


    });

    it("should return all animals", function () {
        var input = factory.getAnimals();
        var output = 3;

        expect(input.length).toBe(output);
    });

    it("should return all animals by specie", function () {
        var input = factory.getAnimalsBySpecie(2);
        var output = 2;

        expect(input.length).toBe(output);
    });

    it("should return all animals by cage", function () {
        var input = factory.getAnimalsByCage(1);
        var output = 1;

        expect(input.length).toBe(output);
    });

      it("should return all animals by zookeeper", function () {
        var input = factory.getAnimalsByZookeeper(1);
        var output = 3;

        expect(input.length).toBe(output);
    });

    it("should delete one animal", function () {
        factory.deleteAnimal({ id: 1, name: "henk", gender: "male", specie: 1, cage: 3 });
        var input = factory.getAnimals();
        var output = 2;

        expect(input.length).toBe(output);
    });
    

});
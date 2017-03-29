

appModule.factory('AnimalFactory', function () {

    var factory = {};
    var localItems = JSON.parse(localStorage.getItem("animals"));
    var factoryAnimals;

    if (localItems != undefined && localItems.length > 0) {
        factoryAnimals = localItems;
    } else {
        factoryAnimals = [{ id: 1, name: "henk", gender: "male", specie: 1, cage: 1, zookeeper: 3 },
        { id: 2, name: "carl", gender: "female", specie: 2, cage: 3, zookeeper: 2},
        { id: 3, name: "hagrid", gender: "male", specie: 3, cage: 2, zookeeper: 1}]
    };
    factory.getAnimals = function () {
        return factoryAnimals;
    };

    factory.getAnimalsBySpecie = function (item) {
        var specieAnimals = [];
        factoryAnimals.forEach(function (e, i) {
            if (e.specie === item) {
                specieAnimals.push(e);
            };
        })
        return specieAnimals;
    };

    factory.getAnimalsByCage = function (item) {
        var cageAnimals = [];
        factoryAnimals.forEach(function (e, i) {
            if (e.cage === item) {
                cageAnimals.push(e);
            };
        })
        return cageAnimals;
    };

    factory.getAnimalsByZookeeper = function (item) {
        var zookeeperAnimals = [];
        factoryAnimals.forEach(function (e, i) {
            if (e.zookeeper === item) {
                zookeeperAnimals.push(e);
            };
        })
        return zookeeperAnimals;
    };

    factory.deleteAnimal = function (item) {
        var deleteIndex = -1;
        factoryAnimals.forEach(function (e, i) {
            if (e.id === item.id) {
                deleteIndex = i;
            };
        })
        factoryAnimals.splice(deleteIndex, 1);
        localStorage.setItem("animals", angular.toJson(factoryAnimals));
    };
    return factory;
});
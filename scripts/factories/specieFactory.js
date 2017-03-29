

appModule.factory('SpecieFactory', function () {

    var factory = {};
    var localItems = JSON.parse(localStorage.getItem("species"));
    var factorySpecies;

    if (localItems != undefined && localItems.length > 0) {
        factorySpecies = localItems;
    } else {

        factorySpecies = [{ id: 1, name: "gorilla", food: "fruit" },
        { id: 2, name: "pig", food: "everything" },
        { id: 3, name: "rabbit", food: "plants" },
        { id: 4, name: "ape", food: "fruit" }];
        localStorage.setItem("species", angular.toJson(factorySpecies));
    };

    factory.getSpecies = function () {
        return factorySpecies
    };

    return factory;
});
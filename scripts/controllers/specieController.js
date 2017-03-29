

appModule.controller('specieController', function ($scope, SpecieFactory, AnimalFactory) {

    $scope.species = SpecieFactory.getSpecies();


    $scope.deleteSpecie = function (item) {
        var deleteIndex = -1;

        var specieAnimals = AnimalFactory.getAnimalsBySpecie(item.id);

        specieAnimals.forEach(function (e, i) {
            AnimalFactory.deleteAnimal(e);
        });

        $scope.species.forEach(function (e, i) {
            if (e.id === item.id) {
                deleteIndex = i;
            };
        })
        $scope.species.splice(deleteIndex, 1);
        localStorage.setItem("species", angular.toJson($scope.species));
    };

    $scope.updateSpecie = function (item) {
        item.updating = false;
        localStorage.setItem("species", angular.toJson($scope.species));
    };

    $scope.saveNewSpecie = function () {
        var newId = 1;
        if ($scope.newSpecie.name != null && $scope.newSpecie.food != null) {
            if ($scope.species.length > 0) {
                newId = $scope.species[$scope.species.length - 1].id + 1;
            };
            $scope.species.push({
                id: newId,
                name: $scope.newSpecie.name,
                food: $scope.newSpecie.food
            });
            $scope.newSpecie = {};
            localStorage.setItem("species", angular.toJson($scope.species));
        };
    };
});
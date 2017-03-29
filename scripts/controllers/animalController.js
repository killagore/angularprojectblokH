

appModule.controller('animalController', function ($scope, ZooKeeperFactory, CageFactory, SpecieFactory, AnimalFactory) {

    $scope.species = SpecieFactory.getSpecies();
    $scope.cages = CageFactory.getCages();
    $scope.zookeepers = ZooKeeperFactory.getZookeepers();
    $scope.animals = AnimalFactory.getAnimals();
    
    $scope.deleteAnimal = function (item) {
        AnimalFactory.deleteAnimal(item);
        $scope.animals = AnimalFactory.getAnimals();
    };

    $scope.updateAnimal = function (item) {
        item.updating = false;
        localStorage.setItem("animals", angular.toJson($scope.animals));
    };

    $scope.saveNewAnimal = function () {
        var newId = 1;
        if ($scope.newAnimal.name != null && $scope.newAnimal.gender != null && $scope.newAnimal.specie != null && $scope.newAnimal.cage != null && $scope.newAnimal.zookeeper != null) {
            if ($scope.animals.length > 0) {
                newId = $scope.animals[$scope.animals.length - 1].id + 1;
            };
            $scope.animals.push({
                id: newId,
                name: $scope.newAnimal.name,
                gender: $scope.newAnimal.gender,
                specie: $scope.newAnimal.specie,
                cage: $scope.newAnimal.cage,
                zookeeper: $scope.newAnimal.zookeeper
            });
            $scope.newAnimal = {};
            localStorage.setItem("animals", angular.toJson($scope.animals));
        };
    };
});
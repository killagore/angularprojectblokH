

appModule.controller('cageController', function ($scope, CageFactory, AnimalFactory) {


    $scope.sort = CageFactory.getSort();
    $scope.size = CageFactory.getSize();
    $scope.cages = CageFactory.getCages();

    $scope.deleteCage = function (item) {
        var deleteIndex = -1;
        var cageAnimals = AnimalFactory.getAnimalsByCage(item.id);

        cageAnimals.forEach(function (e, i) {
            AnimalFactory.deleteAnimal(e);
        });

        $scope.cages.forEach(function (e, i) {
            if (e.id === item.id) {
                deleteIndex = i;
            };
        });
        $scope.cages.splice(deleteIndex, 1);
        localStorage.setItem("cages", angular.toJson($scope.cages));
    };

    $scope.updateCage = function (item) {
        item.updating = false;
        localStorage.setItem("cages", angular.toJson($scope.cages));
    };

    $scope.saveNewCage = function () {
        var newId = 1;
        if ($scope.newCage.name != null && $scope.newCage.sort != null && $scope.newCage.size != null) {
            if ($scope.cages.length > 0) {
                newId = $scope.cages[$scope.cages.length - 1].id + 1;
            };

            $scope.cages.push({
                id: newId,
                name: $scope.newCage.name,
                sort: $scope.newCage.sort,
                size: $scope.newCage.size
            });
            $scope.newCage = {};
            localStorage.setItem("cages", angular.toJson($scope.cages));
        };
    };
});
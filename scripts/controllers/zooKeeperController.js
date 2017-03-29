

appModule.controller('zooKeeperController', function ($scope, ZooKeeperFactory, AnimalFactory) {

    $scope.zookeepers = ZooKeeperFactory.getZookeepers();


    $scope.deleteZookeeper = function (item) {
        var deleteIndex = -1;

        var zookeeperAnimals = AnimalFactory.getAnimalsByZookeeper(item.id);

        zookeeperAnimals.forEach(function (e, i) {
            AnimalFactory.deleteAnimal(e);
        });

        $scope.zookeepers.forEach(function (e, i) {
            if (e.id === item.id) {
                deleteIndex = i;
            };
        })
        $scope.zookeepers.splice(deleteIndex, 1);
        localStorage.setItem("zookeepers", angular.toJson($scope.zookeepers));
    };

    $scope.updateZookeeper = function (item) {
        item.updating = false;
        localStorage.setItem("zookeepers", angular.toJson($scope.zookeepers));
    };

    $scope.saveNewZookeeper = function () {
        var newId = 1;
        if ($scope.newZookeeper.name != null && $scope.newZookeeper.gender != null) {
            if ($scope.zookeepers.length > 0) {
                newId = $scope.zookeepers[$scope.zookeepers.length - 1].id + 1;
            };
            $scope.zookeepers.push({
                id: newId,
                name: $scope.newZookeeper.name,
                gender: $scope.newZookeeper.gender
            });
            $scope.newZookeeper = {};
            localStorage.setItem("zookeepers", angular.toJson($scope.zookeepers));
        };
    };
});
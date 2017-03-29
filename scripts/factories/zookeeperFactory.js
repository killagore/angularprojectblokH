

appModule.factory('ZooKeeperFactory', function () {

    var factory = {};
    var localItems = JSON.parse(localStorage.getItem("zookeepers"));
    var factoryZookeepers;

    if (localItems != undefined && localItems.length > 0) {
        factoryZookeepers = localItems;
    } else {

        factoryZookeepers = [{ id: 1, name: "Harry Hogeboon", gender: "man" },
        { id: 2, name: "Aad Appel", gender: "man"  },
        { id: 3, name: "Tom Van de Boom", gender: "man" },
        { id: 4, name: "Anemiek Schommels", gender: "vrouw" }]
    };
    
    factory.getZookeepers = function () {
        return factoryZookeepers
    };

    return factory;
});


appModule.factory('CageFactory', function () {

    var factory = {};
    var localItems = JSON.parse(localStorage.getItem("cages"));
    var sort = ["vissen", "reptielen", "vogels", "zoogdieren"];
    var size = ["groot", "middelgroot", "klein"];
    var factoryCages;

    if (localItems != undefined && localItems.length > 0) {
        factoryCages = localItems;
    } else {
        factoryCages = [{ id: 1, name: "vis & co.", sort: "vissen", size: "klein" },
        { id: 2, name: "Vogelhok B", sort: "vogels", size: "groot" },
        { id: 3, name: "Apenrek", sort: "reptielen", size: "middelgroot" }]
    };


    factory.getCages = function () {
        return factoryCages;
    };

    factory.getSort = function () {
        return sort;
    };

    factory.getSize = function () {
        return size;
    };

    return factory;
});
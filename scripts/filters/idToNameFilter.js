var appModuleFilters = angular.module('zooApp.filters', []);

appModuleFilters.filter("idToNameFilter", function () {

    return function (item, type) {
        var specieName = "NoName";
        var localSpecies = JSON.parse(localStorage.getItem(type));
        localSpecies.forEach(function (e, i) {
            if (e.id === item) {
                specieName = e.name;
            };
        })
        return specieName;
    };

});
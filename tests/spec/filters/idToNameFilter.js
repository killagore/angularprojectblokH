describe("Filter: idToNameFilter", function () {

    var filter;

    beforeEach(function () {
        module("zooApp.filters");
        var cages = [{ id: 1, name: "vis & co.", sort: "vissen", size: "klein" },
        { id: 2, name: "Vogelhok B", sort: "vogels", size: "groot" },
        { id: 3, name: "Apenrek", sort: "reptielen", size: "middelgroot" }];
        localStorage.setItem("cages", angular.toJson(cages));

        var species = [{ id: 1, name: "gorilla", food: "fruit" },
        { id: 2, name: "pig", food: "everything" },
        { id: 3, name: "rabbit", food: "plants" },
        { id: 4, name: "ape", food: "fruit" }];
        localStorage.setItem("species", angular.toJson(species));

        inject(function ($filter) {
            filter = $filter('idToNameFilter');
        });
    });

    it("should return specie rabbit", function () {
        var input = 3;
        var output = "rabbit";

        expect(filter(input, "species")).toBe(output);
    });

    it("should return specie NoName", function () {
        var input = 33;
        var output = "NoName";

        expect(filter(input, "species")).toBe(output);
    });

    it("should return cage Apenrek", function () {
        var input = 2;
        var output = "Vogelhok B";
        debugger;
        expect(filter(input, "cages")).toBe(output);
    });

    it("should return cage NoName", function () {
        var input = 32;
        var output = "NoName";

        expect(filter(input, "cages")).toBe(output);
    });

});
describe("Factory: AnimalFactory", function () {


    var zookeepers;
    var factory;

    beforeEach(function () {
        zookeepers = [{ id: 1, name: "Harry Hogeboon", gender: "man" },
        { id: 2, name: "Aad Appel", gender: "man"  },
        { id: 3, name: "Tom Van de Boom", gender: "man" },
        { id: 4, name: "Anemiek Schommels", gender: "vrouw" }]
        localStorage.setItem("zookeepers", angular.toJson(zookeepers));

        module('zooApp');
        inject(function ($injector) {
            factory = $injector.get('ZooKeeperFactory');
        });


    });

    it("should return all Zookeepers", function () {
        var input = factory.getZookeepers();
        var output = 4;

        expect(input.length).toBe(output);
    });

});
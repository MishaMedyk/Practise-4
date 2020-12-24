(function () {
    'use strict';

    angular.module('app', [])
        .controller('buycontroller', buycontroller)
        .controller('boughtcontroller', boughtcontroller)
        .service('itemsservice', itemsservice);

    buycontroller.$inject = ['itemsservice'];
    function buycontroller(service) {
        var controller = this;
        controller.tobuyitems = service.gettobuyitems();

        controller.addtobought = function (itemIndex) { 
            service.addboughtitem(itemIndex);
        }
    };

    boughtcontroller.$inject = ['itemsservice'];
    function boughtcontroller(service) {
        var controller = this;
        controller.boughtItems = service.getboughtitems();
    };

    function itemsservice() {
        var service = this;

        var boughtitems = [];

        var tobuyitems = [
            new item("Мандарини", 50),
            new item("Хурма", 60),
            new item("Апельсини", 30),
            new item("Виноград", 90),
            new item("Банани", 70),
            new item("Яблука", 10),
            new item("Черешня", 80)
        ];

        service.addboughtitem = function (shopItemId) {
            boughtitems.push(tobuyitems[shopItemId]);
            tobuyitems.splice(shopItemId, 1);
        };

        service.gettobuyitems = function () {
            return tobuyitems;
        };

        service.getboughtitems = function () {
            return boughtitems;
        };
    };

    class item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

})();
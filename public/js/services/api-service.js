
var ServerActionCreator = require('../actions/server-action-creator');

var ApiService = {

    loadAllFeatures: function() {

        // for now, pretend like we're loading them from an external data source
        setTimeout(function() {
            ServerActionCreator.receiveAll([
                {"id": 1, "name": "Bills Poolhall", coords: [37.7756, -122.41], selected: false},
                {"id": 2, "name": "Family Billiards", coords: [37.7, -122.4193], selected: true},
                {"id": 3, "name": "Thallassa - RIP", coords: [37.7, -122.41], selected: false}
            ])
        }, 1);

    }
};

module.exports = ApiService;
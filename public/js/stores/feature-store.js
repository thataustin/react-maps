var _ = require('underscore');
var Immutable = require('immutable');
var constants = require('../constants');
var Store = require('nuclear-js').Store;

var featureStore = new Store({

    getInitialState: function () {
        return Immutable.Map();
    },

    initialize: function () {

        /**
         * Batch load of initial set
         */
        this.on(constants.RECEIVE_RAW_FEATURES, function (state, payload) {

            var a = state.withMutations(function (stateMap) {

                return payload.map(function (feature) {
                    return stateMap.set(feature.id, feature);
                });
            });

            return a;
        });

        this.on(constants.RECEIVE_RAW_CREATED_FEATURE, function (state, feature) {
            return state.set(feature.id, feature);
        })

    }

});

module.exports = featureStore;
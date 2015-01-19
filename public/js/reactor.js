var Reactor = require('nuclear-js').Reactor;
var featureStore = require('./stores/feature-store');

var reactor = Reactor({
    debug: true
});

reactor.registerStore('features', featureStore);

module.exports = reactor;
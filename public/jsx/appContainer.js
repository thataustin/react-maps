var React = require('react');
var FeatureListView = require('./featureListView');
var MapView = require('./mapView');
var config = require('../config');

var AppContainer = React.createClass({

    getInitialState: function() {
        return {
            features: [
                {"name": "Bills Poolhall", coords: [37.7756, -122.41]},
                {"name": "Family Billiards", coords: [37.7, -122.4193]},
                {"name": "Thallassa - RIP", coords: [37.7, -122.41]}
            ],
            mapCenter: config.map.defaultMapCenter,
            mapZoom: config.map.defaultZoomLevel
        };
    },

    render: function () {
        return (
            <div>
                <FeatureListView features={this.state.features} />
                <MapView features={this.state.features} mapCenter={this.state.mapCenter} mapZoom={this.state.mapZoom} />
            </div>
        );
    }

});

module.exports = AppContainer;
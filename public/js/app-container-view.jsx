var React = require('react');
var _ = require('underscore');
var ReactorMixin = require('nuclear-react-mixin');

var config = require('./config');
var reactor = require('./reactor');
var FeatureListView = require('./components/sidebar-left/feature-list-view');
var MapView = require('./components/map-container/map-view');


var AppContainer = React.createClass({

    mixins: [ReactorMixin(reactor)],

    getDataBindings: function() {
        return {
            features: ['features']
        }
    },

    getInitialState: function() {
        return {
            mapCenter: config.map.defaultMapCenter,
            mapZoom: config.map.defaultZoomLevel
        };
    },

    render: function () {
        return (
            <div id="app-container">
                <FeatureListView features={this.state.features} />
                <MapView features={this.state.features} mapCenter={this.state.mapCenter} mapZoom={this.state.mapZoom} />
            </div>

        );
    }

});

module.exports = AppContainer;
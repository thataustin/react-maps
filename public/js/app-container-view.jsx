var React = require('react');
var FeatureListView = require('./components/sidebar-left/feature-list-view');
var MapView = require('./components/map-container/map-view');
var config = require('./config');
var FeatureStore = require('./stores/feature-store');
var _ = require('underscore');

var AppContainer = React.createClass({

    componentDidMount: function() {
        FeatureStore.addChangeListener(this._onChange);
    },

    getInitialState: function() {
        return {
            features: FeatureStore.getAll(),
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
    },

    _onChange: function() {
        this.setState(_.extend(
            {},
            this.state,
            { features: FeatureStore.getAll() }
        ));
    }

});

module.exports = AppContainer;
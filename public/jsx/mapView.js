var L = require('leaflet');
var React = require('react');
var config = require('../config');

var MapView = React.createClass({

    // Once it's mounted, draw the map
    componentDidMount: function() {

        // Create a leaflet map and attach it to the root react DOM node for this component
        var map = this.map = L.map(this.getDOMNode())
            .setView(this.props.mapCenter, this.props.mapZoom);

        // A symlink to the leaflet images in node_modules
        L.Icon.Default.imagePath = 'images/leaflet';

        L.tileLayer(config.map.tileLayerUrl, {
            attribution: config.map.attribution,
            maxZoom: 18
        }).addTo(map);

        //map.on('click', this.onMapClick);

        this.props.features.map(function(feature) {
            L.marker(feature.coords, 13).addTo(map);
        });

    },

    componentWillUnmount: function() {
        //this.map.off('click', this.onMapClick);
        this.map = null;
    },

    render: function() {
        return (<div id="map"></div>);
    }
});

module.exports = MapView;
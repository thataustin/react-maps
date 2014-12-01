var _ = require('underscore');
var React = require('react');
var Leaflet = require('react-leaflet');

var Map = Leaflet.Map;
var Popup = Leaflet.Popup;
var Marker = Leaflet.Marker;
var TileLayer = Leaflet.TileLayer;

var config = require('../../config');

var MapView = React.createClass({

    render: function() {

        function getMarker (feature) {
            var key = 'marker' + feature.id;
            return (
                <Marker key={key} position={feature.coords}></Marker>
            );
        }

        var markers = _.map(this.props.features, getMarker);

        return (
            <Map className="map" key="map1" center={this.props.mapCenter} zoom={this.props.mapZoom} maxZoom={config.map.maxZoom} >
                <TileLayer url={config.map.tileLayerUrl} attribution={config.map.attribution} />
                {markers}
            </Map>
        );

    }
});

module.exports = MapView;
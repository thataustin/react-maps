var _ = require('underscore');
var React = require('react');
var Leaflet = require('react-leaflet');

var Map = Leaflet.Map;
var Popup = Leaflet.Popup;
var TileLayer = Leaflet.TileLayer;
var LeafletMarker = Leaflet.Marker;
var FeatureListActionCreator = require('../../actions/feature-list-action-creator');

var config = require('../../config');

var MapView = React.createClass({

    propTypes: {
        mapCenter: React.PropTypes.array,
        mapZoom: React.PropTypes.number,
        features: React.PropTypes.object
    },

    render: function() {

        var selectedFeatures = _.filter(this.props.features, function (feature) {
            return feature.selected;
        });

        function _onClick (featureId) {
            FeatureListActionCreator.clickFeature(featureId);
        }

        function _onMoveend (featureId, e) {
            var coords = [e.target._latlng.lat, e.target._latlng.lng];
            FeatureListActionCreator.moveFeature(featureId, coords);
        }

        function getMarker (feature) {
            var key = 'marker-' + feature.id;
            return (
                <LeafletMarker key={key} position={feature.coords} draggable="true"
                    onClick={_onClick.bind(null, feature.id)}
                    onLeafletMoveend={_onMoveend.bind(null, feature.id)}
                    onLeafletDrag={_onMoveend.bind(null, feature.id)}
                ></LeafletMarker>
            );
        };

        return (
            <Map className="map" key="map1"
                center={this.props.mapCenter}
                zoom={this.props.mapZoom}
                maxZoom={config.map.maxZoom}>
                <TileLayer url={config.map.tileLayerUrl} attribution={config.map.attribution} />
                {_.map(selectedFeatures, getMarker.bind(this))}
            </Map>
        );

    },


});

module.exports = MapView;
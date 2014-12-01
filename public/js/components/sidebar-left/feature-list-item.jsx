var React = require('react');
var _ = require('underscore');
var cx = require('react/lib/cx');

var FeatureListActionCreator = require('../../actions/feature-list-action-creator');

var FeatureListView = React.createClass({

    render: function() {

        var feature = this.props.feature;
        var key = 'feature-list-item-' + feature.id;
        var className = cx({ 'inactive': ! feature.selected});

        function round (int) {
            return Math.round(int * 1000) / 1000;
        }

        return (
            <li className={className} key={key} onClick={this._onClick}>
                <span className="subheader">{feature.name}</span>
                <span className="details">Coordinates: {round(feature.coords[0])}, {round(feature.coords[1])}</span>
            </li>
        );
    },

    _onClick: function () {
        FeatureListActionCreator.clickFeature(this.props.feature.id);
    }
});

module.exports = FeatureListView;
var React = require('react');
var _ = require('underscore');

var FeatureListItem = require('./feature-list-item');

var FeatureListView = React.createClass({

   render: function() {

       function renderFeature(feature) {
           return ( <FeatureListItem feature={feature} /> );
       }

       return (
           <ul className="feature-list" key="feature-list1">
                { _.map(this.props.features, renderFeature) }
           </ul>
       );
   },

});

module.exports = FeatureListView;
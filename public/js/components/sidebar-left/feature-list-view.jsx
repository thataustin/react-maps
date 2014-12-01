var React = require('react');
var _ = require('underscore');

var FeatureListView = React.createClass({

   render: function() {

       function renderFeature(feature) {
           var key = 'feature-list-key' + feature.id;

           return (
               <div key={key}>
                    <h5>{feature.name}</h5>
                    <span>Coordinates: {feature.coords[0]}, {feature.coords[1]}</span>
               </div>
           )
       }

       return (
           <ul id="feature-list" key="feature-list1">
                { _.map(this.props.features, renderFeature) }
           </ul>
       )
   }
});

module.exports = FeatureListView;;
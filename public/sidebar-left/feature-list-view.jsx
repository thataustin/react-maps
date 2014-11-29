var React = require('react');

var FeatureListView = React.createClass({

   render: function() {

       function renderFeature(feature) {
           return (
                <div>
                    <h5>{feature.name}</h5>
                    <span>Coordinates: {feature.coords[0]}, {feature.coords[1]}</span>
                </div>
           )
       }


       return (
           <ul id="feature-list">
                {this.props.features.map(renderFeature)}
           </ul>
       )
   }
});

module.exports = FeatureListView;
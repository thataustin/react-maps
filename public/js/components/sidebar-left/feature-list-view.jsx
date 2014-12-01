var React = require('react');
var _ = require('underscore');

var FeatureListView = React.createClass({

   render: function() {

       function renderFeature(feature) {
           var key = 'feature-list-key-' + feature.id;

           var classes = React.addons.classSet({
              'inactive': ! feature.selected
           });

           return (
               <li className={classes} key={key}>
                    <span className="subheader">{feature.name}</span>
                    <span className="details">Coordinates: {feature.coords[0]}, {feature.coords[1]}</span>
               </li>
           );
       }

       return (
           <ul className="feature-list" key="feature-list1">
                { _.map(this.props.features, renderFeature) }
           </ul>
       );
   }
});

module.exports = FeatureListView;
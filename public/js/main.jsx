var React = require('react');
var AppContainerView = require('./app-container-view');
var ApiService = require('./services/api-service');

// Load the initial data set
ApiService.loadAllFeatures();

React.render(
    <AppContainerView />,
    document.getElementsByTagName('body')[0]
);
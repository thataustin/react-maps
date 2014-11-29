## Billiards Maps
This repo is a way for me to play with React + leaflet while attempting to create something useful to the billiards community.

To run this page locally:

~~~
npm install # note that this creates a potentially fragile symlink in public/images/leaflet -> node_modules...

gulp browserify # may need to `npm install -g gulp`

gulp watch # this is just a convenience command that watches the js files and re-browserifies if needed
~~~
# 15-css-twitter-bootstrap-grid-system

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Dependency

bower install --save fontawesome

*Note: somehow Grunt will always remove your linkage to the font-awesome css.

To prevent grunt deleting your css-link tag, write the tag outside of the build:css comment. 

    <!-- GRUNT PLEASE DO NOT OVERRIDE ME -->
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css" type="text/css"/>
    <!-- build:css(.) styles/vendor.css -->


bower install metisMenu
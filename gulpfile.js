var gulp = require("gulp");
var bower = require("gulp-bower");
var elixir = require("laravel-elixir");
var elixirTypscript = require('elixir-typescript');

gulp.task('bower', function () {
    return bower();
});

// Path to vendors
var vendors = '../../assets/vendors/';

// Paths for specific external Libraries
var paths = {
    'jquery': vendors + 'jquery/dist',
    'jqueryUi': vendors + 'jquery-ui',
    'moment': vendors + 'moment',
    'bootstrap': vendors + 'bootstrap/dist',
    'fontawesome': vendors + 'font-awesome',
    'eonasdanBootstrapDatetimepicker': vendors + 'eonasdan-bootstrap-datetimepicker/build',
    'tether' : vendors + 'tether/dist'
};

elixir(function (mix) {
    // External Libraries
    mix.copy('node_modules/@angular', 'public/@angular');
    mix.copy('node_modules/@angular2-material', 'public/@angular2-material');
    mix.copy('node_modules/rxjs', 'public/rxjs');
    mix.copy('node_modules/systemjs', 'public/systemjs');
    mix.copy('node_modules/es6-promise', 'public/es6-promise');
    mix.copy('node_modules/es6-shim', 'public/es6-shim');
    mix.copy('node_modules/zone.js', 'public/zone.js');
    mix.copy('node_modules/satellizer', 'public/satellizer');
    mix.copy('node_modules/platform', 'public/platform');
    mix.copy('node_modules/underscore', 'public/underscore');
    mix.copy('node_modules/reflect-metadata', 'public/reflect-metadata');
    mix.copy('resources/assets/vendors/jquery-ui/themes/base/images', 'public/images');
    mix.copy('resources/assets/vendors/c3/c3.min.css', 'public/css');
    mix.copy('resources/assets/vendors/c3/c3.min.js', 'public/js');
    mix.copy('resources/assets/vendors/d3/d3.min.js', 'public/js');
    mix.copy('resources/assets/vendors/font-awesome/fonts', 'public/fonts');

    // Images
    mix.copy('resources/assets/images', 'public/images');

    // CSS Custom Libraries
    mix.copy('resources/assets/css', 'public/css');

    // Angular Templates
    mix.copy('resources/assets/templates', 'public/templates');

    //CSS Libraries minification
    mix.styles([paths.fontawesome + "/css/font-awesome.min.css",
        paths.jqueryUi + "/themes/base/core.css",
        paths.tether + '/css/tether.css',
        paths.bootstrap + '/css/bootstrap.min.css',
        paths.bootstrap + '/css/bootstrap-theme.min.css',
        paths.eonasdanBootstrapDatetimepicker + '/css/bootstrap-datetimepicker.css'
    ], 'public/css/styles.css');

    //JS Libraries minification
    mix.scripts([paths.jquery + "/jquery.js",
        paths.jqueryUi + "/jquery-ui.min.js",
        paths.tether + '/js/tether.js',
        paths.bootstrap + "/js/bootstrap.min.js",
        paths.moment + '/moment.js',
        paths.eonasdanBootstrapDatetimepicker + '/js/bootstrap-datetimepicker.min.js'
    ], 'public/js/scripts.js');

    // TypeScript configuration
    mix.typescript(
        '/**/*.ts',
        'public/js',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );

});

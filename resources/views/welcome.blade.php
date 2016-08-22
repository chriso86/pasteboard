<!DOCTYPE html>
<html>
    <head>
        <title>Paste Board</title>
        
        <base href="/">
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Nova+Square' rel='stylesheet' type='text/css'>
        {{ Html::style('css/styles.css') }}
        {{ Html::style('css/pasteboard.css') }}
        <!-- Load libraries -->
        <!-- IE required polyfills, in this exact order -->
        {{ Html::script('es6-shim/es6-shim.min.js') }}
        {{ Html::script('zone.js/dist/zone.js') }}
        {{ Html::script('reflect-metadata/Reflect.js') }}
        {{ Html::script('systemjs/dist/system.src.js') }}
        {{ Html::script('underscore/underscore-min.js') }}
        {{ Html::script('systemjs.config.js') }}
        
        <script>
            System.config({
                "defaultJSExtensions": true,
                packages: {
                    js: {
                        format: 'register',
                        defaultExtension: 'js'
                    }
                }
            });
            System.import('js/boot')
                .then(null, console.error.bind(console));
        </script>
    </head>
    <body>
        <div class="main-container">
            <pb-app>Loading</pb-app>
        </div>
    </body>
</html>
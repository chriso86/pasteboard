<html>
    <head>
        <title>Paste Board</title>

        <!-- META TAGS -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- 3RD PARTY SCRIPTS -->
        <script type="text/javascript" src="js/third-party/angular2.min.js"></script>
        <script type="text/javascript" src="js/third-party/router.min.js"></script>
        <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>

        <!-- CUSTOM SCRIPTS -->

        <!-- ANGULAR SCRIPTS -->
        <script type="text/javascript" src="app/bootstrap.js"></script>

        <!-- 3RD PARTY STYLES -->
        <link type="text/css" rel="stylesheet" href="css/third-party/material.light_blue-blue.min.css" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        <!-- CUSTOM STYLES -->

    </head>
    <body>
        <!-- HEADER WITH MENU -->
        <div class="mdl-layout mdl-js-layout">
            <header class="mdl-layout__header mdl-layout__header--scroll">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">Paste board</span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation -->
                    <nav class="mdl-navigation">
                        <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                            Create new project
                        </button>
                        <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                            Create new board
                        </button>
                    </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Dashboard</span>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="">Projects</a>
                    <a class="mdl-navigation__link" href="">Boards</a>
                    <a class="mdl-navigation__link" href="">Users</a>
                    <a class="mdl-navigation__link" href="">Links</a>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content"><!-- Your content goes here --></div>
            </main>
        </div>



        <!-- FOOTER -->
        <footer class="mdl-mini-footer">
            <div class="mdl-mini-footer__left-section">
                <div class="mdl-logo">Title</div>
                <ul class="mdl-mini-footer__link-list">
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Privacy & Terms</a></li>
                </ul>
            </div>
        </footer>
    </body>
</html>
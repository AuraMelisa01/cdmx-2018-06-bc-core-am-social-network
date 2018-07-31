<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css" />
    <link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet">
</head>

<body>

<header class="row">
        <div class="navbar-fixed">
        <nav class="lighten-3 pink darken-1 row color-nav">
            <div class="nav-wrapper col s12">

                <button id="btnHome" class="btn-flat col s1 offset-s1">
                    <i class="large material-icons">home</i>
                </button>
                <button id="btnProfile" class="btn-flat col s1 offset-s2">
                    <i class="large material-icons">person</i>
                    <a href="../views/perfil.html"></a>
                </button>
                <button id="btnMessage" class=" btn-flat col s1 offset-s2">
                    <i class="large material-icons">chat</i>
                </button>
                <button id="btnRanking" class=" btn-flat col s1 offset-s2">
                    <i class="large material-icons">filter_vintage</i>
                </button>
            </div>
        </nav>
        </div>
    </header>

    <button id="btnLogout" value="salir">Salir</button>

    <div class="container">
        <section class="col s12" id="postForm">
            <h4 id="dataName"></h4>
            <input type="text" id="postText" placeholder="Inquietudes de mamá">
            <input type="button" id="btnPost" class="btn" value="Publicar">
        </section>
        <section id="comentarios">

        </section>


    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>
    <script src="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.js"></script>
    <script src="../js/firebase.js"></script>
    <script src="../js/home.js"></script>
    <script src="../js/logout.js"></script>
</body>

</html>

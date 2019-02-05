$(document).ready(function(){
    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    // Posts

    var posts = [
        {
            title: 'Artículo 1',
            date: moment().format('D MMMM YYYY'),
            content: 'este es el contenido del post 1'
        },
        {
            title: 'Artículo 2',
            date: moment().format('D MMMM YYYY'),
            content: 'este es el contenido del post 2'
        },
        {
            title: 'Artículo 3',
            date: moment().format('D MMMM YYYY'),
            content: 'este es el contenido del post 3'
        },
        {
            title: 'Artículo 4',
            date: moment().format('D MMMM YYYY'),
            content: 'este es el contenido del post 4'
        },{
            title: 'Artículo 5',
            date: moment().format('D MMMM YYYY'),
            content: 'este es el contenido del post 5'
        },{
            title: 'Artículo 6',
            date: moment().format('D MMMM YYYY'),
            content: 'este es el contenido del post 6'
        }    
    ];

    posts.forEach((item, index)=>{
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Más</a>
            </article>
        `
        $('#posts').append(post);
    });


    // Selector de temas
    var theme = $("#theme")
    $("#to-green").click(function(){
        theme.attr("href", "./css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "./css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "./css/blue.css");
    });

    // Scroll up

    $(".up").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // LocalStorage Login

    $("#login form").submit(function(){
        var formName = $("#form_name").val();

        localStorage.setItem("form_name", formName);
    });

    var formName1 = localStorage.getItem("form_name");
    console.log(formName1);
    if(formName1 != null && formName1 != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("Bienvenido " + formName1);
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a> ");
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }


});
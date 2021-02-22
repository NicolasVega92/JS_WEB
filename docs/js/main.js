

$(document).ready(function(){

    //Sliders
    if(window.location.href.indexOf('index') > -1){

        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }


      //Posts
    if(window.location.href.indexOf('index') > -1){

        var posts = 
        [
            {
                title:'Prueba de título 1',
                date: 'Publicado el día '+ moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"), 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices consequat sollicitudin. Praesent hendrerit, justo ut tristique facilisis, orci quam dictum ipsum, vel ornare arcu sapien a turpis. Curabitur at laoreet augue. Nulla laoreet lectus at suscipit hendrerit. Mauris quis lectus purus. Aenean et diam a lorem condimentum rhoncus sed nec turpis. Praesent in odio quis dui iaculis iaculis. Etiam ullamcorper justo neque, sed gravida metus sagittis ut. Vivamus vitae consectetur orci, et tristique leo. Duis eget congue sem, eget ultricies lorem. Suspendisse eget massa pulvinar, iaculis nunc hendrerit, pretium lacus. Quisque euismod sem sed nisl pellentesque porttitor. Sed cursus tristique ipsum, in porta urna commodo sit amet. Maecenas felis ex, facilisis pellentesque rhoncus ultricies, blandit at est.'
            },
            {
                title:'Prueba de título 2',
                date: 'Publicado el día '+ moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),  
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices consequat sollicitudin. Praesent hendrerit, justo ut tristique facilisis, orci quam dictum ipsum, vel ornare arcu sapien a turpis. Curabitur at laoreet augue. Nulla laoreet lectus at suscipit hendrerit. Mauris quis lectus purus. Aenean et diam a lorem condimentum rhoncus sed nec turpis. Praesent in odio quis dui iaculis iaculis. Etiam ullamcorper justo neque, sed gravida metus sagittis ut. Vivamus vitae consectetur orci, et tristique leo. Duis eget congue sem, eget ultricies lorem. Suspendisse eget massa pulvinar, iaculis nunc hendrerit, pretium lacus. Quisque euismod sem sed nisl pellentesque porttitor. Sed cursus tristique ipsum, in porta urna commodo sit amet. Maecenas felis ex, facilisis pellentesque rhoncus ultricies, blandit at est.'
            },
            {
                title:'Prueba de título 3',
                date: 'Publicado el día '+ moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),  
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices consequat sollicitudin. Praesent hendrerit, justo ut tristique facilisis, orci quam dictum ipsum, vel ornare arcu sapien a turpis. Curabitur at laoreet augue. Nulla laoreet lectus at suscipit hendrerit. Mauris quis lectus purus. Aenean et diam a lorem condimentum rhoncus sed nec turpis. Praesent in odio quis dui iaculis iaculis. Etiam ullamcorper justo neque, sed gravida metus sagittis ut. Vivamus vitae consectetur orci, et tristique leo. Duis eget congue sem, eget ultricies lorem. Suspendisse eget massa pulvinar, iaculis nunc hendrerit, pretium lacus. Quisque euismod sem sed nisl pellentesque porttitor. Sed cursus tristique ipsum, in porta urna commodo sit amet. Maecenas felis ex, facilisis pellentesque rhoncus ultricies, blandit at est.'
            },
            {
                title:'Prueba de título 4',
                date: 'Publicado el día '+ moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"), 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices consequat sollicitudin. Praesent hendrerit, justo ut tristique facilisis, orci quam dictum ipsum, vel ornare arcu sapien a turpis. Curabitur at laoreet augue. Nulla laoreet lectus at suscipit hendrerit. Mauris quis lectus purus. Aenean et diam a lorem condimentum rhoncus sed nec turpis. Praesent in odio quis dui iaculis iaculis. Etiam ullamcorper justo neque, sed gravida metus sagittis ut. Vivamus vitae consectetur orci, et tristique leo. Duis eget congue sem, eget ultricies lorem. Suspendisse eget massa pulvinar, iaculis nunc hendrerit, pretium lacus. Quisque euismod sem sed nisl pellentesque porttitor. Sed cursus tristique ipsum, in porta urna commodo sit amet. Maecenas felis ex, facilisis pellentesque rhoncus ultricies, blandit at est.'
            },
            {
                title:'Prueba de título 5',
                date: 'Publicado el día '+ moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"), 
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices consequat sollicitudin. Praesent hendrerit, justo ut tristique facilisis, orci quam dictum ipsum, vel ornare arcu sapien a turpis. Curabitur at laoreet augue. Nulla laoreet lectus at suscipit hendrerit. Mauris quis lectus purus. Aenean et diam a lorem condimentum rhoncus sed nec turpis. Praesent in odio quis dui iaculis iaculis. Etiam ullamcorper justo neque, sed gravida metus sagittis ut. Vivamus vitae consectetur orci, et tristique leo. Duis eget congue sem, eget ultricies lorem. Suspendisse eget massa pulvinar, iaculis nunc hendrerit, pretium lacus. Quisque euismod sem sed nisl pellentesque porttitor. Sed cursus tristique ipsum, in porta urna commodo sit amet. Maecenas felis ex, facilisis pellentesque rhoncus ultricies, blandit at est.'
            },
        ];
    
        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            
            $("#posts").append(post);

        } );
    }


    //Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();
        
        $("html, body").animate({
            scrollTop: 0 //Pone el scroll en el pixel cero de la pagina
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
});




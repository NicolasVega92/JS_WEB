

$(document).ready(function(){

    //Sliders
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
      });

      //Posts
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
    console.log(posts);


});




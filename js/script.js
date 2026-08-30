// filterArray

let filterArray = [];

let galleryArray = [
    {
        id  : 1,
        
        src : "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2018/04/sicilian-cheese-1-1024x626.jpg.webp",
        name : "Burger one",
        desc : "This is a burger made by me",

    },
    {
        id  : 2,
        name : "Burger Two",
        src : "/img/pizza1.png",
        desc : "This is a burger made by me",
        
    },
    {
        id  : 3,
        name : "Burger Three",
        src : "./img/hero-1.png",
        desc : "This is a burger made by me",
        
    },
    {
        id  : 4,
        name : "Burger Four",
        src : "./img/hero-1.png",
        desc : "This is a burger made by me",
        
    },
    {
        id  : 5,
        name : "Burger Five",
        src : "./img/hero-1.png",
        desc : "This is a burger made by me",
        
    },
    {
        id  : 6,
        name : "Burger Six",
        src : "./img/hero-1.png",
        desc : "This is a burger made by me",
        
    }
];

// creating a new function to show gallery

showgallery(galleryArray);

document.getElementById('card').innerText = "";

function showgallery(currarray){
    for(var i=0; i<=currarray.length; i++){
        document.getElementById('card').innerHTML += `
        <div class="col-sm-6 col-lg-4 mt-3">
        <div class="card pe-2">
       
        <img class="card-img-top" src="${currarray[i].src}" height="300px" />
         <h4 class="text-capitalize ms-3">${currarray[i].name}</h4>
        <p class="mt-2 ms-4">${currarray[i].desc}</p>
        <div class="d-flex justify-content-around mb-5">
                <h3  style="text-align:left">190 $</h3>
                <button class="btn btn-danger"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
        </div>
         
        `
    }

}

// live searching using keyup input


document.getElementById('myinput').addEventListener("keyup", function(){
    let text = document.getElementById('myinput').value;

    filterArray = galleryArray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }

    });
    if(this.value == ""){
        showgallery(galleryArray);
    }
    else{
        if(filterArray == ""){
            document.getElementById('para').style.display = 'block';
            document.getElementById('card').innerHTML = "";
        }
        else{
            showgallery(filterArray);
            document.getElementById('para').style.display = 'none';
        }
    }


})


// This is script file

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})


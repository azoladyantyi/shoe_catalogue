var searchButton = document.querySelector('#search');
var results = document.querySelector("#results");
var options = document.querySelector('#options');
var color = document.querySelector('.colorSelect');
//introduce template for table
var source = document.querySelector(".tableTemplate").innerHTML;
//introduce template for dropdowns
var option = document.querySelector(".template-selector").innerHTML;
//Compile that  into a template
var template = Handlebars.compile(source);
//ciompile that into a tamplate for dropdowns
var select = Handlebars.compile(option);

var shoes = [{
        color: 'blue',
        size: 5,
        brand: 'puma',
        price: 350
    },
    {
        color: 'orange',
        size: 3,
        brand: 'addidas',
        price: 275
    },
    {
        color: 'black',
        size: 3,
        brand: 'puma',
        price: 275
    }
];

results.innerHTML = template({
    shoes: shoes
});
options.innerHTML = select(select);

//var newStock = [];

searchButton.addEventListener('click', function() {
    // for (var i = 0; i < newStock.length; i++) {
    //     newStock[i]
    // }
    var stock = template({
        shoes: shoes
    })
    results.innerHTML = stock;
});

var list = [];
for (var i = 0; i < shoes.length; i++) {
    shoes[i];
    if (shoes.color == color) {
        list.push(shoes);
    }
}





var input = document.querySelector('.search');
var button = document.querySelector('.searchButton');
var myTemplate = document.querySelector('.myTemplate');

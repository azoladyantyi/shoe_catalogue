//introduce template for table
var tableTemplate = document.querySelector("#tableTemplate").innerHTML;
//Compile that  into a template
var tableTemplateInst = Handlebars.compile(tableTemplate);

var dropTemp = document.querySelector("#dropTemp").innerHTML;
var dropDownTemplateInst = Handlebars.compile(dropTemp);

var shoeData = [{
        color: 'black',
        size: 5,
        brand: 'puma',
        price: 'R350'
    },
    {
        color: 'orange',
        size: 2,
        brand: 'adidas',
        price: 'R275'
    },
];
var dropDownOutput = document.querySelector('#dropDownOutput');
dropDownOutput.innerHTML = dropDownTemplateInst({
    key: shoeData
});


var colorMap = {};
var colorList = [];

function myShoeColors(myShoeStock) {
    for (var i = 0; i < myShoeStock.length; i++) {
        var shoeStock = myShoeStock[i];

        if (colorMap[shoeStock.color] === undefined) {
            colorMap[shoeStock.color] = shoeStock.color;
            colorList.push(shoeStock.color);
        }
    }
    return colorList;
}

var sizeMap = {};
var sizeList = [];

function myShoesize(myShoeStock) {
    for (var i = 0; i < myShoeStock.length; i++) {
        var shoeStock = myShoeStock[i];

        if (sizeMap[shoeStock.size] === undefined) {
            sizeMap[shoeStock.size] = shoeStock.size;
            sizeList.push(shoeStock.size);
        }
    }
    return sizeList;
}

var brandMap = {};
var brandList = [];

function myShoeBrands(myShoeStock) {
    for (var i = 0; i < myShoeStock.length; i++) {
        var shoeStock = myShoeStock[i];

        if (brandMap[shoeStock.brand] === undefined) {
            brandMap[shoeStock.brand] = shoeStock.brand;
            brandList.push(shoeStock.brand);
        }
    }
    return brandList;
}


var priceMap = {};
var PriceList = [];

function myShoePrice(myShoeStock) {
    for (var i = 0; i < myShoeStock.length; i++) {
        var shoeStock = myShoeStock[i];

        if (priceMap[shoeStock.price] === undefined) {
            priceMap[shoeStock.price] = shoeStock.price;
            PriceList.push(shoeStock.price);
        }
    }
    return PriceList;
}



function displayMyShoe(myShoeStock) {
    var color = myShoeColors(myShoeStock);
    var size = myShoesize(myShoeStock);
    var brand = myShoeBrands(myShoeStock);
    var prices = myShoePrice(myShoeStock);

    var dropDownOutput = document.querySelector('#dropDownOutput');
    // console.log(color,size,brand);
    var ogarnisedDropdownData = dropDownTemplateInst({
        colors: color.sort(),
        sizes: size.sort(),
        brands: brand.sort()
    })

    //console.log(ogarnisedDropdownData);
    var colorDropDown = document.querySelector('#colorDropDown');
    var sizeDropDown = document.querySelector('#sizeDropDown');
    var brandDropDown = document.querySelector('#brandDropDown');
    var tableDisplay = document.querySelector('#tableDisplay');

    var display = tableTemplateInst({
        shoes: myShoeStock
    });



    dropDownOutput.innerHTML = ogarnisedDropdownData;

    tableDisplay.innerHTML = display;
};

var addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function() {

    var new_color = document.getElementById("new_color");
    //var new_color = document.getElementById("new_color");
    var new_size = document.getElementById("new_size");
    var new_brand = document.getElementById("new_brand");
    var new_price = document.getElementById("new_price");
    if (new_color !== undefined && new_size !== undefined && new_brand !== undefined && new_price !== undefined) {
        shoeData.push({
            color: new_color.value,
            size: Number(new_size.value),
            brand: new_brand.value,
            price: new_price.value
        })
    }
     displayMyShoe(shoeData)
});

displayMyShoe(shoeData)
dropDownOutput.addEventListener('click', function(evt) {
    if (evt.target.name = "dropDownOutput") {
      var dropDownTemplateInst = Handlebars.compile(dropTemp);

        var searchedColor = [];


        for (var i = 0; i < shoeData.length; i++) {
            var myStock = shoeData[i];
            if (myStock.brand === brandDropDown.value || myStock.color === colorDropDown.value || myStock.size === sizeDropDown.value) {
                searchedColor.push(myStock)
            }

        }
        displayMyShoe(searchedColor)


    }
    displayMyShoe(searchedColor)

});



var searchButton = document.getElementById('search');

searchButton.addEventListener('click', function() {
  var tableTemplateInst = Handlebars.compile(tableTemplate);
  var tableDisplay = document.querySelector('#tableDisplay');
  var displayTableResults = tableTemplateInst({shoes : shoeData});
  tableDisplay.innerHTML = displayTableResults;

});

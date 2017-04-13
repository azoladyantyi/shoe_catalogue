var displayButton = document.querySelector('#display');
var results = document.querySelector("#results");
//introduce template for table
var source = document.querySelector(".tableTemplate").innerHTML;
//Compile that  into a template
var template = Handlebars.compile(source);

var shoes = [{
        color: 'black',
        size: 5,
        brand: 'puma',
        price: 'R350'
    },
    {
        color: 'orange',
        size: 4,
        brand: 'addidas',
        price: 'R275'
    },
    {
        color: 'black',
        size: 3,
        brand: 'puma',
        price: 'R275'
    },
    {
        color: 'black',
        size: 4,
        brand: 'puma',
        price: 'R275'
    },
    {
        color: 'blue',
        size: 7,
        brand: 'nike',
        price: 'R275'
    },
    {
        color: 'red',
        size: 8,
        brand: 'bronx',
        price: 'R275'
    },
    {
        color: 'orange',
        size: 5,
        brand: 'addidas',
        price: 'R275'
    },
];

results.innerHTML = template({
    shoes: shoes
});


function stockIn() {



    // document.getElementById('results').innerHTML = shoeHtml;
}

function add_row() {
    var new_color = document.getElementById("new_color").value;
    var new_size = document.getElementById("new_size").value;
    var new_brand = document.getElementById("new_brand").value;
    var new_price = document.getElementById("new_price").value;


    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='color" + table_len + "'>" + new_color + "</td><td id='size" + table_len + "'>" + new_size + "</td><td id='brand" + table_len + "'>" + new_brand + "</td><td id='price" + table_len + "'>" + new_price + "</td></tr>";
    // newShoe = {
    //   color: new_color,
    //   size: new_size,
    //   brand: new_brand,
    //   price: new_price
    // };
    shoes.push(newShoe);
    document.getElementById("new_color").value = "";
    document.getElementById("new_size").value = "";
    document.getElementById("new_brand").value = "";
    document.getElementById("new_price").value = "";

    document.getElementById('results').innerHTML = newShoe;

    // results.innerHTML = template({
    //     shoes: Newshoe
};

function showData(data) {

    var colors = [];
    var sizes = [];
    var brands = [];

    for (var i = 0; i < data.length; i++) {
        var shoeData = data[i];
        colors.push(shoeData.color);
        sizes.push(a = shoeData.size);
        brands.push(shoeData.brand);
    }

    filters.innerHTML = filterTemplate({
        colors: colors.sort(),
        sizes: sizes.sort(),
        brands: brands.sort(function(a, b) {
            return a - b;
        })
    });

    results.innerHTML = tableTemplate({
        shoes: data
    });
}

var colorTemp = document.getElementById('colorTemp');
var colorOutput = document.getElementById('colorOutput');
var compColor = Handlebars.compile(colorTemp.innerHTML);

var shoes = [{
    color: 'black',
    size: 5,
    brand: 'puma',
    price: 'R350'
},
];
(function() {
    var results = compColor({
        color: shoes
    });
    colorOutput.innerHTML = results;
})()

var sizeTemp = document.getElementById('sizeTemp');
var sizeOutput = document.getElementById('sizeOutput');
var compSize = Handlebars.compile(sizeTemp.innerHTML);

var shoes = [{
    color: 'black',
    size: 5,
    brand: 'puma',
    price: 'R350'
}];
(function() {
    var results = compSize({
        size: shoes
    });
    sizeOutput.innerHTML = results;
})()

var brandTemp = document.getElementById('brandTemp');
var brandOutput = document.getElementById('brandOutput');
var compBrand = Handlebars.compile(brandTemp.innerHTML);

var shoes = [{
    color: 'black',
    size: 5,
    brand: 'puma',
    price: 'R350'
}, ];

(function() {
    var results = compBrand({
        brand: shoes
    });
    brandOutput.innerHTML = results;
})()

//   var source = document.querySelector(".myTemplate");
//   var shoesElem = document.querySelector('.shoes');
//   var searchButton = document.querySelector('.searchButton');
//   var output = document.querySelector('.catalogue').innerHTML;
//   var template = Handlebars.compile(source);
//
// document.querySelector('.searchButton').addEventListener('click', function () {
//   // Grab the template script
//   var theTemplateScript = $(".myTemplate").html();
//
//   // Compile the template
//   var theTemplate = Handlebars.compile(theTemplateScript);
//
//   // Define  data object
//   var shoes = [
//     {
//       color : 'blue',
//       price : 350,
//       in_stock : 5
//     },
//     {
//       color : 'orange',
//       price : 275,
//       in_stock : 3,
//     },
//     {
//       color : 'black',
//       price : 275,
//       in_stock : 3
//     },
//   ];
//
//   // Pass our data to the template
//   var theCompiledHtml = theTemplate(shoes);
//
//   // Add the compiled html to the page
//   searchButton('.catalogue').html(theCompiledHtml);
// });
// searchButton(document.body).append(theTemplate(shoes));


$(function (){
    $.ajax({
            url: '/Products/Get',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('panel-body 1');
                i = 0;
                response.forEach(function(products) {
                  i++;
                  console.log(i);
                  var Stock = products.Stock;
                  if( Stock == 0) {
                  document.getElementById('alert').innerHTML += '<div class="alert alert-danger alert-dismissible" id="danger-alert" role="alert"><button type="button" id="dangerbtn" class="close" data-dismiss="alert"><span>&times;</span></button>'+ products.PName +' is out of stock</div>';

                  document.getElementById('Productsdiv').innerHTML += ' <div class="col-md-3 '+i+'" >\ <div id="BackImg '+i+'" class="NoStock" style="height: 570px; margin:10px; overflow: hidden; border-radius:10px; border:1px solid black;">\ <div style="background-image: url(images/ProductBack.png); background-size: 110% 120%;background-repeat: no-repeat; padding:10px; margin-top: -20px;">\ <h2 class="text-center" style="color:white; text-shadow:none; padding-top:30px; skewY(2deg);" ><strong id="ProductName '+i+'">'+ products.PName +'</strong></h2> <img src="images/Donuts/'+ products.Img +'"  class="center-block" alt="Orders image" style=" padding-bottom:100px; height:200px; border-radius:5px; padding-bottom:10px;" >\<p  class="text-center" id="StockCount '+i+'">Stock ' + products.Stock + '</p></p>\<p class="text-center"><strong>Quantity</strong></p>\<input class="center-block" type="number" name="quantity" id="Input '+i+'" min="1" max="1000" style="border:1px solid black; text-align:center">\<button class="ui-btn ui-corner-all" id="StockUpdater '+i+'" onclick="myFunction('+i+')" data-mydata="'+i+'">Update Stock</button>\<div id="Alerts '+i+'">\<div class="alert alert-danger" role="alert">No Stock!!</div>\</div>\</div>\</div>\</div>\ ';
                  }
                  if( Stock > 1 && Stock <= 50) {
                  document.getElementById('Productsdiv').innerHTML += '<div class="col-md-3 '+i+'" >\ <div id="BackImg '+i+'" class="NoStock" style="height: 570px; margin:10px; overflow: hidden; border-radius:10px; border:1px solid black;">\ <div style="background-image: url(images/ProductBack.png); background-size: 110% 120%;background-repeat: no-repeat; padding:10px; margin-top: -20px;">\ <h2 class="text-center" style="color:white; text-shadow:none; padding-top:30px; skewY(2deg);" ><strong id="ProductName '+i+'">'+ products.PName +'</strong></h2> <img src="images/Donuts/'+ products.Img +'"  class="center-block" alt="Orders image" style=" padding-bottom:100px; height:200px; border-radius:5px; padding-bottom:10px;" >\<p  class="text-center" id="StockCount '+i+'">Stock ' + products.Stock + '</p></p>\<p class="text-center"><strong>Quantity</strong></p>\<input class="center-block" type="number" name="quantity" id="Input '+i+'" min="1" max="1000" style="border:1px solid black; text-align:center">\<button class="ui-btn ui-corner-all" id="StockUpdater '+i+'" onclick="myFunction('+i+')" data-mydata="'+i+'">Update Stock</button>\<div id="Alerts '+i+'">\<div class="alert alert-warning" role="alert">Stock is low</div>\</div>\</div>\</div>\</div>\ ';
                  }

                  if( Stock > 50) {
                  document.getElementById('Productsdiv').innerHTML += ' <div class="col-md-3 '+i+'" >\ <div id="BackImg '+i+'" class="NoStock" style="height: 570px; margin:10px; overflow: hidden; border-radius:10px; border:1px solid black;">\ <div style="background-image: url(images/ProductBack.png); background-size: 110% 120%;background-repeat: no-repeat; padding:10px; margin-top: -20px;">\ <h2 class="text-center" style="color:white; text-shadow:none; padding-top:30px; skewY(2deg);" ><strong id="ProductName '+i+'">'+ products.PName +'</strong></h2> <img src="images/Donuts/'+ products.Img +'"  class="center-block" alt="Orders image" style=" padding-bottom:100px; height:200px; border-radius:5px; padding-bottom:10px;" >\<p  class="text-center" id="StockCount '+i+'">Stock ' + products.Stock + '</p></p>\<p class="text-center"><strong>Quantity</strong></p>\<input class="center-block" type="number" name="quantity" id="Input '+i+'" min="1" max="1000" style="border:1px solid black; text-align:center">\<button class="ui-btn ui-corner-all" id="StockUpdater '+i+'" onclick="myFunction('+i+')" data-mydata="'+i+'">Update Stock</button>\<div id="Alerts '+i+'">\<div class="alert alert-info role="alert">Stock is okay</div>\</div>\</div>\</div>\</div>\ ';
                    }

                });
              }
            });

    });

function loadlink(){
    $.ajax({
          url: '/Products/Get',
          contentType: 'application/json',
          success: function(response) {
              i = 0;
              document.getElementById('alert').innerHTML = '';
              response.forEach(function(products) {
              i++
              var Stock = products.Stock;
              document.getElementById('StockCount ' + i ).innerHTML = 'Stock ' + products.Stock + ''
              if( Stock == 0) {
              document.getElementById('Alerts '+i).innerHTML = '';
              document.getElementById('alert').innerHTML += '<div class="alert alert-danger alert-dismissible" id="danger-alert" role="alert"><button type="button" id="dangerbtn" class="close" data-dismiss="alert"><span>&times;</span></button>'+ products.PName +' is out of stock</div>';
              document.getElementById('Alerts '+i).innerHTML = '<div class="alert alert-danger" role="alert">No Stock!!</div>';
              }
              if( Stock > 1 && Stock <= 50) {
              document.getElementById('Alerts '+i).innerHTML = '';
              document.getElementById('Alerts '+i).innerHTML = '<div class="alert alert-warning" role="alert">Stock is low</div>';
              }
              if( Stock > 50) {
              document.getElementById('Alerts '+i).innerHTML = '';
              document.getElementById('Alerts '+i).innerHTML = '<div class="alert alert-info role="alert">Stock is okay</div>';
              }
              });
}
});
}

loadlink(); // This will run on page load
setInterval(function(){
    loadlink() // this will run after every 10 seconds
}, 10000);

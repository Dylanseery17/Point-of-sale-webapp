$(function() {
    $.ajax({
            url: '/Products/Get',
            contentType: 'application/json',
            success: function(response) {
              i = 0;
              response.forEach(function(products) {
                  i++;
                  var Stock = products.Stock;
                  if( Stock == 0) {
                  document.getElementById('Productsdiv').innerHTML += ' <div class="col-md-3" >\<div id="BackImg" style="height: 600px; margin:10px; overflow: hidden; border-radius:10px; border:1px solid black;">\ <div style="background-image: url(images/ProductBack.png); background-size: 110% 120%;background-repeat: no-repeat; padding:10px; margin-top: -20px;">\ <h2 class="text-center" style="color:white; text-shadow:none; padding-top:30px; skewY(2deg);"><strong id="OrderName '+i+'">'+ products.PName +'</strong></h2> <img src="images/Donuts/'+ products.Img +'"  class="center-block" alt="Orders image" style=" padding-bottom:100px; height:200px; border-radius:5px; padding-bottom:10px;" id="Orderimg '+i+'" >\<p class="text-center" style=""><strong id="OrderDesc '+i+'">' + products.PDescription + '</strong></p>\<p class="text-center" id="OrderStock '+i+'">Stock : ' + products.Stock + '</p>\<p class="text-center"><strong>Quantity</strong></p>\<input class="center-block" type="number" name="quantity" min="1" max="' + products.Stock + '" style="border:1px solid black; text-align:center" id="OrderInput '+i+'">\</div>\</div>\</div>\ ';
                  }
                  if( Stock > 1) {
                  document.getElementById('Productsdiv').innerHTML += '<div class="col-md-3" >\ <div id="BackImg" style="height: 600px; margin:10px; overflow: hidden; border-radius:10px; border:1px solid black;">\ <div style="background-image: url(images/ProductBack.png); background-size: 110% 120%;background-repeat: no-repeat; padding:10px; margin-top: -20px;">\ <h2 class="text-center" style="color:white; text-shadow:none; padding-top:30px; skewY(2deg);"><strong id="OrderName '+i+'">'+ products.PName +'</strong></h2> <img src="images/Donuts/'+ products.Img +'"  class="center-block" alt="Orders image" style=" padding-bottom:100px; height:200px; border-radius:5px; padding-bottom:10px;" id="Orderimg '+i+'">\<p class="text-center" style=""><strong id="OrderDesc '+i+'">' + products.PDescription + '</strong></p>\<p class="text-center" id="OrderStock '+i+'">Stock :' + products.Stock + '</p>\<p class="text-center"><strong>Price : &euro;'+ products.Price +'</strong></p>\<input class="center-block" type="number" name="quantity" min="1" max="' + products.Stock + '" style="border:1px solid black; text-align:center" id="OrderInput '+i+'">\<button class="ui-btn ui-corner-all" style="" onclick="addToCart('+i+')">Add to cart</button>\</div>\</div>\</div>\ ';
                  }
                });
            }
            });
    });

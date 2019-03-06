$(function() {
    $.ajax({
            url: '/Products/Get',
            contentType: 'application/json',
            success: function(response) {
              var products = response.length;
              document.getElementById('ProductsNo2').innerHTML = ''+ products +'';
                response.forEach(function(products) {
                  document.getElementById('tbodyProducts').innerHTML += '<tr><td style= "padding-left: 20px;">'+ products.PName +'</td><td style= "">&euro;'+ products.Price +'</td><td style= "">'+ products.Stock +'</td><td style= "">'+ products.Enabled +'</td></tr>';
                });
            }
            });

            $.ajax({
                    url: '/Orders/Get',
                    contentType: 'application/json',
                    success: function(response) {
                      var order = response.length;
                      document.getElementById('OrdersNo2').innerHTML = ''+ order +'';
                    }
                    });

            $.ajax({
                    url: '/Users/Get',
                    contentType: 'application/json',
                    success: function(response) {
                    var users = response.length;
                    document.getElementById('StaffNo2').innerHTML = ''+ users +'';
                    }
              });

});

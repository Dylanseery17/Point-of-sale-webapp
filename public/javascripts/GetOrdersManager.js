$(function() {
    $.ajax({
            url: '/Orders/Get',
            contentType: 'application/json',
            success: function(response) {
                var order = response.length;
                document.getElementById('OrdersNo').innerHTML = ''+ order +'';
                response.forEach(function(orders) {
                  document.getElementById('tbody').innerHTML += '<tr><td style= "padding-left: 20px;">'+ orders.Clerk +'</td><td style= "">'+ orders.OrderItems +'</td><td style= "">&euro;'+ orders.TotalPrice +'</td><td style= "">'+ orders.Date +'</td></tr>';
                });
            }
            });

            $.ajax({
                    url: '/Products/Get',
                    contentType: 'application/json',
                    success: function(response) {
                      var products = response.length;
                      document.getElementById('ProductsNo').innerHTML = ''+ products +'';
                    }
                    });

            $.ajax({
                    url: '/Users/Get',
                    contentType: 'application/json',
                    success: function(response) {
                    var users = response.length;
                    document.getElementById('StaffNo').innerHTML = ''+ users +'';
                    }
              });
    });

$(function() {
    $.ajax({
            url: '/Users/Get',
            contentType: 'application/json',
            success: function(response) {
            var users = response.length;
            document.getElementById('StaffNo1').innerHTML = ''+ users +'';
                response.forEach(function(users) {
                  document.getElementById('tbodyStaff').innerHTML += '<tr><td style= "padding-left: 20px;">'+ users.username +'</td><td style= "">'+ users.email +'</td><td style= "">'+ users.address +'</td><td style= "">'+ users.access +'</td></tr>';
                });
            }
            });

            $.ajax({
                    url: '/Products/Get',
                    contentType: 'application/json',
                    success: function(response) {
                      var products = response.length;
                      document.getElementById('ProductsNo1').innerHTML = ''+ products +'';
                    }
                    });

            $.ajax({
                    url: '/Orders/Get',
                    contentType: 'application/json',
                    success: function(response) {
                      var order = response.length;
                      document.getElementById('OrdersNo1').innerHTML = ''+ order +'';
                    }
                    });
});

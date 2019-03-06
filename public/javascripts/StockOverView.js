$(function() {
    $.ajax({
            url: '/Products/Get',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');
                tbodyEl.html('');
                response.forEach(function(products) {
                    tbodyEl.append('\
                        <tr>\
                            <td style= "padding: 10px;">'+ products.PName +'</td>\
                            <td style= "padding: 10px;">'+ products.Type +'</td>\
                            <td style= "padding: 10px;">'+ products.Enabled +'</td>\
                            <td style= "padding: 10px;">'+ products.Stock +'</td>\
                        </tr>\
                    ');
                });
            }
            });
    });

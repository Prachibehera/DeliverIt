$(document).on('pageinit', '#demo-page', function(){      
	var url = 'http://1-dot-mdtagentservlet.appspot.com/deliveritagent';     
    //var url = 'http://demo9389224.mockable.io/';
    $.ajax({
        url: url,  //+ mode + key + movieName ,
        async: true,
        success: function (result) {
            ajax.parseJSONP(result);
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});

$(document).on('pagebeforeshow', '#headline', function(){      
    $('#order-data').empty();
    $.each(orderInfo.result, function(i, row) {
        if(row.order_id == orderInfo.id) {
			//$('#order-data').listview('refresh');
			
			localStorage.setItem("cust_location", row.customer_location);
			localStorage.setItem("rest_location", row.restaurant_location);
			localStorage.setItem("cust_name", row.customer_name);
			localStorage.setItem("phone", row.customer_phone);
			localStorage.setItem("order_id", row.order_id);
			localStorage.setItem("rest_name", row.restaurant_name);
            //$('#order-data').append('<li>Order id: '+row.order_id+'</li>');
            //$('#order-data').append('<li>Location: '+row.customer_location+'</li>');
            //$('#order-data').append('<li>Customer : '+row.customer_name+'</li>');   
            //$('#order-data').append('<li>Restaurant : '+row.restaurant_name+'</li>');             
            //$('#order-data').listview('refresh');            
			
        }
    });    
});

$(document).on('click', '#list li a', function(){  
    orderInfo.id = $(this).attr('data-id');
    $.mobile.changePage( "#headline", { transition: "slide", changeHash: false });
});

var orderInfo = {
    id : null,
    result : null
}

var ajax = {  
    parseJSONP:function(result){  
        orderInfo.result = result.results;
		//localStorage.clear();
        $.each(result.results, function(i, row) {
            console.log(JSON.stringify(row));

		$('#list').append('<li><a href="#demo-mail" data-id="' + row.order_id + '"><h3>' + row.restaurant_name + ' | Order:#' +  row.order_id +'</h3><p>' + row.customer_location + '</p></a>' +  '</li>');
        });
		
        $('#list').listview('refresh');
    }
}

$( document ).on( "pagecreate", "#demo-page", function() {
    // Swipe to remove list item
    $( document ).on( "swipeleft swiperight", "#list li", function( event ) {
        var listitem = $( this ),
            // These are the classnames used for the CSS transition
            dir = event.type === "swipeleft" ? "left" : "right",
            // Check if the browser supports the transform (3D) CSS transition
            transition = $.support.cssTransform3d ? dir : false;
            confirmAndDelete( listitem, transition );
    });
    // If it's not a touch device...
    if ( ! $.mobile.support.touch ) {
        // Remove the class that is used to hide the delete button on touch devices
        $( "#list" ).removeClass( "touch" );
        // Click delete split-button to remove list item
        $( ".delete" ).on( "click", function() {
            var listitem = $( this ).parent( "li" );
            confirmAndDelete( listitem );
        });
    }
    function confirmAndDelete( listitem, transition ) {
        // Highlight the list item that will be removed
        listitem.children( ".ui-btn" ).addClass( "ui-btn-active" );
        // Inject topic in confirmation popup after removing any previous injected topics
        $( "#confirm .topic" ).remove();
        listitem.find( ".topic" ).clone().insertAfter( "#question" );
        // Show the confirmation popup
        $( "#confirm" ).popup( "open" );
        // Proceed when the user confirms
		
        $( "#confirm #yes" ).on( "click", function() {
            // Remove with a transition
            if ( transition ) {
				
                listitem
                    // Add the class for the transition direction
                    .addClass( transition )
                    // When the transition is done...
                    .on( "webkitTransitionEnd transitionend otransitionend", function() {
						
                        // ...the list item will be removed
                        listitem.remove();
                        // ...the list will be refreshed and the temporary class for border styling removed
                        $( "#list" ).listview( "refresh" ).find( ".border-bottom" ).removeClass( "border-bottom" );
						
                    })
                    // During the transition the previous button gets bottom border
                    .prev( "li" ).children( "a" ).addClass( "border-bottom" )
                    // Remove the highlight
                    .end().end().children( ".ui-btn" ).removeClass( "ui-btn-active" );
					
            }
            // If it's not a touch device or the CSS transition isn't supported just remove the list item and refresh the list
            else {
				
                listitem.remove();
                $( "#list" ).listview( "refresh" );
            }
        });
        // Remove active state and unbind when the cancel button is clicked
        $( "#confirm #cancel" ).on( "click", function() {
            listitem.removeClass( "ui-btn-active" );
            $( "#confirm #yes" ).off();
        });
    }
});
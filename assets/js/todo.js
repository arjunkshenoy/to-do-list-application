$(document).ready(function(e) {   


	$("ul").on("click","li", function(){
		console.log($(this).css("color"));
		if($(this).css("color") === "rgb(128, 128, 128)")
			{
				$(this).css({color : "gray",
					textDecoration: "none"
				});
			}
		else{
			$(this).css({
			color: "gray",
			textDecoration: "line-through"
			});
		}

			});
	/*alternate way of implementing the color 
switching is by using a toggleClass*/
	
	$("ul").on("click","span",function(evt){

		
		evt.stopPropagation();
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
	});

	
	$("input[type='text'").keypress(function(event){

		if(event.which === 13){
			//fetching the input text 
			var todoText = $(this).val();
			//adding it to the list of todos
			$("ul").append("<li><span><i class='fas fa-trash'></i></span>"+todoText+"</li>");
			$(this).val("");
		}
		
	});	

	$(".fa-edit").click(function(){
		$("input[type='text'").fadeToggle(10);
		$(".fa-plus").toggle();
	})

	$(".fa-plus").click(function(){
		var todoText = $("input[type='text'").val();
			//adding it to the list of todos
			$("ul").append("<li><span><i class='fas fa-trash'></i></span>"+todoText+"</li>");
			$("input[type='text'").val("");	
	})

	$()

});
	




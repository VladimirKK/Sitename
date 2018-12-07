
 $(document).ready(function () {

    $(document).on('click', '.accordion-header_2', function(event) {
    	 $(".accordion-body_2").css("display", "block");
    	 $(".accordion-body_1").css("display", "none");
    	 $(this).css("background-color", "blue");

    	 $(".accordion-body_3").css("display", "none");
    	 $(".accordion-header_f").css("background-color", "#40312a");
    	 $(".accordion-header_3").css("background-color", "#40312a");
    	  $(".accordion-header_1").css("background-color", "#40312a");
    	 return false;
    });
    $(document).on('click', '.accordion-header_1', function(event) {
    	 $(".accordion-body_1").css("display", "block");
    	 $(".accordion-body_2").css("display", "none");
    	 $(".accordion-body_3").css("display", "none");
    	 $(".accordion-header_2").css("background-color", "#40312a");
    	  $(".accordion-header_3").css("background-color", "#40312a");
    	 $(".accordion-header_f").css("background-color", "blue");
    	 	$(this).css("background-color", "blue");
    	 return false;
    });
     $(document).on('click', '.accordion-header_3', function(event) {
    	 $(".accordion-body_1").css("display", "none");
    	 $(".accordion-body_2").css("display", "none");
    	 $(".accordion-body_3").css("display", "block");
    	 $(".accordion-header_2").css("background-color", "#40312a");
    	 $(this).css("background-color", "blue");
    	  $(".accordion-header_1").css("background-color", "#40312a");
    	 return false;
    });
});     

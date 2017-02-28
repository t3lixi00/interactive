 $(document).ready(function(){
       $("#button_Ajax").click(function(){
          $.ajax({
        	       dataType:"json",
        	       url:"https://imp-portfolio-demonstration.herokuapp.com/json/persons.json",
        	       success:function(data){
        	          $.each(data, function(i,item){
        	 	      $(".name_Ajax").append(item.name +" email: "+'<a href="mailto:'+item.email+'">'
        	 	                             + item.email+"</a>"+"<br>")
        	          });
        	  	    }
        	  	 });
              });



   	   $("#button").click(function(){
          var new_Name=$("#name").val();
            $("#nameList1").prepend(new_Name+"<br>");
    	});



    });
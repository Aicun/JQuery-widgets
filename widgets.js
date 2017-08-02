$(document).ready(function() {
    $("#accordion").accordion(
    { 
        event: "dblclick",
        collapsible: true ,
		active:false
    });

    $("#tabs").tabs();
    $("#book").button();
    $("#book").click(function(){
        $("#dialog").dialog({modal:true});
    });

    var booksArray = ["ADO.NET", "Android", "ASP.NET", "C#", "C++", "CSS", "Dreamweaver CC",
            	 "HTML5", "Java", "Java Servlets", "JavaScript", "jQuery", "MySQL",
            	 "Oracle SQL", "PHP", "SQL Server", "VB", "Web Development",
            	 "Web Programming"];
    $("#books").autocomplete({source:booksArray});

    $("#arrivalDate").datepicker({
        minDate:new Date(),
        maxDate:"+6m",
        showButtonPanel:true,
		showOn: "button",
        buttonImage: "images/calendar.jpg",
        buttonImageOnly: true
    });

    $("#slider").slider({
        value:50,
        min:1,
        max:100,
        slide: function(event,ui){
            $("#employees").val(ui.value);
        }
    });
    $("#employees").val(50);

    $("#menu").menu({
        icons:{submenu:"ui-icon-triangle-1-e"}
    });

});
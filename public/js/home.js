$(document).ready(function() {
    $("#searchBtn").click(function(){
        var city = $("#city").val();
        if(city == "") {
            alert("Please enter city name");
            return;
        }
        alert("successfully");
    })
    
})
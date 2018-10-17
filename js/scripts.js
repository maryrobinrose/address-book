$(document).ready(function(){
  $("#contacts").submit(function(event){
    event.preventDefault();
    $(".contactInfo").show();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("#state").val();
    var zip = $("input#zip").val();

    // $(".name").text(firstName + " " + lastName);
    // $(".address").text(street + " " + city + ", " + state + " " + zip);

    $(".contact-list").append("<li>" + firstName + " " + lastName + "</li>");
  });
});

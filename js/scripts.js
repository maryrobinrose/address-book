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

    $(".contact-list").append("<li>" + firstName + " " + lastName + " <span class='details'>: " + street + " " + city + " " + state + " " + zip + "</span></li>");
    $(".contact-list").children("li").last().click(function() {
      $(this).children(".details").toggle();
    });
  });
});

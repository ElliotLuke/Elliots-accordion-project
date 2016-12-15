(function,(){
    var app=angular.module("MyApp",[]);
)};


app.controller="SubmitController",function(){
    this.details={};
    this.adddetails=function(signIn){
        signIn.details.push(this.details);
        this.details={};
console.log
    };




var fa-star-o


//for the star
var acc = document.getElementsByClassName("star.button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
window.onload = function() {
 var starList = document.getElementsByClassName('star.button');  
 var numOfStars = starList.length;
 
 for(var i = 0; i < numOfStars; i++) {
   star.button[i].addEventListener('click', starClickHandler, false);
 }
}

function starClickHandler(event) {
  var star = event.currentTarget;

  setActive(star, false);
  setActive(star, true);
  document.getElementById('rateText').textContent = star.getAttribute('data-rate');
}

function setActive(element, isActive) {
  if(isActive) {
    element.classList.add('active');
    element.nextElementSibling && setActive(element.nextElementSibling, isActive);
  }
  else {
    element.classList.remove('active');
    element.previousElementSibling && setActive(element.previousElementSibling, isActive);
  }
}

    
    
    
    
   // for the trash bin
$(document).ready(function() {
    $('button.table-delete-link').click(function () {
        var targetUrl = $(this).attr('href');
        $.ajax({
            url: targetUrl,
            type: 'GET',
            success: function (data, textStatus, xhr) {
                alert('Item successfully deleted!');
            },
            error: function (xhr, textStatus, errorThrown) {
                var errorMessage = xhr.responseText;
                errorMessage = errorMessage.substring(errorMessage.indexOf('<title>') + 7, errorMessage.indexOf('</title>'));
                alert('Unable to delete item: ' + errorMessage);
            }
        });
        return false;
    });
});

    
    function reviewButton(onclick)
console.log("reviewForm") 
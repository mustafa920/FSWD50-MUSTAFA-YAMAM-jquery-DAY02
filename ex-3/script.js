$(document).ready(function() {
$("#hide1").click(function(){
    $(".money1").hide();
});
$("#hide2").click(function(){
    $(".money2").hide();
});
$("#hide3").click(function(){
    $(".money3").hide();
});
});


var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("my-slide");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) { myIndex = 1 }
            x[myIndex - 1].style.display = "flex";
            setTimeout(carousel, 2000);
        }
          /*function myFunction() {
            var x = document.getElementById("money");
            x.remove();

        }
        document.getElementsByClassName

        function myFunction1() {
            var x = document.getElementById("money1");
            x.remove();

        }

        function myFunction2() {
            var x = document.getElementById("money2");
            x.remove();

        }*/
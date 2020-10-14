$(function(){
    var $activeSlide = $("#slides .slide:first-child");

    $(".match-tile").on("click", function(){
        var account_id = $(this).data("id");
        console.log(account_id);
    });
    
    $("#decline").on("click", function(){
        goToSlide('decline');
    });

    $("#approve").on("click", function(){
        var user_id = $activeSlide.data("id");
        $.ajax({
            url: "/approve/" + user_id,
            method: "post",
            dataType: "ajax"
        });
        goToSlide('approve');
    });
    
    function goToSlide(action) {
        $activeSlide.removeClass("showing");
        $activeSlide = $activeSlide.next(".slide");

        if (action == "approve") {
            
        } else {

        }

        $activeSlide.addClass("showing");
    }

});

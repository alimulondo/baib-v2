
function eldery(){
	$('#eldery').on('click', function () {
    $.fn.custombox( this, {
        overlay: true,
        effect: 'newspaper'
    });
    return false;
});
}


function houseKeeping(){
	$('#housek').on('click', function () {
    $.fn.custombox( this, {
        overlay: true,
        effect: 'newspaper'
    });
    return false;
});
}

function babySeating(){
	$('#babys').on('click', function () {
    $.fn.custombox( this, {
        overlay: true,
        effect: 'newspaper'
    });
    return false;
});
}

function africanCulinary(){
	$('#africanc').on('click', function () {
    $.fn.custombox( this, {
        overlay: true,
        effect: 'newspaper'
    });
    return false;
});
}

function fullPackage(){
	$('#fullp').on('click', function () {
    $.fn.custombox( this, {
        overlay: true,
        effect: 'newspaper'
    });
    return false;
});
}

function internationalCuisine(){
	$('#intercuisine').on('click', function () {
    $.fn.custombox( this, {
        overlay: true,
        effect: 'newspaper'
    });
    return false;
});
}

function chatfun(){
	$(".chat-closed").on("click",function(e){
        $(".chat-header,.chat-content").removeClass("hide");
        $(this).addClass("hide");
    });

    $(".chat-header").on("click",function(e){
        $(".chat-header,.chat-content").addClass("hide");
        $(".chat-closed").removeClass("hide");
    });
}
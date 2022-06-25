$(document).ready(function(){
        $("#i").mouseenter(function(){
            $('#ja').animate({
                opacity: "0.6"
            });
        }).mouseleave(function(){
            $('#ja').animate({
                opacity: "0"
            });
        });

        $("#teach").mouseenter(function(){
            $('#info').animate({
                opacity: "0.6"
            });
        }).mouseleave(function(){
            $('#info').animate({
                opacity: "0"
            });
        });

        $("#sketchup").mouseenter(function(){
            $('#su').animate({
                opacity: "0.6"
            });
        }).mouseleave(function(){
            $('#su').animate({
                opacity: "0"
            });
        });

        $("#vray").mouseenter(function(){
            $('#vr').animate({
                opacity: "0.6"
            });
        }).mouseleave(function(){
            $('#vr').animate({
                opacity: "0"
            });
        });
    });
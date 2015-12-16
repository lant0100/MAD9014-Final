$(document).ready(function () {
    function toList(toDo) {
        $('#list').append("<li class='ui-btn'><input type='checkbox' value=''>" + " " + toDo + "</li>");
    }

    if (localStorage['grocery-lant0100']) {
        var grocery = JSON.parse(localStorage['grocery-lant0100']);
    } else {
        var grocery = [];
    }

    for (var i = 0; i < grocery.length; i++) {
        toList(grocery[i]);
    }

    var store = function () {

        var toDo = $("#pickup").val();

        grocery.push(toDo);

        localStorage['grocery-lant0100'] = JSON.stringify(grocery);

        $('#pickup').val("").focus();

        toList(toDo);
    }

    $('#key').click(store);

    $('li').on('taphold', function (ev) {
        $(ev.target).remove();
        var del = $(this).clone().children().remove().end().text().trim();
        var index = grocery.indexOf(del);
        grocery.splice(index,1);
        localStorage['grocery-lant0100'] = JSON.stringify(grocery);
    });

    $('#clear').click(function () {
        $('#list').empty();
        localStorage.clear(grocery);
    });
});

$(document).ready(function() {

    $('#searchButton').click(function(){

        var searchword = $('#mainSearchField').val();

        if(!searchword){
            $('#mainSearchFieldWrapper').animate({
                width: 'toggle'
            }, 'slow');
        } else {
            $('#mainSearchField').val('');
            $('#mainSearchFieldWrapper').animate({
                width: 'toggle'
            }, 'slow');
            alert('Suche mit Suchbegriff ' + searchword + ' startet!');
        }
    });

});
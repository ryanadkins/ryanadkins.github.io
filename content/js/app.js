$(document).foundation();
//- All JS Plugins go Below

//- Mask Email Address
$(document).ready(function(){
var emailAddress = "ryanadkins";
var domain = "gmail.com";
    //Replace Place Holder href
    $('a#email[href]').attr('href', 'mailto:' + emailAddress + '@' + domain );
    //Replace html if js is enabled
    $('a#email').html('Email Ryan Adkins');
});
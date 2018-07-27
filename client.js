
$(document).ready(readyNow); 

let submitCounter = 0; 
let answer = Math.floor(Math.random() * 10) + 1;

// for an onclick event handler:
// is the target currently on the DOM? 
// if yes: enter name of function you want to run. 
// if no: $('something on page').on('click', 'target', nameOfFuction);
// "something on page" is usually the parent or grandparent of element
function readyNow(){
    $('#submit').on('click', submitMessage )
}

function submitMessage(){
    let inputEntry = $('#guess').val();
    submitCounter++;
    console.log(inputEntry);
    console.log('count:', submitCounter); 
    if (inputEntry > answer){
        $('#answer-container').html('<p>Lower</p>');
        $('#answer-container').css('background-color', 'yellow');
    }
    else if (inputEntry < answer) { 
        $('#answer-container').html('<p>Higher</p>');
        $('#answer-container').css('background-color', 'orange');
    }
    else if (inputEntry == answer) {
        $('#answer-container').html('<p id="correct">Correct!</p>');
        $('#answer-container').css('background-color', 'green');
    }
}



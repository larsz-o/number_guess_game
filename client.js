
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
        $('#answerCol').html('<p class="text-center">Lower</p>');
        $('#answerCol').css('background-color', '#E8E409');
    }
    else if (inputEntry < answer) { 
        $('#answerCol').html('<p class="text-center">Higher</p>');
        $('#answerCol').css('background-color', '#FF4212');
    }
    else if (inputEntry == answer) {
        $('#answerCol').html('<p class="text-center">Correct!</p>');
        $('#answerCol').css('background-color', '#53FF0A');
    }
}



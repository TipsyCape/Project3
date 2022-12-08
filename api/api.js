var paragraphs = 1
let string;

function makeAPICall(){
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/loremipsum?paragraphs=' + paragraphs,
        headers: { 'X-Api-Key': 'SqpOdHfgn+h3v67icg6imQ==dBh4R12zxedFJyo5'},
        contentType: 'application/json',
        success: function(result) {
            string = result.text;
            document.getElementById("lorem").innerHTML = string;
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

}

makeAPICall();

$(document).ready(function (){
    
    let quizData = [];
    let currentQue = 0;


    $.getJSON("ques.json", function(data){
        quizData = data;
        showQuestions();
        showOption();
    })

    const showQuestions = () =>{

        $(".questions-cont").html(quizData[currentQue].question);
    }

    const showOption = () =>{
        $(".options-cont").html('');
        quizData[currentQue].options.forEach( options => {
            $(".options-cont").append( `<button class="option-btn">${options}</button>`);
       });
    }

    $("#next-que").on("click", function(){
        if(currentQue < quizData.length -1){
            currentQue++;
            showQuestions();
            showOption();
        }
        else{
            "You Have Complete This Quiz !";
        }
    })

})
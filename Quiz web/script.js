
$(document).ready(function (){
    
    let quizData = [];
    let currentQue = 0;
    let count = 60;


    $.getJSON("ques.json", function(data){
        quizData = data;
        showQuestions();
        showOption();
        startTimer();
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

        let startTimer = () => setInterval(() => {
            count--;
            $(".timer").html("Time Left : "+ count + "s")
        }, 1000); 

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

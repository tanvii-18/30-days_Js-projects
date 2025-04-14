
$(document).ready(function (){
    
    let quizData = [];
    let currentQue = 0;
    let count = 60;
    let score = 0;
    let timer;
    let optionClick = false;


    $.getJSON("ques.json", function(data){
        quizData = data;
        showQuestions();
        showOption();
        startTimer();
    })

    const showQuestions = () =>{

        $(".questions-cont").html(quizData[currentQue].question);
    }

    const showOption = () => {
        let optionClick = false;
    
        $(".options-cont").html(''); 
        quizData[currentQue].options.forEach(option => {
            $(".options-cont").append(`<button class="option-btn">${option}</button>`);
        });
    
        const correctAnswer = quizData[currentQue].answer; 

        $(".option-btn").on("click", function () {
            if (optionClick) return;
            optionClick = true;
    
            let selectedAnswer = $(this).text();  
    
            
            if (selectedAnswer === correctAnswer) {
                score++; 

                $(this).addClass("correct");  
                $(this).css("backgroundColor", "green"); 
            } else {
                $(this).addClass("wrong");
                $(this).css("backgroundColor", "red"); 
            }
    
           
            $(".option-btn").prop("disabled", true);
    
            
            $(".option-btn").each(function () {
                if ($(this).text() === correctAnswer && !$(this).hasClass('correct')) {
                    $(this).css("backgroundColor", "green"); 
                }
            });
        });
    }
    
    

        let startTimer = () =>{
            timer = setInterval(() => {
            if(count > 0)
            {
                count--;
            }
            else{
                showNextQue();
            }
            $(".timer").html("Time Left : "+ count + "s")
        }, 1000)} ; 

    const showNextQue = () =>{
        clearInterval(timer);
        if(currentQue < quizData.length -1){
            currentQue++;
            count = 60;
            showQuestions();
            showOption();
            startTimer();
        }
        else{
            $(".quiz-container").html(`<h2 style="padding-top:60px; font-family: Arial, Helvetica, sans-serif; color: rgb(255, 201, 4); text-shadow: 2px 2px 5px rgba(255, 196, 0, 0.3);">
                                        You Have Complete This Quiz !</h2> 
                                        <br><span style="color: rgb(1, 60, 179);">
                                            You Scored ${score}</span>`);
            
        }
    }

    $("#next-que").on("click", function(){
        showNextQue();
    })

})
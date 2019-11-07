const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    
    //show results on page
    scrollTo(0,0);
    result.classList.remove('d-none');

    //score timer
    let output = 0;
    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++
        }
    }, 10);
});














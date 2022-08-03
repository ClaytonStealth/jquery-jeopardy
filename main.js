let question = document.querySelector('#question');
let answer = document.querySelector('#answer');
let buttonsParentDiv = document.querySelector('.jeopardy');
question.innerText = '';
let oneIndex = 0;
let twoIndex = 0;
let fourIndex = 0;
let sixIndex = 0;
let eightIndex = 0;
let one100$Questions = [];
let two200$Questions = [];
let four400$Questions = [];
let six600$Questions = [];
let eight800$Questions = [];
let submitButton = document.querySelector('#submitButton')
let questions = "";
let score = 0;
let scoreCtr = 0;
let scoreBoard = document.querySelector('#score')
let clicked = false;



let readJeopardyData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json');
    let data = await rawJeopardyData.json();
    //console.log(data);
    let groupedData = _.groupBy(data, 'value')
    one100$Questions = groupedData.$100;
    two200$Questions = groupedData.$200;
    four400$Questions = groupedData.$400;
    six600$Questions = groupedData.$600;
    eight800$Questions = groupedData.$800;
    console.log('$100')
    console.log(one100$Questions)
    console.log('$200')
    console.log(two200$Questions)
    console.log('$400')
    console.log(four400$Questions)
    console.log('$600')
    console.log(six600$Questions)
    console.log('$800')
    console.log(eight800$Questions)
}
readJeopardyData()

//querySelector
// let querySelector = $('div');

// let createElement = $('<div>My Element</div>')

// $('body').append(createElement);

// $.on('click', () => {})

let rng = (max) => {
    let result = (Math.round(Math.random() * max))

    return result

}



buttonsParentDiv.addEventListener('click', function (event) {
    oneIndex = rng(one100$Questions.length);
    twoIndex = rng(two200$Questions.length);
    fourIndex = rng(four400$Questions.length);
    sixIndex = rng(six600$Questions.length);
    eightIndex = rng(eight800$Questions.length);
    console.log(event.target);//get the element that user clicked inside the div <div>
    let button = event.target;
    console.log(button.innerText);
    if(clicked === false){
    if (button.innerText === '$100') {
        clicked = true;
        questions = one100$Questions[oneIndex]
        score = 0;
        console.log("100")
        
        console.log(questions)
        // console.log(oneIndex)
        // console.log (score)
        question.innerText = `Category: ${questions.category}|| ${questions.question}`
        score += 100
        // console.log(score)
        button.innerText = '';
    } if (button.innerText === '$200') {
        clicked = true;
        questions = two200$Questions[twoIndex]
        score = 0;
        // console.log("200")
        console.log(questions)
        // console.log(twoIndex)
        question.innerText = `Category: ${questions.category}|| ${questions.question}`
        score += 200
        // console.log(score)
        button.innerText = '';
    } if (button.innerText === '$400') {
        clicked = true;
        questions = four400$Questions[fourIndex]
        score = 0;
        // console.log("400")
        console.log(questions)
        // console.log(fourIndex)
        question.innerText = `Category: ${questions.category}|| ${questions.question}`
        score += 400
        // console.log(score)
        button.innerText = '';
    } if (button.innerText === '$600') {
        clicked = true;
        questions = six600$Questions[sixIndex]
        score = 0;
        // console.log("600")
        console.log(questions)
        // console.log(sixIndex)
        question.innerText = `Category: ${questions.category}|| ${questions.question}`
        score += 600
        // console.log(score)
        button.innerText = '';
    } if (button.innerText === '$800') {
        clicked = true;
        questions = eight800$Questions[eightIndex]
        score = 0;
        // console.log("800")
        console.log(questions)
        // console.log(eightIndex)
        question.innerText = `Category: ${questions.category}|| ${questions.question}`
        score += 800
        // console.log(score)
        button.innerText = '';
    }
}
})

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(answer.value);
    clicked = false;
    if (answer.value === questions.answer) {
        alert('correct')
        question.innerText = 'Question Populates Here';
        answer.value = '';
        scoreCtr+=score
        scoreBoard.innerText = `Score: $${scoreCtr}`
        // console.log(`Score: $${scoreCtr}`)

    } else if (answer.value !== questions.answer) {
        alert('Wrong!')
        question.innerText = 'Question populates Here';
        scoreCtr-=score
        scoreBoard.innerText = `Score: $${scoreCtr}`
        answer.value = ''; 
        questions = '';
    }
})
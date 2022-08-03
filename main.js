let btn100 = document.querySelectorAll('#oneHunnit div');
let btn200 = document.querySelectorAll('#twoHunnit div');
let btn400 = document.querySelectorAll('#fourHunnit div');
let btn600 = document.querySelectorAll('#sixHunnit div');
let btn800 = document.querySelectorAll('#eightHunnit div');
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
    let result = (Math.ceil(Math.random() * max))

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
    if (button.innerText === '$100') {
        questions = one100$Questions[oneIndex]
        score = 0;
        console.log("100")
        
        console.log(one100$Questions[oneIndex])
        console.log(oneIndex)
        console.log (score)
        question.innerText = one100$Questions[oneIndex].question
        score += 100
        console.log(score)
    } if (button.innerText === '$200') {
        questions = two200$Questions[twoIndex]
        score = 0;
        console.log("200")
        console.log(two200$Questions[twoIndex])
        console.log(twoIndex)
        question.innerText = two200$Questions[twoIndex].question
        score += 200
        console.log(score)
    } if (button.innerText === '$400') {
        questions = four400$Questions[fourIndex]
        score = 0;
        console.log("400")
        console.log(four400$Questions[fourIndex])
        console.log(fourIndex)
        question.innerText = four400$Questions[fourIndex].question
        score += 400
        console.log(score)
    } if (button.innerText === '$600') {
        questions = six600$Questions[sixIndex]
        score = 0;
        console.log("600")
        console.log(six600$Questions[sixIndex])
        console.log(sixIndex)
        question.innerText = six600$Questions[sixIndex].question
        score += 600
        console.log(score)
    } if (button.innerText === '$800') {
        questions = eight800$Questions[eightIndex]
        score = 0;
        console.log("800")
        console.log(eight800$Questions[eightIndex])
        console.log(eightIndex)
        question.innerText = eight800$Questions[eightIndex].question
        score += 800
        console.log(score)
    }
})

submitButton.addEventListener('click', () => {
    console.log(answer.value);
    console.log()
    if (answer.value === questions.answer) {
        alert('correct')
        question.innerText = 'Question Populates Here';
        answer.value = '';
        scoreCtr+=score
        console.log(`$${scoreCtr}`)

    } else if (answer.value !== questions.answer) {
        alert('Wrong!')
        question.innerText = 'Question populates Here';
        answer.value = '';
    }
})
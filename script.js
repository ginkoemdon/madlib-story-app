//All new js goes in this file while the "stories.js" remains untouched

const $container = document.getElementById('container')
let storyNumber = 1

// 1. STORY SELECTOR BUTTONS: Create 3 story buttons to select 
function mainBtn() {
    $container.innerHTML = `
<h3>Choose a Story:</h3>
<button class="button0">${stories[0].title}</button>
<button class="button1">${stories[1].title}</button>
<button class="button2">${stories[2].title}</button>
`
}

//2.INPUTS
// This function and loop creates the input fields to write custom words 

//for each iteration of the loop, I created a variable, assigned it a value from the words Array in stories.js, used that value as the placeholder property of an input field, and then dynamically added it to the HTML 
function createInputs0() {
    $container.innerHTML = ''
    // Text for users instruction to input words
    // Creating an empty array, then pushing the heading text into it, finally joining the heading to innerHTML
    let instruction = []
    instruction.push(`<h3>Type out the following words</h3>`)
    let instructionHeading = instruction.join('')
    $container.innerHTML += instructionHeading


    // First Story (Mission Statement)
    // Initialize, Condition, Iteration 
    for (let i = 0; i < 6; i++) { //this loops 6 times in total
        // console.log(stories[0].words[i])
        $container.innerHTML += `
        <input type="text" id="madLib${i}" placeholder="${stories[storyNumber].words[i]}"></input>
        `
    }
    // Story 2 & 3 (Lunch Room & Weather Report)
    // This is for the second and third stories as they have 7 input fields 
    if (storyNumber > 0) {
        $container.innerHTML += `
        <input type="text" id="madLib${6}" placeholder="${stories[storyNumber].words[6]}"></input>
        `
    }
    // button to start submit inputted text
    $container.innerHTML += `<button class='btn-write' type="submit">Write Story</button>`
}
// createInputs0()

/*The goal of the display Story function is to create an object, and create a key value pair for each input field, where the key is the placeholder text, and the value is the text typed in by the user. The function will then call the output function from stories.js using the objectOfValues object as its parameter, and set the result of the output function equal to the innerHTML of the $container */

// FUNCTION 
function displayStory() {
    // Create an object that equates to the loop 
    let wordObject = {}

    // first story has 6 word inputs (Mission Statement)
    for (let i = 0; i < 6; i++) {
        const madLib = document.getElementById(`madLib${i}`).value
        wordObject[stories[storyNumber].words[i]] = madLib
    }
    // second and third stories have 7 word inputs
    if (storyNumber > 0) {
        const madLib = document.getElementById(`madLib${6}`).value
        wordObject[stories[storyNumber].words[6]] = madLib
    }
    // Displays the respective title of each story when the story is generated
    $container.innerHTML = `<div id=finishedstory ><h2>${stories[storyNumber].title}</h2>

    ${stories[storyNumber].output(wordObject)}</div>
  <button class="mainBtn">Main Menu</button>
`
}

// Event Listener to enter the each story upon click of landing page buttons
$container.addEventListener('click', function (e) {
    console.log(e)
    if (e.target.classList == "button0") {
        storyNumber = 0
        createInputs0()
        //  displayStory()
    } else if (e.target.classList == "button1") {
        storyNumber = 1
        createInputs0()
    } else if (e.target.classList == "button2") {
        storyNumber = 2
        createInputs0()
    }
})

// Event Listener to generate the story when "write story" button is clicked. This will trigger the next step in user flow which (reading story)
$container.addEventListener('click', function (e) {
    // console.log(e)
    if (e.target.className == "btn-write") {
        displayStory()
    }
})

// User then reads the Madlib story with their custom outputs 

// Event Listener to return to the main landing page after story has been written
$container.addEventListener('click', function (e) {
    if (e.target.className == "mainBtn") {
        mainBtn()
    }
})
mainBtn()
//all new js goes in this file!
//ASSIGNMENT LINK: https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folder_submit_files.d2l?db=345595&grpid=0&isprv=0&bp=0&ou=370685
// Global Variables

const $container = document.getElementById('container')
let storyNumber = 1

function mainBtn() {
$container.innerHTML = `
<h3>Choose a Story:</h3>
<button class="button0">${stories[0].title}</button>
<button class="button1">${stories[1].title}</button>
<button class="button2">${stories[2].title}</button>
`
}
//for each iteration of the loop, you have to create a variable, assign it a value from the words Array in stories.js, use that value as the placeholder property of an input field, and dynamically add it to the HTML 
function createInputs0() {
    $container.innerHTML = ''
    // Initialize, Condition, Iteration and 
    for (let i = 0; i < 6; i++) { //this loops 6 times in total
        // console.log(stories[0].words[i])
        $container.innerHTML += `
        <input type="text" id="madLib${i}" placeholder="${stories[storyNumber].words[i]}"></input>
        `
    }
    // This is for the second and third stories as they have 7 
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
    let wordObject = {}

 for (let i = 0; i < 6; i++) {
    const madLib = document.getElementById(`madLib${i}`).value
    wordObject[stories[storyNumber].words[i]] = madLib
  }

  if (storyNumber > 0) {
  const madLib = document.getElementById(`madLib${6}`).value
  wordObject[stories[storyNumber].words[6]] = madLib
}
  $container.innerHTML = `${stories[storyNumber].output(wordObject)}
  <button class="mainBtn">Main Menu</button>
`
 }
  // console.log(objectOfValues)
//   stories[storyNumber].output(objectOfValues)


// randomArray = ['item0', 'item1', 'item2']
// randomObject = {
//     first: 'item0',
//     second: 'item',
//     third: 'item2'
// }
// console.log(randomArray[0])
// console.log(randomObject.first)
// console.log(stories[0].words[2])
// console.log(stories[1].title) */

$container.addEventListener('click', function(e) {
console.log(e)
    if (e.target.classList == "button0") {
     storyNumber = 0
     createInputs0()
    //  displayStory()
    }
    else if (e.target.classList == "button1") {
        storyNumber = 1
        createInputs0()
       }
    else if (e.target.classList == "button2") {
        storyNumber = 2
        createInputs0()
       }
})


$container.addEventListener('click', function(e) {
    // console.log(e)
    if(e.target.className == "btn-write") {
        displayStory()
    }
})

$container.addEventListener('click', function(e) {
    if(e.target.className =="mainBtn") {
    mainBtn()
}
})
mainBtn()

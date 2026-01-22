/*The below codes are about the loops in the JavaScript.*/

let a = 0;

for (let i = 0; i < 200; i++) {
    console.log(a + i);

}

let b = 0
for (let page = 0; page < 10; page++) {
    console.log("I am reading page " + (b + page) + " of my book.");

}

/* The below block of the code is not written but copied from 
the mdn website just to know more about the loops and the 
functionality they show. */

function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

//Add event listener

// why does the author structure it that way?

closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');

    }
});

// what does addEventListener mean?
    // method that runs the specified event.

// what does click mean?
    // click() method simulates a mouse click

// what do these empty brackets mean?
    //

// what does => mean?
    // defines the function in js

// What does classList mean?
    // returns css classes in js

// what does .contains mean?
    // defines whether the collection contains a given item

// what does .add mean?
    // adds a value

// what does .remove mean?
    // removes the element

openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
})

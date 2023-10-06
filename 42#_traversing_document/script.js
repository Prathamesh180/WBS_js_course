/*          IMPORTANT

#**#Super IMP :- 
            querySelectorAll - doesn't return array.
            So need to use Array.from(QSAll) to get array.

    1)closest("identifier") - Finds the closest elmt matching identifier.
    2).nextElementSibling - Finds same lvl of element with same type(div, li, etc)
    3).nextElement - Any next element
    4).parentElement - Gives parent element.
    5).children OR children[0] - Gives first child element.
*/


const grandParent = document.querySelector('#grand-parent')
grandParent.style.color = "red";

const parent1 = grandParent.children[0]
parent1.style.color = "cyan"

const parent2 = parent1.nextElementSibling;
parent2.style.color = "orange"

const child1 = parent1.children[0];
child1.style.color = "#A0A"

const child2 = child1.nextElementSibling;
child2.style.color = "#055"


// Going upwards (From child to parent)
const child11 = document.querySelector('.child_11')
child11.style.color = 'red'

const parent11 = child11.parentElement;
parent11.style.color = 'blue'

// closest - Selects closest parent element matching selector passed in parenthesis.
const grandParent11 = child11.closest('#grand-parent')
grandParent11.style.color = 'orange'

// Using querySelector from specific element instead of element.querySelector('selector') will select the 1st element from all.
const allChilds = grandParent11.querySelectorAll('.child_11')
// As we've used QSAll we need to use forEach to apply to all.
allChilds.forEach(element => {
    element.style.color = "pink"
})
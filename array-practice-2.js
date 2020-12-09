
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423},
    { text: 'Super good', id: 823423},
    { text: 'You are the best', id: 2039842},
    { text: 'Ramen in my fave food ever', id: 123523},
    { text: 'Nice Nice Nice!', id: 542328}
];

// .some() checks if at least one item in array fits what you're looking for
const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
});

console.log({isAdult});

// .find() is like .filter() but it only returns one value
// find comment with 823423

const comment = comments.find(function(comment) {
    if(comment.id === 823423) {
        return true;
    }
});

console.log(comment);


// .findIndex() 
// Find comment with ID and then delete the comment

const index = comments.findIndex(comment => comment.id ===
    823423);
    console.log(index);

    comments.splice(index, 1);
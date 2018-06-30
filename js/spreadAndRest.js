

// Spread
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5];

console.log(newNumbers);

const person = {
    name : 'Max'
};

const newPerson = {
    ...person,
    age : 28
}

console.log(newPerson);

///===============================================================================

// spread
// === checks for type and equality

const filter = (...args) => {
    return args.filter( el => el === 1);
}

console.log(filter(1,2,3));
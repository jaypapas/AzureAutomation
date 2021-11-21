const person = {
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies: ['music', 'movies', 'sports'],
    address:{
        line1: '46 Wincanton street',
        city:'Liverpool',
        state: 'Merseyside'
    }
}

//console.log(person)

// console.log(person.lastName)
// console.log(person.address.city)
// console.log(person.hobbies[2])

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting later',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Doctors appointment',
        isCompleted: true
    }
]

console.log(todos[1].text)

// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON)


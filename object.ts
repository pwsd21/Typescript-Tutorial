type objType = {name:string, age:number, email:string }   // we can declare object type once and reuse it for multiple similar objects

const person:objType = {
    name: "Pawan",
    age: 25,
    email: "Pawan@gmail.com"
}

const person2:objType = {
    name: "Jatin",
    age: 24,
    email: "Jatin@gmail.com"
}


console.log(person, person2)
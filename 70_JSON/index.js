// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const person = {"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing","karate","cooking"]
// };
// const people = [{"name": "Spongebob", "age": 30, "isEmployed": true},
//                                             {"name": "patrick", "age": 34, "isEmployed": false},
//                                             {"name": "Squidward", "age": 50, "isEmployed": true},
//                                             {"name": "Sandy", "age": 27, "isEmployed": false}];


// const jsonString = JSON.stringify(names);
// console.log(names);
// console.log(jsonString);


// const jsonString = JSON.stringify(person);
// console.log(person);
// console.log(jsonString);


// const jsonString = JSON.stringify(people);
// console.log(people);
// console.log(jsonString);
//
// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing","karate","cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
//                             {"name": "patrick", "age": 34, "isEmployed": false},
//                             {"name": "Squidward", "age": 50, "isEmployed": true},
//                             {"name": "Sandy", "age": 27, "isEmployed": false}]`;

// const parsedData = JSON.parse(jsonNames);
// console.log(parsedData)

// const parsedData = JSON.parse(jsonPerson);
// console.log(parsedData)

// const parsedData = JSON.parse(jsonPeople);
// console.log(parsedData)



// fetch("person.json")
//     .then(response => response.json())
//     .then(value => console.log(value));

// fetch("people.json")
//     .then(response => response.json())
//     .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => {
        console.log(value.name);
        console.log(value.age);
        console.log(value.isEmployed);
    })).catch(error => console.log(error));

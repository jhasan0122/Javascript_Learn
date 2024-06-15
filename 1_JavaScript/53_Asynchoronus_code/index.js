

function func1(callback) {
    setTimeout(() => {
        console.log("Task1");
        callback()
    },3000);
}

function func2() {
    console.log("task2");
    console.log("task3");
    console.log("task4");
}

func1(func2);



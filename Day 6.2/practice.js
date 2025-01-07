// const myPromise = new Promise((resolve, reject) => {
//     let success = false; // Change to false to simulate failure

//     setTimeout(() => {
//         if (success) {
//             resolve("Promise resolved successfully!"); // Task successful
//         } else {
//             reject("Promise rejected!"); // Task failed
//         }
//     }, 2000);
// });

// Handling the Promise
// console.log("Promise started...");


myPromise
    .then((message) => {
        console.log(message); // Runs when resolved
    })
    .catch((error) => {
        console.error(error); // Runs when rejected
    });


function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data retrieved successfully!");
        }, 2000);
    });
}

async function runAsyncExample() {
    console.log("Fetching data...");
    const data = await getData(); // Wait for the Promise to resolve
    console.log(data);
}

runAsyncExample();

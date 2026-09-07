function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolved");
        }, 2000);
    });
}

async function asyncCall() {
    console.log("calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// First it prints "calling".
// About 2 seconds later, the promise resolves and it prints "resolved".

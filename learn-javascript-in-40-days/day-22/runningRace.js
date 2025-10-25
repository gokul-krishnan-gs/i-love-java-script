function details(name,timeTaken){
    order.push(name);

    if(order.length ==3){
        setTimeout(()=>{
        console.log("Race Completed 🏁");
        console.log(`Order: `,order);
        alert(`Winner is : ${order[0]}🏆`);
        },3000)

    }

}

function runner1(callback){
    const time = 10000;
    setTimeout(()=>{
        console.log(`Runner 1 finished in ${time/1000}s`);
        callback("Runner 1",time);
    },time);
}

function runner2(callback){
    const time = 12000;
    setTimeout(()=>{
        console.log(`Runner 2 finished in ${time/1000}s`);
        callback("Runner 2",time);
    },time);
}

function runner3(callback){
    const time = 5000;
    setTimeout(()=>{
        console.log(`Runner 3 finished in ${time/1000}s`);
        callback("Runner 3",time);
    },time);
}

let order = [];

function runRace(callback){
    console.log(`Race started🔥`);
    callback();
}

runRace(
    function(){
        runner1(details);
        runner2(details);
        runner3(details);
    }
);

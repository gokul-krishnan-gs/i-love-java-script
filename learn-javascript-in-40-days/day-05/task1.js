// task 1: Generate a Pyramid Pattern using Nested Loop as it is shown below

/*

*
* *
* * *
* * * *
* * * * *

*/

for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row += "* ";
    }
    console.log(row);
}

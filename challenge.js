

document.addEventListener("DOMContentLoaded",function(){

    //all listeners
    startTimerListener();
    addTimerListener();
    subTimerListener();
    likeTimerListener();
    // pauseListener();

});




function startTimerListener (){

    let counter = document.getElementById("counter");
    function incTimer(){
        counter.innerHTML = `${parseInt(counter.innerHTML) + 1}`;
    }

    function timer(){
        setInterval(incTimer,1000);
    }

    timer();

}

function subTimerListener(){

    let counter = document.getElementById("counter");
    let minus = document.getElementById("-");
    minus.addEventListener("click",function(){ counter.innerHTML = `${parseInt(counter.innerHTML) - 1}`});

}

function addTimerListener(){
    let counter = document.getElementById("counter");
    let plus = document.getElementById("+");
    plus.addEventListener("click",function(){ counter.innerHTML = `${parseInt(counter.innerHTML) + 1}`});

}


// let likeNum = (function (){
//     let likeList = {};
//     return function(num){
//
//         if(likeList[num]){
//             likeList[num] += 1;
//         }
//         else{
//             likeList[num] = 1;
//         }
//         return likeList[num];
//
//     };
//
//
//
// })();

//not sure about safety
let likeList = {};
function likeTimerListener(){

    let heart = document.getElementById("<3");

    heart.addEventListener("click",function(){
        let counter = document.getElementById("counter");
        let num = parseInt(counter.innerHTML);
        let likes = document.getElementsByClassName("likes")[0];
        if(likeList[num]){
            likeList[num] += 1;
            let likeRow = likes.lastChild;
            likeRow.innerHTML = `${num} has been liked ${likeList[num]} times`;
        }
        else{
            likeList[num] = 1;
            let likeRow = document.createElement("li");
            likeRow.innerHTML = `${num} has been liked ${likeList[num]} time`;
            likes.appendChild(likeRow);
        }
        // debugger;


    });
}

// function pauseListener(){
//
//     let pause = document.getElementById("pause");
//
//     pause.addEventListener("click",
//         function(event){
//
//             if (event.target.innerText === "pause"){
//                 event.target.innerText = "resume";
//             }
//             else if(event.target.innerText = "resume")
//
//        });
// }

// function pause(event){
//
// }

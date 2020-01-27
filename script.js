let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let currentlyPlaying = true;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) =>{
    if (door.src === botDoorPath) {
        return true;
    } else{
        return false;
    }
}

function isClicked(door){
    if (door.src === closedDoorPath) {
        return false;
      } else {
        return true;
      }
}

function playDoor(door){
    numClosedDoors--;
    if(numClosedDoors === 0){
        gameOver('win');
    } else if(isBot(door)){
        gameOver();
    }
}

const randomChoreDoorGenerator = () =>{
    const choreDoor = Math.floor(Math.random() * numClosedDoors )
    if(choreDoor === 2){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if(choreDoor === 1){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else{
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }

}

door1.onclick = () =>{
    if(currentlyPlaying && !isClicked(door1)){
        doorImage1.src = openDoor1;
        playDoor(door1)   
    }
}

door2.onclick = () =>{
    if(currentlyPlaying && !isClicked(door2)){
        doorImage2.src = openDoor2;
        playDoor(door2)
    }
}

door3.onclick = () =>{
    if(currentlyPlaying && !isClicked(door3)){
        doorImage3.src = openDoor3;
        playDoor(door3)
    }
}

    startButton.onclick = () =>  {
        if(!currentlyPlaying){

            startRound();
        }
    }


const startRound = () => {
    numClosedDoors = 3;
    startButton.innerHTML = "Good luck!"
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const gameOver = (status) =>{
    if (status === 'win') {
        startButton.innerHTML = 'You Win! Play again?'
    } else{
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false;
};

startRound();
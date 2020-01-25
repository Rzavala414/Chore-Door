let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3")
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

door1.onclick = () =>{
    doorImage1.src = botDoorPath;
}
door2.onclick = () =>{
    doorImage2.src = beachDoorPath;
}
door3.onclick = () =>{
    doorImage3.src = spaceDoorPath;
}
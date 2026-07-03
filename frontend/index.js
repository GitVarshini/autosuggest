console.log("Hello from js")
const users = [
    {
        "name": "Jane Doe",
        "gender": "female",
        "image": "./images/jane.png"
    },
    {
        "name": "John Doe",
        "gender": "male",
        "image": "./images/john.png"
    }
];
let curUserId = 0;
function toggle(){
    if(curUserId == 0){
        curUserId = 1;
    } else {
        curUserId = 0;
    }
    document.getElementById("img").src=users[curUserId].image;
    document.getElementById("card-name").innerText=users[curUserId].name;
}
alert("Hello from js")
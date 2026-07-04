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
    document.getElementById("card-gender").innerText=users[curUserId].gender;
}
function getRandomUser(){
    fetch("https://randomuser.me/api/")
    .then(function (data){
        return data.json();
    })
    .then(function (parsedData){
        document.getElementById("card-name").innerText=parsedData.results[0].name.first + " " + parsedData.results[0].name.last;
        document.getElementById("card-gender").innerText=parsedData.results[0].gender;
        document.getElementById("img").src=parsedData.results[0].picture.large;
    })
}
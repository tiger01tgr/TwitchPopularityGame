
const URL = "https://tiger01tgr.github.io/TwitchPopularityGame/streamer_list.csv"

window.addEventListener("load", loadFile);


function loadFile(URL) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function(){
        console.log(this.responseText);
    };

    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}



let data = [
    ['/tommyinnit', 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a50f189-3f73-4a93-a6e4-d53e8a26fceb-profile_image-300x300.jpeg'],
    ['/tubbo', 'https://static-cdn.jtvnw.net/jtv_user_pictures/905af69a-4fd8-42c7-b842-bf4ee4d51b3b-profile_image-300x300.png'],
    ['/ranboolive', 'https://static-cdn.jtvnw.net/jtv_user_pictures/8de4d844-586d-4be9-8570-04a0678fa99e-profile_image-300x300.png']
];

export {data};
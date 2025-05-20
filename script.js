console.log("Welcome to Spotify");

//initialize the variable

let songIndex = 0;
let audioElement= new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem= Array.from(document.getElementsByClassName('songitem'));


// let songs=[
//     {songName:"Bollywood", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
//     {songName:"Bollywood", filepath:"songs/2.mp3",coverpath:"cover2.jpg"},
//     {songName:"Indian Deep House", filepath:"songs/3.mp3",coverpath:"cover3.jpg"},
//     {songName:"Meri Duniya", filepath:"songs/4.mp3",coverpath:"cover4.jpg"},
//     {songName:"sapne-bade-305719.mp3", filepath:"songs/5.mp3",coverpath:"cover5.jpg"},
//     {songName:"Nokia indian trap music", filepath:"songs/6.mp3",coverpath:"cover6.jpg"},
//     {songName:"Tasvir", filepath:"songs7.mp3",coverpath:"cover7.jpeg"},
//     {songName:"Tera pyar mera junoon", filepath:"songs/8.mp3",coverpath:"cover8.jpg"},
//     {songName:"Indian trap", filepath:"songs/9.mp3",coverpath:"cover9.webp"},
// ]
songitem.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})
//Handle play/pause click
masterplay.addEventListener('click',()=>{
if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

}
else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}

})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
  

    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;

})
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');
})

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      songIndex = parseInt (e.target.id)
    e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previ').addEventListener('click',()=>{
    if(songIndex>9){
songIndex =0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src='songs/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
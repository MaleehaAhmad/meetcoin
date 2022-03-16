function setClock(){
    let date = new Date();
    let hrs = parseInt( date.getHours() ); // 0- 23
    let min = parseInt( date.getMinutes() ); // 0 - 59
    let sec = parseInt( date.getSeconds() ); // 0 - 59

    
    if(hrs > 12){
        hrs = hrs - 12;
    }
    if (hrs < 10){
        hrs = `0${hrs}`;
    }
    if ( min < 10){
        min = `0${min}`;
    }
    if (sec < 10){
        sec = `0${sec}`;
    }
    let time = `${hrs} : ${min} : ${sec}`;
   
    document.getElementById("clock").innerText = time;

    setTimeout(setClock, 1000);
}


setClock();










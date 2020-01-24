onload = () => {

    timeformat = (t) => {return (t < 10) ? '0' + t:t;}
    showTime = () => {
        let now = new Date; el = document.getElementById("showtime").innerHTML = timeformat(now.getHours()) + ':'
                + timeformat(now.getMinutes()) + ':' + timeformat(now.getSeconds());
        
        setTimeout(() => {
            showTime();
        }, 500);
        
    }

    showTime();
    
}
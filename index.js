const showTime = () => {
    const time  = document.querySelector('.time');

    let a = new Date();

    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();

    let session = 'AM';
    if(h >= 12){
       h =  h -12
    }

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    session = h <= 12 ? 'PM' : 'AM';

    time.innerHTML = `${h} : ${m} : ${s} ${session}`

    setTimeout(showTime , 1000)
    
}
showTime()
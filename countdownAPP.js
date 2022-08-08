const countdown= () =>
{
    const countDate = new Date("Feb 13, 2022 18:30:00").getTime();
    console.log(countDate);

    
    //getTime() is in millsec time
    //make current time, so we can sub countDate from curr to get countdowon
    const currDate = new Date().getTime();

    const goalDate = countDate - currDate;

    //switching the millseconds to normal time humans know
    const second = 1000;
    const min = second * 60;
    const hour = min * 60;
    const day = hour * 24;

    //calculate time for day
    const finishDay = Math.floor(goalDate / day); //Math.floorwill round down
    console.log(finishDay);

    //cal time for hour
    const finishHour = Math.floor((goalDate % day) / hour ); 
    console.log(finishHour);

    //cal time for min
    const finishMin = Math.floor((goalDate % hour)/ min); 
    console.log(finishMin);

    //cal time for sec
    const finishSec = Math.floor((goalDate %  min/ second)); 
    console.log(finishSec);


    //enter time where it should
    document.querySelector(".day").innerText = finishDay;
    document.querySelector(".hour").innerText = finishHour;
    document.querySelector(".minutes").innerText = finishMin;
    document.querySelector(".seconds").innerText = finishSec;

    
};

countdown();
setInterval(countdown, 1000);
const daysNames = [
    "Sunday" ,
    "Monday" ,
    "Tuesday" ,
    "Wednesday" ,
    "Thursday" ,
    "Friday" , 
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "Spteber",
    "November",
    "December"
];

const todaysdate = new Date();
const dayName = daysNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];

const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

document.getElementById("currentdate").textContent = currentdate
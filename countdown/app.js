const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
console.log(items);

// mounths are 0 index base therefore if we want to select JAN we need to enter 0 
// hours start from 0 to 24 so if we want to select 1 PM then we will select 13 
let futureDate = new Date(2023, 5, 24, 23, 59, 0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const Minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
const date = futureDate.getDate();
let week = futureDate.getDay();
week = weekdays[week]


giveaway.textContent = `giveaway ends on ${week}, ${date} ${months[month]} ${year}, ${hours}:${Minutes}pm `


// future in mili seconds 
const futureTime = futureDate.getTime();
console.log(futureTime);


function getRemainingTime (){
  const today = new Date().getTime();
  const t = futureTime- today;
  // console.log(t);
  // 1 sec = 1000 milisec 
  // 1 min = 60 sec
  // 1 hour = 60 min
  // 1 day = 24 hours


  // value in milisecond 
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  // calculate all values 
  let days = t/oneDay
  days = Math.floor(days)
  let hours = (t%oneDay)/oneHour;
  hours = Math.floor(hours);
  let Minutes = Math.floor((t% oneHour)/ oneMinute);
  let seconds = Math.floor((t% oneMinute)/ 1000);

  // set vlaues array ;
  const values = [days, hours, Minutes, seconds];

  function format (item){
    if(item < 10){
      return (item = `0${item}`)
    }
    return item;
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });
  if(t<0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired </h4>`
  }





  
}
// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();
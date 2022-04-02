
var alarmString = null;

// Select HTML5 Audio element
const alarmAudio = document.getElementById("alarm-audio");

// Select DOM element with create-alarm id
const createAlarm = document.querySelector(".create-alarm");

// Select DOM element of active alarm container
const activeAlarm = document.getElementById("active-alarm");
const clearAlarm = document.getElementById("clear-alarm");

// Select DOM element of active alarm text
const alarmTextContainer = document.getElementById("alarm-text");

const alarmText = (time) => `Alarm set at time ${time}`;

// Initialize alarm sound
alarmAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
alarmAudio.load();

// Handle Create Alarm submit
const handleSubmit = (event) => {
    // Prevent default action of reloading the page
    event.preventDefault();
    const { hour, sec, min } = document.forms[0];


    alarmString = getTimeString_fromNow({
      hours: hour.value,
      minutes: min.value,
      seconds: sec.value,
    });


    // Reset form after submit
    document.forms[0].reset();
    // Hide create alarm
    createAlarm.style.display = "none";
    // show active alarm with text
    activeAlarm.style.display = "block";
    alarmTextContainer.innerHTML = alarmText(alarmString);
};

const handleClear = () => {
  alarmString = "";
  activeAlarm.style.display = "none";
  createAlarm.style.display = "block";
};

// Trigger handleClear on button click
clearAlarm.addEventListener("click", handleClear);
// Attach submit event to the form
document.forms[0].addEventListener("submit", handleSubmit);

// Function to check if alarm needs to be triggered
const checkAlarm = (timeString) => {
  if (alarmString === timeString) {
    alarmAudio.play();
  }
};

// Function to convert time to string value
const getTimeString_fromNow = ({ hours, minutes, seconds }) => {

  let currentTime = new Date();

  console.log(hours, minutes, seconds)

  // console.log("current time :: ", currentTime.toTimeString())

  let timeNeeded = new Date();

  timeNeeded.setTime(currentTime.getTime()+1000*seconds + minutes * 60*1000 + hours*60*60*1000);

  let timeStr = timeNeeded.toTimeString().split(" ")[0];

  // console.log(timeStr + " curnet", currentTime.toTimeString())

  let hms = timeStr.split(":");

  return `${hms[0]}:${hms[1]}:${[hms[2]]}`;
};

const getTimeString = ({ hours, minutes, seconds }) => {



  return `${hours}:${minutes}:${seconds}`;
};


// Function to display current time on screen
const renderTime = () => {
  var currentTime = document.getElementById("current-time");
  const currentDate = new Date();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const timeString = getTimeString({ hours, minutes, seconds });
  checkAlarm(timeString);
  currentTime.innerHTML = timeString;
};

// Update time every second
setInterval(renderTime, 500);
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Function to speak with a specific voice
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en";
    
// Call wishMe when the page loads
window.addEventListener('load', async () => {
    await loadVoices();  // Load voices before greeting
    wishMe();
});

// Function to greet the user based on the time of day
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

// Speech recognition setup
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

// Start recognition on button click
btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

// Function to handle voice commands
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Sir, what can I help you?");
    } else if (message.includes("who are you")) {
        speak("I am Vira, a virtual assistant of our company Cybershoora.");
    }  else if (message.includes("can i abuse you")) {
        speak(" i dont like abuse so shut the fucking your mouth.");
    } else if (message.includes("vira what is html")) {
        speak("This is what I found on the internet regarding HTML.");
        window.open("https://www.google.com/search?q=what+is+html", "_blank");
    } else if (message.includes("vira what is css")) {
        speak("This is what I found on the internet regarding CSS.");
        window.open("https://www.google.com/search?q=what+is+css", "_blank");
    } else if (message.includes("vira what is javascript")) {
        speak("This is what I found on the internet regarding JavaScript.");
        window.open("https://www.google.com/search?q=what+is+javascript", "_blank");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The time is ${time}`);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(`Today's date is ${date}`);
    } else if (message.includes("tell me about your company or your company works")) {
        speak(" our company name is cybershoora. our company making works for making websites, apps or webapps, 3d modals, animations etc. if you need anything between this you get contact with us and get make your works perfectly or injoy your jounery. Thankyou...");
    } else if (message.includes("tell me about your company owner")) {
        speak("C E O of our company is Mister Nishant Mogha and the working manager of our campany is Mister Harshit Mogha.");
    } else if (message.includes("what is three d model.") || message.includes("what is three d models.") || message.includes("what is three d modeling")) {
        speak("This is what I found on the internet regarding your question");
        window.open("https://www.google.com/search?q=what+is+3d+modal", "_blank");
    } else if (message.includes("what is animation") || message.includes("what is animations")) {
        speak("This is what I found on the internet regarding your question");
        window.open("https://www.google.com/search?q=what+is+animation", "_blank");
    } else if (message.includes("what is website") || message.includes("what is websites")) {
        speak("This is what I found on internet regarding your question");
        window.open("https://www.google.com/search?q=what+is+website", "_blank");
    } else if (message.includes("what is app") || message.includes("what is apps") || message.includes("what is application") || message.includes("what is applications") || message.includes("what is mobile app") || message.includes("what is mobile apps") || message.includes("what is mobile application") || message.includes("what is mobile applications")) {
        speak("This is what I found on internet regarding your question");
        window.open("https://www.google.com/search?q=what+is+mobile+application", "_blank");
    } else if (message.includes("what is web app") || message.includes("what is web apps") || message.includes("what is web application") || message.includes("what is web applications")) {
        speak("This is what I found on internet regarding your question");
        window.open("https://www.google.com/search?q=what+is+web+apps", "_blank");
    }
}}

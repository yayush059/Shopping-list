//speech recognition
const counter_line = document.querySelector("#counter")
const mic_off_id = document.getElementById("mic-off")
const mic_on_id = document.getElementById("mic-on")
const inputfield_el = document.querySelector("#input-field")


if ("webkitSpeechRecognition" in window) {

    // Initialize webkitSpeechRecognition
    let speechRecognition = new webkitSpeechRecognition();
    
    // String for the Final Transcript
    let final_transcript = "";

    // Set the properties for the Speech Recognition object
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;


    // Callback Function for the onStart Event
    speechRecognition.onstart = () => {

        // Show the Status Element
        counter_line.innerHTML = "listening...";
       
    };
    speechRecognition.onerror = () => {

        // Hide the Status Element
        counter_line.innerHTML = "Error!! while listening";
    };

    speechRecognition.onend = () => {

        // Hide the Status Element
        counter_line.innerHTML = "stopped";
        mic_off_id.style.display = "none";
        mic_on_id.style.display = "block";
    };

    speechRecognition.onresult = (event) => {

        final_transcript = event.results[event.results.length - 1][0].transcript;


        // Set the Final transcript.
        inputfield_el.value = final_transcript;
    };
    
    mic_on_id.onclick = () => {

        // Start the Speech Recognition
        final_transcript = "";
        speechRecognition.start();
        mic_on_id.style.display = "none";
        mic_off_id.style.display = "block";

    };

    mic_off_id.onclick = () => {
        mic_off_id.style.display = "none";
        mic_on_id.style.display = "block";
        speechRecognition.stop();
        counter_line.innerHTML = "stopped";

    }

    

} else {
    console.log("Speech Recognition Not Available");
}
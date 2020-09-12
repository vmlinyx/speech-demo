const btn = document.querySelector(".record");
const content = document.querySelector(".content");
const input = document.querySelector(".input");

const synth = window.speechSynthesis;
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Hellos");
};
recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transript = event.results[current][0].transcript;
  content.textContent = transript;
  readOutLoud(transript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

input.addEventListener("change", (event) => {
  const {
    target: { value },
  } = event;
  content.textContent = value;
  readOutLoud(value);
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.voice = window.speechSynthesis.speak(speech);
}

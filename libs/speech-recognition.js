const grammar =
  "#JSGF V1.0; grammar gitcommands; public <gitcommand> = git | push | commit ;";

export default class SpeechRecognizer {
  constructor() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const SpeechGrammarList =
      window.SpeechGrammarList || window.webkitSpeechGrammarList;

    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;

    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    document.body.onclick = () => {
      recognition.start();
      console.log("Ready to receive a color command.");
    };

    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];
      console.log("event", transcript);
    };

    recognition.onend = (event) => {
      console.log("onend");
      setTimeout(() => {
        recognition.start();
      }, 50);
    };
  }
}

<template>
  <Main />
</template>

<script>
import SpeechRecognizer from "~/libs/speech-recognition";

export default {
  name: "StartPage",
  mounted() {
    new SpeechRecognizer();
    console.log(SpeechRecognizer);
  },
};
</script>

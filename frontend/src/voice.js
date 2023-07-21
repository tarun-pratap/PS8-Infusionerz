const axios = require('axios');

function speak() {
  const textInput = 'enter the field field field field field field '
  if (textInput.trim() !== '') {
    axios
      .post('http://localhost:8000/speak', null, {
        headers: { prompt: textInput },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.detail);
      });
  }
}

// Function to trigger the 'listen' endpoint
// function listen() {
//   axios
//     .post('http://localhost:8000/listen')
//     .then((response) => {console.log(response)})
//     .catch((error) => {
//       console.error(error.response.data.detail);
//     });
// }
// speak()
// listen()
function listen() {
    const recognitionTimeout = 5000; // 5 seconds timeout for each listen attempt
  
    const listenForSpeech = () => {
      axios
        .post('http://localhost:8000/listen')
        .then((response) => {
          const recognizedText = response.data.recognized_text;
          console.log(`Recognized Text: ${recognizedText}`);
          const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
          const email = recognizedText.replace(/\s+/g, '').toLowerCase();
          if (emailRegex.test(email)) {
            console.log(`Valid Email: ${email}`);
            // Here, you can use the valid email for further processing
          } else {
            console.log('Invalid Email. Please speak again.');
            setTimeout(listenForSpeech, recognitionTimeout); // Retry listening after the timeout
          }
        })
        .catch((error) => {
          console.error(error.response.data.detail);
          setTimeout(listenForSpeech, recognitionTimeout); // Retry listening after the timeout
        });
    };
  
    console.log('Listening... (Speak when ready)');
    listenForSpeech(); // Start listening for speech
  }
  speak()
  listen()
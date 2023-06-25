function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Greeting conditions
    if (userInput.includes('hi') || userInput.includes('hello')||userInput.includes('hey')) {
      return "Hello! How can I assist you today?";
    }
  
    if (userInput.includes('good morning')) {
      return "Good morning! How may I help you?";
    }
  
    if (userInput.includes('good afternoon')) {
      return "Good afternoon! How can I assist you today?";
    }
  
    if (userInput.includes('good evening')) {
      return "Good evening! How may I assist you?";
    }
  
    // Medical information conditions
    if (userInput.includes('medical') || userInput.includes('information') || userInput.includes('website')||userInput.includes('disease') ){
      return "Sure, please click on the disease detection on the navbar or the card given on the homepage!";
    }
  
    if (userInput.includes('symptoms') || userInput.includes('signs')) {
      return "Click on the disease detector on the navbar or the card given on the homepage";
    }
  
    if (userInput.includes('treatment') || userInput.includes('cure')) {
      return "Click on the doctor information page on the navbar or the card given on the homepage!";
    }
    if (userInput.includes('bye') || userInput.includes('thank you')||userInput.includes('see you')) {
        return "Thank you for using our website, hope we assisted you well, have a nice day";
      }
  
    // Default response if no condition is met
    return "I'm sorry, I didn't understand. Can you please rephrase your question?";



}
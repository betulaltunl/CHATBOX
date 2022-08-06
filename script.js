
//text tanımları
const utterances = [ 
    ["how are you", "how is life", "how are things"],        //0
    ["hi", "hey", "hello", "good morning", "good afternoon"],      //1
    ["what are you doing", "what is going on", "what is up"],      //2
    ["how old are you"],					//3
    ["who are you", "are you human", "are you bot", "are you human or bot"],   //4
    
]
  // muhtemel cevaplar  
const answers = [
     [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],                       //0
    [
      "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
    ],						//1
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],						//2
    ["I am infinite"],					//3
    ["I am just a bot", "I am a bot. What are you?"],	//4
    
];
   
// aksi durumda diğer cevaplar  
const alternatives = [
    "Go on...",
    "Try again",
];

  
var user = document.getElementById("userBox");
user.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = user.value;
      user.value = "";
      console.log(input)
      output(input);
      
    }
  });
function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/  , "");
    text = text
      .replace(/ a /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you");
  
    if (compare(utterances, answers, text)) {
      // Search for exact match in triggers
      product = compare(utterances, answers, text);
    } 
    else {
      product = alternatives[Math.floor(Math.random() * alternatives.length)];
    }
  
    addChatEntry(input, product);
  }
  function compare(utterancesArray, answersArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < utterancesArray.length; x++) {
      for (let y = 0; y < utterancesArray[x].length; y++) {
        if (utterancesArray[x][y] === string) {
          let replies = answersArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
    return reply;
  }
  
  function addChatEntry(input, product) {
    var messagesContainer = document.getElementById("chatLog");
    
  console.log("çıktı" + product)
  messagesContainer.innerHTML = "typing."

  setTimeout(() => {
    messagesContainer.innerHTML = "typing..";
  }, 500);

  setTimeout(() => {
    messagesContainer.innerHTML = "typing...";
  }, 1500);

    setTimeout(() => {
      messagesContainer.innerHTML = product;
    }, 2000);
  }
  
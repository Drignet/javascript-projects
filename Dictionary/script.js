const input = document.querySelector("#search");
const title = document.querySelector(".title");
const defaultText = document.querySelector(".default-text");
const phonetic = document.querySelector(".phonetic");
const meanings = document.querySelector(".meanings");
const partOfSpeech = document.querySelector(".part-of-speech");
const synonyms = document.querySelector(".synonyms");
const antonyms = document.querySelector(".antonyms");
const example = document.querySelector(".example");
const sourceUrls = document.querySelector(".sourceUrls");

if ("speechSynthesis" in window) {
  let speakerBtn = document.querySelector(".speak");
  speakerBtn.onclick = () => {
    let msg = new SpeechSynthesisUtterance(input.value);
    speechSynthesis.speak(msg);
  };
  speakerBtn.disabled = false;
}

input.addEventListener("input", () => {
  title.textContent = input.value
})

input.addEventListener("keypress", (e) => {
  
  if(e.keyCode === 13){
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
    
    // Clear previous results
    defaultText.textContent = "";
    phonetic.innerHTML = "";
    meanings.innerHTML = "";
    partOfSpeech.innerHTML = "";
    synonyms.innerHTML = "";
    antonyms.innerHTML = "";
    example.innerHTML = "";
    sourceUrls.innerHTML = "";
    
   fetch(url)
  .then(res => res.json())
  .then(data => {
  data.forEach(datum => {
    console.log(datum)
    defaultText.textContent = datum.word
    
    phonetic.innerHTML = `<span style="color:hsl(200, 50%, 30%); font-weight: 600;">Phonetic :</span> ${datum.phonetic}`
    
    partOfSpeech.innerHTML += `<span style="color:hsl(200, 50%, 30%); font-weight: 600;"> Part Of Speech : </span> ${datum.meanings[0].partOfSpeech}<br><br>`
    
    synonyms.innerHTML = `<span style="color:hsl(200, 50%, 30%); font-weight: 600;"> Synonyms : </span>`
    
    if (datum.meanings[0].synonyms && datum.meanings[0].synonyms.length > 0) {
  for (let i = 0; i < datum.meanings[0].synonyms.length; i++) {
    synonyms.innerHTML += `${datum.meanings[0].synonyms[i]} , `;
  }
} else {
  synonyms.innerHTML = "";
}

if (datum.sourceUrls[0]) {
    sourceUrls.href = `${datum.sourceUrls}`;
    sourceUrls.innerHTML = "Source";
} else {
  sourceUrls.href = "#";
  sourceUrls.innerHTML = "Source";
}
    
    antonyms.innerHTML = `<span style="color:hsl(200, 50%, 30%); font-weight: 600;"> Antonyms : </span>`;

if (datum.meanings[0].antonyms && datum.meanings[0].antonyms.length > 0) {
  for (let i = 0; i < datum.meanings[0].antonyms.length; i++) {
    antonyms.innerHTML += `${datum.meanings[0].antonyms[i]} , `;
  }
} else {
  antonyms.innerHTML += "";
}
    
    for(i = 0; i <= datum.meanings[0].definitions.length; i++){
    meanings.innerHTML += `<span style="color:hsl(200, 50%, 30%); font-weight: 600;">Meaning  ${(i + 1)} : </span> ${datum.meanings[0].definitions[i].definition}<br><br>`

if (datum.meanings[0].definitions[i].example) {
  example.innerHTML += `<span style="color:hsl(200, 50%, 30%); font-weight: 600;"> Example : </span>`;
  example.innerHTML += `${datum.meanings[0].definitions[i].example}<br><br>`;
} else {
  example.innerHTML += "";
}
    }
  })
})
  }
})
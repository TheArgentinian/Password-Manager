const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

const generatePass = document.getElementById("btn")
const passwordBox1 = document.getElementById("password-box1")


generatePass.addEventListener("click",PswGen)

function getRandomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar] 
}

function PswGen(){
    let randomPass = ""
    for (let i=0; i < passwordLength; i ++){
        randomPass += getRandomCharacter()
    }
 //   return randomPass
 passwordBox1.textContent = randomPass
 //document.getElementById('2').innerText = randomPass
    }

 //   passwordBox1.addEventListener("click", function() {
  //      passwordBox.textContent=""
  //  })

  function CopyToClipboard() {
    // Get the text field
    var copyText = document.getElementById("password-box1");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
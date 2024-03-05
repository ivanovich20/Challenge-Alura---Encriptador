//Encriptar a traves de arreglos
function encrypt() {
    let text = document.getElementById("texto").value;
    if (text == ""){
        alert("Cadena vacia, ingrese texto!")
    } else {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let encryptedText = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            if (vowels.includes(char.toLowerCase())) {
                if (text[i] == 'a') {
                    encryptedText += 'ai';
                } else if(text[i] == 'e'){
                    encryptedText += 'enter'
                } else if(text[i] == 'i'){
                    encryptedText += 'imea'
                } else if(text[i] == 'o'){
                    encryptedText += 'ober'
                } else {
                    encryptedText += 'ufat'
                }
            } else {
            encryptedText += char;
            }
        }

        document.getElementById("result").value = encryptedText;
        var elemento = document.getElementById("result");
        //Quitar propiedad
        elemento.style.removeProperty("background-image");
        elemento.style.removeProperty("background-color");
        //Agregar
        elemento.style.background = "transparent";

        //Quitar P
        var elementoMensaje = document.getElementById("mensaje");
        elementoMensaje.remove();

        var bcopy = document.getElementById("copy")
        bcopy.style.marginTop = "70px";
    }
}

function desencrypt() {
  let text = document.getElementById("texto").value;
  if(text == ""){
    alert("Cadena vacia, ingrese texto!")
  } else {
    const encryptVo = ['ai', 'enter', 'imea', 'ober', 'ufat'];
    const vocalesDes = ['a', 'e', 'i', 'o', 'u'];
    let desencryptText = '';
    
    for (let i = 0; i < text.length; i++) {
        let found = false;

        for (let j = 0; j < encryptVo.length; j++) {
            if (text.substr(i, encryptVo[j].length) === encryptVo[j]) {
                desencryptText += vocalesDes[j];
                i += encryptVo[j].length - 1;
                found = true;
                break;
            }
        }

        if (!found) {
            desencryptText += text[i];
        }
    }
    document.getElementById("result").value = desencryptText;
    }
}

function copy() {
    // Obtener el valor del input
    var inputText = document.getElementById("result").value;

    navigator.clipboard.writeText(inputText)
    .then(() => {
        alert('Texto copiado al portapapeles: ' + inputText);
    })
    .catch(err => {
        alert('Error al copiar el texto', err);
    });    

    var elemento = document.getElementById("texto");
    elemento.value = ""
}
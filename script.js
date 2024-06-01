function accendi()
{
    document.getElementById("imm").src= "res/pic_bulbon.gif";
}

function spegni()
{
    document.getElementById("imm").src= "res/pic_bulboff.gif";
}

function generasconto()
{
    var sconto;
    sconto = Math.floor(Math.random()*100000);
    document.getElementById("testo").value = sconto;
}

function copiacontenuto() {
    // Get the text field
    var copyText = document.getElementById("testo");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Testo copiato: " + copyText.value);
  }

  function controllaform(){
    if(document.mioform.cognome.value == '')
        {
            alert("Inserire un cognome");
            return false;
        }
    
    if(document.mioform.nome.value == '')
        {
            alert("Inserire un nome");
            return false;
        }

    var tel = parseInt(document.mioform.telefono.value);
    if(isNaN(tel))
        {
            alert("Il telefono non puo contenere caratteri!");
            return false;
        }

    if(document.mioform.mail.value == '' && document.mioform.telefono.value == '')
        {
            alert("Inserire almeno l'email o il telefono!");
            return false;
        } 
  }
  


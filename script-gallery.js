var corrente = 1;
var nimmagini = 3;

function precedente()
{
    corrente--;

    if(corrente<1)
        {
            corrente = 3;
        }

    for(var i=nimmagini; i>0; i--)
        {
            document.querySelector(".gallery-box img:nth-child("+i+")").style.display = "none";
        }

    document.querySelector(".gallery-box img:nth-child("+corrente+")").style.display = "block";
    cambiaImmagine(); 

}

function successiva()
{
    corrente++;

    if(corrente>3)
        {
            corrente = 1;
        }

    for(var i=nimmagini; i>0; i--)
        {
            document.querySelector(".gallery-box img:nth-child("+i+")").style.display = "none";
        }

    document.querySelector(".gallery-box img:nth-child("+corrente+")").style.display = "block";
   cambiaImmagine(); 
}

setInterval(successiva,2000);
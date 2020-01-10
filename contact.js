//Afisez varsta
function arataVarsta(varstaCurenta){
  console.log(varstaCurenta);
  document.getElementById("showRange").innerHTML = "Varsta selectata este: " + varstaCurenta;
}
//Fac submisie
var submit=document.getElementById("butonSubmit");
submit.addEventListener("click",function(){
    //Iau emailul si parola
    var email=document.getElementById("inputEmail").value;
    var parola=document.getElementById("inputParola").value;
    console.log(email);
    console.log(parola);
    //Daca emailul si parola sunt valide/invalide atunci afisez un sweetalert specific
    if(ValidareParola(parola)&&ValidareEmail(email)){
        console.log("success");
        Swal.fire(
          'Bravo!',
          'Emailul si parola sunt valide',
          'success'
        )
    }
    else{
        console.log("success");
        Swal.fire(
          'Hopa!',
          'Emailul/Parola este invalida',
          'error'
        )
    }
});
//Functia pentru validarea parolei
function ValidareParola(parola)
{
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/.test(parola))
    {
        return (true)
    }
    return (false)
}
//functia pentru validarea emailului
function ValidareEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}
/*
var culoare = document.getElementById('culoarePag');
var first = culoare.options[culoare.selectedIndex].value;
if (first !== 0) {
    document.getElementById('classNumber').style.background="white";
}
*/
//Alege culoarea paginii

var culoarePagina = document.getElementById("culoarePag");

culoarePagina.addEventListener("change", function(){


    var optionCuloare=this.options;
    var selectedOption = optionCuloare[optionCuloare.selectedIndex];
    document.body.style.background = selectedOption.value;


});




//Alege alta rasa de catel!

var butonCaine = document.getElementById("butonCaine");
var rasaCaine =[];
var inputCaine = document.getElementById("inputCaine");
var optionCaine = document.getElementById("raseCaine");
butonCaine.addEventListener('click', function(){

    rasaCaine.push(inputCaine.value);
    console.log(rasaCaine);
  
    for(var i = 0; i < rasaCaine.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = rasaCaine[i];
    opt.value = rasaCaine[i];
    optionCaine.appendChild(opt);
}
    rasaCaine.pop();

});

//API request la fotografii si adaugat cate 10 la apasarea butonului de Submit!

var raspuns=null;
var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('success!', xhr);
        console.log("raspunsul pe care il primim este sub forma de string",xhr.response);
        console.log("De cele mai multe ori vrem sa convertim raspunsul la obiect JSON ca sa putem utiliza datele",JSON.parse(xhr.response));
        raspuns=JSON.parse(xhr.response);
    }
    else {
        console.log('The request failed!',xhr.status);
    }
    console.log('This always runs...');
};
xhr.open('GET', ' https://jsonplaceholder.typicode.com/photos');
xhr.send();

//Creaza o imagine folosind src, width, height, alt

function arataImaginea(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
var submisie=document.getElementById("butonSubmit");
var numarImagine;
submisie.addEventListener("click",function(){

    alert("Conectat!");


    numarImagine=0;
    raspuns.forEach(function(elem){
    if(numarImagine<10){
        var image = document.createElement("img");
        image.setAttribute("title",elem.title);
        image.setAttribute("src", elem.url);
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        image.setAttribute("alt", "Imaginea"+numarImagine+"indisponibila!");
        document.body.appendChild(image);
    numarImagine=numarImagine+1;
    }
    });

});

// Timer-ul

var timpMaxim = 20;
var paragraf = document.getElementById("cronometru");
paragraf.style.color="black";
paragraf.innerHTML=timpMaxim;

var timpCurent=setInterval(

    function(){

        if(timpMaxim>0){
            timpMaxim=timpMaxim-1;
            paragraf.innerHTML=timpMaxim;
        }
        else{
            alert("S-a scurt timpul!");
            clearInterval(timpCurent);
            butonSubmit.style.opacity=".5";
            butonSubmit.disabled=true;
            butonSubmit.style.cursor="no-drop";
            paragraf.remove();
        }
    },1000);

//Selectam toate elementele:
var x = document.getElementsByClassName("navbarMain");
console.log(x);
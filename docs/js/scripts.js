/*function pageColor(){
  document.getElementById('container').style.backgroundColor(  document.getElementById('pageColor').value);
}
*/
function init(){
CreationNav();
CreationFooter();
}

function CreationNav(){
  var mes = "<div id='menu1' class='w100'>";
  mes += "<ul class = 'p0 m0'>";
  mes += "<li>  <a href='index.html'>Accueil</a></li>";
  mes += "<li>  <a href='statistiques.html'>Statistiques</a></li>";
  mes += "<li>  <a href='opinion.html'>Votre opinion</a></li>";

  mes += "</ul></div>";

  document.getElementById("cNav").innerHTML = mes ;

}

function CreationFooter(){
  var mes = "<div id='footer' class='flex flex-center colorC' > <div>";
  mes += "<a><img src='../images/social(1).png' alt=''></a>";
  mes += "<a><img src='../images/social(2).png' alt=''></a>";
  mes += "<a><img src='../images/social(3).png' alt=''></a>";
  //mes += "<a><img src='../images/social(4).png' alt=''></a>";

  mes += "</div></div>";

  document.getElementById("cFooter").innerHTML =   mes;


}

function fEffacer(){
  var elements = document.forms[0].elements;
  for (var i = 0; i < elements.length; i++) {
    switch (elements[i].type) {
      case "text":
      case "email":
      case "tel":
      case "textarea":
        elements[i].value = "";
        elements[i].classList.add("nonValide");
        elements[i].classList.remove("borderR");
        break;
      case "select-one":
          elements[i].value = 0;

        break;

      case "radio":
      case "checkbox":
      if(  elements[i].value == 'm')
      elements[i].checked = true;
      else
      elements[i].checked = false;
          break;


    }
//console.log(elements[i].type);

  }


}

function focusFormulaire(){
  var elements = document.forms[0].elements;
  for (var i = 0; i < elements.length; i++) {
    switch (elements[i].type) {
      case "text":
      case "email":
      case "tel":
      case "textarea":
        elements[i].classList.add("nonValide");
      elements[i].onblur = function(){focusE(this);};
      break;

      case "checkbox":
      elements[i].onclick = function(){habilitar(this);};

      break;
    }

    //  elements[i].addEventListener("blur", function(){focusE(elements[i]);});
  }
}

function focusE(e) {

  if(e.value == ""){
        e.classList.add("nonValide");
          e.classList.add("borderR");
  }

  else{
    e.classList.remove("nonValide");
    e.classList.remove("borderR");
  }

}

function habilitar(e){

document.getElementById("envoyer").disabled = !e.checked;

}

function fEnvoyer(){

  if(document.getElementsByClassName("nonValide").length>0){
        alert("Donnees non valides formulaire non envoye");
    return false;

  }else {
    alert("formulaire envoye avec succes");
    return true;
  }



}


function horloge(){
  var actualizarHora = function(){
    var fecha = new Date(),
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        anio = fecha.getFullYear(),
        ampm;

    var pHoras = document.getElementById("horas"),
        pSegundos = document.getElementById("segundos"),
        pMinutos = document.getElementById("minutos"),
        pAMPM = document.getElementById("ampm"),
        pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio");
    var semana = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    var meses = ['Janvier','fevrier','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','decembre'];

    pDiaSemana.innerHTML = semana[diaSemana];
    pDia.innerHTML =dia;
    pMes.innerHTML =meses[mes];
    pAnio.innerHTML =anio;
    if(hora>=12){
      hora = hora - 12;
      ampm = "PM";
    }else{
      ampm = "AM";
    }
    if(hora == 0){
      hora = 12;
    }
    if(hora<10){pHoras.innerHTML ="0"+hora}else{pHoras.innerHTML = hora};
    if(minutos<10){pMinutos.innerHTML ="0"+minutos}else{pMinutos.innerHTML =minutos};
    if(segundos<10){pSegundos.innerHTML ="0"+segundos}else{pSegundos.innerHTML =segundos};
    pAMPM.innerHTML =ampm;

  };


  actualizarHora();
  var intervalo = setInterval(actualizarHora,1000);
}

function initP(){

console.log("HolatheInput");

    creationPlanetes();
    var theInput1 = document.getElementById("pageColor");
    var theInput2 = document.getElementById("lettreColor");
    var theInput3 = document.getElementById("lettreSize");
    chageBackground(theInput1);
    chageColor(theInput2);
    changeLettreSize(theInput3);


    theInput1.addEventListener("input", function()  { chageBackground(theInput1);  }, false);
    theInput2.addEventListener("input", function()  { chageColor(theInput2);  }, false);
    theInput3.addEventListener("input", function()  { changeLettreSize(theInput3);  }, false);


    lookImages();
}

function chageBackground(theInput1){
  var ele = document.getElementsByClassName('colorC');
//  console.log(theInput);
  for(var i=0; i< ele.length; i++ ){
    //  console.log(ele[i]);
     ele[i].style.backgroundColor = theInput1.value;}
}

function chageColor(theInput2){
  ele2 = document.getElementsByClassName('colorC');
//  console.log(theInput);
  for(var i=0; i< ele2.length; i++ ){
     ele2[i].style.color = theInput2.value;}
}

function changeLettreSize(theInput3){
  ele3 = document.getElementsByClassName('colorC');
//  console.log(theInput);
  for(var i=0; i< ele3.length; i++ ){
    //console.log(theInput3.value)
     ele3[i].style.fontSize = 1 + parseInt(theInput3.value)/10 + "em";}
}

function change(n){
  if(n){
  document.getElementById('videoContainer').classList.remove("hidden");
  document.getElementById('outilContainer').classList.add("hidden");
  }
  else{
    document.getElementById('outilContainer').classList.remove("hidden");
    document.getElementById('videoContainer').classList.add("hidden");
  }
}

function creationPlanetes(){
  var mes="";

  var nP = parseInt (document.getElementById('nPlanete').value);
  var c = ((9 - 4 + nP)<=8)?9 - 4 + nP:4 - 8 + nP;
  var changeP;
    //console.log(4 - 8 + nP);
  for (var i = 0; i < 11; i++) {
    if (i==0){
      changeP = (nP-1  <0)?8: nP-1;
      mes +="<li> <a id='nextP' href=p" +changeP+".html>" ;
      mes +=" &#10094; </a> </li>";

    }else if (i==10) {
      changeP = ((nP+1)> 8)?0: nP+1;
      mes +="<li> <a id='prevP' href=p" +changeP+".html>" ;
      mes +=" &#10095; </a> </li>";
    }else {
      if(c>8)
        c=0;

//  console.log(c);
      mes +="<li><a href=p" +c+".html>" ;
      mes +="<img src = '../images/p("+c+").png' alt='' class = 'minPlanete";
      if(c==nP)
        mes += " pCenter'";
      else mes +="'";
      mes +="> </a></li>";
      c++;
    }
  }

  document.getElementById('planeteList').innerHTML = mes;

}



function lookImages(){
  var planete = document.getElementById("nPlanete").value;
  var m1 = document.getElementsByClassName("img1");
  var m2 = document.getElementsByClassName("img2");

  for (var i = 0; i < m1.length; i++) {
    m1[i].src ="../images/p("+planete+")/p("+i+").jpg";
  }

  for (var i = 0; i < m2.length; i++) {
    m2[i].src ="../images/p("+planete+")/p("+i+").jpg";
    m2[i].alt=document.getElementById("titulo").innerHTML;

  }
}

function vermas(id){
if(id=="mas"){
document.getElementById("desplegar").style.display="block";
document.getElementById("mas").style.display="none";
}
else{
document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
}

function vermas_2(id_2){
if(id_2=="mas_2"){
document.getElementById("desplegar_2").style.display="block";
document.getElementById("mas_2").style.display="none";
}
else{
document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
}

function vermas_3(id_3){
if(id_3=="mas_3"){
document.getElementById("desplegar_3").style.display="block";
document.getElementById("mas_3").style.display="none";
}
else{
document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
}

document.getElementById('facebook').addEventListener('click' , boton);
function boton() {
  window.location='https://www.facebook.com/Nohem%C3%AD-Hern%C3%A1ndez-CBI-MK-113247220582616/?modal=admin_todo_tour&notif_id=1604710860003177&notif_t=page_invite&ref=notif';
}

document.getElementById('maquillage_p').addEventListener('click', maquillage);
function maquillage() {
  window.location='../paginas/polvo.html';
}

document.getElementById('brochas_p').addEventListener('click', brochas);
function brochas() {
  window.location='../paginas/brochas.html';
}

document.getElementById('varios_p').addEventListener('click', varios);
function varios() {
  window.location='../paginas/varios.html';
}

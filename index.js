let btn=document.getElementById('action');
let pic=document.getElementById('off');

document.addEventListener('click',bulp)

function bulp(e){
    if(btn.textContent.includes('on')){
pic.src="step2.png" ;
btn.textContent="off";
}
else{
    pic.src="step1.png" ;
btn.textContent="on";
}
}
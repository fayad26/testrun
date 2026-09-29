const form=document.getElementById("complaintForm");
const modal=document.getElementById("modal");
const ref=document.getElementById("reference");
const close=document.getElementById("close");
const file=document.getElementById("file");
const fileText=document.getElementById("fileText");

file.addEventListener("change",()=>{if(file.files[0]) fileText.textContent=file.files[0].name});
form.addEventListener("submit",e=>{
  e.preventDefault();
  ref.textContent="RX-"+Math.floor(100000+Math.random()*900000);
  modal.classList.add("show");
  form.reset();
  fileText.textContent="Drop evidence here or browse";
});
close.addEventListener("click",()=>modal.classList.remove("show"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("show")});
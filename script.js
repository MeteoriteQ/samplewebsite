const slide = document.getElementsByClassName('inter-active')[0];
const imgslide = document.getElementsByClassName('inter-images')[0];

const btn1 = document.getElementsByClassName('btn1')[0];
const btn2 = document.getElementsByClassName('btn2')[0];

slide.addEventListener('mouseenter', ()=>{
btn1.style.display = "block";
btn2.style.display = "block";
})

slide.addEventListener('mouseleave', ()=>{
btn1.style.display = "none";
btn2.style.display = "none";
})

let offset =0;
btn2.addEventListener('click', ()=>{
offset -= 100;    
imgslide.style.transform = "translateX("+offset+"%)";
if(offset<=-400){
offset = 0;
imgslide.style.transform = "translateX("+offset+"%)";
}
})


btn1.addEventListener('click', () => {
  if (offset ==0) {
    offset = -300; 
  } else {
    offset += 100;
  }
 imgslide.style.transform = "translateX("+offset+"%)";
});




// this is for hover effect on the cards of the landing page
const card1= document.querySelector(".card1")
const card2= document.querySelector(".card2")
const card3= document.querySelector(".card3")
const card4= document.querySelector(".card4")

card1.addEventListener("mouseenter", ()=>{
    card1.innerHTML="our team support students in every step of the application process, from drafting personal statements to preparing required documents making the journy smoother and more successful. ";
    card1.classList.add("hover-text");
    card1.classList.remove("unhover-text");
})
card1.addEventListener("mouseleave",()=>{
    card1.innerHTML="<p>Application Assistance</p><img src='assets/arrow_forward.svg'>"
    card1.classList.remove("hover-text");
    card1.classList.add("unhover-text");
    
})
card2.addEventListener("mouseenter", ()=>{
    card2.innerHTML="we connect students with scholarship opportunities suited for theire needs, helping them navigate applications and secure funding for their eductation ";
    card2.classList.add("hover-text");
    card2.classList.remove("unhover-text");
})
card2.addEventListener("mouseleave",()=>{
    card2.innerHTML="<p>Scholarship Search and Matching</p><img src='assets/arrow_forward.svg'>"
    card2.classList.remove("hover-text");
    card2.classList.add("unhover-text");
    
})
card3.addEventListener("mouseenter", ()=>{
    card3.innerHTML="";
    card3.classList.add("hover-text");
    card3.classList.remove("unhover-text");
})
card3.addEventListener("mouseleave",()=>{
    card3.innerHTML="<p>English Proficiency Test Preparation</p><img src='assets/arrow_forward.svg'>"
    card3.classList.remove("hover-text");
    card3.classList.add("unhover-text");
    
})
card4.addEventListener("mouseenter", ()=>{
    card4.innerHTML=" ";
    card4.classList.add("hover-text");
    card4.classList.remove("unhover-text");
})
card4.addEventListener("mouseleave",()=>{
    card4.innerHTML="<p>Essay Review and Feedback</p><img src='assets/arrow_forward.svg'>"
    card4.classList.remove("hover-text");
    card4.classList.add("unhover-text");
    
})
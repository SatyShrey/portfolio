"use strict";
var body=document.querySelector('body');
var projectsDiv=document.querySelector('.projectsDiv');
var pages=[
  {
    nam:'Chat_App',
    url:'https://chatapp3344.netlify.app/'
  },
  {
    nam:'Watch',
    url:'https://watch3344.netlify.app/'
  },
  {
    nam:'Quiz',
    url:'https://quiz3344.netlify.app/'
  },
  {
    nam:'BMI_Calculator',
    url:'https://BMICalculator3344.netlify.app/'
  },
  {
    nam:'Hotel-booking',
    url:'https://Hotelbooking3344.netlify.app/'
  },
  {
    nam:'CountdownTimer',
    url:'https://CountdownTimer3344.netlify.app/'
  }
];


var header=document.querySelector('header');

function bodyLoad(){
 pages.map((page)=>{
  var a=document.createElement('a');
  a.innerHTML=`<div id="${page.nam}">${page.nam}</div>`;
  a.setAttribute('class',`col ${page.nam}`);
  a.setAttribute('href',`${page.url}`);
  a.setAttribute('onmouseout',`fun2('${page.nam}')`);
  a.style.backgroundImage=`url(${page.nam}.png)`;
  projectsDiv.appendChild(a);
 });
write('.a',0);
write('.b',700,'a');
write('.c',900,'b');
write('.d',1100,'c');
write('.e',1900,'d');
write('.f',2800,'e');
setTimeout(()=>{document.getElementById('f').style.border='0px solid';},3600);
}

function write(a,b,c){
  setTimeout(()=>{
    document.querySelector(a).style.display='inline-block';
    if(c){document.getElementById(c).style.border='0px solid';}
  },b)
}

function distance(e1,e2){
  const rect1=e1.getBoundingClientRect();
  const rect2=e2.getBoundingClientRect();

  const dx=rect2.left-rect1.left;
  const dy=rect2.top-rect1.top;

  return Math.sqrt(dx*dx+dy*dy);
}

var home=document.querySelector('.home');
var about=document.querySelector('.about');
var projects=document.querySelector('.projects');
var contacts=document.querySelector('.contacts');

function getFocus(element){
  if (distance(header,element)<150){
    document.getElementById('homeBtn').style.color='aqua';
    document.getElementById('aboutBtn').style.color='aqua';
    document.getElementById('projectsBtn').style.color='aqua';
    document.getElementById('contactsBtn').style.color='aqua';
    document.getElementById(`${element.className}Btn`).style.color='orange';
  }
}

function scroll(){
 getFocus(home);
 getFocus(about);
 getFocus(projects);
 getFocus(contacts);
}

var hem=document.querySelector('.hem');
function showNavBar(){
    hem.innerHTML=`
    <div class='nav' onclick='closeNavBar()'>
       <button class='bi bi-x'></button>
       <div>
         <a href="#home" onclick='closeNavBar()'>Home</a><br>
         <a href="#about" onclick='closeNavBar()'>About</a><br>
         <a href="#projects" onclick='closeNavBar()'>Projects</a><br>
         <a href="#contacts" onclick='closeNavBar()'>Contacts</a><br>
       </div>
    </div>`;
}

function closeNavBar(){
  hem.classList.add('b2s');   
    setTimeout(() => {
      hem.classList.remove('b2s');
      hem.innerHTML=`<div class="bars" onclick="showNavBar()">
             <div class="bar"></div>
             <div class="bar"></div>
             <div class="bar"></div>
           </div>`;
    }, 450);
}

function fun2(n){
  document.getElementById(n).style.transition='0.5s';//classList.add('rev');
}


var form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  document.querySelector('.alert').innerHTML=`<i>Message sent successfully.</i>`;
  setTimeout(()=>{document.querySelector('.alert').innerHTML=''},1100);
})
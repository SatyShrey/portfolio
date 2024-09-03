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
  },
  {
    nam:'p2pchats',
    url:'https://p2pchat3344.netlify.app/'
  },
  {
    nam:'todonotes',
    url:'https://todonotes3344.netlify.app/'
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
 writer();
}

function writer(){//////writer function started
  var text=`Welcome To My Personal Portfolio Website.`;
  var sec=0;
  var interval=1;
  document.getElementById('bar').style.animation=`blink 0.${interval}s infinite alternate`;
  text.split('').map((letter)=>{
      sec=sec+interval;
     setTimeout(()=>{
      document.getElementById('text').textContent+=letter;
     },sec*100);
  })

  setTimeout(()=>{
    document.getElementById('bar').innerHTML='';
    document.getElementById('profile-pic').style.width='400px';
    document.getElementById('profile-pic').style.borderWidth='7px';
   },text.length*100*interval);
}//////writer function closed


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


var form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  document.querySelector('.alert').innerHTML=`<i>Message sent successfully.</i>`;
  setTimeout(()=>{document.querySelector('.alert').innerHTML=''},1100);
})
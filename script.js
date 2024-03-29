"use strict";
  const form1 = document.getElementById('form1')
  const form2 = document.getElementById('form2')
  const form3 = document.getElementById('form3')
  const form4 = document.getElementById('form4')
  const number = document.querySelectorAll(".number");
  const bullet = document.querySelectorAll(".step .bullet");

// const progressEl = document.getElementById('progress')
// const circles = document.querySelectorAll('.bullet')

let current = 1

//select options

const selectCard1 = document.getElementById("arcade")
const selectCard2 = document.getElementById("advanced")
const selectCard3 = document.getElementById("pro")

selectCard1.addEventListener('click', function() {
  console.log('div1 was clicked')
})

selectCard2.addEventListener('click', function() {
  console.log('div2 was clicked')
})


selectCard3.addEventListener('click', function() {
  console.log('div3 was clicked')
})

const options123 = document.querySelectorAll('.options123')
options123.forEach(options123 =>{
  options123.addEventListener('click', () =>{
    options123.classList.add(".clicked")
    document.querySelector(".clicked")?.classList.remove("clicked")
    options123.classList.add("clicked")
  })
})


//changeTab 

const monthly = document.getElementById('monthly')
const yearly = document.getElementById('yearly')

function Tab1() {
  monthly.style.marginLeft = "0px"
  yearly.style.marginLeft = "5100px"
}

function Tab2() {
  monthly.style.marginLeft = "3100px"
  yearly.style.marginLeft = "0px"
}

//optionMonth-Year

const MONTH = document.getElementById('')


//checkbox-active 

function Checked() {
  // Get the checkbox
  const checkBox = document.getElementById('check')
  const diva = document.querySelector('.card-pick')
  if (checkBox.checked == true) {
    diva.classList.add('.checkbox-active')
  }
    }


//buttons events

const btnsEvents = ()=>{
  const next1 = document.getElementById('next1')
  const next2 = document.getElementById('next2')
  const next3 = document.getElementById('next3')
  const back1 = document.getElementById('back1')
  const back2 = document.getElementById('back2')
  const back3 = document.getElementById('back3')
  const submit = document.getElementById('submit');


  submit.addEventListener("click", function(){
    setTimeout(function(){
      alert("Your Form Successfully Signed up");
      location.reload();
    },800);
  });
  
  next1.addEventListener("click", function(event){
    event.preventDefault()
    form1.style.left = "-500px"
    form2.style.left = "200px"
    bullet[current].classList.add("active");
    number[current].classList.add("active");
    current += 1
  } )

  next2.addEventListener("click", function(event) {
    event.preventDefault()
      form2.style.left = "-500px"
      form3.style.left = "200px"
      bullet[current].classList.add("active");
      number[current].classList.add("active");
    current += 1
  }) 

  next3.addEventListener("click", function(event) {
    event.preventDefault()
      form3.style.left = "-450px"
      form4.style.left = "200px"
      bullet[current].classList.add("active");
      number[current].classList.add("active");
    current += 1
  })

  back1.addEventListener('click', function(event) {
    event.preventDefault()
      form1.style.left = "200px"
      form2.style.left = "2500px"
      bullet[current - 1].classList.remove("active");
      number[current - 1].classList.remove("active");
      current -= 1
  })
  
  back2.addEventListener('click', function(event) {
    event.preventDefault()
      form2.style.left = "200px"
      form3.style.left = "2500px"
      bullet[current - 1].classList.remove("active");
      number[current - 1].classList.remove("active");
      current -= 1
  })
  back3.addEventListener('click', function(event){
    event.preventDefault()
      form3.style.left = "200px"
      form4.style.left = "2500px"
      bullet[current - 1].classList.remove("active");
      number[current - 1].classList.remove("active");
      current -= 1
  })

}


document.addEventListener('DOMContentLoaded', btnsEvents)




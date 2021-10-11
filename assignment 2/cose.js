"use strict";

let responseData;
const request = fetch("http://127.0.0.1:5500/code.json  ")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    responseData = data;
    initactivity();
  });
const initactivity = function () {
  const container = document.querySelector(".container");
  const title = document.createElement("div");
  const subTitle = document.createElement("div");
  const pageTitle = document.createElement("div");
  const instruction = document.createElement("div");
  const instruction1 = document.createElement("div");
  const questions = document.createElement("div");
  const answers = document.createElement("div");
  const content = document.createElement("div");
  const blankDiv=document.createElement('div');
  const reset=document.createElement('div');
  const showMe=document.createElement('div');
  const submit=document.createElement('div');

  
    // radiobox.id = 'contact';
    // radiobox.value = 'email';




  title.className = "titleClass";
  subTitle.className = "subTitleClass";
  pageTitle.className = "pageTitleClass";
  instruction.className = "instructionClass";
  instruction1.className = "instruction1Class";
  questions.className = "questionsClass";
  
  content.className = "contentClass";
  reset.className="resetClass    resetDisableClass  ";
  showMe.className="showMeClass";
  submit.className="submitClass";




  reset.classList.remove('resetDisableClass');


  title.innerHTML = responseData.courseTitle;
  subTitle.innerHTML = responseData.subTitle;
  pageTitle.innerHTML = responseData.pageTitle;
  instruction.innerHTML = responseData.instruction;
  instruction1.innerHTML = responseData.instruction1;
  // reset = responseData.resetButton.image;
  // reset.innerHTML=responseData.resetButton.image;


  container.append(title);
  container.append(subTitle);
  container.append(pageTitle);
  container.append(instruction);
  container.append(instruction1);
  container.append(content);
  content.append(questions);
  
  
  container.append(reset);
  container.append(showMe);
  container.append(submit);
  

 

  
 

   
    
  

  for (let i = 0; i < responseData.options.length; i++) {
    // console.log("responseData.options[i]", responseData.options[i]['question']);
    const text = responseData.options[i]["question"];
    const lineBreak = document.createElement("br");
    const queDiv = document.createElement("div");
    const radioDiv=document.createElement('div');
    radioDiv.className='radioDivClass';
    radioDiv.id=`${[i]}`;
    // console.log(radioDiv);

    const radiobox = document.createElement('input');
    radiobox.type='radio'
    radiobox.value='true';
    radiobox.id=`${[i]}`;
    
    radiobox.name=`name${[i]}`;

    
   let label = document.createElement('label')
  label.htmlFor = 'contact';

 let description = document.createTextNode('True \xa0 \xa0');
  label.appendChild(description);

 
  
  
  const radiobox1 = document.createElement('input');
  radiobox1.type='radio';
  radiobox1.name='radiobox';
   radiobox1.value='false';
   radiobox1.name=`name${[i]}`;
   
   radiobox1.id=`${[i]}`;



   
 let label1 = document.createElement('label')
 label1.htmlFor = 'value';

let description1 = document.createTextNode('false');
label1.appendChild(description1);
  

    queDiv.className = "queDivClass";

    queDiv.appendChild(lineBreak);
    queDiv.append(`${[i]}:${text}   `);

    radioDiv.append(radiobox);
    radioDiv.appendChild(label);
     
     radioDiv.append(radiobox1);
     radioDiv.appendChild(label1);
     queDiv.append(radioDiv);
    questions.append(queDiv);

    
  // radiobox1.addEventListener('click',function(){
  //   let count;
  //   if(responseData.option)
  // })
  


   
   
     

  

  showMe.addEventListener('click',function(){
    inDiv.style.opacity=100;
  })

   

  

  
  

//  const radio1=document.getElementById('radio1');
//  console.log(radio1);




}
submit.addEventListener('click',function(){
  for(let i=0;i<responseData.options.length;i++){
  const nameLoop=  document.getElementsByName(`name${[i]}`);
  console.log(document.getElementById(`${i}`).value); 
  // console.log(radiobox.value);
    // if(radiobox.value===){
    //   console.log('true');

    // }
    // else{
    //   console.log('false');
    // }
  }
  // console.log('hi');
});
}



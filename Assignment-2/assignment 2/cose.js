"use strict";

let responseData;
const request = fetch("code.json")
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
  const blankDiv = document.createElement("div");
  const reset = document.createElement("div");
  const showMe = document.createElement("div");
  const submit = document.createElement("div");
  const modalWindow=document.createElement("div");
  const crossButton=document.createElement('button');

  
  
  

  title.className = "titleClass";
  subTitle.className = "subTitleClass";
  pageTitle.className = "pageTitleClass";
  instruction.className = "instructionClass";
  instruction1.className = "instruction1Class";
  questions.className = "questionsClass";

  content.className = "contentClass";
  reset.className = "resetClass    resetDisableClass  ";
  showMe.className = "showMeClass     showMeDisableClass";
  submit.className = "submitClass   submitDisableClass";
  modalWindow.className="modalWindowClass    closeModalClass";
  crossButton.className="crossButtonClass";

  reset.classList.remove("resetDisableClass");
  showMe.classList.remove("showMeDisableClass");
  // submit.classList.remove("submitDisableClass");

  title.innerHTML = responseData.courseTitle;
  subTitle.innerHTML = responseData.subTitle;
  pageTitle.innerHTML = responseData.pageTitle;
  instruction.innerHTML = responseData.instruction;
  instruction1.innerHTML = responseData.instruction1;
  crossButton.innerHTML='&times';
 
  console.log(crossButton);

  
console.log(crossButton);
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
  modalWindow.append(crossButton);
  container.append(modalWindow);

  for (let i = 0; i < responseData.options.length; i++) {
    // console.log("responseData.options[i]", responseData.options[i]['question']);
    const text = responseData.options[i]["question"];
    const lineBreak = document.createElement("br");
    const queDiv = document.createElement("div");
    queDiv.className = "queDivClass";
    const radioDiv = document.createElement("div");
    radioDiv.className = "radioDivClass";
    radioDiv.id = `${[i]}`;
    // console.log(radioDiv);

    const radiobox = document.createElement("input");
    radiobox.type = "radio";
    radiobox.value = "True";
    radiobox.id = `${[i]}`;
    radiobox.name = `name${[i]}`;

    let label = document.createElement("label");
    label.htmlFor = "True";

    let description = document.createTextNode("True \xa0 \xa0");
    label.appendChild(description);

    const radiobox1 = document.createElement("input");
    radiobox1.type = "radio";
    radiobox1.name = "radiobox";
    radiobox1.value = "False";
    radiobox1.name = `name${[i]}`;
    radiobox1.id = `${[i]}`;

    let label1 = document.createElement("label");
    label1.htmlFor = "False";

    let description1 = document.createTextNode("false");
    label1.appendChild(description1);

    var img = document.createElement("img");
    img.src = "rightSign.png";
    img.id = "img";

    var img1 = document.createElement("img");
    img1.src = "wrongSign.png";
    img1.id = "img1";

    queDiv.appendChild(lineBreak);
    queDiv.append(`${[i]}:${text}`);
    radioDiv.append(img);
    radioDiv.append(img1);
    radioDiv.append(radiobox);
    radioDiv.appendChild(label);

    radioDiv.append(radiobox1);
    radioDiv.appendChild(label1);
    queDiv.append(radioDiv);
    questions.append(queDiv);

   
    const nameLoop = document.getElementsByName(`name${[i]}`);
    const imgSelect = document.querySelectorAll("#img");
    const imgSelect1 = document.querySelectorAll("#img1");
   
   
  
    radiobox.addEventListener("click", function () {
     
      if (nameLoop[0].checked) {
        reset.classList.add("resetDisableClass");
      }
     
    });

    radiobox1.addEventListener("click", function () {
      const nameLoop = document.getElementsByName(`name${[i]}`);

      if (nameLoop[1].checked) {
        reset.classList.add("resetDisableClass");
      }
    });
    reset.addEventListener("click", function () {
     
      if (nameLoop[0].checked) {
        nameLoop[0].checked = false;
      } else if (nameLoop[1].checked) {
        nameLoop[1].checked = false;
      }
      reset.classList.remove("resetDisableClass");
      showMe.classList.remove("showMeDisableClass");
      submit.classList.remove("submitDisableClass");
      imgSelect[i].style.opacity = 0;
      imgSelect1[i].style.opacity = 0;
    });
    
  }
  const answer=[];
  const True=[];
  let count=0;
  submit.addEventListener("click", function () {
    for (let i = 0; i < responseData.options.length; i++){
      const text = responseData.options[i]["answer"];
      answer.push(text);
      const nameLoop = document.getElementsByName(`name${[i]}`);
      const imgSelect = document.querySelectorAll("#img");
    const imgSelect1 = document.querySelectorAll("#img1");
   
      if (nameLoop[0].checked) {
      
      True.push(nameLoop[0].value);
      
      
    } else if(nameLoop[1].checked){
      True.push(nameLoop[1].value);
    }
  
    if(True[i]===answer[i]){
      count++;
      imgSelect[i].style.opacity = 100;
    }else if(True[i]!=answer[i]){
      imgSelect1[i].style.opacity = 100;

    }
    if(count===5)
    {
    modalWindow.style.opacity=100;
    modalWindow.innerHTML="Thats Correct!"
    }
    else{ 
      modalWindow.innerHTML="Not quite , Try again";
      modalWindow.style.opacity=100;
      crossButton.style.opacity=100;

    }
    console.log('op',True);
    console.log('answer:',answer);

   
    showMe.classList.add("showMeDisableClass");
  }
  });
};

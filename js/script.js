var searchBar = document.getElementsByClassName("page-header cf")[0];
var studentList = document.getElementsByClassName('student-item cf');
var itemsPerPage = 10;

function showPage(list, page){//shows page based on list and page (1)
   let start=(page*itemsPerPage)-itemsPerPage;
   let end=page*itemsPerPage;
   for(let i=0; i<list.length; i++){
      if(i>=start&&i<end){
         list[i].style.display=""
      }else{
         list[i].style.display="none"
      }
   }
}

let div1=document.createElement("div");

//Buttons on Page
function addPageLinks(list){
   div1.className="pagination";
   if(div1.children.length>0){
      let i=0
      while(i<div1.children.length){
         console.log(div1.children[i]);
         div1.removeChild(div1.children[i]);
      }//removes old page buttons
   }
   for(let i=1;i<list.length/itemsPerPage+1;i++){
      let btn=document.createElement("button");
      btn.textContent=i;
      div1.appendChild(btn);
      btn.addEventListener("click", () => {
         showPage(studentList, i);
      });
      console.log(i);
   }//sets new page buttons
   document.querySelector(".page").appendChild(div1);
}

//first calls

showPage(studentList, 1);
addPageLinks(studentList);

//CSS formatting and element creating
let newDiv = document.createElement("div");
newDiv.className="student-search"
let divine = document.createElement("input");
divine.className="input";
divine.textContext = "Search for a name";
let searchBtn = document.createElement("button");
searchBtn.className="button";
searchBtn.textContent="Search";

divine.addEventListener("keyup", () => {//keyup search event
   let arr=[];
   for(let i=0;i<studentList.length;i++){
      if(studentList[i].querySelector("h3").innerHTML.indexOf(divine.value)>=0){
         arr.push(studentList[i]);
      }
   }
   console.log(arr);
   for(let x=0;x<studentList.length;x++){
      studentList[x].style.display="none";
   }
   for(let x=0;x<arr.length;x++){
      arr[x].style.display="";
   }
   showPage(arr, 1);
   addPageLinks(arr);
});
searchBtn.addEventListener("click", () => {//search button click search event
   let arr=[];
   for(let i=0;i<studentList.length;i++){
      if(studentList[i].querySelector("h3").innerHTML.indexOf(divine.value)>=0){
         arr.push(studentList[i]);
      }
   }
   for(let x=0;x<studentList.length;x++){
      studentList[x].style.display="none";
   }
   for(let x=0;x<arr.length;x++){
      arr[x].style.display="";
   }
   showPage(arr, 1);
   addPageLinks(arr);
});
//appending the button and search bar to the div that connects to the CSS file.
newDiv.append(divine);
newDiv.append(searchBtn);
searchBar.append(newDiv);
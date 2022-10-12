// function createLable(tag,attr,attrvalue,cont){
//     var ele = document.createElement(tag);
//     ele.setAttribute=(attr,attrvalue);
//     ele.innerHTML=cont;
//     return ele;
//     }
// function createInput(tag,attr,attrvalue,attr1,attrvalue1){
//     var ele = document.createElement(tag);
//     ele.setAttribute=(attr,attrvalue);
//     ele.setAttribute=(attr1,attrvalue1);
//     return ele;
    
// }
// function createbr(tag){
//     var ele = document.createElement(tag)
//     return ele;

// }
// var lable1 = createLable("lable","for","fn","First Name");
// var br1 = createbr("br");
// var input1 = createInput("input","type","text","id","fn");
// var br2 = createbr("br");
// var lable2 = createLable("lable","for","mn","Midle Name");
// var br3 = createbr("br");
// var input2 = createInput("input","type","text","id","mn");
// var br4 = createbr("br");
// var lable3 = createLable("lable","for","ln","Last Name");
// var br5 = createbr("br");
// var input3 = createInput("input","type","text","id","ln");
// var br6 = createbr("br");
// var lable4 = createLable("lable","for","pn","Phone Number");
// var br7 = createbr("br");
// var input4 = createInput("input","type","text","id","pn");

// document.body.append(lable1,br1,input1,br2,lable2,br3,input2,br7,lable3,br4,input3,br5,lable4,br6,input4);
function foo(){
    var fi = document.getElementById("fn").value;
    var mi = document.getElementById("mn").value;
    var li = document.getElementById("ln").value;
    var em = document.getElementById("email").value;
    var ps =  document.getElementById("pass").value;
    console.log("First name :" + fi +" "+  "Middle Name :" + mi +" "+"Last name :"+ li+" "+ "Email :" + em+" "+"Password"+ps)
}
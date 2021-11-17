// function myFunction(){
//     var w = window.open();
//     w.document.open();
//     w.document.write("<p>Hello World!</p>");
//     w.document.close();
    
// }

// function newf(){
//     document.getElementById("domain").innerHTML = "DOM Manipülasyonu Yaptık!";
// }

// document.getElementById("btnClick").addEventListener("click",onClicked());
// function onClicked(){
//     alert("Butona Tıklandı");
// }

// function js_style(){
//     console.log("fonksiyon calisti")
//     text.style.fontSize = "15pt";
//     text.style.fontFamily = "Comic Sans MS";
//     text.style.color = "blue";
// }

// function getFormValue(){
//    var x = document.getElementById("form1");

//    for(var i = 0; i<x.length; i++)
//    {
//        if(x.elements[i].value!="Gönder")
//        {
//            console.log(x.elements[i].value);
//        }
//    }
    
// }

// function changeBG()
// {
//     docBody = document.getElementsByTagName("body")[0];
//     getAllPrag = docBody.getElementsByTagName("p");
//     myp = getAllPrag[0];
//     myp.style.background = "blue";

    
// }

// function getAttributes()
// {
//     var href = document.getElementById("w3r").href;
//     var hlang = document.getElementById("w3r").hreflang;
//     var rel = document.getElementById("w3r").rel;
//     var target = document.getElementById("w3r").target;
//     var type = document.getElementById("w3r").type;
//     console.log("Href: " + href + ", hreflang: " + hlang + ", rel: " + rel +
//     ", terget: " + target + ", type: " +type);
// }

// let fullName = prompt("Lutfen Adinizi Giriniz: ", "Lutfen sadece kelime giriniz!")

// let myName = document.querySelector("#myh1")
// myName.innerHTML = `${myName.innerHTML} <small style = "color:blue">${fullName}</small>`

// let lastChild = document.querySelector("ul#list>li:last-child")
// lastChild.innerHTML = "yeni içerik"

// let firstChild = document.querySelector("ul#list>li:first-child")
// firstChild.innerHTML = "yeni icerik2"

// let ulDOM = document.querySelector("ul#list")
// let liDOM = document.createElement("li")

// liDOM.innerHTML = "yeni ogemiz"

// ulDOM.append(liDOM)
// ulDOM.prepend(liDOM)
var one = document.getElementById("walterwhite");

var two  = document.getElementsByClassName("alternate");

for (var i = 0; i < two.length; i++) { 
     two[i].style.color  = "red"; 
}

var liste = document.querySelector("ul");

var urun = document.querySelector("#veri"); 
var ekle = document.querySelector("#ekle");

// ekle.addEventListener("click",function(){
//   // createElement ile yeni bir listItem (li) oluşturuyoruz
//   var li=document.createElement("li"); 
  
//   // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
//   li.textContent=veri.value; 
  
//   // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
//   liste.appendChild(li);
              
//   // Veri inputu içerisindeki metni siliyoruz.
//   veri.value = "";
// });

let greeting = document.querySelector("#greeting");
greeting.classList.add("text-primary")
console.log(greeting.classList);

console.log(!!2);





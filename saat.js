
let ad = prompt("Lütfen adinizi giriniz: ");
let addName = document.querySelector("#name");
addName.innerHTML = addName.innerHTML + ad + "!" + " Hoş Geldiniz!";
let tarih = new Date();
// let gun = tarih.getDay();
// let saat = tarih.getMinutes();

let saatyaz = document.querySelector("#saatyaz");

saatyaz.innerHTML = tarih + " tarihinde Kodluyoruz Front End Web Development Patikasının JavaScript bölümü 1. ödevindesiniz";

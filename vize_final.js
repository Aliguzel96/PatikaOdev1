

let vize = 90;
let final = 90;

let ort = vize*0.3 + final*0.7;

if(ort > 84)
{
    console.log("Notunuz AA!")
}
else if(ort > 49 && ort < 85)
{
    console.log("Notunuz CC - GEÇTİNİZ!")
}
else if(ort > 30 && ort < 50)
{
    console.log("DC - KOŞULLU")
}
else{
    console.log("KALDINIZ (FF)")
}
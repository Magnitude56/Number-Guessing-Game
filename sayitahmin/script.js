let yazi = document.getElementById("text");
var btn = document.getElementById("tahmimEtbtn");
var label = document.getElementById("label");
const rastgeleSayi = parseInt(Math.round(Math.random()*1000));
var uyari = document.getElementById("uyari");
var dcevap = false;
var hak = 10;
var say = false;
var depo = [];
var hakyeri = document.getElementById("hak");
var hakyazi = document.getElementById("hakyazi");
var tekrar = document.getElementById("tekrarOyna");
var dizi = ["X", "?", "A", "@", "/", "1", "+"];
var dizi2 = ["blue", "yellow", "red", "purple", "green", "black", "orange"];


yazi.addEventListener("keyup",enterekle);

hakyazi.innerHTML = "Kalan Tahmin Hakkı : "+`<span style="color:chartreuse;">${hak}</span>`;

tekrar.addEventListener("click",tekrarOyna);

function btnclick(){
    if(hak > 0)
    {
        if(yazi.value == "" || yazi.value == null)
        {
            uyari.innerHTML = "Lütfen tahmin alanını boş bırakmayın";
            yazi.style.border = "2px solid red";
        }
        else if(!parseInt(yazi.value)){
            uyari.innerHTML = "Lütfen Sayı Dışında Bir Şey Girmeyiniz";
            yazi.style.border = "2px solid red";
        }
        else if(yazi.value > rastgeleSayi){
            for(var i = 0; i < depo.length; i++)
            {
                if(yazi.value == depo[i])
                {
                    uyari.innerHTML = "Bu Sayıyı Zaten Tahmin Ettiniz";
                    yazi.style.border = "2px solid red";
                    say = true;
                }
            }
            if(say == false)
            {
                uyari.innerHTML = "<span style='color:orangered'>Yanlış Tahmin Daha <span style='color:yellow'>Küçük</span> Sayı Giriniz</span>";
                hak--;
                yazi.style.border = "2px solid orangered";
            }
            else{
                say = false;
            }
        }
        else if(yazi.value < rastgeleSayi){
            for(var i = 0; i < depo.length; i++)
            {
                if(yazi.value == depo[i])
                {
                    uyari.innerHTML = "Bu Sayıyı Zaten Tahmin Ettiniz";
                    yazi.style.border = "2px solid red";
                    say = true;
                }
            }
            if(say == false)
            {
                uyari.innerHTML = "<span style='color:yellow'>Yanlış Tahmin Daha <span style='color:orangered'>Büyük</span> Sayı Giriniz</span>";
                hak--;
                yazi.style.border = "2px solid yellow";
            }
            else{
                say = false;
            }
        }
        else if(yazi.value == rastgeleSayi)
        {
            uyari.innerHTML = "<span style='color:green;'>Tebrikler Doğru Tahmin<span>";
            dcevap = true;
            yazi.style.border = "2px solid green";
        }
        var sayac = 0;
            for(var i = 0; i < depo.length; i++)
            {
                if(depo[i] == yazi.value)
                {
                    sayac++;
                }   
            }
            if(sayac == 0 && parseInt(yazi.value))
            {
                depo.push(yazi.value);
            }
            hakyazi.innerHTML = "Kalan Tahmin Hakkı : "+`<span style="color:chartreuse;">${hak}</span>`;
    }
    else{
        hakyeri.innerHTML = "<span style='font-size:20px; color:red'>Tahmin Etme Hakkınız Kalmadı!<span>";
    }
    yazi.value = "";
}
function tekrarOyna(){
    window.location.reload();
}
function enterekle(e){
    if(e.keyCode == 13)
    {
        btnclick();
        e.preventDefault();
        yazi.value = "";
    }
}
var rastsay = 0;
var a = document.getElementById("tahminEtbtn");
function labelanime(){
    if(hak > 0){
        if(dcevap != true)
        {
            var rst1 = Math.round(Math.random()*4);
            var rst2 = Math.round(Math.random()*6);
            var rst3 = Math.round(Math.random()*6);
            label.innerHTML = dizi[rst1] + " "+dizi[rst2]+" "+dizi[rst3];
            /*switch(rastsay)
            {
                case 0:
                    label.innerHTML = "<span style='color:red'>?</span>"+"<span style='color:chartreuse'>?</span>"+"<span style='color:chartreuse'>?</span>";
                    rastsay++;
                break;
                case 1:
                    label.innerHTML = "<span style='color:chartreuse'>?</span>"+"<span style='color:red'>?</span>"+"<span style='color:chartreuse'>?</span>";
                    rastsay++;
                break;
                case 2:
                    label.innerHTML = "<span style='color:chartreuse'>?</span>"+"<span style='color:chartreuse'>?</span>"+"<span style='color:red'>?</span>";
                    rastsay++;
                break;
                case 3:
                    rastsay = 0;
                break; 
            }*/
        }
        else{
            yazi.remove();
            a.remove();
            hakyazi.remove();
            tekrar.style.margin = "0 0 0 100px";
            label.innerHTML = rastgeleSayi;
        }
    }
    else{
        yazi.remove();
        uyari.remove();
        hakyazi.remove();
        a.remove();
        tekrar.style.margin = "0 0 0 100px";
        label.innerHTML = "<span style='color:red'>Oyunu Kaybettiniz <br> Sayı : </span>"+rastgeleSayi;
    }
    
}
if(dcevap != true)
{
    setInterval(labelanime,400);
}




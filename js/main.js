var txt1 = `יוצא לאור בcity
עורך ראשי: firstName reporterFamilyName 
`
var txt2 = `נבחרת ישראל
בhobby
העפילה לשלב
הגמר שייערך
בעוד שנה
עמוד 5
`
var txt3 = `משרד התחבורה
הודיע כי מעתה
בשעות הבוקר
המוקדמות,
כל הרמזורים
יהיו בצבע favoriteColor
   מעושן | עמוד 7`

var txt4 = `בניסוי שהתקיים
בחודש האחרון
במרכז החלל
הישראלי הצליחה
ישראל לשגר
חללית לvacation
 עמוד 2`

var txt5 = `בקידוחים שנערכו השבוע באזור  lastPlace,
 התגלה מצבור של drink בהיקף
המוערך בכ age- מיליון חביות | עמוד 18`

var txt6 = `משטרת ישראל החליטה כי מעתה תושבים 
 ששם משפחתם מתחיל באות lastLetter' לא יקבלו,
  שיחות טלפון מקבר רחל | עמוד 24
`

function generate(event) {
    event.preventDefault();
    replaceTxt('firstName');
    replaceTxt('age');
    replaceTxt('city');
    replaceTxt('reporterFamilyName');
    replaceTxt('hobby');
    replaceTxt('vacation');
    replaceTxt('lastPlace');
    replaceTxt('drink');
    replaceTxt('favoriteColor');
    replaceTxt('lastLetter');

    document.querySelector('.txt1').innerText = txt1;
    document.querySelector('.txt2').innerText = txt2;
    document.querySelector('.txt3').innerText = txt3;
    document.querySelector('.txt4').innerText = txt4;
    document.querySelector('.txt5').innerText = txt5;
    document.querySelector('.txt6').innerText = txt6;

    document.getElementById("bg").remove();
    document.querySelector('.html-background').style.background = 'none';
    var output = document.getElementById("output");
    var news = document.querySelector(".news");
    output.style.display = 'block';
    // output.style.backgroundSize = 'contain';
    //output.style.padding = '250px 25px 0 0';
    // news.style.maxWidth = '500px';
    news.style.letterSpacing = '0.2px';
    // document.querySelector('.pic2').style.maxWidth = '152px';
    // document.querySelector('.pic4').style.height = '95px';
    // document.querySelector('.pic5').style.maxWidth = '90px';
    // document.querySelector('.pic5').style.padding = '5px 14px 2px 2px';

    // document.querySelector('.txt2').style.padding = '5px 7px 2px 10px';
    // document.querySelector('.txt3').style.padding = '5px 7px 2px 10px';
    // document.querySelector('.txt4').style.padding = '5px 7px 3px 10px';
    // document.querySelector('.txt6').style.padding = '3px 5px 0 5px';

    html2canvas(document.querySelector(".output"), {
        // scale: 1,
        // windowWidth: 730,
        // windowHeight: 620
    }).then(canvas => {
        document.querySelector('.canvas-container').appendChild(canvas);
        //output.style.display = 'none';
    });

}

function replaceTxt(prop) {
    const el = document.querySelector(`input[name=${prop}]`)
    const val = el.value;
    txt1 = txt1.replace(new RegExp(`${prop}`, 'g'), val)
    txt2 = txt2.replace(new RegExp(`${prop}`, 'g'), val)
    txt3 = txt3.replace(new RegExp(`${prop}`, 'g'), val)
    txt4 = txt4.replace(new RegExp(`${prop}`, 'g'), val)
    txt5 = txt5.replace(new RegExp(`${prop}`, 'g'), val)
    txt6 = txt6.replace(new RegExp(`${prop}`, 'g'), val)
}

function downloadImg(elLink) {
    const elCanvas = document.querySelector('canvas');
    var imgContent = elCanvas.toDataURL()
    elLink.href = imgContent
}

// const shareData = {
//     title: 'עיתון',
//     text: 'הכינו לעצמכם עיתון',
//     url: 'https://misterBIT.co.il',
// }

// async function share() {
//     try {
//         await navigator.share(shareData)
//         console.log('Shared successfully')
//     } catch (err) {
//         console.log('Cannot share', err)
//     }
// }
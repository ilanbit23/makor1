var txt1 = `
מחירי הproductName  בנסיקה: firstName אישר יבוא ירקות באיחור
רגע לפני החג, בעוד שמחירי הירקות בעלייה מתמדת מאז גל החום ובצל המחסור החמור במלפפונים, שמחירם לצרכן הגיע עד ל-14.90 שקל לק"ג - firstName חתם על צו יבוא ללא מכס. ובינתיים: חשש למחסור גם בproductName 
`
var txt2 = `
מחירי הproductName  בנסיקה: firstName אישר יבוא ירקות באיחור
רגע לפני החג, בעוד שמחירי הירקות בעלייה מתמדת מאז גל החום ובצל המחסור החמור במלפפונים, שמחירם לצרכן הגיע עד ל-14.90 שקל לק"ג - firstName חתם על צו יבוא ללא מכס. ובינתיים: חשש למחסור גם בproductName 
`
const shareData = {
    title: 'עיתון',
    text: 'הכינו לעצמכם עיתון',
    url: 'https://misterBIT.co.il',
}

function generate(event) {
    event.preventDefault();
    replaceTxt('firstName');
    replaceTxt('productName');
    // const elFirstName = document.querySelector('input[name=firstName]')
    // const firstName = elFirstName.value;
    // txt1 = txt1.replace(new RegExp(`firstName`, 'g'), firstName)
    document.querySelector('.txt1').innerText = txt1;
    document.querySelector('.txt2').innerText = txt2;


    html2canvas(document.querySelector(".output")).then(canvas => {
        document.querySelector('.canvas-container').appendChild(canvas)
    });

}

function replaceTxt(prop) {
    const el = document.querySelector(`input[name=${prop}]`)
    const val = el.value;
    txt1 = txt1.replace(new RegExp(`${prop}`, 'g'), val)
    txt2 = txt2.replace(new RegExp(`${prop}`, 'g'), val)
}

function downloadImg(elLink) {
    const elCanvas = document.querySelector('canvas');
    var imgContent = elCanvas.toDataURL()
    elLink.href = imgContent
}


async function share() {
    try {
        await navigator.share(shareData)
        console.log('Shared successfully')
    } catch (err) {
        console.log('Cannot share', err)
    }
}

let dateact=new Date()
let day=dateact.getDate()
let year=dateact.getFullYear()
let month=dateact.getMonth()+1
document.getElementById('calcul').onclick=function() {
    let inday=Number(document.getElementById('iday').value)
    let inmonth=Number(document.getElementById('imonth').value)
    let inyear=Number(document.getElementById('iyear').value)
    let dateAc=(year*360)+(month*30)+day
    let donne=(inyear*360)+(inmonth*30)+inday
    let result=dateAc-donne
    let Y=parseInt(result/360)
    let M=parseInt((result-Y*360)/30)
    let D=parseInt(result-Y*360-M*30)
    if (inday>0 && inday <=31 && inmonth>0 && inmonth<=12 && inyear>0){
    document.getElementById('years').innerHTML=Y
    document.getElementById('months').innerHTML=M
    document.getElementById('days').innerHTML=D
}
    else {
        alert("ERROR")
}
}
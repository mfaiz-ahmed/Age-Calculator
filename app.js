const date = document.querySelector('#date');
date.max = new Date().toISOString().split("T")[0];


const result = document.querySelector('.result')

function calculateAge(){
// birth date 

    const birthDate = new Date(date.value);
    
    const d1 = birthDate.getDate();
    const m1 = birthDate.getMonth() + 1;
    const y1 = birthDate.getFullYear();

    // current date 

    const currentDate = new Date();

    const d2 = currentDate.getDate();
    const m2 = currentDate.getMonth() + 1;
    const y2 = currentDate.getFullYear();
    
    let y3;
    let m3;
    let d3;

     y3 = y2 - y1;

   if(m2 >= m1) {
        m3 = m2 - m1
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 -d1;
    }
    else{
        m3--;
       d3 =  getDaysInMonth(y1 , m1) + d2 - d1
    }
    if(m3 < 0){
    m3 = 11;
    y3--;}
    result.innerHTML = `You are ${y3} years , ${m3} months and ${d3} days old`;
}


function getDaysInMonth(year , month){
    return new Date(year , month , 0).getDate()
}



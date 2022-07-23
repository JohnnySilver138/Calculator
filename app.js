const text = document.querySelector('.row1st > .column1 > h1')
const elem21 = document.querySelector('.row2nd > .column1')
const elem22 = document.querySelector('.row2nd > .column2')
const elem31 = document.querySelector('.row3rd > .column1')
const elem32 = document.querySelector('.row3rd > .column2')
const elem33 = document.querySelector('.row3rd > .column3')
const elem34 = document.querySelector('.row3rd > .column4')
const elem41 = document.querySelector('.row4th > .column1')
const elem42 = document.querySelector('.row4th > .column2')
const elem43 = document.querySelector('.row4th > .column3')
const elem44 = document.querySelector('.row4th > .column4')
const elem51 = document.querySelector('.row5th > .column1')
const elem52 = document.querySelector('.row5th > .column2')
const elem53 = document.querySelector('.row5th > .column3')
const elem54 = document.querySelector('.row5th > .column4')
const elem61 = document.querySelector('.row6th > .column1')
const elem62 = document.querySelector('.row6th > .column2')
const elem63 = document.querySelector('.row6th > .column3')

let result = '0'
let cal = ''

function add(number){
    if(result === '0'){
        result = ''
    }
    result += number
    text.textContent = result
}

elem21.onmousedown = () =>{
    elem21.style.backgroundColor = 'gray'
}
elem21.onclick = () => {
    elem21.style.backgroundColor = 'dimgray'
    result = '0'
    cal = ''
    text.textContent = result
}

elem22.onmousedown = () =>{
     elem22.style.backgroundColor = '#fb9902'
}
elem22.onclick = () => {
    elem22.style.backgroundColor = 'orange'
    cal += result + '/'
    result = ''
}

elem31.onmousedown = () =>{
    elem31.style.backgroundColor = '#A0A0A0'
}
elem31.onclick = () => {
    elem31.style.backgroundColor = 'gray'
    add('7')
}

elem32.onmousedown = () =>{
    elem32.style.backgroundColor = '#A0A0A0'
}
elem32.onclick = () => {
    elem32.style.backgroundColor = 'gray'
    add('8')
    text.textContent = result
}

elem33.onmousedown = () =>{
    elem33.style.backgroundColor = '#A0A0A0'
}
elem33.onclick = () => {
    elem33.style.backgroundColor = 'gray'
    add('9')
}

elem34.onmousedown = () =>{
    elem34.style.backgroundColor = '#fb9902'
}
elem34.onclick = () => {
    elem34.style.backgroundColor = 'orange'
    cal += result + '*'
    result = ''
}

elem41.onmousedown = () =>{
    elem41.style.backgroundColor = '#A0A0A0'
}
elem41.onclick = () => {
    elem41.style.backgroundColor = 'gray'
    add('4')
}

elem42.onmousedown = () =>{
    elem42.style.backgroundColor = '#A0A0A0'
}
elem42.onclick = () => {
    elem42.style.backgroundColor = 'gray'
    add('5')
}

elem43.onmousedown = () =>{
    elem43.style.backgroundColor = '#A0A0A0'
}
elem43.onclick = () => {
    elem43.style.backgroundColor = 'gray'
    add('6')
}

elem44.onmousedown = () =>{
    elem44.style.backgroundColor = '#fb9902'
}
elem44.onclick = () => {
    elem44.style.backgroundColor = 'orange'
    cal += result + '-'
    result = ''
}

elem51.onmousedown = () =>{
    elem51.style.backgroundColor = '#A0A0A0'
}
elem51.onclick = () => {
    elem51.style.backgroundColor = 'gray'
    add('1')
}

elem52.onmousedown = () =>{
    elem52.style.backgroundColor = '#A0A0A0'
}
elem52.onclick = () => {
    elem52.style.backgroundColor = 'gray'
    add('2')
}

elem53.onmousedown = () =>{
    elem53.style.backgroundColor = '#A0A0A0'
}
elem53.onclick = () => {
    elem53.style.backgroundColor = 'gray'
    add('3')
}

elem54.onmousedown = () =>{
    elem54.style.backgroundColor = '#fb9902'
}
elem54.onclick = () => {
    elem54.style.backgroundColor = 'orange'
    cal += result + '+'
    result = ''
}

elem61.onmousedown = () =>{
    elem61.style.backgroundColor = '#A0A0A0'
}
elem61.onclick = () => {
    elem61.style.backgroundColor = 'gray'
    if(result != '0'){
        result += '0'
    }
    text.textContent = result
}

elem62.onmousedown = () =>{
    elem62.style.backgroundColor = '#A0A0A0'
}
elem62.onclick = () => {
    elem62.style.backgroundColor = 'gray'
    if(result === ''){
            result = '0.'
            text.textContent = result
    } else{
        let check = true
        for(let i = 0; i < result.length; i++){
            if(result[i] === '.'){
                check = false
            }
        }
        console.log(check)
        if(check === true){
            result += '.'
        }
        text.textContent = result
    }
}

elem63.onmousedown = () =>{
    elem63.style.backgroundColor = '#fb9902'
}
elem63.onclick = () => {
    elem63.style.backgroundColor = 'orange'
    cal += result
    text.textContent = eval(cal)
}
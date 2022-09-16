const board = document.querySelector('#board')
const colors = ['#40E0D0','#20B2AA','#48D1CC','#008B8B','#00FFFF','#00CED1','#00BFFF','#1E90FF','#4169E1','#000080']
const SQUARES_NUMBER = 2048
for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square))

    square.addEventListener('mouseleave', () =>
        removeColor(square))
    
    board.append(square)
  }
function setColor(element){
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 1 5px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element,style.boxShadow = `0 0 2px #000`
}

function getColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
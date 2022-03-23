const tileDisplay = document.querySelector('.tileContainer')
const keyboard = document.querySelector('.keyContainer')

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]

const grid = [
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
]

grid.forEach(grid => {
    const gridElement = document.createElement('div')
    gridElement.setAttribute('id', grid)
    tileDisplay.append(gridElement)
})

const handleClick = (e) => {
        console.log(e.target)
}

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click',handleClick)
    keyboard.append(buttonElement)
    
})
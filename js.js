let gridHolder = document.getElementById('grid-holder');
let rows = 16;
let columns = 16;
let rowList = [];
for(i = 0; i < rows; i++){
     let newRow = document.createElement('div');
     newRow.classList.add('row');
     newRow.style.width = `${columns * 10 + columns * 2/* 2 because block.style.border is 1 (double it)*/}px`;
     gridHolder.appendChild(newRow);
     rowList.push(newRow);
}
for(const row of rowList){
    for(i = 0; i < columns; i++){
        let newBlock = document.createElement('div');
        newBlock.classList.add('block');
        newBlock.style.flexBasis = '10px';
       newBlock.addEventListener('mouseover', () => fillIn(newBlock));
        row.appendChild(newBlock);
    }
}
function fillIn(fillMeIn){
    fillMeIn.style.backgroundColor = 'black';
}


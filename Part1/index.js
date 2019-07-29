console.log('who dis?')
const playSpan = document.getElementById('player')


const empty = []


const play = (boxID) => {
    const clickedBox = document.getElementById(boxID)
     if(playSpan.innerText === 'X'){
         playSpan.innerText = 'O'
         clickedBox.innerText = 'X'
         empty[boxID] = 'X'
     }else{
         playSpan.innerText = 'X'
         clickedBox.innerText = 'O'
         empty[boxID] = 'O'
     }
     console.log(empty)

    if(empty[0] === empty[1] && empty[0] === empty[2] && empty[0] != undefined){
        window.alert(`${empty[0]} wins`)
    }
    if(empty[0] === empty[3] && empty[0] === empty[6] && empty[0] != undefined){
        window.alert(`${empty[0]} wins`)
    }

    if(empty[0] === empty[4] && empty[0] === empty[8] && empty[0] != undefined){
        window.alert(`${empty[0]} wins`)
    }
    if(empty[1] === empty[4] && empty[1] === empty[7] && empty[1] != undefined){
        window.alert(`${empty[1]} wins`)
    }
    if(empty[2] === empty[5] && empty[2] === empty[8] && empty[2] != undefined){
        window.alert(`${empty[2]} wins`)
    }
    if(empty[2] === empty[4] && empty[2] === empty[6] && empty[2] != undefined){
        window.alert(`${empty[2]} wins`)
    }
    if(empty[3] === empty[4] && empty[3] === empty[5] && empty[3] != undefined){
        window.alert(`${empty[3]} wins`)
    }
    if(empty[6] === empty[7] && empty[6] === empty[8] && empty[6] != undefined){
        window.alert(`${empty[6]} wins`)
    }
    let boardFull = true;
for(let i = 0; i <= 8; i++ ){
    if(empty[i] === undefined){
        boardFull = false;
    }

}if(boardFull === true){
    alert("CAT's")}
    
}


import { winmove } from "./Winmove";
export const handleMove = (move,setarr, data, map, rdata, setCount,setLock,checkWin) => {
    let randomIndex=10;
    if(move===2){
        if(data[0]==map[rdata[0][1]]){
            if(data[3]||data[5]||data[6]||data[7]||data[8])randomIndex=2;
            if(data[4])randomIndex=8;
            if(data[1]||data[2])randomIndex=6;
        }
        else if(data[2]==map[rdata[0][1]]){
            if(data[0]||data[1]||data[3]||data[6]||data[7])randomIndex=8;
            if(data[4])randomIndex=6;
            if(data[5]||data[8])randomIndex=0;
        }
        else if(data[6]==map[rdata[0][1]]){
            if(data[0]||data[1]||data[2]||data[3]||data[5])randomIndex=8;
            if(data[4])randomIndex=2;
            if(data[7]||data[8])randomIndex=0;
        }
        else if(data[8]==map[rdata[0][1]]){
            if(data[0]||data[1]||data[2]||data[3]||data[5])randomIndex=6;
            if(data[4])randomIndex=0;
            if(data[6]||data[7])randomIndex=2;
        }
    }
    else if(move===3){
        if ((data[0] === data[8] && data[8] === map[rdata[0][0]])||(data[2] === data[6] && data[6] === map[rdata[0][0]])) {
            const possibleIndexes = [1, 3, 5, 7];
            randomIndex = possibleIndexes[Math.floor(Math.random() * possibleIndexes.length)];
            // console.log(randomIndex);
        }
        else if((data[0] !== data[8] && data[8] && data[0])||(data[2] !== data[6] && data[6] && data[2])) {
            if(data[0])randomIndex=2;
            else randomIndex=0;
        }
        else if((data[1] && data[7] && data[7] === map[rdata[0][0]])||(data[3] && data[5] && data[3] === map[rdata[0][0]])) {
            const possibleIndexes = [0, 2, 6, 8];
            randomIndex = possibleIndexes[Math.floor(Math.random() * possibleIndexes.length)];
            console.log(randomIndex);
        }
        else if((data[1]&&data[3]))randomIndex=2;
        else if((data[1]&&data[5]))randomIndex=0;
        else if((data[3]&&data[7]))randomIndex=0;
        else if((data[7]&&data[5]))randomIndex=2;

        else if((data[7]&&data[0])||(data[1]&&data[6]))randomIndex=5;
        else if((data[7]&&data[2])||(data[1]&&data[8]))randomIndex=3;
        else if((data[5]&&data[0])||(data[3]&&data[2]))randomIndex=7;
        else if((data[5]&&data[6])||(data[3]&&data[8]))randomIndex=1;
    }
    else if(move===4){
        if(data[0]&&data[2]&&data[6]&&!data[8])randomIndex=8;
        else if(data[0]&&data[2]&&data[8]&&!data[6])randomIndex=6;
        else if(data[0]&&data[6]&&data[8]&&!data[2])randomIndex=2;
        else if(data[2]&&data[6]&&data[8]&&!data[0])randomIndex=0;
        else randomIndex=4;
    }
    // data[0]='';
    winmove(move,setarr,data,rdata,map,randomIndex,setCount,setLock,checkWin);
  };
  
export const evaluatebar=(i,j,seti,setj,count,data,rdata,arr,lock)=>{
    // console.log("lock", lock);
    if(lock===true&&i===1)seti(3);
    if(lock===true&&i===2)seti(4);
    if(count===2){
        if((data[0]||data[2]||data[6]||data[8])&&!data[4]){seti(1);setj(4);}
    }
    else if(count===3){
        let t1=arr[0],t2=arr[2];
        if(t1>t2)[t1,t2]=[t2,t1];
        console.log(t1,1,"1");
        if((t1===1&&t2==7)||(t1===3&&t2==5)){seti(2);setj(5);}
    }
    if(i===1&&j-1)setj(j-1);
    if(i===2&&j-1)setj(j-1);
}
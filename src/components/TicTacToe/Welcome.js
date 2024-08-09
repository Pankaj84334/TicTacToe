import React,{useState,useEffect} from "react";
import './TTT.css';
import vsComp from "./vsComputer_icon.jpg"
import twop from "./2Player_icon.jpg"
import circle from "../assets/Tic_tac_toe_circle.jpg"
import cross from "../assets/Tic_tac_toe_cross.jpg"
// import board from "../assets/Tic_tac_toe_board.jpg"
import heart from "../assets/Tic_tac_toe_heart.jpg"
import Aaa from "./a.jsx"
import {useNavigate} from "react-router-dom"
// import { useNavigate } from 'react-router-dom';
const Welcome = () =>{
    const navi=useNavigate();
    const [dataToSend2p,setdataToSend2p]=useState([]);
    const [dataToSendcomp,setdataToSendcomp]=useState([]);
    const [text1,showtext1]=useState('Pick Your Badge:');
    const [text2,showtext2]=useState('Pick Player1 Badge:');
    const [play,showplay]=useState(true);
    const [vscomp,showvscomp]=useState(true);
    const [twoplay,showtwoplay]=useState(true);
    const [circle1,showcircle1]=useState(true);
    const [cross1,showcross1]=useState(true);
    const [heart1,showheart1]=useState(true);
    const [circle2,showcircle2]=useState(true);
    const [cross2,showcross2]=useState(true);
    const [heart2,showheart2]=useState(true);
    const [mydata,setmydata]=useState([]);
    const [additionalComponent, setAdditionalComponent] = useState(null);
    useEffect(() => {
        // console.log(dataToSend2p);
        if(dataToSend2p.length===2)setTimeout(()=>{
            // showtext2(false);
            navi('/2p',{state: dataToSend2p});
        },1000);
    }, [dataToSend2p]);
    useEffect(()=>{
        setmydata(dataToSendcomp);
        // console.log(dataToSendcomp);
    },[dataToSendcomp]);
    useEffect(()=>{
        // setmydata(dataToSendcomp);
        console.log(mydata);
        console.log(mydata.length);
        setTimeout(()=>{
            if(mydata.length===3){
                navi('/comph',{state: mydata});
            }
        },1000);
    },[mydata]);

    const handlePlay = () =>{
        showplay(false);
    }
    const handlevscomp=()=>{
        showvscomp(false);showtwoplay(true);
        showtext2("Pick Player1 Badge: ");
        showcircle2(true);showcross2(true);
        showheart2(true);
    }
    const handletwoplay=()=>{
        showtwoplay(false);showvscomp(true);
        showtext1("Pick Your Badge: ");
        showcircle1(true);showcross1(true);
        showheart1(true);setAdditionalComponent(null);
    }
    const handle1a = () =>{
        if(text1==="Pick Computer Badge:"){
            setdataToSendcomp(prev=>[...prev,'circle']);
            setAdditionalComponent(<Aaa showtext1={showtext1} setdataSent={setmydata} dataSent={mydata} setAdditionalComponent={setAdditionalComponent}/>);
            showtext1("Select your turn: ");
            showcircle1(false);showcross1(false);
            showheart1(false);
            return;
        }
        setdataToSendcomp(['circle']);
        setAdditionalComponent(null);
        showtext1("Pick Computer Badge:");
        // showvscomp(false);
        showtext2("Pick Player1 Badge:");
        showcircle1(false);showcircle2(true);
        showcross2(true);showheart2(true);
    }
    const handle1b = () =>{
        if(text1==="Pick Computer Badge:"){
            setdataToSendcomp(prev=>[...prev,'cross']);
            setAdditionalComponent(<Aaa showtext1={showtext1} setdataSent={setmydata} dataSent={mydata} setAdditionalComponent={setAdditionalComponent}/>);
            showtext1("Select your turn: ");
            showcircle1(false);showcross1(false);
            showheart1(false);
            return;
        }
        setdataToSendcomp(['cross']);
        setAdditionalComponent(null);
        showtext1("Pick Computer Badge:");
        // showvscomp(false);
        showtext2("Pick Player1 Badge:");
        showcross1(false);showcircle2(true);
        showcross2(true);showheart2(true);
    }
    const handle1c = () =>{
        if(text1==="Pick Computer Badge:"){
            setdataToSendcomp(prev=>[...prev,'heart']);
            setAdditionalComponent(<Aaa showtext1={showtext1} setdataSent={setmydata} dataSent={mydata} setAdditionalComponent={setAdditionalComponent}/>);
            showtext1("Select your turn: ");
            showcircle1(false);showcross1(false);
            showheart1(false);
            return;
        }
        setdataToSendcomp(['heart']);
        setAdditionalComponent(null);
        showtext1("Pick Computer Badge:");
        // showvscomp(false);
        showtext2("Pick Player1 Badge:");
        showheart1(false);showcircle2(true);
        showcross2(true);showheart2(true);
    }
    const handle2a = () =>{
        if(text2==="Pick Player2 Badge:"){
            setdataToSend2p(prev=>[...prev,'circle']);
            setAdditionalComponent(null);
            showtext2("Loading");
            showcircle2(false);showcross2(false);
            showheart2(false);
            return;
        }
        showtext2("Pick Player2 Badge:");
        // showtwoplay(false);
        showtext1("Pick Your Badge:");
        showcircle2(false);showcircle1(true);
        showcross1(true);showheart1(true);
        setdataToSend2p(['circle']);
    }
    const handle2b = () =>{
        if(text2==="Pick Player2 Badge:"){
            setdataToSend2p(prev=>[...prev,'cross']);
            setAdditionalComponent(null);
            showtext2("Loading");
            showcircle2(false);showcross2(false);
            showheart2(false);
            return;
        }
        setdataToSend2p(['cross']);
        setAdditionalComponent(null);
        showtext2("Pick Player2 Badge:");
        // showtwoplay(false);
        showtext1("Pick Your Badge:");
        showcross2(false);showcircle1(true);
        showcross1(true);showheart1(true);
    }
    const handle2c = () =>{
        setAdditionalComponent(null);
        if(text2==="Pick Player2 Badge:"){
            setdataToSend2p(prev => [...prev,'heart']);
            showtext2("Loading");
            showcircle2(false);showcross2(false);
            showheart2(false);
            return;
        }
        setdataToSend2p(['heart']);
        showtext2("Pick Player2 Badge:");
        // showtwoplay(false);
        showtext1("Pick Your Badge:");
        showheart2(false);showcircle1(true);
        showcross1(true);showheart1(true);
    }
    return(
        <div>
            <p className="welcome">Welcome to Tic Tac Toe Game</p>
            {play&&<button className="playbutton" onClick={handlePlay}>Play</button>}
                {(!play)&&<p>
                    {vscomp&&<p><img src={vsComp} alt="Vs Computer Icon"onClick={handlevscomp} className="icon-image" />
                    <button className="playbutton" style={{paddingLeft:"45px"}} onClick={handlevscomp}>vs Computer</button></p>}
                        {!vscomp&&<a style={{fontSize:"25px"}}><a className="turn">{text1} {additionalComponent}</a>
                            {circle1&&<img src={circle} alt="2 Player Icon" className="sign-image" onClick={handle1a}/>}&nbsp;
                            {cross1&&<img src={cross} alt="2 Player Icon" className="sign-image" onClick={handle1b}/>}&nbsp;
                            {heart1&&<img src={heart} alt="2 Player Icon" className="sign-image" onClick={handle1c}/>}
                        </a>}
                    {twoplay&&<p><img src={twop} alt="2 Player Icon"onClick={handletwoplay} className="icon-image" />
                    <button className="playbutton" style={{paddingLeft:"45px"}} onClick={handletwoplay}>Two Players</button></p>}
                        {!twoplay&&<a style={{fontSize:"23px"}}><a className="turn">{text2}</a>
                            {circle2&&<img src={circle} alt="2 Player Icon" className="sign-image" onClick={handle2a}/>}&nbsp;
                            {cross2&&<img src={cross} alt="2 Player Icon" className="sign-image" onClick={handle2b}/>}&nbsp;
                            {heart2&&<img src={heart} alt="2 Player Icon" className="sign-image" onClick={handle2c}/>}
                        </a>}
            </p>}
        </div>
    )
}
export default Welcome
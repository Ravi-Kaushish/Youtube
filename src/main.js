import React from 'react';
import './App.css';

export function App(props) {
    return (
      <div className="VideoComponent">
        <img id="VideoThumbnail" src={props.src} alt=""/>
        <h3 id="VideoTitle">{Wordwrap(props.VideoTitleList)}</h3>
        <p id="ChannelName">{props.ChannelName}</p>
        <span id="ViewsCount">{props.ViewsCount} • </span><span id="UploadTime">{props.UploadTime}</span>
      </div>
    );
}


export default App;

const Wordwrap = (StringToTruncate)=> {
    if (StringToTruncate.length>50){
     return StringToTruncate.substring(0, 50)+ "...";
        }else
    return StringToTruncate;
}
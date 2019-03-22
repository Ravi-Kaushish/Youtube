import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Navbar';
//import App from './main';

var VideoThumbnailList=[""];
var VideoTitleList=["How to Make Pasta", "Football WC Highlights", "Tom and jerry Show", "What if the earth loses Oxygen", "The Cold War"];
var ChannelNameList=["Kitchen King", "EsFootbal", "WB Kids", "What if","OverSimplified"];
var ViewsCountList=[0,500,"100M", "2M", "6.4M"];
var UploadTimeList=["6 hours ago","8 hours ago", "3 years ago", "24 hours ago", "1 day ago"];

function DisplayVideos(){
    return(
        <div className="VideoCategory">
        <App src={VideoThumbnailList[0]} VideoTitleList={VideoTitleList[0]} ChannelName={ChannelNameList[0]} ViewsCount={ViewsCountList[0]} UploadTime={UploadTimeList[0]}/>
        <App src={VideoThumbnailList[1]} VideoTitleList={VideoTitleList[1]} ChannelName={ChannelNameList[1]} ViewsCount={ViewsCountList[1]} UploadTime={UploadTimeList[1]}/>
        <App src={VideoThumbnailList[2]} VideoTitleList={VideoTitleList[2]} ChannelName={ChannelNameList[2]} ViewsCount={ViewsCountList[2]} UploadTime={UploadTimeList[2]}/>
        <App src={VideoThumbnailList[3]} VideoTitleList={VideoTitleList[3]} ChannelName={ChannelNameList[3]} ViewsCount={ViewsCountList[3]} UploadTime={UploadTimeList[3]}/>
        <App src={VideoThumbnailList[4]} VideoTitleList={VideoTitleList[4]} ChannelName={ChannelNameList[4]} ViewsCount={ViewsCountList[4]} UploadTime={UploadTimeList[4]}/>
        </div>
        );
}

ReactDOM.render(<App />, document.getElementById('root'));
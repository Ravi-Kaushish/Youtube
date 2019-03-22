import React from 'react';
//import {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="NavBar">
      <div className="row">
        <div className="col-md-3 col-sm-3">
          <div className="SidebarButton">
            <button type="button" id="sidebarCollapse" className="btn mt-1 ml-2">
              <i className="fas fa-bars"></i>
            </button>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="image" id="logo" />
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search Youtube" id="myInput" onkeyup="searchbox()" />
            <div className="input-group-append">
              <span className="input-group-text"><button style={{ padding: '0px' }}><i style={{ fontSize: '16px' }} className="fas fa-search ml-1 mt-1"  ></i></button></span>
            </div>
          </div>
        </div>
        <div className=" col-md-5 col-sm-5">
          <div className="ProfileButton">
            <button type="button" id="LiveVideo"><i className="fas fa-video mt-1 mr-2 "></i></button>
            <button type="button" id="Apps"><i className="fab fa-youtube-square mr-2"></i></button>
            <button type="button" id="Share"><i className="fas fa-share-square mr-2"></i></button>
            <button type="button" id="Notification"><i className="fas fa-bell mr-2"></i></button>
            <button type="button" id="Profile"><i class="fas fa-users mr-2"></i></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

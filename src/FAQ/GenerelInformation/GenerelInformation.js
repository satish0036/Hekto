import React from "react";
import "./GenerelInformation.css";

const GenerelInformation = () => {
  return (
    <><div className="FAQ_page_layout">
      <div className="GenerelInformation_layout">
        <div className="GenerelInformation_text1">Generel Information</div>
        <div className="GenerelInformation_text2">
        Eu dictumst cum at sed euismood condimentum?
        </div>
        <div className="GenerelInformation_text3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
        tristique mollis vitae, consequat gravida sagittis.
        </div>
        <div className="GenerelInformation_text4">
        Magna bibendum est fermentum eros.
        </div>
        <div className="GenerelInformation_text5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
        tristique mollis vitae, consequat gravida sagittis.
        </div>
        <div className="GenerelInformation_text6">
        Odio muskana hak eris conseekin sceleton?
        </div>
        <div className="GenerelInformation_text7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
        tristique mollis vitae, consequat gravida sagittis.
        </div>
        <div className="GenerelInformation_text8">
        Elit id blandit sabara boi velit gua mara?
        </div>
        <div className="GenerelInformation_text9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
        tristique mollis vitae, consequat gravida sagittis.
        </div>
      </div>

      {/* **************AskQuestion*************** */}


      <div className="AskQuestion_layout">
        <div className="AskQuestion_box1" />
        <div className="AskQuestion_text1">Ask a Question</div>
        
        <input type="text" className="AskQuestion_box2" placeholder= "Your Name*" />
       
        <input className="AskQuestion_box3" placeholder= "Subject*"/>
        
        <textarea className="AskQuestion_box4" placeholder=" Type Your Message"/>
        
        <button className="AskQuestion_box5">Send Mail</button>
        
      </div>
      
    </div>
    </>
  );
};
export default GenerelInformation;

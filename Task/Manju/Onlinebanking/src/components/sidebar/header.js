import React from 'react';
//import './header.css'; 
import {FaInbox} from 'react-icons/fa'
function Header() {
    const email=sessionStorage.getItem('email');

  return (
    <div className="header">
       <FaInbox className="mr-4" style={{fontSize:30}} />
                    <i className="fas "style={{fontSize:25,fontFamily:'cursive'}} > Inbox</i>
      {/* <span><h1>Inbox</h1></span>   */}
      <div className="right-corner"style={{ textAlign: 'end',fontSize:25 }}>
         <span>Welcome {email}</span>
      </div>
      
      <br/>
   </div>
  

  );
}

export default Header;

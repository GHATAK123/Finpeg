import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
export default class Footer extends React.Component {


  closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
  };
  openNav = () => {
    document.getElementById("mySidepanel").style.width = "300px";
  };

  render() {
    return (
      <div class="bottomnav">
        <a href="/">
          < HomeIcon/>
          <br /> Home
        </a>
        <a class="active" href="/">
          <i class="fa fa-inr" aria-hidden="true"></i>
          <br /> Invest
        </a>
        <a href="/">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          <br /> Portfolio
        </a>
        <a href="/">
          <AccountCircleIcon/>
          <br /> Profile
        </a>
      </div>
    );
  }
}

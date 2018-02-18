import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {Image} from 'react-bootstrap';
const style = {
  labelStyle: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
     labelStyle1: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      marginLeft:"-100px",
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
  buttonBorder:{
    width: '167px',
    height: '48px',
    radius: '6px',
    margin: '8px',
    border: 'solid 1px #ffffff',
    color:'#FFFFFF'
  }
} ;
import {
  blue300,
} from 'material-ui/styles/colors';
export default class Nav extends React.Component{
	state={
		openDrawer:false
  };
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

	handleClose = () => this.setState({openDrawer: false});
  handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});
  
  // newTradeNavigation=()=>{
  //   this.context.router.push('/newTrade');
  // }
  dashboardNavigation=()=>{
    this.context.router.push('/timeline');
  }
  networkNavigation=()=>{
    this.context.router.push('/createNetwork');
  }
  // confirmTradeNavigation=()=>{
  //   this.context.router.push('/confirmTrade');
  // }
  // confirmParcelNavigation=()=>{
  //   this.context.router.push("/confirmParcel");
  // }
  // pendingParcelNavigation=()=>{
  //   this.context.router.push("/pendingParcel");
  // }
  // createParcelNavigation=()=>{
  //   this.context.router.push("/confirmParcel");
  // }
  handleLogout=()=>{
    sessionStorage.removeItem('userLoginDetails');
    this.context.router.push("/login");
  }
	render(){
    
		return(
			<div>
			 <AppBar
             title="Blockchain Lab as a Service"
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             onLeftIconButtonTouchTap={this.handleToggle}
             style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
            >
           <FlatButton style={style.labelStyle1} label="Application Assement Framework" onTouchTap={this.dashboardNavigation} />
           <FlatButton style={style.labelStyle} label="Create a Netwoork" onTouchTap={this.networkNavigation} />
           <FlatButton style={style.labelStyle} label="Test a Network" onTouchTap={this.confirmTradeNavigation} />
           
           
           <List>
                <ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src="../../images/gold.png" style={{width:'34px',height:'34px'}} />
                    
                  }
                >
                </ListItem>
          </List>
           </AppBar>
         
           <Drawer
          docked={false}
          width={200}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
          >

        <Image src="../../images/profile.jpg" 
        style={{width:'180px',height:'200px'}} circle/>
        <center style={{fontWeight:'bold',fontSize:16}}>John</center>
          <MenuItem onTouchTap={this.handleClose}>
           <Link to="/"> Home </Link>
          </MenuItem>
        	<MenuItem onTouchTap={this.handleClose}>
          <Link to ="/newTrade">Application Assement Framework</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/tradeRecap">Create a Netwoork</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/confirmTrade">Test</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleLogout}>
          Logout
          </MenuItem>
        </Drawer>
        </div>
      )
    }
    
	
}
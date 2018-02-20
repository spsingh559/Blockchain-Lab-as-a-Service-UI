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
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Divider from 'material-ui/Divider';


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
// import Divider from 'material-ui/Divider/Divider';
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
  assesmentFormNavigation=()=>{
    this.context.router.push('/applicationAssessmentDashboard');
  }
  networkNavigation=()=>{
    this.context.router.push('/createNetwork');
  }
  networkTestingNavigation=()=>{
    this.context.router.push('/networkTesting');
  }
  homeNavigation=()=>{
    this.context.router.push('/');
  }
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
              {/* <FlatButton style={style.labelStyle1} label="Home" onTouchTap={this.homeNavigation} /> */}
           <FlatButton style={style.labelStyle1} label="Application Assessment Framework" onTouchTap={this.assesmentFormNavigation} />
           <FlatButton style={style.labelStyle} label="Create a Network" onTouchTap={this.networkNavigation} />
           <FlatButton style={style.labelStyle} label="Network Performance" onTouchTap={this.networkTestingNavigation} />
           <Badge
      badgeContent={4}
      primary={true}
    >
      <NotificationsIcon color="white"/>
    </Badge>
           
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
<center>
        <Image src="../../images/profile.jpg" 
        style={{width:'100px',height:'100px'}} circle/>
        </center>
        <center style={{fontWeight:'bold',fontSize:16}}>John</center>
        <Divider />
          <MenuItem onTouchTap={this.handleClose}>
           <Link to="/"> Home </Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/instanceInfo">Instance Information</Link>
          </MenuItem>
        	<MenuItem onTouchTap={this.handleClose}>
          <Link to ="/applicationAssessmentDashboard">Application Assement Framework</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/createNetwork">Create a Netwoork</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/networkTesting">Test Network</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/myProfile">My Profile</Link>
          </MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleLogout}>
          Logout
          </MenuItem>
          
        </Drawer>
        </div>
      )
    }
    
	
}
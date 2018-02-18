import React from 'react';

import {Table,Grid,Row,Col,Panel} from 'react-bootstrap';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class createNetwork extends React.Component{

    state = {
        platformDrpDwn: "",
        cloudDrpDwn:""
      };

      handleChange = (event, index, value) => this.setState({platformDrpDwn:value});
      handleChangeCloud = (event, index, value) => this.setState({cloudDrpDwn:value});

     
    render(){
        return(
            <div  style={{marginTop:"65px"}}>
            <Grid>
               
    <div style={{marginTop:"50px", color:"white",height:'auto',width:'auto',borderRadius: "6px",border: "solid 1px #d5d5d5"}}>
    <center>
    <Row>
        <h3> Create a Network </h3>
        </Row>
    <Row>
        <Col xs={4}>
        Platform
        </Col>
        <Col xs={4}>
        <SelectField
      floatingLabelText="Platform List"
      value={this.state.platformDrpDwn}
      onChange={this.handleChange}
      floatingLabelStyle={{color:"white"}}
      fullWidth={true}
    >
      <MenuItem value="Etherium" primaryText="Etherium" />
      <MenuItem value="Hyperledger" primaryText="Hyperledger" />
      <MenuItem value="Quoram" primaryText="Quoram" />
      <MenuItem value="Corda" primaryText="Corda" />
    </SelectField>
        </Col>
        </Row>
        <Row>
        <Col xs={4}>
        Cloud
        </Col>
        <Col xs={4}>
        <SelectField
      floatingLabelText="Select Cloud"
      value={this.state.cloudDrpDwn}
      onChange={this.handleChangeCloud}
      floatingLabelStyle={{color:"white"}}
      fullWidth={true}
    >
      <MenuItem value="Microsoft Azure" primaryText="Microsoft Azure" />
      <MenuItem value="Amazon Web Service" primaryText="Amazon Web Service" />
      <MenuItem value="Google Cloud" primaryText="Google Cloud" />
    </SelectField>
        </Col>
        </Row>

        <Row>
        <Col xs={4}>
        Instance Name
        </Col>
        <Col xs={4}>
        <TextField
      floatingLabelText="Instance Name"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
    />
        </Col>
        <Col xs={4}>
        <RaisedButton label="Submit" primary={true}  />
        </Col>
        </Row>

        <Row>
        <Col xs={4}>
        Number of Nodes
        </Col>
        <Col xs={4}>
        <TextField
      floatingLabelText="Instance Name"
      type="number"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
    />
        </Col>
        </Row>

        <Row>
        <Col xs={4}>
        Planned Budget
        </Col>
        <Col xs={4}>
        <TextField
      floatingLabelText="Estimated Budget"
      type="number"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
    />
        </Col>
        </Row>

        
        </center>
        <br />
        <br />
        </div>
       
    </Grid>
            <video id="createNetwork" loop autoPlay>
    <source src="../images/network.mp4" type="video/mp4" />
    

        
</video>   
 </div>
        )
    }
}
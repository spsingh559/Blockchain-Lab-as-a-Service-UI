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
        cloudDrpDwn:"",
        instanceName:"",
        numberOfNodes:0,
        estimatedBudget:0

      };

      handleChange = (event, index, value) => this.setState({platformDrpDwn:value});
      handleChangeCloud = (event, index, value) => this.setState({cloudDrpDwn:value});
      handleChangeinstanceName= (event) => this.setState({instanceName:event.target.value});
      handleChangenumberOfNodes=(e)=>this.setState({numberOfNodes:e.target.value})
      handleChangeestimatedBudget=(e)=>this.setState({estimatedBudget:e.target.value})
      


      static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

      submitCreateNetwork=()=>{
        var obj={
          instanceID:Date.now(),
          name:this.state.instanceName,
          nodes:this.state.numberOfNodes,
          creationTime:Date.now(),
          cloud:this.state.cloudDrpDwn,
          status:"Initializing",
          externalIP:"34.123.34.23",
          platform:this.state.platformDrpDwn
        }

        console.log('created object for network is------------------');
        console.log(obj);
        this.context.router.push('/');
      }
     
    render(){
        return(
            <div  style={{marginTop:"65px"}}>
            <Grid>
               
    <div style={{marginTop:"30px", fontSize:"20px", color:"white",height:'auto',width:'auto',borderRadius: "6px",border: "solid 1px #d5d5d5"}}>
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
      labelStyle={{color:"white"}}
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
      labelStyle={{color:"white"}}
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
      inputStyle={{color:"white",fontSize:"20px"}}
      floatingLabelStyle={{color:"white",fontSize:"20px"}}
      onChange={this.handleChangeinstanceName}
      value={this.state.instanceName}
    />
        </Col>
        <Col xs={4}>
        <RaisedButton label="Submit" primary={true} onTouchTap={this.submitCreateNetwork} />
        </Col>
        </Row>

        <Row>
        <Col xs={4}>
        Number of Nodes
        </Col>
        <Col xs={4}>
        <TextField
      floatingLabelText="Number of Nodes"
      type="number"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"white",fontSize:"20px"}}
      floatingLabelStyle={{color:"white",fontSize:"20px"}}
      onChange={this.handleChangenumberOfNodes}
      value={this.state.numberOfNodes}
    />
        </Col>
        </Row>

        <Row>
        <Col xs={4}>
        Planned Budget
        </Col>
        <Col xs={4}>
        <TextField
      floatingLabelText="Estimated Budget in $"
      type="number"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"white",fontSize:"20px"}}
      floatingLabelStyle={{color:"white",fontSize:"20px"}}
      onChange={this.handleChangeestimatedBudget}
      value={this.state.estimatedBudget}
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
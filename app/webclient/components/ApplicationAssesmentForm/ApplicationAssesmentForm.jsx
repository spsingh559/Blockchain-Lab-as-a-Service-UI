import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router';



const style={
    outerStyle:{
        height:'800px',
        width:'500px',    
       marginTop:"10px",
        borderRadius: "6px",
        border: "solid 1px #DCDCDC",
        color:"#DCDCDC"
    },
    outer1Style:{
        height:'800px',
        width:'500px',    
       marginLeft:"100px",
       marginTop:"10px",
        borderRadius: "6px",
        border: "solid 1px #DCDCDC",
        color:"#DCDCDC"
    }
}

export default class ApplicationAssesmentForm extends React.Component{

    state={
        nwPermissionDrpDwn:"",
        nwTypeDrpDwn:"",
        industryDrpDwn:"",
        applicationTypeDrpDwn:"",
        ReportingDrpDwn:""

    }

    handleChangenwTypeDrpDwn = (event, index, value) => this.setState({nwTypeDrpDwn:value});
    handleChangenwPermissionDrpDwn = (event, index, value) => this.setState({nwPermissionDrpDwn:value});
    handleChangeindustryDrpDwn = (event, index, value) => this.setState({industryDrpDwn:value});
    handleChangeapplicationTypeDrpDwn = (event, index, value) => this.setState({applicationTypeDrpDwn:value});
    handleChangeReportingDrpDwn = (event, index, value) => this.setState({ReportingDrpDwn:value});

    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

    // submitForm=()=>{
    //     this.context.router.push('/recommendation');
    // }

    render(){
        return(
            <div style={{marginTop:"65px"}} className="assessment">
          
            <Grid>
                <Row>
                    <center><h3 style={{color:"#DCDCDC"}}>Application Assessment Framework - Input</h3></center>
                    </Row>
                    <Row>
                        <Col xs={6} style={style.outerStyle}>
                        <Row>
                            <Col xs={4}>
                            Network Type
                            </Col>
                            <Col xs={4}>
                            <SelectField
      floatingLabelText="Based on Type"
      value={this.state.nwTypeDrpDwn}
      onChange={this.handleChangenwTypeDrpDwn}
      floatingLabelStyle={{color:"#DCDCDC"}}
      fullWidth={true}
    >
      <MenuItem value="Public" primaryText="Public" />
      <MenuItem value="Private" primaryText="Private" />
    
    </SelectField>
                            </Col>
                            <Col xs={4}>
                            <SelectField
      floatingLabelText="Based on Permission"
      value={this.state.nwPermissionDrpDwn}
      onChange={this.handleChangenwPermissionDrpDwn}
      floatingLabelStyle={{color:"#DCDCDC"}}
      fullWidth={true}
    >
      <MenuItem value="Permissioned" primaryText="Permissioned" />
      <MenuItem value="Non Permissioned" primaryText="Non Permissioned" />
    </SelectField>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={4}>
                            Industry Domain
                            </Col>
                            <Col xs={8}>
                            <SelectField
      floatingLabelText="Based on Type"
      value={this.state.industryDrpDwn}
      onChange={this.handleChangeindustryDrpDwn}
      floatingLabelStyle={{color:"#DCDCDC"}}
      fullWidth={true}
    >
      <MenuItem value="Finance" primaryText="Finance" />
      <MenuItem value="Supply Chain" primaryText="Supply Chain" />
      <MenuItem value="Healthcare" primaryText="Healthcare" />
    
    </SelectField>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={4}>
                            Use Case
                            </Col>
                            <Col xs={8}>
                            <TextField
      floatingLabelText="Use Case"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"#DCDCDC"}}
      floatingLabelStyle={{color:"#DCDCDC"}}
    />
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={4}>
                            Application
                            </Col>
                            <Col xs={8}>
                            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="light"
        label="B2B"
        labelStyle={{color:"#DCDCDC"}}
        inputStyle={{color:"#DCDCDC"}}
        iconStyle={{color:"#DCDCDC"}}
        style={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="not_light"
        label="B2C"
        labelStyle={{color:"#DCDCDC"}}
        inputStyle={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="ludicrous"
        label="P2P"
        labelStyle={{color:"#DCDCDC"}}
      />
    </RadioButtonGroup>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={4}>
                            ApplicationType
                            </Col>
                            <Col xs={8}>
                            <SelectField
      floatingLabelText="Application Type"
      value={this.state.applicationTypeDrpDwn}
      onChange={this.handleChangeapplicationTypeDrpDwn}
      floatingLabelStyle={{color:"#DCDCDC"}}
      fullWidth={true}
    >
      <MenuItem value="Add Field" primaryText="Add Field" />
      <MenuItem value="Add Feild" primaryText="Add Feild" />
      <MenuItem value="Add Field" primaryText="Add Field" />
    
    </SelectField>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={4}>
                           CryptoCurrency Involved
                            </Col>
                            <Col xs={8}>
                            <RadioButtonGroup name="CryptoCurrency" defaultSelected="No">
      <RadioButton
        value="light"
        label="Yes"
        labelStyle={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="not_light"
        label="No"
        labelStyle={{color:"#DCDCDC"}}
      />
     
    </RadioButtonGroup>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={4}>
                            Number of Stakeholder
                            </Col>
                            <Col xs={8}>
                            <TextField
      floatingLabelText="Stake Holder Number"
      type="number"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"#DCDCDC"}}
      floatingLabelStyle={{color:"#DCDCDC"}}
    />
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={4}>
                            Transaction Privacy Required
                            </Col>
                            <Col xs={8}>
                            <RadioButtonGroup name="Transaction" defaultSelected="Yes">
      <RadioButton
        value="light"
        label="Yes"
        labelStyle={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="not_light"
        label="No"
        labelStyle={{color:"#DCDCDC"}}
      />
     
    </RadioButtonGroup>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={4}>
                            Expected Transaction Volume
                            </Col>
                            <Col xs={8}>
                            <TextField
      floatingLabelText="Transaction Volume"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"#DCDCDC"}}
      floatingLabelStyle={{color:"#DCDCDC"}}
    />
                            </Col>
                            </Row>
                        </Col>
  {/*--------------------------- Form 2 Started------------------------------------------ */}

                        <Col xs={6} style={style.outer1Style}>
                        <Row>
                            <Col xs={6}>
                            Expected throughput?
                            </Col>
                            <Col xs={6}>
                            <TextField
      floatingLabelText="Throughput"
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"#DCDCDC"}}
      floatingLabelStyle={{color:"#DCDCDC"}}
    />
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={6}>
                            Is anonymous / public access required?
                            </Col>
                            <Col xs={6}>
                            <RadioButtonGroup name="anonymous" defaultSelected="Yes">
      <RadioButton
        value="light"
        label="Yes"
        labelStyle={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="not_light"
        label="No"
        labelStyle={{color:"#DCDCDC"}}
      />
     
    </RadioButtonGroup>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={6}>
                            Are trusted parties interacting?
                            </Col>
                            <Col xs={6}>
                            <RadioButtonGroup name="trustedParties" defaultSelected="Yes">
      <RadioButton
        value="light"
        label="Yes"
        labelStyle={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="not_light"
        label="No"
        labelStyle={{color:"#DCDCDC"}}
      />
     
    </RadioButtonGroup>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={6}>
                            Complex data structure support
                            </Col>
                            <Col xs={6}>
                            <RadioButtonGroup name="complexData" defaultSelected="Yes">
                            <RadioButton
                              value="light"
                              label="Yes"
                              labelStyle={{color:"#DCDCDC"}}
                            />
                            <RadioButton
                              value="not_light"
                              label="No"
                              labelStyle={{color:"#DCDCDC"}}
                            />
                           
                          </RadioButtonGroup>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={6}>
                            Reporting requirements
                            </Col>
                            <Col xs={6}>
                            <SelectField
      floatingLabelText="Reporting requirements"
      value={this.state.ReportingDrpDwn}
      onChange={this.handleChangeReportingDrpDwn}
      floatingLabelStyle={{color:"#DCDCDC"}}
      fullWidth={true}
    >
      <MenuItem value="Add Field" primaryText="Add Field" />
      <MenuItem value="Add Feild" primaryText="Add Feild" />
      <MenuItem value="Add Field" primaryText="Add Field" />
    
    </SelectField>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={6}>
                            Is dynamic Node onboarding / off boarding a critical?
                            </Col>
                            <Col xs={6}>
                            <RadioButtonGroup name="dynamicNode" defaultSelected="No">
      <RadioButton
        value="light"
        label="Yes"
        labelStyle={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="not_light"
        label="No"
        labelStyle={{color:"#DCDCDC"}}
      />
     
    </RadioButtonGroup>
                            </Col>
                            </Row>
                            <br />
                            <Row>
                            <Col xs={6}>
                            Integration with existing systems required? 
                            </Col>
                            <Col xs={6}>
                            <RadioButtonGroup name="Integration" defaultSelected="Extensively">
      <RadioButton
        value="light"
        label="Extensively"
        labelStyle={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="not_light"
        label="Briefly"
        labelStyle={{color:"#DCDCDC"}}
      />
     
    </RadioButtonGroup>
                            </Col>
                            </Row>
                           
            <br />
                            <Row>
                            <Col xs={6}>
                            Is anonymous or public access required?
                            </Col>
                            <Col xs={6}>
                            <RadioButtonGroup name="anonymousorpublic" defaultSelected="Yes">
      <RadioButton
        value="light"
        label="Yes"
        labelStyle={{color:"#DCDCDC"}}
      />
      <RadioButton
        value="not_light"
        label="No"
        labelStyle={{color:"#DCDCDC"}}
      />
     
    </RadioButtonGroup>
                            </Col>
                            </Row>
            <br />
                            <Row>
                            <Col xs={6}>
                            Fill and upload the Requirement excel
                            </Col>
                            <Col xs={6}>
                            <TextField
      floatingLabelText=" Fill and upload "
      floatingLabelFixed={true}
      fullWidth={true}
      inputStyle={{color:"#DCDCDC"}}
      type="file"
      floatingLabelStyle={{color:"#DCDCDC"}}
    />
                            </Col>
                            </Row>
                        </Col>
                        <Link to={'/recommendation/12345345340' }>
         
                        <FloatingActionButton style={{float:"right",marginTop:"300px"}}
                        onTouchTap={this.submitForm}
                        >
                        <ContentAdd />
    </FloatingActionButton>
   </Link>
                       
      
                        </Row>

                </Grid>
            </div>
        )
    }
}   
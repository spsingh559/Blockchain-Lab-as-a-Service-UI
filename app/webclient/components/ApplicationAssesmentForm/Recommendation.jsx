import React from 'react';
import {Grid,Col,Row, Image} from 'react-bootstrap';

const style={
    outerStyle:{
        height:'400px',
        width:'500px',    
       marginTop:"10px",
        borderRadius: "6px",
        border: "solid 1px #DCDCDC",
        color:"#DCDCDC"
    },
    outerStyle1:{
        height:'400px',
        width:'500px',    
       marginTop:"10px",
       marginLeft:"100px",
        borderRadius: "6px",
        border: "solid 1px #DCDCDC",
        color:"#DCDCDC"
    }
}


export default class Recommendation extends React.Component{

    render(){
        return(
            <div style={{marginTop:"65px"}} className="recommendation">
     <Grid>
                <Row>
                    <center><h3 style={{color:"#DCDCDC"}}>Application Assessment Framework - Output</h3></center>
                    </Row>
                    <Row>
                        <Col xs={6} style={style.outerStyle}>
                        <Row>
                    <center><h3 style={{color:"#DCDCDC"}}>RECOMMENDATION</h3></center>
                    </Row>
                    <Row>
                    Platform preference: <ol>
  <li>Hyperledger</li>
  <li>Ethereum</li>
  <li>Corda</li>
</ol>
<br />
<h4>
Number of nodes suggested: 4
</h4>
<br />

<h4>
Cloud preference: AWS
</h4>
<br />
<h4>

Estimate cost: $ 450
</h4>
<br />

                        </Row>
                        </Col>
                        <Col xs={6}  style={style.outerStyle1}>
                        <Row>
                    <center><h3 style={{color:"#DCDCDC"}}>ADVANCED ANALYSIS</h3></center>
                    </Row>
                    <Row>
                        <center>
                    <Image src="../../../images/analysis.gif" 
        style={{width:'300px',height:'200px'}} />
        </center>
                        </Row>
                            <br />
                            <Row>
                            Suggestions: <ol>
  <li>Storage

</li>
  <li>Integration
</li>
  <li>Xyz</li>
</ol>
                                </Row>
                        </Col>
                        </Row>
                    </Grid>
            </div>
        )
    }
}
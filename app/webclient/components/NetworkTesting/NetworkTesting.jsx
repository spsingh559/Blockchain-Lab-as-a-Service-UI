import React from 'react';

import {Grid,Row,Col} from 'react-bootstrap';
import Divider from 'material-ui/Divider/Divider';

const style={
    outerStyle:{
        height:'auto',
        width:'300px',    
       marginTop:"10px",
        borderRadius: "6px",
        border: "solid 1px #DCDCDC",
        color:"#DCDCDC"
    },
    outerStyle1:{
        height:'auto',
        width:'300px',    
       marginTop:"10px",
       marginLeft:"100px",
        borderRadius: "6px",
        border: "solid 1px #DCDCDC",
        color:"#DCDCDC"
    }
}

export default class NetworkTesting extends React.Component{

    render(){
        return(
            <div style ={{marginTop:"65px"}} className="networkTesting">
            <Grid>
            <Row>
                    <center><h3 style={{color:"#DCDCDC"}}>Network performance testing
</h3></center>
                    </Row>
                    <Row>
                   <h4 style={{color:"#DCDCDC"}}>Comparison of instances

</h4>
                    </Row>
                    <Row>
                        <Col xs={4} style={style.outerStyle} className="networkColor">
                        <h5 >Instance ID : 342634277
                            </h5>
                            <br />
                            <h5>Hosting location : AWS
                            </h5>
                            <br />
                            <h5>Platform : Hyperledger
                            </h5>
                            <br />
                            <h5>No. of nodes : 3
                            </h5>
                            <br />
                            <Divider />
                            <h5>Transaction per sec : 300
                            </h5>
                            <br />
                            <h5>Block time : 0.01ms
                            </h5>
                            <br />
                            <h5>Failure handling : 10
                            </h5>
                            <br />
                            <Divider />
                            <h5>Performance ranking : 2
                            </h5>
                            <br />
                        </Col>
                        <Col xs={4} style={style.outerStyle1}  className="networkColor">
                        <h5>Instance ID : 342634279
                            </h5>
                            <br />
                            <h5>Hosting location : Azure
                            </h5>
                            <br />
                            <h5>Platform : Ethereum
                            </h5>
                            <br />
                            <h5>No. of nodes : 3
                            </h5>
                            <br />
                            <Divider />
                            <h5>Transaction per sec : 400
                            </h5>
                            <br />
                            <h5>Block time : 0.01ms
                            </h5>
                            <br />
                            <h5>Failure handling : 11
                            </h5>
                            <br />
                            <Divider />
                            <h5>Performance ranking : 1
                            </h5>
                            <br />
                        </Col>
                        <Col xs={4} style={style.outerStyle1}  className="networkColor">
                        <h5>Instance ID : 342634279
                            </h5>
                            <br />
                            <h5>Hosting location : AWS
                            </h5>
                            <br />
                            <h5>Platform : Quoram
                            </h5>
                            <br />
                            <h5>No. of nodes : 3
                            </h5>
                            <br />
                            <Divider />
                            <h5>Transaction per sec : 400
                            </h5>
                            <br />
                            <h5>Block time : 0.01ms
                            </h5>
                            <br />
                            <h5>Failure handling : 11
                            </h5>
                            <br />
                            <Divider />
                            <h5>Performance ranking : 3
                            </h5>
                            <br />
                        </Col>
                        
                        </Row>
                </Grid>
            </div>
        )
    }
}
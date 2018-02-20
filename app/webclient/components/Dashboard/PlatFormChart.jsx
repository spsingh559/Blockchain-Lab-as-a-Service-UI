import React from 'react';
import ReactSvgPieChart from "react-svg-piechart"
import {Row,Col} from 'react-bootstrap';

const data = [
    {title: "Etherium", value: 4, color: "#22594e"},
    {title: "Hyperledger", value: 5, color: "#2f7d6d"},
    {title: "Corda", value: 2, color: "#3da18d"},
    {title: "Quoram", value: 1, color: "#69c2b0"}
  ]

export default class PlatFormChart extends React.Component{
    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

    navigateInstanceInfo=()=>{
        this.context.router.push('/instanceInfo');
    }

    render(){
        return(
            <div onTouchTap={this.navigateInstanceInfo}>
               <center><h3>Platform Wise Instance Detail </h3></center>
               <br />
               <ReactSvgPieChart
    data={data}
    // If you need expand on hover (or touch) effect
    expandOnHover
    // If you need custom behavior when sector is hovered (or touched)
  />
  <Row >
      <center>
<Col xs={2}>
<div style={{backgroundColor:"#2f7d6d", height:"20px",width:"20px"}}>
</div>
<div>
    Hyperledger
    </div>
</Col>
<Col xs={2}>
<div style={{backgroundColor:"#22594e", height:"20px",width:"20px"}}>
</div>
<div>
    Etherium
    </div>
</Col>
<Col xs={2}>
<div style={{backgroundColor:"#3da18d", height:"20px",width:"20px"}}>
</div>
<div>
    Corda
    </div>
</Col>
<Col xs={2}>
<div style={{backgroundColor:"#69c2b0", height:"20px",width:"20px"}}>
</div>
<div>
    Quoram
    </div>
</Col>
</center>
      </Row>
                </div>
        )
    }
}
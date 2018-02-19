import React from 'react';
import ReactSvgPieChart from "react-svg-piechart";
import {Row,Col} from 'react-bootstrap';
const data = [
    {title: "AWS", value: 4, color: "#FF7F50"},
    {title: "Azure", value: 8, color: "#FFA500"},
    {title: "Google Cloud", value: 2, color: "#FF4500"}
  ]


export default class CloudChart extends React.Component{

    render(){
        return(
            <div >
                 <center><h3>Cloud Wise Instance Detail </h3></center>
            
                 <ReactSvgPieChart
    data={data}
    // If you need expand on hover (or touch) effect
    expandOnHover
    // If you need custom behavior when sector is hovered (or touched)
  />
  <Row >
      <center>
<Col xs={2}>
<div style={{backgroundColor:"#FF7F50", height:"20px",width:"20px"}}>
</div>
<div>
    AWS
    </div>
</Col>
<Col xs={2}>
<div style={{backgroundColor:"#FFA500", height:"20px",width:"20px"}}>
</div>
<div>
    Azure
    </div>
</Col>
<Col xs={4}>
<div style={{backgroundColor:"#FF4500", height:"20px",width:"20px"}}>
</div>
<div>
    Google Cloud
    </div>
</Col>

</center>
      </Row>
                </div>
        )
    }
}
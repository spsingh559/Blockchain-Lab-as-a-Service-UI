import React from 'react';

import {
    Table
  } from 'react-bootstrap';

  import EachInstance from './EachInstance.jsx';


export default class InstanceDetail extends React.Component{

    render(){
        let newData=this.props.instanceData.map((data,index)=>{
            return(
                <EachInstance 
                key={index}
                data={data}
                />
            )
        })
        return(
            <Table  bordered style={{color:"white"}}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Nodes</th>
      <th>Creation Time</th>
      <th>Cloud</th>
      <th>Status</th>
      <th>External IP</th>
      <th>Action</th>
      <th>View Report</th>
    </tr>
  </thead>
  <tbody>
            
            {newData}
            </tbody>
            </Table>
        )
    }
}
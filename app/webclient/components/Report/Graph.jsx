import React from 'react';

const style={
    divStyle:{
    height:'400px',width:'auto',marginTop:'10px',borderRadius: "6px",border: "solid 1px #d5d5d5",color:"white"}
}
export default class Graph extends React.Component{

    render(){

        return(
            <div style={style.divStyle}>
                Graph Data will be shown here
                </div>
        )
    }
}
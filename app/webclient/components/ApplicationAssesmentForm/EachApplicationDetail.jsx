import React from 'react';
import {Link} from 'react-router';

export default class EachApplicationDetail extends React.Component{

    render(){
        return(
            
               <tr>
                     
                   <td>
                       {this.props.data.aid}
                       </td>
                       <td>
                           {this.props.data.timeStamp}
                           </td>
                           <td>
                           {this.props.data.recommendation}
                           </td>
                           <td>
                           {this.props.data.advanceAnalysis}
                           </td>
                           <td>
                           {this.props.data.customerId}
                           </td>
                           <td>
                           <Link to={'/recommendation/'+this.props.data.aid}>
                          View
                          </Link>
                           </td>
                         
                   </tr>
                
        )
    }
}
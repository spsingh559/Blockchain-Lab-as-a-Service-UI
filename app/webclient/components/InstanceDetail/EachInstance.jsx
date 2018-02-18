import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
 
  import Play from 'material-ui/svg-icons/av/play-arrow';
  import Stop from 'material-ui/svg-icons/av/stop';
  import Delete from 'material-ui/svg-icons/action/delete-forever';
  import Report from 'material-ui/svg-icons/action/receipt';
  import IconButton from 'material-ui/IconButton';
  import {Link} from 'react-router';

  
export default class EachInstance extends React.Component{

    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

    // navigateReport=()=>{
    //     this.props.context.router.push('/Report/'+this.props.data.instanceID);
    // }

    render(){
        return(
            <tr >
            <td>{this.props.data.name}</td>
            <td>{this.props.data.nodes}</td>
            <td>{this.props.data.creationTime}</td>
            <td>{this.props.data.cloud}</td>
            <td>{this.props.data.status}</td>
            <td>{this.props.data.externalIP}</td>
            <td>
            <IconButton tooltip="Create" iconStyle={{color:"white"}}>
            <Play />
          </IconButton>
          <IconButton tooltip="Stop" iconStyle={{color:"white"}}>
      <Stop />
    </IconButton>
    <IconButton tooltip="Delete" iconStyle={{color:"white"}}>
      <Delete />
    </IconButton>
            </td>
            <td>
            <Link to={'/Report/'+this.props.data.instanceID }>
            <IconButton tooltip="View Report" iconStyle={{color:"white"}} >
      <Report />
    </IconButton>
   </Link>
            </td>
            
          </tr>
        )
    }
}
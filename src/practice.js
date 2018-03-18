import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import CheckBox from 'material-ui/Checkbox'
import {RadioButton,RadioButtonGroup} from 'material-ui/RadioButton'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Slider from 'material-ui/Slider'
import Dialog from 'material-ui/Dialog'
class App extends Component {

  constructor(){
    super();
    
    this.state={
      drawerOpen: false,
      uiEnabled:true,
      uiColor:'yellow',
      dialogModal:false,
      latestZ:5,

    }
  }
updateLatestZ = (value)=>{
  this.setState({latestZ:value});
}

  toggleDrawer = ()=>{

    let curState = this.state.drawerOpen;
    this.setState({
      drawerOpen:!curState
    });
  }

  enableUI = (e,checked)=>{
    this.setState({
      uiEnabled:checked
    });
  }

  setModal = (e,checked)=>{
    this.setState({
      dialogModal:checked
    });
  }

  setColor = (e)=>{

    this.setState({uiColor:e.target.value});

  }
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title ="Main Menu"
           onLeftIconButtonClick={this.toggleDrawer}
           iconElementRight={
            <IconMenu
               iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
               anchorOrigin={{horizontal:'left',vertical:'top'}}
               targetOrigin={{horizontal:'left', vertical:'top'}}
            >   
                  <CheckBox label='Enable UI' checked={this.state.uiEnabled} onCheck={this.enableUI}/>         
                  <CheckBox label='Modal dialog' checked={this.state.dialogModal} onCheck={this.setModal}/>
                  <RadioButtonGroup onChange={this.setColor}>
                    <RadioButton value="red" label="Red"/>
                    <RadioButton value="blue" label="Blue"/>
                  </RadioButtonGroup>
            </IconMenu>
          }
          >
        </AppBar>
   
        <RaisablePaper
          id='paper1'
          uiColor={this.state.uiColor}
          dialogModal={this.state.dialogModal}
          paperZ={1}
          uiEnabled={this.state.uiEnabled}
          onNewZ={this.updateLatestZ}
        
        />
         <RaisablePaper
          id='paper2'
          uiColor={this.state.uiColor}
          dialogModal={this.state.dialogModal}
          paperZ={2}
          uiEnabled={this.state.uiEnabled}
          onNewZ={this.updateLatestZ}
        />
        <Drawer open={this.state.drawerOpen}>
          <MenuItem onClick={this.toggleDrawer}>Hide Draws</MenuItem>

        </Drawer>
        <p> Latest Z: {this.state.latestZ}</p>
      </MuiThemeProvider>

    );
  }
}

class RaisablePaper extends Component{
 constructor(props){
   super();
   this.state={
     paperZ: props.paperZ,
     dialogOpen:false,
     editedValue:null
   }
 }

initEdit =()=>{
  this.setState({
    dialogOpen:true,
    editedValue: this.state.paperZ
  });
}

handleClose = (comitValue)=>{

  this.setState({
    dialogOpen:false,
    editedValue:null,
    paperZ: comitValue?this.state.editedValue:this.state.paperZ
  });

  if(comitValue)
    this.props.onNewZ(this.state.editedValue)

}
valuechange = (e,v)=>{
  this.setState({
    editedValue:v
  });
}
  render(){

    const actions = [
      <FlatButton
        label='Cancel'
        primary={false}
        onClick={()=>{this.handleClose(false);}}
        />,
        <FlatButton
        label='Ok'
        primary={true}
        keyboardFocused={true}
        onClick={() =>{this.handleClose(true);}}
        />,
    ];


    return(
      <div>
      <Paper zDepth={this.state.paperZ} style={{backgroundColor:this.props.uiColor, left:10,width:600,textAlign:'left'}}>
      <RaisedButton disabled={!this.props.uiEnabled} label='Adjust height' onClick={this.initEdit}/>
      </Paper>
      <Dialog
        title="Set UI paper z value"
        actions={actions}
        modal={this.props.modal}
        open={this.state.dialogOpen}
        onRequestClose={this.handleClose}
        >
          <Slider
            id='slider1'
            value={this.state.editedValue}
            onChange={this.valuechange}
            min={0} max={5} step={1} />
        </Dialog>
      </div>
    )

  }
}


export default App;

import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Dialog from 'material-ui/Dialog'
import Drawer from 'material-ui/Drawer/Drawer';
import { MenuItem, Menu } from 'material-ui';
import FlatButton from 'material-ui/FlatButton/FlatButton';

class App extends Component{

    constructor(){
        super();
        this.state={
            menuStatus:false,
            popUpStatus:false,
            navUrl:''
        }
    }

    toggleMenu = ()=>{
        let currStatus = this.state.menuStatus
        this.setState({          
            menuStatus:!currStatus
        })
    }
    
    togglePopup = (e,val)=>{
        this.setState({
            popUpStatus:true,
            navUrl:val
        })    
    }

    visitSite=()=>{
        window.open(this.state.navUrl,'_blank');
        this.popUpClose();
    }

  popUpClose=()=>{
      this.setState({
          popUpStatus:false
      })
  }
    
    render(){
        const popUpActions =[
            <FlatButton
                 id='ok-btn'
                 label='Yes'
                 keyboardFocused='true'
                 onClick={this.visitSite}
            ></FlatButton>,
            <FlatButton
            id='no-btn'
            label='No'  
            onClick={this.popUpClose}   
       ></FlatButton>        
        ]

        return(
         <div id='main-wrap'>
            <MuiThemeProvider>
                <AppBar id='main-appbar' title='Menu' onLeftIconButtonClick={this.toggleMenu}>
                </AppBar>
                <Drawer open={this.state.menuStatus}>
                    <Menu id='main-menu' onChange={this.togglePopup}>
                        <MenuItem id='back-itm' onClick={this.toggleMenu}>Back </MenuItem>
                        <MenuItem id='football-itm1' value='http://goal.com'>Visit Goal Site </MenuItem>
                        <MenuItem id='football-itm2' value='https://www.eurosport.com/'>Visit EuroSport Site </MenuItem>
                        <MenuItem id='football-itm3' value='http://www.skysports.com/'  >Visit SkySports Site </MenuItem>
                    </Menu>
                </Drawer>
                <Dialog
                    title='Confirm navigation?'
                    open={this.state.popUpStatus}
                    actions={popUpActions}      
                >
                </Dialog>
            </MuiThemeProvider>           
         </div>
        );
    }
}
export default App;
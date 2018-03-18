import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'
import Dialog from 'material-ui/Dialog'
import Drawer from 'material-ui/Drawer/Drawer';
import { MenuItem, Menu, TextField } from 'material-ui';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import { blue200, green200, red200, grey300, red100 } from 'material-ui/styles/colors';
import { green100 } from 'material-ui/styles/colors';



const people =[
    {FirstName:'Chathura',LastName:'Yapa',BirthTown:'Colombo',BirthYear:'1990'},
    {FirstName:'Andres',LastName:'Iniesta',BirthTown:'Madrid',BirthYear:'1989'},
    {FirstName:'Raul',LastName:'Gonzalez',BirthTown:'Tampere',BirthYear:'1991'},
    {FirstName:'Isco',LastName:'Alcarez',BirthTown:'Barcelona',BirthYear:'1994'},
]



class App extends Component{
 constructor(){
  super();
  this.state={
      drawerStatus:false,
      listEndStatus:true,
      listStartStatus:false,
      index:0,
      person:people[0]
  }
    }

    toggleDrawer = ()=>{
        this.setState({
            drawerStatus: !this.state.drawerStatus
        });

    }
    setPeopleIndex = (i)=>{
        
        let curr = (this.state.index == people.length-1)? this.state.index:this.state.index+i; // get and set the current indext of the "people" array
        let s_stat =(curr < people.length-1)? false : true; // set "Next" button availability based on the array position
        let e_stat = (curr>0)?true:false; // set "Previous" button availability based on the array position
        this.setState({
                index: curr,
                listStartStatus:s_stat,
                listEndStatus: !e_stat
    });
    this.toggleDrawer();
}

    render(){
        return(
         <div id='main-wrap'>
             <MuiThemeProvider>
              <AppBar title='View' onLeftIconButtonClick={this.toggleDrawer}></AppBar >
                <Drawer open={this.state.drawerStatus}>
                    <Menu>
                        <MenuItem onClick={this.toggleDrawer}>Back</MenuItem>
                        <MenuItem style={{backgroundColor:green100}} disabled={this.state.listStartStatus} onClick={(e)=>{this.setPeopleIndex(1)}}>Next</MenuItem>
                        <MenuItem style={{backgroundColor:red100}} disabled={this.state.listEndStatus} onClick={(e)=>{this.setPeopleIndex(-1)}}>Previous</MenuItem>

                    </Menu>
                </Drawer>

                <Paper style={{width:400}}>
                <PeopleForm
                 id='person-form'
                 person= {people[this.state.index]} // Pass the current person information to the child component
                >
                
                </PeopleForm>
                </Paper>

            </MuiThemeProvider>
         </div>



        );
    }
}


class PeopleForm extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
         <div>
            <div>First Name:<TextField disabled={true} value={this.props.person.FirstName}></TextField> </div>
            <div>Last Name:<TextField disabled={true} value={this.props.person.LastName} ></TextField> </div>
            <div>Birth Town:<TextField disabled={true} value={this.props.person.BirthTown} ></TextField> </div>
            <div>Birth Year:<TextField disabled={true} value={this.props.person.BirthYear}></TextField> </div>
         </div>

        )
    }
}

export default App;
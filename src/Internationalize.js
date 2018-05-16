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
import RaisedButton from 'material-ui/RaisedButton';

import LANGUAGE_BUNDLE from './language_bundle'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var people =[
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
      language:'en'
  }
    }
    toggleDrawer = ()=>{
        this.setState({
            drawerStatus: !this.state.drawerStatus
        });

    }
    setPeopleIndex = (i)=>{
        
        let curr =  this.state.index+i; // get and set the current indext of the "people" array
        let s_stat =(curr < people.length-1)? false : true; // set "Next" button availability based on the array position
        let e_stat = (curr>0)?false:true; // set "Previous" button availability based on the array position
        this.setState({
                index: curr,
                listStartStatus:s_stat,
                listEndStatus: e_stat
    });
    this.toggleDrawer();
}

    changeLang = (change)=>
    {
 
    if(change){
      this.setState({language:'en'})  
    }
    else
    this.setState({language:'fi'})
    }

    render(){

        let bundle = LANGUAGE_BUNDLE.default;
		if (this.state.language in LANGUAGE_BUNDLE) {
			bundle = LANGUAGE_BUNDLE[this.state.language];
		}
		
		//const theme = getMuiTheme({palette: bundle.palette});
		
        return(
         <div id='main-wrap'>
             <MuiThemeProvider >
              <AppBar title={bundle.viewTxt} onLeftIconButtonClick={this.toggleDrawer}></AppBar >
                <Drawer open={this.state.drawerStatus}>
                    <Menu>
                        <MenuItem onClick={this.toggleDrawer}>{bundle.backTxt}</MenuItem>
                        <MenuItem style={{backgroundColor:green100}} disabled={this.state.listStartStatus} onClick={(e)=>{this.setPeopleIndex(1)}}>{bundle.nextTxt}</MenuItem>
                        <MenuItem style={{backgroundColor:red100}} disabled={this.state.listEndStatus} onClick={(e)=>{this.setPeopleIndex(-1)}}>{bundle.previousTxt}</MenuItem>
                        <MenuItem disabled={true}></MenuItem>
                        <MenuItem disabled={true}></MenuItem>
                        <MenuItem onClick={()=>{this.changeLang(true)}}>En</MenuItem>
                        <MenuItem onClick={()=>{this.changeLang(false)}}>FI</MenuItem>
                    </Menu>
                </Drawer>

                <Paper style={{width:650}}>
                <PeopleForm
                 id='person-form'
                 person= {people[this.state.index]} // Pass the current person information to the child component
                 langBundle = {bundle}
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
        this.state={
            dialogStat:false,
            editableValue:'',
            editableField:''
        }
    }

    toggleDialog=()=>{
        this.setState({
            dialogStat:!this.state.dialogStat
        });
    }

    handleClose = (commit)=>{

        let currFieldName = this.state.editableField;
        if(commit){             
            if(currFieldName=='firstname')
                this.props.person.FirstName =this.state.editableValue;
            else if (currFieldName=='lastname')
                this.props.person.LastName =this.state.editableValue;
            else if(currFieldName=='birthtown')
                this.props.person.BirthTown =this.state.editableValue;
            else
                this.props.person.BirthYear =this.state.editableValue;
        }
        this.setState({editableValue:''});// reset the editable value
        this.toggleDialog();  
    }
    
    setEditValue=(e,v)=>{
        this.setState({editableValue:v}); //set edited value
    }

    initEdit =(field)=>{
        this.toggleDialog();
        this.setState({editableField:field}); //set edited field
    }

    render(){
        let bundle = LANGUAGE_BUNDLE.default;
		if (this.state.language in LANGUAGE_BUNDLE) {
			bundle = LANGUAGE_BUNDLE[this.state.language];
		}

        const dialogActions =[
            <FlatButton
                label={this.props.langBundle.okTxt}
                primary={true}
                keyboardFocused={true}
                onClick={()=>{this.handleClose(true)}}
            >
            </FlatButton>,
            <FlatButton
                 label={this.props.langBundle.cancelTxt}
                 primary={false}
                 onClick={()=>{this.handleClose(false)}}
            >
            </FlatButton>
        ]

 
        return(
         <div>
            <div> {this.props.langBundle.fnameTxt}
                <TextField disabled={true} value={this.props.person.FirstName}></TextField>
                <RaisedButton label={this.props.langBundle.editTxt} onClick={()=>this.initEdit('firstname')}/>
            </div>
            <div>
                {this.props.langBundle.lnameTxt}:
                <TextField disabled={true} value={this.props.person.LastName} ></TextField> 
                <RaisedButton label={this.props.langBundle.editTxt} onClick={()=>this.initEdit('lastname')}/>
            </div>
            <div>{this.props.langBundle.bTownTxt}
                <TextField disabled={true} value={this.props.person.BirthTown} ></TextField> 
                <RaisedButton label={this.props.langBundle.editTxt} onClick={()=>this.initEdit('birthtown')}/>
                </div>
            <div>{this.props.langBundle.bYearTxt}:
                <TextField disabled={true} value={this.props.person.BirthYear}></TextField>
                <RaisedButton label={this.props.langBundle.editTxt} onClick={()=>this.initEdit('birthyear')}/>
            </div>
    
            <Dialog 
            title={this.props.langBundle.nwValTxt +" :"}  
            open={this.state.dialogStat}
            actions ={dialogActions}
            >
            <TextField value={this.state.editableValue} onChange={(e,v)=>{this.setEditValue(e,v)}}></TextField>
            </Dialog>
         </div>

        )
    }
}
export default App;
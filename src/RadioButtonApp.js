import React, { Component } from 'react';

import TextGenerator from './TextGenerator.js'
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import { RadioButtonGroup, RadioButton, RaisedButton } from 'material-ui';
import { grey300, red200 } from 'material-ui/styles/colors';



class App extends Component{
    constructor(){
        super();
        this.state={
            fontSize:15,
            text:''
        }
    }

    SetFontSize=(e,val)=>{
        let size = this.state.fontSize;
        if(val=='9')
            size = 9;
        else if (val=='12')
            size= 12;
        else
            size = 16;

        this.setState({fontSize:size});
    }
    ChangeText=(val)=>{
        this.setState({text:val});
    }
    AddText=()=>{
        let curText = this.state.text
        let newText = TextGenerator.generate(this.state.text,5);

        this.setState({text:curText+newText})
    }

    render(){
        return(
    
            <div>
                <MuiThemeProvider>
                    <Paper style={{width:500,height:500}}>
                        <div style={{float:'left',height:300,width:'70%'}}>
                            <TextField value={this.state.text} style={{marginTop:40,fontSize:this.state.fontSize}} onChange={(e,v)=>{this.ChangeText(v);}}></TextField>   
                        </div>
                        <div style={{backgroundColor:grey300,width:'30%',float:'left'}}>
                           <RadioButtonGroup name='fontgroup' onChange={this.SetFontSize}>
                                <RadioButton id='rbtn1' label='9 points' value='9'/>
                                <RadioButton id='rbtn2' label='12 points' value='12'/>
                                <RadioButton id='rbtn3' label='16 points' value='16'/>
                           </RadioButtonGroup>
                          
                        </div>
                        <div>
                            <RaisedButton label='Generate' onClick={this.AddText} />
                        </div>
                    </Paper>
                </MuiThemeProvider>
            </div>
    )
    }
}

 export default App;
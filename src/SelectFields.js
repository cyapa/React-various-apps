import React, { Component } from 'react';

import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { Paper, DropDownMenu, MenuItem, TextField, RaisedButton } from 'material-ui';
import { red200 } from 'material-ui/styles/colors';


class App extends Component{
    constructor(){
        super();

        this.state = {
            lValue:0,
            rValue:0,
            operator:'+',
            output:0,

        }
    }
    SetLValue=(v)=>{
        this.setState({lValue:v});
    }
    SetRValue=(v)=>{
        this.setState({rValue:v});
    }
    SetOperator=(e,key,val)=>{
        this.setState({operator:val});
    }
    Calc =()=>{
       let leftV = this.state.lValue;
       let rightV = this.state.rValue;
       let curOperator = this.state.operator;
       let result = 0;

       if(curOperator =='+')
        result = leftV+rightV;
       else if(curOperator =='-')
        result = leftV-rightV;
       else if(curOperator =='*')
        result = leftV * rightV
       else
        result = leftV / rightV
    
       this.setState({output:result});
         
    }
    render(){
        return(
        <div>
            <MuiThemeProvider>
                <Paper>
                    <div>
                        <div style={{float:'left'}}>
                        <DropDownMenu id='leftInputDropdwn' value ={this.state.lValue} onChange={(e,v)=>{this.SetLValue(v);}} >
                            <MenuItem value ={0} primaryText='0'/>
                            <MenuItem value ={1} primaryText='1'/>
                            <MenuItem value ={2} primaryText='2'/>
                            <MenuItem value ={3} primaryText='3'/>
                            <MenuItem value ={4} primaryText='4'/>
                            <MenuItem value ={5} primaryText='5'/>
                            <MenuItem value ={6} primaryText='6'/>
                            <MenuItem value ={7} primaryText='7'/>
                            <MenuItem value ={8} primaryText='8'/>
                            <MenuItem value ={9} primaryText='9'/>
                        </DropDownMenu>
                        </div>
                        
                        <div style={{float:'left'}}>
                        <DropDownMenu id='arithmaticInputDropdwn' value ={this.state.operator} onChange={this.SetOperator} >
                            <MenuItem value ='+' primaryText='+'/>
                            <MenuItem value ='-' primaryText='-'/>
                            <MenuItem value ='/' primaryText='/'/>
                            <MenuItem value ='*' primaryText='*'/>
                        </DropDownMenu>
                        </div>

                        <div style={{float:'left'}}>
                        <DropDownMenu id='rightInputDropdwn' value ={this.state.rValue} onChange={(e,v)=>{this.SetRValue(v);}} >
                            <MenuItem value ={0} primaryText='0'/>
                            <MenuItem value ={1} primaryText='1'/>
                            <MenuItem value ={2} primaryText='2'/>
                            <MenuItem value ={3} primaryText='3'/>
                            <MenuItem value ={4} primaryText='4'/>
                            <MenuItem value ={5} primaryText='5'/>
                            <MenuItem value ={6} primaryText='6'/>
                            <MenuItem value ={7} primaryText='7'/>
                            <MenuItem value ={8} primaryText='8'/>
                            <MenuItem value ={9} primaryText='9'/>
                        </DropDownMenu>
                        </div>
                        <div>
                            <RaisedButton label='GO' onClick={this.Calc}/>
                        </div>
                        <div>
                            Output is : <TextField value={this.state.output} disabled={true}/>
                        </div>


                    </div>
                </Paper>
            </MuiThemeProvider>

        </div>
        )
    }
}

export default App;
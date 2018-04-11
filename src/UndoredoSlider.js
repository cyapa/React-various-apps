import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { Paper, Slider, RaisedButton, TextField, ImageTexture, ActionLabel } from 'material-ui';


class App extends Component{
   constructor(){
       super();
       this.state={
           slidedValue:0,
           output:'',
           history:[],
           future:[]
       }
   }
   setSliderValue=(e,v)=>{
       this.setState({slidedValue:v})
   }

   appendToOutput=()=>{
    let curOutput=this.state.output;
    let h = this.state.history;
    let f = this.state.future;
    h.push(curOutput);

    let newOutput = curOutput + this.state.slidedValue;
    
  

    this.setState(
        { output: newOutput,
         history:  h,
         future:f
        })
   }
   undo=()=>{
       if(this.state.history.length==0)
        return;
        
        const c = this.state.history.pop();
        const h = this.state.history;
        const f = this.state.future.concat(this.state.output);

        this.setState({
            history:h,
            future:f,
            output:c
        })
   }
   redo=()=>{
       if( this.state.future.length==0)
        return;
       
        const h = this.state.history.concat(this.state.output);
        const c = this.state.future.pop();
        const f = this.state.future;
      
        this.setState({
            history:h,
            future:f,
            output:c
        })

}
    render(){    
        return(
        <div>
            <MuiThemeProvider>
                <Paper style={{width:1000,height:300}}>
                    <div id='slider-wrap' style={{float:'left',width:'60%'}}>
                        <Slider min={0} max={255} Value={this.state.slidedValue} step={1} onChange={this.setSliderValue}/>
                    </div>
                    <div id='enter-btn-wrap' style={{marginLeft:10,width:30,float:'left'}}>
                        <RaisedButton label='->' onClick={this.appendToOutput}/>
                    </div>
                    <div id='output-txt-wrap' style={{float:'left',marginLeft:70}}>
                        <TextField disabled={true} multiLine={true} value={this.state.output}/>
                    </div>
                    <div id='slide-value' style={{width:200}}>Current slided value : {this.state.slidedValue}</div>
                   
                    <div id='func-btn-wrap' style={{marginLeft:575}}>
                     <div id='undo-btn-wrap' style={{width:30,float:'left'}}>
                        <RaisedButton disabled={(this.state.history.length==0)?true:false} label='undo' onClick={this.undo} />
                     </div>
                     <div id='redo-btn-wrap' style={{marginLeft:70,width:30,float:'left'}}>
                        <RaisedButton disabled={(this.state.future.length==0)?true:false} label='redo' onClick={this.redo} />
                     </div>
                    </div>
                </Paper>
     
            </MuiThemeProvider>

        </div>
        );
    }

}

export default App;
import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { RaisedButton, Paper } from 'material-ui';
import { blue300 } from 'material-ui/styles/colors';


var worker;

class App extends Component{
    constructor(){
        super();
        this.state={
            workerOutput:0
        }
    
    }

    startWorker=()=>{
        worker  = new Worker('primesWorker.js');
        worker.onmessage = (msg) => {
            let val = msg.data.newPrime
            this.setState({workerOutput:this.state.workerOutput+','+val})

        }
    }
    stopWorker=()=>{
            worker.terminate();
    }

    pauseWorker=()=>{
        if(null !=worker)
         worker.postMessage("pause");
    }
    continueWorker=()=>{
        if(null !=worker)
            worker.postMessage("continue")
    }
    render(){
        return(
        <div>
            <MuiThemeProvider style={{width:1200,height:300}}>
                <Paper style={{width:1200,height:300}}>
                    <div id='btn-wrap' style={{float:'left', width:400}}>
                    <div style={{float:'left', width:"20%"}}>
                        <RaisedButton label='Start' onClick={this.startWorker}/>
                    </div>
                    <div style={{float:'left', width:"20%"}}>
                        <RaisedButton label='Stop' onClick={this.stopWorker}/>
                    </div>
                    <div style={{float:'left', width:"20%"}}>
                        <RaisedButton label='Pause' onClick={this.pauseWorker}/>
                    </div>
                    <div style={{float:'left', width:"20%"}}>
                        <RaisedButton label='Continue' onClick={this.continueWorker}/>
                    </div>
                    </div>
                    <div style={{float:'left', height:20,width:'100%'}}>Output: {this.state.workerOutput}</div>
                </Paper>
            </MuiThemeProvider>
        </div>
        )
    }
}

export default App;
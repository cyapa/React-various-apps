import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { Paper, Slider } from 'material-ui';

import img1 from './images/isco0.jpg'
import img2 from './images/isco1.jpg'
import img3 from './images/isco2.jpg'
import img4 from './images/isco3.jpg'
import img5 from './images/isco4.jpg'
import img6 from './images/isco5.jpg'


class App extends Component{
    constructor(){
        super();

        this.state={
            imgSrc:img1
        };
    }

    switchImg = (e,v)=>{
        let curImg='';
        switch(v){
            case 0.0:
                curImg= img1
                break;
            case 0.2:
                curImg= img2
                break;
            case 0.4:
                curImg=img3
                break;
            case 0.6:
                curImg=img4
                break;
             case 0.8:
                curImg=img5
                break;
            case 1:
                curImg=img6
                break;

        }

        this.setState({imgSrc:curImg})
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <Paper style={{width:500,height:360}}>
                        <div id='img-contrainer' style={{}} >
                            <div style={{width:'100%'}}>
                                <img style={{width:'100%'}}  src={this.state.imgSrc}/>
                            </div>
                            <div style={{}}><Slider defaultValue='0.0' step={0.2} onChange={this.switchImg}/></div>
                        </div>
                    </Paper>
                </MuiThemeProvider>
            </div>
        )
    }
}




export default App
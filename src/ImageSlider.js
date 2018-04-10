import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { Paper, Slider } from 'material-ui';



const ROOT_PATH = './images/';
const ZEROTH_IMG='isco0.jpg'
const FIRST_IMG='isco1.jpg'
const SECOND_IMG='isco2.jpg'
const THIRD_IMG='isco3.jpg'
const FORTH_IMG='isco4.jpg'
const FIFTH_IMG='isco5.jpg'

class App extends Component{
    constructor(){
        super();

        this.state={
            imgSrc:ROOT_PATH + ZEROTH_IMG
        };
    }

    switchImg = (e,v)=>{
        let img='';
        switch(v){
            case 0.0:
                img= ZEROTH_IMG
                break;
            case 0.2:
                img= FIRST_IMG
                break;
            case 0.4:
                img=SECOND_IMG
                break;
            case 0.6:
                img=THIRD_IMG
                break;
             case 0.8:
                img=FORTH_IMG
                break;
            case 1:
                img=FIFTH_IMG
                break;

        }

        this.setState({imgSrc:ROOT_PATH+img})
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
import React, { Component } from 'react';
import './App.css';
import { red100, grey200 } from 'material-ui/styles/colors';

import img1 from './images/isco0.jpg'
import { TextField, RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';

class App extends Component{
    constructor(){
        super();
        this.state={
            imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWvY3J8nSpOebpBFp8OfZFaQQa0cav446CLVunTbW9dFh26FSww',
            imgCaption:''
        }
 
        this.imgcanvas=null;
        this.imageSource=null;
        
        
    }

    componentDidMount(){
      
        let ctx =this.imgcanvas.getContext('2d');
        ctx.canvas.width =600;
        ctx.canvas.height =600;
        let img = this.imageSource;
        ctx.drawImage(img,0,0);
    }

    setImage =(e,v)=>{
        this.setState({imgSrc:v})
    }
    setImageCaption =(e,v)=>{
        this.setState({imgCaption:v})
    }


    applyChanges=()=>{
       
        let ctx =this.imgcanvas.getContext('2d');
        let img = this.imageSource;
        ctx.drawImage(img,0,0);
        ctx.font = '48px sans-serif';
		ctx.lineWidth = 2;
		ctx.fillStyle = "black";
        const metrics = ctx.measureText(this.state.imgCaption);
        ctx.fillText(this.state.imgCaption,0,50)	
    }


    render(){
        return(
        <div>
            <MuiThemeProvider>
            <div id='btn-wrap' style={{backgroundColor:grey200,width:400}}>
                <div> Set  URL :<TextField value={this.state.imgSrc} onChange={this.setImage}/></div>
                <div> Set Image Caption :<TextField value={this.state.imgCaption} onChange={this.setImageCaption} /></div>
                <div> <RaisedButton label='Apply' onClick={this.applyChanges}/></div>
            </div>
             <div id='img-wrap' style={{width:250,height:250, display:'none'}}  >
                <img 
                style={{width:'100%'}}  
                src={this.state.imgSrc}
                ref={(e1)=>{this.imageSource = e1}}
                />
            </div>
            <div id='img-canvas' style={{width:'100%', marginTop:100}} >
            <canvas  ref={(e1)=>{this.imgcanvas = e1}}

            />
            </div>

          </MuiThemeProvider>
          </div>
        )
    }
}


export default App;
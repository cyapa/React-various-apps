import React, { Component } from 'react';
import './App.css';
import { red100, grey200 } from 'material-ui/styles/colors';


class App extends Component{
    constructor(){
        super();
        this.houseCanvas=null;
        
    }
    componentDidMount(){

        // House one
        let h1_ctx =this.houseCanvas.getContext('2d');
        h1_ctx.fillStyle ='brown';
        h1_ctx.beginPath();
        h1_ctx.moveTo(50,25);
        h1_ctx.lineTo(90,50);
        h1_ctx.lineTo(10, 50);
        h1_ctx.fill();

        h1_ctx.fillStyle ='yellow';
        h1_ctx.fillRect(15,50,70,50)
        h1_ctx.strokeRect(43,80,12,18)
        
        //House two
        let h2_ctx =this.houseCanvas.getContext('2d');
        h2_ctx.fillStyle ='black';
        h2_ctx.beginPath();
        h2_ctx.moveTo(180,25);
        h2_ctx.lineTo(250,50);
        h2_ctx.lineTo(110, 50);
        h2_ctx.fill();

        h2_ctx.fillStyle ='green';
        h2_ctx.fillRect(145,50,70,100)
        h2_ctx.strokeRect(150,60,12,18)
        h2_ctx.strokeRect(198,60,12,18)
        h2_ctx.strokeRect(172,125,15,25)

        
        //h1_ctx.fillRect(50,10,25,10);
    }
    render(){
        
        return(
            <div id='main-wrap'>
                <div id='house1'>
                    <div id='house-rect1'>
                        <canvas style={{backgroundColor:red100}} ref={(e1)=>{this.houseCanvas = e1}}

                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
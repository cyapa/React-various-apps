import React, { Component } from 'react';
import './App.css';
import { red100, grey200 } from 'material-ui/styles/colors';

class App extends Component{
    constructor(){
        super();
        this.faceCanvas=null;
       
    }

    componentDidMount(){
        requestAnimationFrame(this.animate);
    }

    animate=()=>{
        var canvas = this.faceCanvas;
        let ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        canvas.width=600;
        canvas.height=600;


        var face = {
            x: 120,
            y: 150,
            radius: 25,
            eyeballColor: 'black',

            clear: function(){
                ctx.fillStyle = 'white';
                ctx.fillRect(0,0,canvas.width,canvas.height);
            },

            draw: function() {

                  //Face
                ctx.beginPath();
                ctx.arc(220, 220, 200 ,0, 2 * Math.PI);
                ctx.stroke();

                   //Left Eye
                ctx.beginPath();
                ctx.arc(120, 150, 50 ,0, 2 * Math.PI);
                ctx.stroke();

                   //Right Eye
                ctx.beginPath();
                ctx.arc(320, 150, 50 ,0, 2 * Math.PI);
                ctx.stroke();
                    //Eye Balls
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true); //L- eye ball
                ctx.arc(this.x+200, this.y, this.radius, 0, Math.PI * 2, true); //R-eye ball
                ctx.closePath();
                ctx.fillStyle = this.eyeballColor;
                ctx.fill();
        }
    };

    canvas.addEventListener('mousemove', function(e) {

         face.clear(); // clear the existing canvas
          
         if(e.clientX>150)
            face.x = 160;
         else
            face.x = 130;
          if(e.clientY>150)
            face.y = 170;
         else
         face.y = 140;
          face.draw();
      });


        face.draw();
    

    }

    render(){
        return(
            <div id='main-wrap'>
            <div id='face'>
                    <canvas  ref={(e1)=>{this.faceCanvas = e1}}
                    />
            </div>
        </div>

        )
    }

}
export default App;
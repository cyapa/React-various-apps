import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui';


const TIME_OUT_IN_MILISECONDS = 3000;
class App extends Component{
    constructor(){
        super();
        this.state={
            expanded:false,
        }
    }
    toggleExpand = (val)=>{
      this.setState({expanded:val})
      //Trigger only when expanded
            if(val==true)
                setTimeout(()=>{this.toggleExpand(false)},TIME_OUT_IN_MILISECONDS)
        
    }

    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <Card style={{width:300}} expanded={this.state.expanded} onExpandChange={this.toggleExpand}>
                        <CardHeader title='FIFA Report - 2018' />
                        <CardTitle title='Country Ranking' actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            <div>1 . Spain </div>
                            <div>2 . Brazil </div>
                            <div>3 . Argentina </div>
                            <div>4 . Germany </div>
                            <div>5 . France </div>
                            <div>6 . Portugal </div>
                            <div>7 . Italy </div>
                            <div>8 . England </div>
                            <div>9 . Netherland </div>
                            <div>10 . Belgium </div>
                        </CardText>
                    </Card>
                </MuiThemeProvider>

            </div>
        )

        
    }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { muiThemeable } from 'material-ui/styles/muiThemeable';


var people =[
    {FirstName:'Chathura',LastName:'Yapa',BirthTown:'Colombo',BirthYear:'1990'},
    {FirstName:'Andres',LastName:'Iniesta',BirthTown:'Madrid',BirthYear:'1989'},
    {FirstName:'Raul',LastName:'Gonzalez',BirthTown:'Tampere',BirthYear:'1991'},
    {FirstName:'Isco',LastName:'Alcarez',BirthTown:'Barcelona',BirthYear:'1994'},
]
class App extends Component{
    render(){
        return(
            <div>
             <MuiThemeProvider>
             <Table>
                <TableHeader>
                <TableRow>
                    <TableHeaderColumn>First Name</TableHeaderColumn>
                    <TableHeaderColumn>Last Name</TableHeaderColumn>
                    <TableHeaderColumn>Birth Town</TableHeaderColumn>
                    <TableHeaderColumn>Birth Year</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody>         
            {
          people.map(function(person,index){
                return (
                    <TableRow>
                        <TableRowColumn>{person.FirstName}</TableRowColumn>
                        <TableRowColumn>{person.LastName}</TableRowColumn>
                        <TableRowColumn>{person.BirthTown}</TableRowColumn>
                        <TableRowColumn>{person.BirthYear}</TableRowColumn>
                        </TableRow>);
            })}
            </TableBody>
            </Table>
            </MuiThemeProvider>
            </div>
        );              
    }
}
export default App;
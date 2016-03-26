/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//LCARS random color setter
//Runs on page load and picks a random LCARS common color for the background of an element
function ran_col() { //function name
    var letters = ['FF9900','CC99CC','9999CC','CC6666','FFCC99','9999FF','FF9966','CC6699']; //Set your colors here
    
    //This block will define a random color from the above array to the specified elemtn by ID
    //Repeat as needed for any elements or IDs desired
    //This is for ID Nav bar home
    var color = '#'; // hexadecimal starting symbol
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('NavBarHome').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID NavBarHomeRaven
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('NavBarHomeRaven').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID NavBarHomeMatt
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('NavBarHomeMatt').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderA
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('MattsButton').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderB
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('PlaceholderB').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('PlaceholderC').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('RavensButton').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('PlaceholderD').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('PlaceholderE').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('PlaceholderF').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('PlaceholderG').style.background = color; // Setting the random color on your div element.
}

//LCARS random color setter
//Runs on page load and picks a random LCARS common color for the background of an element
function ran_colb() { //function name
    var letters = ['FF9900','CC99CC','9999CC','CC6666','FFCC99','9999FF','FF9966','CC6699']; //Set your colors here
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('CPP').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('Java').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('html').style.background = color; // Setting the random color on your div element.
    
    //See lines 7+8 and 12 - 14 for detailed information on this code segment
    //For ID PlaceholderC
    var color='#';
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('php').style.background = color; // Setting the random color on your div element
}
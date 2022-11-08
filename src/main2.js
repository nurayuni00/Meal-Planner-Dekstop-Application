const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

//path where the contents being saved
let pathName = path.join(__dirname, 'Files')

// create button function
btnCreate.addEventListener('click', function(){  //creating text file when user click CREATE button
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + "was created")    
    console.log("The file was created")
  
  })
  
})
// read btton function 
btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value)
 
  fs.readFile(file, function(err, data){ 
    if(err){
      return console.log(err)
    }
    //fileContents.value = data
    var txtfile = document.getElementById("fileName").value
    fileContents.value = data
    alert("Do you want to read " + txtfile + "?") 
    console.log("The file was read!")
  })
  
})
// delete button function
btnDelete.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
 
  fs.unlink(file, function(err){ 
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = ""
    var txtfile = document.getElementById("fileName").value
    alert("Do you want to delete " + txtfile + "?") 
    console.log("The file was deleted!")
  })
  
})
//update button function
btnUpdate.addEventListener('click', function(){  //creating text file when user click CREATE button
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
      if(err){
        return console.log(err)
      }
      var txtfile = document.getElementById("fileName").value
      alert(" Do you want to update " + txtfile + "?" )    
      console.log("The file was updated")
    
    })
    
  })


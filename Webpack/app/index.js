/**
 * Created by l on 2016/4/26.
 */
//require("./style.css")
//require("./main.scss")
require("./main.less")
var sub = require('./sub.js');
console.log(sub)
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World！！@232323232爽肤水的方式的</h1>';
app.appendChild(sub());
document.body.appendChild(app);

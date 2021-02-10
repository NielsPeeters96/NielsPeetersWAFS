# NielsPeeters_Web_App_From_Scratch
 Simple web app that connects a API, retrieves data with javascript, and displays it on the front end of the website. The goal is to learn javascript syntaxes, datatypes and basic knowledge of working with JSON and javascript objects.

Objective:

I want to get the data for all Studio Ghibli films and display the titles and descriptions in a grid. 
https://ghibliapi.herokuapp.com/#tag/Films%2Fpaths%2F~1films%2Fget

Finished the first task where we had to connect a API with our website. The second task is to add modules and routes to construct your code, besides that I fixed some issues my teammates made within my code. I'm currently developing routes with routie and trying to use only 1 server request.

use <script type="module" src="script.js"> or <script defer src="script.js"> at the top of the page

Modules:

A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

export keyword labels variables and functions that should be accessible from outside the current module.
import allows the import of functionality from other modules.

Async

async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded. As simple, as it can get, right?

Scope:

Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

Hoisting

Basically, when JavaScript compiles all of your code, all variable declarations using var are lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”. Now bear in mind, this notion of ‘hoisting’ doesn’t literally happen in your code, but is rather something that happens figuratively, and relates to how the JavaScript compiler reads through your code.

Always put variables at the top, after that tell you story and add functions to your application


 import React from "react";
 import ReactDOM from "react-dom/client";
 
 const parent = React.createElement("div", {id: "parent"},
                        [React.createElement("div", {id: "child"},
                        [React.createElement("h1", {} , "I'm h1 tag"), 
                         React.createElement("h2", {} , "I'm h2 tag")]),
                        
                         React.createElement("div", {id: "child2"},
                         [React.createElement("h3", {} , "I'm h3 tag"), 
                          React.createElement("h4", {} , "I'm h4 tag")]),]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);              

//const heading= React.createElement("h1", {id: "heading"}, "Hello World From React !!!");

        //const root= ReactDOM.createRoot(document.getElementById("root"));
        //root.render(heading);
const heading  = React.createElement("h1",
    {id:"heading"},
    "Hello world react!!!");
   // console.log(heading);
    const root     = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    const parent  = React.createElement(
        "div",
        {id:"parent"},[
        
            React.createElement("div",
            {id:"child1"},[
                React.createElement("h1",{id:"heading"},"Welcome react js h1!!!"),
                React.createElement("h2",{id:"heading"},"Welcome react js h2!!!")
            ]),
            React.createElement("div",
                {id:"child2"},[
                React.createElement("h1",{id:"heading"},"Welcome react js h1!!!"),
                React.createElement("h2",{id:"heading"},"Welcome react js h2!!!")
            ]),
            React.createElement("div",
                {id:"child3"},[
                React.createElement("h1",{id:"heading"},"Welcome react js h1!!!"),
                React.createElement("h2",{id:"heading"},"Welcome react js h2!!!")
            ])
                        
         ])
console.log(parent);
root.render(parent);
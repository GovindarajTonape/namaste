// const heading = React.createElement("h1",{id: "heading"},"NAMASTE REACCCT");
// const root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(heading);



// <div className="parent">
//     <div className="child">
//         <h1>I am h1 tag</h1> 
//     </div>
// </div> 

const parent  = React.createElement("div",{id: "parent"},
    React.createElement("div",{id: "child"},
    [
        React.createElement("h1",{},"This is a heading TAg"),
        React.createElement("h2",{},"This is a heading 2 TAg")
    ]
    )
)
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(parent);


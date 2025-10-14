const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);
const li1 = React.createElement("li", {}, "Item 1");
const li2 = React.createElement("li", {}, "Item 2");
const li3 = React.createElement("li", {}, "Item 3");
const ul = React.createElement("ul", {}, li1, li2, li3);

const college=React.createElement("div",{style:{  fontSize: "60px" }},"ABES Engineering college");
const img=React.createElement("img",{src:"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",style:{  borderRadius:"50%",height:"150px",width:"150px"}});
const adress=React.createElement("div",{},"Ghaziabad up");
const Name=React.createElement("div",{},"Ramprakash yadav ");
const wrapper=React.createElement("div",{style:{backgroundColor:'green',display:"flex"}},college,adress,Name,img);
const h2=<h2>i am here </h2>
root.render(h2);

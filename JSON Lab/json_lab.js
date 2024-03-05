var fruit = [
    {name:"Apple", quantity:20, color:"red"},
    {name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:5, color:"green"},  
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:10, color:"purple"},
  ]

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 16px Arial";
ctx.textAlign = 'center';
ctx.textBaseline = 'bottom';

for(let i = 0; i < fruit.length; i++) {
    const name = fruit[i].name;
    const color = fruit[i].color;
    const quant = fruit[i].quantity;
    ctx.fillStyle = color;
    ctx.fillRect(0, i * 200, (quant * 25), (canvas.height / fruit.length));
    //ctx.fillStyle = "black";
    
    ctx.fillText(fruit[i].name, 50, (i * 200) - 50);
    //ctx.fillText("Red", 0 + 20, (i * 200) - 50);
}

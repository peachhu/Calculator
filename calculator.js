const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//    res.sendFile(__dirname + '/index.html');
// });

app.get("/", (req, res) => {
   res.sendFile(__dirname + '/BmiCalculator.html');
}); 

// app.post("/", (req, res) => {
//    // console.log(req.body);
//    // console.log(req.body.num1);
//    // console.log(req.body.num2);
//    //    res.send("Thank you for posting something");
//    var num1 = Number(req.body.num1); // อ่านค่าจาก input1
//    var num2 = Number(req.body.num2); // อ่านค่าจาก input2

//    var result = num1 + num2; // รวมค่า
//    res.send("The calculation result is : " + result); // แสดงผล

// });

app.post("/", (req, res) => {
   // console.log(req.body);
   // console.log(req.body.num1);
   // console.log(req.body.num2);
   //    res.send("Thank you for posting something");
  
var w = Number(req.body.weight);
var h = Number(req.body.height);
var result = Math.round((w)/(Math.pow(h,2)));
 


if(result > 0){
if(result < 18.5) {
   res.send("คุณมีค่า BMI = " + result + ", คุณอยู่ในเกณฑ์ = ผอมเกินไป");
}else if((result >= 18.6) && (result <= 22.9)){
   res.send("คุณมีค่า BMI = " + result + ", คุณอยู่ในเกณฑ์ = น้ำหนักปกติ เหมาะสม");
}else if((result >= 23.0) && (result <= 24.9)){
   res.send("คุณมีค่า BMI = " + result + ", คุณอยู่ในเกณฑ์ = น้ำหนักเกิน");
}else if((result >= 25.0) && (result <= 29.9)){
   res.send("คุณมีค่า BMI = " + result + ", คุณอยู่ในเกณฑ์ = อ้วน");
}else{
   res.send("คุณมีค่า BMI = " + result + ", คุณอยู่ในเกณฑ์ = อ้วนมาก");
}
}
});


app.listen(3000, () => {
   console.log("Server is running on port 3000");
});

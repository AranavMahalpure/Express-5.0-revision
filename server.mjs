import express from 'express';
const app = express();
const port =3000;
app.use(express.json());
const reqlog =(req,res,next)=>{
    console.log(req.method + req.url);
    next();
}
app.use(reqlog);
app.listen(port,()=> console.log("server is listening at port"+ {port}));
app.get("/",(req,res)=>{
   res.send( 'welcome to server of the aranav mahalpure');
});
app.post("/api/users",(req,res)=>{
    console.log("body",req.body);
    res.send(req.body);
    res.json({});
})
app.get("/api/users",(req,res)=>{
    res.send(req.body.name);
 });
const express=require('express')
const config=require('./shared/config')
const db=require('./db')
const router=require('./routes')
const app=express()

app.use(express.json())
app.use(router)

db()

app.listen(config.port,()=>{
    console.log(`Server ${config.port}-portda ishlayapti`);
})
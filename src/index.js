const express=require('express')
const config=require('./shared/config')
const db=require('./db')

const app=express()

app.use(express.json())

db()

app.listen(config.port,()=>{
    console.log(`Server ${config.port}-portda ishlayapti`);
})
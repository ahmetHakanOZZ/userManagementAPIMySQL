const { error } = require('console');
//database ile bağlantı kuruyorum
const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3001

const db = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '',
    database: 'users1'
})

db.connect((err) => {
    try{
        if (err) throw err;
        console.log('baglı')
    }    
    catch (error){
        console.error('hata mesajı:', error)
    }    
})

app.get('/usernames', (req, res) =>{
    const sql = 'SELECT * FROM kullanici';
    db.query(sql,(error, result)=>{
        if(error) throw error
        res.json(result)
    })
})

fetch('http://localhost:3001/usernames')
.then(response => response.json())
.then(data =>{
    console.log(data)
})

app.listen(port,()=>{
    console.log(`sunucu ${port} portunda calışıyor`)
});
const mysql = require('mysql');
const http = require('http');
const url = require('url');

const pool = mysql.createPool({
    host: '13.125.254.147', 
    database : 'studydb',
    user : 'study',
    password : '1111'
})

var express = {
    
    entity : {},
    setEntity(url, callback){
        this.entity[url] = callback;
    },
    getEntity(url){
        return this.entity[url];
    }
    
}

const server = http.createServer((req, res) => {
  
    res.writeHead(200, {
        'Content-Type' : 'text/plain;charset=UTF-8'
    })

    
    var urlInfo = url.parse(req.url, true)
    
    var handler = express.getEntity(urlInfo.pathname)
    
    if(handler){
        
        handler(urlInfo, req, res);
        
    }
    
    express.setEntity('/member/list', (urlInfo, req, res) => {
        
        pool.getConnection((err, con) => {
            
            con.query('select * from pms2_member', (err, results) => {
            
                for(var reslut of results)
               
                res.write(reslut.mid)
                
                res.end();
            })
            
            con.release();
            
        })
        
    })
        
    
})

server.listen(8000, function(err){
    if(err)throw err;
    console.log('접속을 환영합니다.')
})
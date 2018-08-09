const mysql = require('mysql')
const http = require('http')
const url = require('url')



const pool = mysql.createPool({
    
    host: '13.125.254.147',
    database:'studydb',
    user:'study',
    password:'1111'
    
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
    
    var urlInfo = url.parse(req.url, true)
    
    res.writeHead(200,{
        'Content-Type':'text/plain;charset=UTF-8'
    })
    
    var call = express.getEntity(urlInfo.pathname);
    
    if(call){
        call(urlInfo, req, res);
    }else{
        
    }
    
    
    
        express.setEntity('/member/list', (urlInfo, req, res) => {
            
            pool.getConnection(function(err, con){
                
                con.query('select mid, email, pwd from pms2_member', function(err, results){
                    
                    for(var result of results)
                        res.write(result.mid)
                        
                        res.end();
                })
                
                con.release();
                
            })
            
        })
    
    
    
})



server.listen(8000, function(){})
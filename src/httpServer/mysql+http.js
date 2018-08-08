
const http = require('http');
const mysql = require('mysql');

var con = mysql.createConnection({
    host: '13.125.254.147', 
    database : 'studydb',
    user : 'study',
    password : '1111'
})

const server = http.createServer((req, res) => {
    
    res.writeHead(200, {
        'Content-Type' : 'text/plain;charset=UTF-8'
    })
    
    con.connect(function(err){
        if(err)res.end('서버 연결 오류 입니다.');
        con.query('select * from pms2_member', function(err, results){
            
            if(err)res.end('쿼리 오류 입니다.')
            
            for(var row of results)
                res.write(row.mid)
        
                res.end();
        
        })
    })
    
    
})

server.listen(8000, function(){
    console.log('서버 연결에 성공 했습니다.')
})
const mysql = require('mysql');

var con = mysql.createConnection({
    host: '13.125.254.147', 
    database : 'studydb',
    user : 'study',
    password : '1111'
})

con.connect(function(err){

    console.log('연결 완료')
    
    con.query('select * from pms2_member',function(err, results){
    
        if(err)throw err;
        
        for(var result of results){
            
            console.log(`아이디 = ${result.mid}, 비밀번호 = ${result.pwd}`)
            
        }
        
        console.log('쿼리 실행 완료')
        
    })
    
    con.end(function(err){
        if(err)throw err;
        
        console.log('종료 완료')
    })
    
})


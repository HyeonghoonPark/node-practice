const mysql = require('mysql');

var pool = mysql.createPool({
    host: '13.125.254.147', 
    database : 'studydb',
    user : 'study',
    password : '1111'
})

var id = 'hoonys'
var email = 'hoonys91@gmail.com'
var password = '1111'
    
pool.getConnection(function(err, con){
    
    if(err)throw err;
    
    con.query('insert into pms2_member(mid, email, pwd)\
            value(?, ?, password(?))',
            [id, email, password],
            function(err, result){
                if(err){console.log('쿼리 오류 입니다')}
                
                if(result.affectedRows == 1){
                    console.log('가입을 축하드립니다.')
                }
            })
})
const mysql = require('mysql');

var pool = mysql.createPool({
    host: '13.125.254.147', 
    database : 'studydb',
    user : 'study',
    password : '1111'
})

pool.getConnection(function(err, con){
    
    con.query('select * from pms2_member', function(err, results){
        if(err)throw err;
        
        for(var result of results)
            console.log(result.mid)
    })
    
    con.release();
    
})
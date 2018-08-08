const http = require('http');

var server = http.createServer((req,res) => {
    
    console.log('요청을 환영합니다')
    
})

server.listen(8000, function(){
    console.log('연결에 성공했습니다')
})
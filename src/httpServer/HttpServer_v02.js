const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    
    var urlInfo = url.parse(req.url, true);
    // true로 하면 파라미터 네임을 객체로 받아 준다.
    
    res.write(`${urlInfo.pathname}\n`); // url path
    res.write(urlInfo.query.name); // pointcut query
    
    res.end();
})

server.listen(8000, function(){
    console.log('서버 연결을 환영합니다.')
})
var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
    //node는 nodejs의 상위디렉토리에 있음. fileread.js는 nodejs의 하위디렉토리에 있기 때문에 nodejs폴더에서 node fileread.js 실행.
});
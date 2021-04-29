var args = process.argv;
console.log(args[2]);

console.log('A');
console.log('B');

if (args[2]=='1'){
    console.log('C1');
}else{
    console.log('C2');
}
console.log('D');

//PS C:\Users\master\Desktop\nodejs> node syntax/conditional.js egoing k8805
/*
위의 결과값

[
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\master\\Desktop\\nodejs\\syntax\\conditional.js',
    'egoing'
]

-> node.js는 세번째정보부터 입력값을 주도록 약속되어있다.
    배열형식으로 들어간다.
*/
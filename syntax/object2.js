var f = function () {
    console.log(1 + 1);
    console.log(1 + 2);
}

//배열의 원소로서 함수 존재가능
var a = [f];
a[0]();

var o = {
    func: f
}
o.func();

//자바스크립트에서는 function은 if문과 while문과는 달리 값이 될 수 있다.
// console.log(f);
// f();

//자바스크립트에서는 배열과 객체는 모두 서로 연관된 데이터를 담는 그릇이다. 
//자바스크립트에서는 처리방법을 그루핑하는 함수조차도 데이터이기도 하기 때문에 배열과 객체에다가 담을수있다.
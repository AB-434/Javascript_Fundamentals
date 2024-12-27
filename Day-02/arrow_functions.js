var hello = () => console.log("Hello World")
hello()

var sum = (a,b) => a+b
console.log(sum(32,18))

var process = (a,b) => {
    console.log("Yes");
    return a+b;
}
console.log(process(5,5))

(function(){
    console.log("Batman")
})()
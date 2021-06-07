for (var i=0; i<2; i++){
document.getElementsByTagName("i")[i].addEventListener("hover",function(event){
var h = this.innerHtml;
console.log(h);
});
}
// pointerover

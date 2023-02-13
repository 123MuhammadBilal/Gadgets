window.addEventListener("load", () => {
  var input= document.getElementById("text");
  var inc = document.getElementById('inc');
  var dinc = document.getElementById('dinc');
  var output = document.getElementById('output');
  inc.addEventListener('click',()=>{
    // alert('wer')
    encry=input.value;
    var encoded = window.btoa(encry);
    output.innerHTML=encoded;
    input.value="";
  })
  dinc.addEventListener('click',()=>{
    output.innerHTML;
    var decode = window.atob(output.innerHTML);
    output.innerHTML=decode;
  })  
  
}) 

// const message = "Hello World";
// const encoder = new TextEncoder();
// const encoded = encoder.encode(message);
// const decoder = new TextDecoder();
// const decoded = decoder.decode(encoded);
// console.log(decoded); // "Hello World"
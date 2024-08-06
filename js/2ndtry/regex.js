var str= 'kthakiyudheen 5454 INR kp fghj 77777 INR ,... kl5678 k  kerala898 get from you'



// let pa = /\b\d+\sINR\b/g
// let pa = /\bkl\d+\s/g
// const pa = /\b\d+(?:,\d{3})*\sINR\b/;
// let pa = /\bk\w*/g
// let pa = /[^a-zA-Z0-9\s]/g
let pa = /\d+\sINR/g

console.log(str.match(pa))
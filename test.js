// const axios = require("axios");

// axios
// 	.get("http://ec2-15-206-72-82.ap-south-1.compute.amazonaws.com:3000/")
// 	.then(r => console.log(r.data))
// 	.catch(err => console.error(err));

Number.prototype.pd = (len = 2, padStr = 0) =>
	String(this).padStart(len, padStr);

const _d = new Date();
const dt_str = `${_d.getDate().pd()}-${(
	_d.getMonth() + 1
).pd()}-${_d
	.getFullYear()
	.pd()} ${_d.getHours().pd()}:${_d.getMinutes().pd()}:${_d.getSeconds().pd()}`;

console.log(dt_str);

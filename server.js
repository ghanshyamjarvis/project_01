const app = require('./src/app');
const port = process.env.PORT || 4000;

const server = app.listen(port,()=>{
	console.log('server Created At' + port);
})




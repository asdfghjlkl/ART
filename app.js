const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const product=require('./routes/index_route.js')

//创建web服务器
var server=express();
server.listen(3000);
//托管静态资源到public目录下
server.use(express.static('public'));
server.use(express.static('ART'));
server.use(express.static('css'));
//使用body-parser中间件将post请求数据解析对象
//注意：一定要写在路由前边
server.use(bodyParser.urlencoded({
	extended:false
}));

//把用户路由器挂载到/user下
//  /user/gerister
server.use('/user',userRouter);
server.use('/product',product);


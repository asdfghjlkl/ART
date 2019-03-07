//引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//1.用户注册
router.post('/register',(req,res)=>{
	//获取post请求的数据
	var obj=req.body;
	
	var $uname=obj.uname;
	if(!$uname){
		res.send({code:407,msg:'uname required'});
	}
	var $upwd=obj.upwd;
	if(!$upwd){
		res.send({code:403,msg:'upwd required'});
		return;
	}

	var $phone=obj.phone;
	if(!$phone){
		res.send({code:401,msg:'phone required'});
		//阻止继续往后执行
		return;
	}

	var $user_name=obj.user_name;
	if(!$user_name){
		res.send({code:406,msg:'user_name required'});
		return;
	}
	
	//执行SQL语句，将注册的数据插入到xz_user数据表中，成功响应{code:200,msg:'register suc'}
	pool.query('INSERT INTO art_user SET ?',[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'register suc'});
		};
	});
});

//2.用户登录路由  method:post
//创建路由，获取请求的数据，验证数据为空
router.post('/login',(req,res)=>{
	var obj=req.body;
	var $phone=obj.phone;
	if(!$phone){
		res.send({code:401,msg:'uname require'});
		return;
	};
	var $upwd=obj.upwd;
	if(!$upwd){
		res.send({code:402,msg:'upwd require'});
		return;
	};
	//执行SQL语句，查看是否登录成功(使用用户名和密码两个条件能查询到数据)
	pool.query('SELECT * FROM art_user WHERE phone=? AND upwd=?',[$phone,$upwd],(err,result)=>{
		if(err) throw err;
		//判断查询的结果（数组）长度是否大于0
		//如果大于0，说明查询到数组，有这个用户登录成功
		if(result.length>0){
			res.send({code:200,msg:'login suc'});
		}else{
			res.send({code:301,msg:'login err'});
		}
	});
});

//导出路由器
module.exports=router;

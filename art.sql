SET NAMES UTF8;
DROP DATABASE IF EXISTS art;
CREATE DATABASE art CHARSET=UTF8;
USE art;
CREATE TABLE art_user(
	uid	INT	PRIMARY KEY  AUTO_INCREMENT,
	uname	VARCHAR(32),
	upwd	VARCHAR(32),
	phone	VARCHAR(16),
	user_name VARCHAR(32) 
);
CREATE TABLE art_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(32),
	src VARCHAR(255),
	name VARCHAR(32),
	details VARCHAR(32),
	price DECIMAL(8,2)
);
INSERT INTO art_product VALUES
(NULL,"WB","image/section/product/01.jpg","梳妆台","Dresser",9800),
(NULL,"WB","image/section/product/02.jpg","斗柜","Drawer Chest",9800),
(NULL,"WB","image/section/product/03.jpg","斗柜","Dresser",6800),
(NULL,"WB","image/section/product/04.jpg","高斗柜","Drawer Chest",8800),
(NULL,"SL","image/section/product/2-1.jpg","斗柜","Drawer Chest",8800),
(NULL,"SL","image/section/product/2-2.jpg","电视柜","Console Table",9800),
(NULL,"SL","image/section/product/2-3.jpg","娱乐储物桌","Game Storage Cocktail Ottoman",4800),
(NULL,"SL","image/section/product/2-4.jpg","梳妆台","Drawer",8800),
(NULL,"AS","image/section/product/3-1.jpg","床头柜","University Hills Nightstand",3800),
(NULL,"AS","image/section/product/3-2.jpg","斗柜","University Hills Drawer Chest",6800),
(NULL,"AS","image/section/product/3-3.jpg","梳妆台","Leander Single Dresser",6800),
(NULL,"AS","image/section/product/3-4.jpg","床头柜","Teravista Nightstand",4800),
(NULL,"33127","image/section/product/4-1.jpg","梳妆台","",8800),
(NULL,"33127","image/section/product/4-2.jpg","梳妆台","",8800),
(NULL,"33127","image/section/product/4-3.jpg","装饰柜","",8800),
(NULL,"33127","image/section/product/4-4.jpg","梳妆台","",8800);
$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/product",
        type:"get",
        dataType:"json",
        success:function(data){
            var html='';
            for(var i=0;i<4;i++){
                var p=data[i];
                html+=`<li class="list-item">
                    <a href="#">
                        <img src="${p.src}">
                        <div class="name">${p.name}</div>
                        <div class="en">${p.details}</div>
                        <div class="price">￥${p.price}</div>
                    </a>
                </li>`
            }
            var div=document.querySelector("#sk")
            $(div).append($(html));

            var html1='';
            for(var i=4;i<8;i++){
                var p=data[i];
                html1+=`<li class="list-item">
                    <a href="#">
                        <img src="${p.src}">
                        <div class="name">${p.name}</div>
                        <div class="en">${p.details}</div>
                        <div class="price">￥${p.price}</div>
                    </a>
                </li>`
            }
            var div=document.querySelector("#sg")
            $(div).append($(html1));

            var html2='';
            for(var i=8;i<12;i++){
                var p=data[i];
                html2+=`<li class="list-item">
                    <a href="#">
                        <img src="${p.src}">
                        <div class="name">${p.name}</div>
                        <div class="en">${p.details}</div>
                        <div class="price">￥${p.price}</div>
                    </a>
                </li>`
            }
            var div=document.querySelector("#sa")
            $(div).append($(html2));

            var html3='';
            for(var i=12;i<16;i++){
                var p=data[i];
                html3+=`<li class="list-item">
                    <a href="#">
                        <img src="${p.src}">
                        <div class="name">${p.name}</div>
                        <div class="price">￥${p.price}</div>
                    </a>
                </li>`
            }
            var div=document.querySelector("#sd")
            $(div).append($(html3));
           
        }
    })
})
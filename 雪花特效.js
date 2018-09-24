<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body bgColor = '#000'>
    
</body>
<script>
    let i = 0;
    function create(){
        //创建流星
        let el = document.createElement("div");
        el.innerHTML = "*";
        el.style.top = "0px";
        el.style.position = "absolute";
        el.style.color = "#FFFAF0";
        el.style.fontSize = "30px";
        el.style.zIndex = "10000";
        el.style.transform = "rotate(0deg)"
        return new animate(el); 
      }
      function animate(el){
        //储存创建好的流星
        this.el = el;
        //初始位置
        this.direaction();
        //判断是往左飞还是往右飞
        this.dir_center();
        //飘流星最大高度
        this.maxHeight = this.sumHeight();
        //添加流星
        document.getElementsByTagName("body")[0].appendChild(this.el);
        //下流星
        this.down_snow();
        //清除流星
        this.clear_snow();
      }
      animate.prototype = {
        direaction(){
          this.el.style.left = Math.random()*document.documentElement.clientWidth - 100 + "px";
        },
        sumHeight(){
          return screen.availHeight;
        },
        dir_center(){
          this.center = document.documentElement.clientWidth / 2;
          let left = parseInt(this.el.style.left.replace("px",""));
          if(left > this.center){
            this.move = 0;
            return false;
          }
          this.move = 1;
        },
        down_snow(){
          this.timer = setInterval(()=>{
            let top = getComputedStyle(this.el,null)["top"].replace("px","");
            let left = getComputedStyle(this.el,null)["left"].replace("px","");
            if(this.move == 0){
              top = parseInt(top) + 2;
              left = parseInt(left) - 1;
              this.maxHeight -= 2;
            }else{
              top = parseInt(top) + 2;
              left = parseInt(left) + 1;
              this.maxHeight -= 2;
            }
            this.tletf = this.tletf == undefined?0:this.tletf;
            //旋转
            this.tletf = this.tletf == undefined?0:this.tletf+=10;
            this.el.style.transform = `rotate(${this.tletf}deg)`
            this.el.style.top = top + "px";
            this.el.style.left = left + "px";
          },12)
        },
        clear_snow(){
          let time = setInterval(()=>{
            if(this.maxHeight <= 110){
              //重新定位Y轴
              this.el.style.top = 0;
              //判断是否在左侧
              this.direaction();
                //重新定位高度
                this.maxHeight = this.sumHeight();
              //判断是往左飞还是往右飞
              this.dir_center();
            }
          },12)
        }
      }
      //设置星星
      let time = setInterval(function(){
        if(i<50){
          i++;
          create();
          return false;
        }
        clearInterval(time);
      },400)
</script>
</html>

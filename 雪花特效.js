function create(){
    //创建雪花
    let el = document.createElement("div");
    el.innerHTML = "*";
    el.style.top = "0px";
    el.style.position = "absolute";
    el.style.color = "#0FF";
    el.style.fontSize = "32px";
    el.style.zIndex = "10000";
    return new animate(el); 
  }
  function animate(el){
    //储存创建好的雪花
    this.el = el;
    //初始位置
    this.direaction();
    //飘雪花最大高度
    this.maxHeight = this.sumHeight();
    //添加雪花
    document.getElementsByTagName("body")[0].appendChild(this.el);
    //下雪花
    this.down_snow();
    //清除雪花
    this.clear_snow();
  }
  animate.prototype = {
    direaction(){
      this.el.style.left = Math.random()*document.documentElement.clientWidth - 100 + "px";
    },
    sumHeight(){
      return screen.height;
    },
    down_snow(){
      this.timer = setInterval(()=>{
        let top = getComputedStyle(this.el,null)["top"].replace("px","");
        top = parseInt(top) + 2;
        let left = getComputedStyle(this.el,null)["left"].replace("px","");
        left = parseInt(left) - 1;
        this.el.style.top = top + "px";
        this.el.style.left = left + "px";
        this.maxHeight -= 2;
      },12)
    },
    clear_snow(){
      let time = setInterval(()=>{
        if(this.maxHeight <= 0){
          clearInterval(this.time);
          clearInterval(this.timer);
          this.el.remove();
        }
      },12)
    }
  }
  //设置雪花
  setInterval(function(){
    create();
  },200)
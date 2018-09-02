let i = 0;
    function create(){  //创建雪花用的
        this.el = document.createElement("div");
        this.el.classList = "xue";
        this.el.innerHTML = "*";
        document.body.appendChild(this.el);
        this.maxWidth();
        this.positionX();
        this.load();
        this.Height();
        this.animate();
    }
    create.prototype = {
        maxWidth(){
            this.maxW = document.body.offsetWidth;
        },
        positionX(){
            this.x = Math.random() * this.maxW - 1;
        },
        animate(){
            this.Timer = setInterval(()=>{
                let style = getComputedStyle(this.el,null);
                let height = style["top"].replace("px","");
                let width = style["left"].replace("px","");
                width = parseInt(width) - 5;
                height = parseInt(height) + 10;
                if(height < this.y){
                    this.el.style["top"] = height + "px";
                    this.el.style["left"] = width + "px";
                    return false;
                }
                clearInterval(this.Timer);
                this.el.remove();
            },30)
        },
        load(){
            this.el.style["left"] = this.x + "px";
        },
        Height(){
            this.y = document.documentElement.clientHeight;
            console.log(this.y)
        }
    }
    let timer = setInterval(function(){
        if(i<100){
            new create();
            i++;
            return false;
        }
        clearInterval(timer);
    },50)

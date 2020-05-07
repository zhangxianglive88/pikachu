!function () {
    let duration = 50
    $('.speed').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'low':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'quick':
                duration = 10
                break
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css, 'css');
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `
/*
* 我画了一张皮卡丘送给你，准备好了吗？
* 好，那就让我们开始吧
* 首先，画皮卡丘的皮
*/
.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255,230,0);
}
#pikachu{
    width: 320px;
    height: 192px;
    position: relative;
}
/*
* 接下来，画皮卡丘的鼻子
*/
.nose{
    position: absolute;
    width: 0px;
    height: 0px;
    border: 12px solid rgb(0,0,0);
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    left: 50%;
    margin-left: -12px;
    top: 27px;
}
/*
* 接下来，画皮卡丘的眼睛
*/
.eye{
    position: absolute;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgb(46, 46, 46);
    border: 2px solid rgb(0,0,0);
}
.eye.left{
    right: 50%;
    margin-right: 72px;
}
.eye.right{
    left: 50%;
    margin-left: 72px;
}
/*
* 眼睛里面的珠子
*/
.eye::after{
    position: absolute;
    content: '';
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid rgb(0,0,0);
    background: rgb(255, 255, 255);
}
.eye.left::after{
    left: 4px;
}
.eye.right::after{
    left: 4px;
}
/*
* 然后，画皮卡丘的脸
*/
.flush{
    position: absolute;
    width: 72px;
    height: 72px;
    border: 2px solid rgb(0, 0, 0);
    background: rgb(255, 0, 0);
    border-radius: 50%;
    top: 90px;
}
/*
* 将脸放到正确的位置
*/
.flush.left{
    left: 0px;
}
.flush.right{
    right: 0px;
}
/*
* 上嘴唇
*/
.upperLip{
    position: absolute;
    width: 66px;
    height: 14px;
    border: 2px solid black;
    top: 53px;
    background: rgb(255,230,0);
}
.upperLip.left{
    border-bottom-left-radius: 30px 20px;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(-30deg);
    left: 96px;
}
.upperLip.right{
    border-bottom-right-radius: 30px 20px;
    border-top: transparent;
    border-left: transparent;
    transform: rotate(30deg);
    right: 96px;
}
/*
* 下嘴唇
*/
.lowerLip-wrapper{
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -54px;
    width: 108px;
    height: 143px;
    overflow: hidden;
    border-radius: 50px/30px;
}
.lowerLip{
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    width: 100px;
    height: 800px;
    border: 2px solid black;
    border-radius: 200px/600px;
    background: rgb(155, 0, 10);
    overflow: hidden;
}
/*
* 舌头
*/
.lowerLip::after{
    position: absolute;
    bottom: 0;
    left: 50%;
    content: '';
    width: 90px;
    height: 110px;
    margin-left: -45px;
    border-radius: 60px/40px;
    border: 1px solid black;
    background: rgb(255, 72, 95);
}
/*
* 好了，皮卡丘画完啦~ 
*/
`
    writeCode('', code)
}.call()
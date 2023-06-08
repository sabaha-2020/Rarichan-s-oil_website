(function(){
    const fonts=["cursive","sans-serif","serif","monospace"];
    let captchaValue="";
    function generateCaptcha(){
        let value=btoa(Math.random()*10000000000);
        value=value.substring(0.5+Math.random()*5);
        captchValue=value
    }
    function setcaptcha(){
         let html = captchValue.split("").map((char)=>{
            const rotate = -20+Math.trunc(Math.random()*30)
            const font = Math.trunc(Math.random()*fonts.length)
            return `<span
            style = "transform:rotate(${rotate}deg);
            font-family:$(fonts"[fonts]}"
            >${char}</span>`;
        }).join("");
document.querySelector(".textar .captcha .preview").innerHTML = html;
    }
    function initcaptcha(){
        document.querySelector(".textar .captcha .captcha-refresh").addEventListener
        ("click",function(){
            generateCaptcha();
            setcaptcha();
        });  
          generateCaptcha();
         setcaptcha();

    }
    initcaptcha();
    document.querySelector(".textar #btn-button").addEventListener("click",function(){
let inputCaptchaValue = document.querySelector(".textar .captcha-form .captcha-input").value;
if(inputCaptchaValue === captchaValue){
    swal("","Logging In!","success");
}else{
    swal ("invalid captcha");
}
    })
})();
 console.log("JS file connected");

 const imgSVG = document.querySelector("#badge_one_img");

 function logImgSvgId() {
    console.log(this.id);
 };

 imgSvg.addEventListener("click", logImgSvgId);

 const inlineSvg = document.querySelector("badge");

 function logInlineSvgId(){
    console.log(' the id of this element is: $(this.id)');
 }

 inlineSvg.addEventListener("click", LogInlineSvgId);
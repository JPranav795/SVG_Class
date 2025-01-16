 console.log("JS file connected");

 const imgSVG = document.querySelector("#badge_one_img");

 function logImgSvgId() {
    console.log(this.id);
 };

 imgSvg.addEventListener("click", logImgSvgId);
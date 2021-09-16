// $(function(){
//     $(".slide>li").eq(0).siblings().css({ left: "-1480px" });
//     let imageI = 0;
//     setInterval(() => {
//       if (imageI < 2) {
//         imageI++;
//       } else {
//         imageI = 0;
//       }
//       $(".slide>li").eq(imageI).siblings().animate({ left: "-1480px" }, 500);
//       $(".slide>li").eq(imageI).animate({ left: "0" }, 500);
//     }, 3000);
// });

document.querySelector('.btn2').addEventListener('click', function(){
    document.querySelector('.container').style.transform ='translate(-1480px)';
});
document.querySelector('.btn3').addEventListener('click', function(){
    document.querySelector('.container').style.transform ='translate(-2960px)';
});
document.querySelector('.btn1').addEventListener('click', function(){
    document.querySelector('.container').style.transform ='translate(0)';
});
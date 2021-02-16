var $ = document.querySelector.bind(document);

var btnTinhNum = $("#btnTinhNum");
btnTinhNum.addEventListener("click", function(){
    // Lấy dữ liệu khách nhập vào
    var num1 = parseInt($("#num1").value);
    var num2 = parseInt($("#num2").value);
    var num3 = parseInt($("#num3").value);
    // Tạo biến để thông báo bên UI
    var thongBaoNum = $("#thongBaoTinhNum");
    // Dùng if else để lọc và sắp xếp
    if(num1 > num2 && num1 > num3 & num2 > num3){
        thongBaoNum.style.display = "block"
        thongBaoNum.innerHTML = "Thứ tự tăng dần là: " + num3 + " " + num2 + " " + num1;
    }else if(num2 > num1 && num2 > num3 && num1 > num3){
        thongBaoNum.style.display = "block"
        thongBaoNum.innerHTML = "Thứ tự tăng dần là: " + num3 + " " + num1 + " " + num2;
    }else if(num2 > num1 && num2 > num3 && num3 > num1){
        thongBaoNum.style.display = "block"
        thongBaoNum.innerHTML = "Thứ tự tăng dần là: " + num1 + " " + num3 + " " + num2;
    }else if(num3 > num2 && num3 > num1 && num2 > num1){
        thongBaoNum.style.display = "block"
        thongBaoNum.innerHTML = "Thứ tự tăng dần là: " + num1+ " " + num2 + " " + num3;
    }else if(num1 > num2 && num1 > num2 && num3 > num2){
        thongBaoNum.style.display = "block"
        thongBaoNum.innerHTML = "Thứ tự tăng dần là: " + num2 + " " + num3 + " " + num1;
    }
    else{
        thongBaoNum.style.display = "block"
        thongBaoNum.innerHTML = "Nhập đúng định dạng và phải là 3 số khác nhau";
    }
});

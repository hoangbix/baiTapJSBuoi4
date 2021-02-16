var $ = document.querySelector.bind(document);

var btnTinhChanLe = $("#btnTinhChanLe");

btnTinhChanLe.addEventListener("click", function(){
    var chanLe1 = parseInt($("#chanLe1").value);
    var chanLe2 = parseInt($("#chanLe2").value);
    var chanLe3 = parseInt($("#chanLe3").value);
    var thongBaoTinhChanLe = $("#thongBaoTinhChanLe");

    if(chanLe1 % 2 == 0 && chanLe2 % 2 == 0 && chanLe3 % 2 ==0){
        thongBaoTinhChanLe.style.display = "block";
        thongBaoTinhChanLe.innerHTML = "Số chẵn: " + chanLe1 + " " + chanLe2 + " " + chanLe3;
    }else if (chanLe1 % 2 != 0 && chanLe2 % 2 != 0 && chanLe3 % 2 != 0){
        thongBaoTinhChanLe.style.display = "block";
        thongBaoTinhChanLe.innerHTML = "Số lẻ: " + chanLe1 + " " + chanLe2 + " " + chanLe3;
    }else if (chanLe1 % 2 == 0 && chanLe2 % 2 != 0 && chanLe3 % 2 !=0){
        thongBaoTinhChanLe.style.display = "block";
        thongBaoTinhChanLe.innerHTML = "Số chẵn: " + chanLe1 + "<br>Số lẻ: " + chanLe2 + " " + chanLe3;
    }else if (chanLe1 % 2 == 0 && chanLe2 % 2 == 0 && chanLe3 % 2 != 0){
        thongBaoTinhChanLe.style.display = "block";
        thongBaoTinhChanLe.innerHTML = "Số chẵn: " + chanLe1 + " " + chanLe2 +"<br>Số lẻ: " + " " + chanLe3; 
    }else if (chanLe1 % 2 != 0 && chanLe2 % 2 == 0 && chanLe3 % 2 == 0){
        thongBaoTinhChanLe.style.display = "block";
        thongBaoTinhChanLe.innerHTML = "Số chẵn: " + chanLe2 + " " + chanLe3 +"<br>Số lẻ: " + " " + chanLe1; 
    }else if (chanLe1 % 2 != 0 && chanLe2 % 2 != 0 && chanLe3 % 2 == 0){
        thongBaoTinhChanLe.style.display = "block";
        thongBaoTinhChanLe.innerHTML = "Số chẵn: " + chanLe3+"<br>Số lẻ: " + " " + chanLe1 + " " + chanLe2; 
    }else if (chanLe1 % 2 != 0 && chanLe2 % 2 == 0 && chanLe3 % 2 != 0){
        thongBaoTinhChanLe.style.display = "block";
        thongBaoTinhChanLe.innerHTML = "Số chẵn: " + chanLe2+"<br>Số lẻ: " + " " + chanLe1 + " " + chanLe3; 
    }else if (chanLe1 % 2 == 0 && chanLe2 % 2 != 0 && chanLe3 % 2 == 0){
        thongBaoTinhChanLe.style.display = "block";
        thongBaoTinhChanLe.innerHTML = "Số chẵn: " + chanLe1 + " " + chanLe3 + "<br>Số lẻ: " + chanLe2;
    }else{
        thongBaoTinhChanLe.innerHTML = "Nhập vào không hợp lệ!!!";
        thongBaoTinhChanLe.style.border = "1px solid red";
        thongBaoTinhChanLe.style.color = "red";
    }
});
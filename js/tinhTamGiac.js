var $ = document.querySelector.bind(document);

var btnTinhTamGiac = $("#btnTinhTamGiac");

btnTinhTamGiac.onclick = function(){
    var TamGiac1 = parseInt($("#TamGiac1").value);
    var TamGiac2 = parseInt($("#TamGiac2").value);
    var TamGiac3 = parseInt($("#TamGiac3").value);
    var thongBaoTinhTamGiac = $("#thongBaoTinhTamGiac");

    if(TamGiac1 == TamGiac2 && TamGiac2 == TamGiac3){
        thongBaoTinhTamGiac.style.display = "block"
        thongBaoTinhTamGiac.innerHTML = "Đây là tam giác ĐỀU";
    }else if(TamGiac1==TamGiac2 || TamGiac1==TamGiac3 || TamGiac2==TamGiac3){
        thongBaoTinhTamGiac.style.display = "block"
        thongBaoTinhTamGiac.innerHTML = "Đây là tam giác CÂN";
    }else if(TamGiac1*TamGiac1==TamGiac2*TamGiac2+TamGiac3*TamGiac3 || TamGiac2*TamGiac2==TamGiac1*TamGiac1+TamGiac3*TamGiac3 || TamGiac3*TamGiac3== TamGiac1*TamGiac1+TamGiac2*TamGiac2){
        thongBaoTinhTamGiac.style.display = "block"
        thongBaoTinhTamGiac.innerHTML = "Đây là tam giác VUÔNG";
    }else if(TamGiac1*TamGiac1 > TamGiac2*TamGiac2+TamGiac3*TamGiac3 || TamGiac2*TamGiac2 > TamGiac1*TamGiac1+TamGiac3*TamGiac3 || TamGiac3*TamGiac3 > TamGiac1*TamGiac1+TamGiac2*TamGiac2){
        thongBaoTinhTamGiac.style.display = "block"
        thongBaoTinhTamGiac.innerHTML = "Đây là tam giác TÙ";
    }else{
        thongBaoTinhTamGiac.style.display = "block"
        thongBaoTinhTamGiac.innerHTML = "Không hợp lệ!!!";
    }
};
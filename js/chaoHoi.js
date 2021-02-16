var $ = document.querySelector.bind(document);

var btnTinhChao = $("#btnTinhChao");
btnTinhChao.addEventListener("click", function(){
    var chaoHoi = $("#chaoHoi").value;
    var thongBaoTinhChao = $("#thongBaoTinhChao")

    if(chaoHoi == "b" || chaoHoi == "B" || chaoHoi == "Bố" || chaoHoi == "bo" || chaoHoi == "Bo" || chaoHoi == "BỐ" || chaoHoi == "BO" || chaoHoi == "bố"){
        thongBaoTinhChao.style.display = "block";
        thongBaoTinhChao.innerHTML = "Xin chào, Bố!";
    }else if(chaoHoi == "m" || chaoHoi == "M" || chaoHoi == "Mẹ" || chaoHoi == "me" || chaoHoi == "Me" || chaoHoi == "MẸ" || chaoHoi == "ME"){
        thongBaoTinhChao.style.display = "block";
        thongBaoTinhChao.innerHTML = "Xin chào, Mẹ!";
    }else if(chaoHoi == "a" || chaoHoi == "A" || chaoHoi == "Anh" || chaoHoi == "anh" || chaoHoi == "ANH"){
        thongBaoTinhChao.style.display = "block";
        thongBaoTinhChao.innerHTML = "Xin chào, Anh!";
    }else if(chaoHoi == "e" || chaoHoi == "E" || chaoHoi == "Em" || chaoHoi == "em" || chaoHoi == "EM"){
        thongBaoTinhChao.style.display = "block";
        thongBaoTinhChao.innerHTML = "Xin chào, Em!";
    }else{
        thongBaoTinhChao.style.display = "block";
        thongBaoTinhChao.innerHTML = "Không tìm thấy dữ liệu!";
    }
});
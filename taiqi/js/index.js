$(document).ready(function (argument) {
	var company = function (_value) {
		$.ajax({
			url: "./index.php?s=/addon/Taiqi/Taiqi/search",
			type: "post",
			data: {
				title:_value
			},
			dataType: 'json',
			success: function (datajson) {
				if (datajson.status === true) {
					var list = datajson.data;
					var xiang = list.case;//入货产品（箱）
					var guan = list.can;//入货产品（罐）
					var quan = list.circle;//围绕地球直径圈数（圈）,
					var level = list.grade;//等级 1:臻品黄钻级 | 2:至尊白钻级 | 3:闪亮金冠级 | 4:典藏铂金级
					var xiang_box = $(".xiang_num");
					var guan_box = $(".guan_num");
					var quan_box = $(".quan_num");
					var level_logo = $(".page_6 .row_1");
					var level_word = $(".page_6 .row_2");
					var level_pic = $(".page_6 .zhuan");
					xiang_box.html(xiang);
					guan_box.html(guan);
					quan_box.html(quan);
					switch (level){ 
						case "1" : {
							level_logo.attr("src","img/level_1.png");
							level_word.attr("src","img/levelword_1.png");
							level_pic.attr("src","img/zhuan_1.png").css({"width":"1.36rem","height":"1.295rem","top":"2.95rem","left": "0.9675rem"});
							break;
						}  
						case "2" : {
							level_logo.attr("src","img/level_2.png");
							level_word.attr("src","img/levelword_2.png");
							level_pic.attr("src","img/zhuan_2.png").css({"width":"1.23rem","height":"1rem","top":"3.08rem","left": "1rem"});
							break;
						}  
						case "3" : {
							level_logo.attr("src","img/level_3.png");
							level_word.attr("src","img/levelword_3.png");
							level_pic.attr("src","img/zhuan_3.png").css({"width":"1.47rem","height":"0.995rem","top":"3.095rem","left": "0.85rem"});
							break;
						} 
						case "4" : {
							level_logo.attr("src","img/level_4.png");
							level_word.attr("src","img/levelword_4.png");
							level_pic.attr("src","img/zhuan_4.png").css({"width":"1.03rem","height":"1.48rem","top":"3.01rem","left": "1.065rem"});
							break;
						}  
						default : break; 
					} 
				}else{
					alert(datajson.info);
				}
			}
		})
	}
	var mySwiper = new Swiper ('.swiper-container', {
	    direction:'horizontal',
	    noSwiping :true,
	    loop:false
	}) 
	var company_box = $(".company");
	var company_select = $("#company");
	var company_value = "";
	company_select.change(function (argument) {
		company_value = company_select.find("option:selected").val();
		company_box.css("background","#fff").attr("value",company_value);
	})
	$('.go').click(function(){
		company(company_value);
		mySwiper.slideTo(1, 300, false);//切换到第一个slide，速度为1秒
	})
	var navs = $(".navs");
	var nav_item = $(".navs .item");
	setInterval(function (argument) {
		var active_slide_id = $(".swiper-slide-active").attr("id");
		if (active_slide_id === "page_1") {
			navs.hide();
			return false;
		}else if (active_slide_id === "page_2"){
			navs.show();
			$(nav_item[0]).addClass("active").siblings().removeClass("active");
		}else if (active_slide_id === "page_3"){
			navs.show();
			$(nav_item[1]).addClass("active").siblings().removeClass("active");
		}else if (active_slide_id === "page_4"){
			navs.show();
			$(nav_item[2]).addClass("active").siblings().removeClass("active");
		}else if (active_slide_id === "page_5"){
			navs.show();
			$(nav_item[3]).addClass("active").siblings().removeClass("active");
		}else if (active_slide_id === "page_6"){
			navs.show();
			$(nav_item[4]).addClass("active").siblings().removeClass("active");
		}else if (active_slide_id === "page_7"){
			navs.hide();
			return false;
		}
	},100)
})
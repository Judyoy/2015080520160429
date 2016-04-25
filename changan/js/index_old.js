$(document).ready(function (argument) {
	//配置表滚动条
	setTimeout(function (argument) {
		jsScroll(document.getElementById('peizhi_scroll'), 10, 'divScrollBar');
	},500)

	// 车展示切换
	for (var i = 0; i < cs75_arry.length; i++) {
		carpic_src = cs75_arry[i];
		slide_html = '<div class="swiper-slide">'+
						'<img src="'+carpic_src+'">'+
					 '</div>';
		ctrl_html = '<span class="item">'+
						'<img src="'+carpic_src+'">'+
					'</span>';
		slide_ctrl.append(ctrl_html);
		car_slide.append(slide_html);
	};

	// 车展示切换
	var mySwiper = new Swiper('.swiper-container',{
		onInit: function(swiper){
	      swiper.swipeNext()
	    }
	})
	var slide_wrap = $(".swiper-container .swiper-slide");
	var ctrl_item = $(".slide_ctrl .item");
	setInterval(function (argument) {
		slide_wrap.each(function (i) {
			if ($(this).hasClass("swiper-slide-active")) {
				ctrl_item.each(function (j) {
					if (i === j) {
						$(this).addClass("item_active").siblings().removeClass("item_active");
					};
				});
			};
		});
	},100);
	ctrl_item.each(function (i) {
		$(this).click(function (argument) {
			slide_wrap.each(function (j) {
				if (i===j) {
					mySwiper.swipeTo(j, 1000, false);
				};
			})
		})
	})
	$('#swiper-button-prev').click(function(){
		mySwiper.swipePrev(); 
	})
	$('#swiper-button-next').click(function(){
		mySwiper.swipeNext(); 
	})
	//车型切换
	addIndex();
	choose_bt.click(function (argument) {
		var _index = $(this).attr("index");
		$(this).addClass("on").siblings().removeClass("on");
		carChange(_index);
	})
	//省份城市县区三级联动
	var provinceObj = $(".nomal_link .province"),
		cityObj = $(".nomal_link .city"),
		areaObj = $(".nomal_link .area");
	objNomalLink(provinceObj,cityObj,areaObj);
	//提交信息预约
	$(".car_series").change(function() {
		car_series = $(".car_series").find("option:selected").text();
		car_series_val = $(".car_series").find("option:selected").val();
	})
	$(".province").change(function() {
		_province = $(".province").find("option:selected").text();
		province_val = $(".province").find("option:selected").val();
	})
	$(".city").change(function() {
		_city = $(".city").find("option:selected").text();
		city_val = $(".city").find("option:selected").val();
	})
	$(".area").change(function() {
		area_name = $(".area").find("option:selected").text();
		area_val = $(".area").find("option:selected").val();
	})
	$(".submit_bt").click(function (argument) {
		submitMessage();
	})

})
var choose_bt = $(".car_list li"),
	car = $(".car_huisheng"),
	txt = $(".txt"),
	car_1_bg = $(".m-car_2"),
	car_2_bg = $(".m-car_3"),
	car_1 = $(".m-car_2 .car_wrap"),
	car_2 = $(".m-car_3 .car_wrap"),
	peizhi_title = $(".peizhi_box .box_hd img"),
	peizhi = $(".box_bd img"),
	car_slide = $(".swiper-wrapper"),
	// slide_ctrl = $(".swiper-container .swiper-pagination");
	slide_ctrl = $(".slide_ctrl");

var cs75_arry= ["img/cs75/1.jpg","img/cs75/2.jpg","img/cs75/3.jpg","img/cs75/4.jpg"],
	cs35_arry= ["img/cs35/1.jpg","img/cs35/2.jpg","img/cs35/3.jpg","img/cs35/4.jpg","img/cs35/5.jpg"],
	yidong_arry= ["img/yidong/1.jpg","img/yidong/2.jpg","img/yidong/3.jpg","img/yidong/4.jpg","img/yidong/5.jpg","img/yidong/6.jpg","img/yidong/7.jpg","img/yidong/8.jpg","img/yidong/9.jpg","img/yidong/10.jpg","img/yidong/10.jpg"],
	yidongxt_arry= ["img/yidongxt/1.jpg","img/yidongxt/2.jpg","img/yidongxt/3.jpg","img/yidongxt/4.jpg","img/yidongxt/5.jpg","img/yidongxt/6.jpg","img/yidongxt/7.jpg"],
	yuexiangv7_arry= ["img/yuexiangv7/1.jpg","img/yuexiangv7/2.jpg","img/yuexiangv7/3.jpg","img/yuexiangv7/4.jpg","img/yuexiangv7/5.jpg"],
	yuexiangv3_arry= ["img/yuexiangv3/1.jpg","img/yuexiangv3/2.jpg","img/yuexiangv3/3.jpg","img/yuexiangv3/4.jpg","img/yuexiangv3/5.jpg","img/yuexiangv3/6.jpg","img/yuexiangv3/7.jpg"],
	ruichi_arry= ["img/ruichi/1.jpg","img/ruichi/2.jpg","img/ruichi/3.jpg","img/ruichi/4.jpg"],
	xinbenben_arry= ["img/xinbenben/1.jpg","img/xinbenben/2.jpg","img/xinbenben/3.jpg","img/xinbenben/4.jpg","img/xinbenben/5.jpg","img/xinbenben/6.jpg"];
var carpic_src = "",
	slide_html = "",
	ctrl_html = "",
	ctrl_arry = [];
var car_series_val,car_series,_province,_city,area_name,province_val,city_val,area_val;
var addIndex = function (index) {
	var j = 0,k = 0,h = 0;
	choose_bt.each(function (i) {
		if (i>7) {
			$(this).attr("index",j+1);
			if (j>7) {
				$(this).attr("index",k+1);
				if (k>7) {
					$(this).attr("index",h+1);
					h++;
				};
				k++;
			};
			j++;
		}else{
			$(this).attr("index",i+1);
		}
	});
	txt.each(function (i) {
		$(this).attr("index",i+1);
	});
	car.each(function (i) {
		$(this).attr("index",i+1);
	});
	peizhi_title.each(function (i) {
		$(this).attr("index",i+1);
	});
}
var submitMessage = function (argument) {
	var name = $(".name").val(),
		phone = $(".phone").val();
	var datas = {
			"name": name,
			"mobile": phone,
			"dealer_brand": 1,
			"car_series": car_series_val,
			"car_series_name": car_series,
			"region_id_1": province_val,
			"region_id_1_name": _province,
			"region_id_2": city_val,
			"region_id_2_name": _city,
			"region_id_3": area_val,
			"region_id_3_name": area_name
		};
		var regBox = {
			regMobile: /^1\d{10}$/ //手机
		}
		var mflag = regBox.regMobile.test(phone);
		if(datas.name==""){
			alert("请填写您的姓名");
			return ;
		}else if (!(mflag)) {
			alert("请填写正确的手机号码");
			return ;
		}else if(datas.car_series_name==undefined||datas.car_series_name==""||datas.car_series_name=="选择车系"){
			alert("请选择车系");
			return ;
		}else if(datas.region_id_1_name==undefined||datas.region_id_1_name==""||datas.region_id_1_name=="选择省份"){
			alert("请选择省份");
			return ;
		}else if(datas.region_id_2_name==undefined||datas.region_id_2_name==""||datas.region_id_2_name=="选择城市"){
			alert("请选择城市");
			return ;
		}else if(datas.region_id_3_name==undefined||datas.region_id_3_name==""||datas.region_id_3_name=="选择县区"){
			alert("请选择县区");
			return ;
		}else{
			$.ajax({
				type: "POST",
				url: "./include/register.php",
				data: datas,
				dataType: 'json',
				async: false,
				success: function(data) {
					if (data.status == true) {
						alert("长安汽车温馨提示：\n信息提交成功，稍后将有专人与您联系，谢谢！");
						$(".reset").trigger('click');
						name = "";
						phone = "";
						car_series_val = "";
						car_series = "";
						province_val = "";
						_province = "";
						city_val = "";
						_city = "";
						area_val = "";
						area_name = "";
						datas = {};
					}else{
						alert(data.info);
					}
				}
			})
		}
}
var carChange = function (index) {
	var slide_wrap,ctrl_item;
	choose_bt.each(function (argument) {
		var choose_index = $(this).attr("index");
		if (choose_index === index) {
			$(this).addClass("on");
		}else{
			$(this).removeClass("on");
		}
	});
	car.each(function (argument) {
		var car_index = $(this).attr("index");
		if (car_index === index) {
			$(this).addClass("f-show");
		}else{
			$(this).removeClass("f-show");
		}
	});
	txt.each(function (argument) {
		var txt_index = $(this).attr("index");;
		if (txt_index === index) {
			$(this).addClass("txt_on");
		}else{
			$(this).removeClass("txt_on");
		}
	});
	car_slide.empty();
	slide_ctrl.empty();
	if (index === "1") {
		peizhi_title.attr("src","img/cs75/cs75.png");
		peizhi.attr("src","img/cs75/cs75_peizhi.png");
		car_1_bg.css("background","url(./img/cs75/car_1.jpg) top center no-repeat");
		car_1.css("background","url(./img/cs75/car_1.jpg) top center no-repeat");
		car_2_bg.css("background","url(./img/cs75/car_2.jpg) top center no-repeat");
		car_2.css("background","url(./img/cs75/car_2.jpg) top center no-repeat");
		for (var i = 0; i < cs75_arry.length; i++) {
			carpic_src = cs75_arry[i];
			slide_html = '<div class="swiper-slide">'+
							'<img src="'+carpic_src+'">'+
						 '</div>';
			ctrl_html = '<span class="item">'+
							'<img src="'+carpic_src+'">'+
						'</span>';
			slide_ctrl.append(ctrl_html);
			car_slide.append(slide_html);
		};
	}
	if (index === "2") {
		peizhi_title.attr("src","img/cs35/cs35.png");
		peizhi.attr("src","img/cs35/cs35_peizhi.png");
		car_1_bg.css("background","url(./img/cs35/car_1.jpg) top center no-repeat");
		car_1.css("background","url(./img/cs35/car_1.jpg) top center no-repeat");
		car_2_bg.css("background","url(./img/cs35/car_2.jpg) top center no-repeat");
		car_2.css("background","url(./img/cs35/car_2.jpg) top center no-repeat");
		for (var i = 0; i < cs35_arry.length; i++) {
			carpic_src = cs35_arry[i];
			slide_html = '<div class="swiper-slide">'+
							'<img src="'+carpic_src+'">'+
						 '</div>';
			ctrl_html = '<span class="item">'+
							'<img src="'+carpic_src+'">'+
						'</span>';
			// ctrl_arry.push(ctrl_html);
			slide_ctrl.append(ctrl_html);
			car_slide.append(slide_html);
		}
	}
	if (index === "3") {
		peizhi_title.attr("src","img/yidong/yidong.png");
		peizhi.attr("src","img/yidong/yidong_peizhi.png");
		car_1_bg.css("background","url(./img/yidong/car_1.jpg) top center no-repeat");
		car_1.css("background","url(./img/yidong/car_1.jpg) top center no-repeat");
		car_2_bg.css("background","url(./img/yidong/car_2.jpg) top center no-repeat");
		car_2.css("background","url(./img/yidong/car_2.jpg) top center no-repeat");
		for (var i = 0; i < yidong_arry.length; i++) {
			carpic_src = yidong_arry[i];
			slide_html = '<div class="swiper-slide">'+
							'<img src="'+carpic_src+'">'+
						 '</div>';
			ctrl_html = '<span class="item">'+
							'<img src="'+carpic_src+'">'+
						'</span>';
			// ctrl_arry.push(ctrl_html);
			slide_ctrl.append(ctrl_html);
			car_slide.append(slide_html);
		}
	}
	if (index === "4") {
		peizhi_title.attr("src","img/yidongxt/yidongxt.png");
		peizhi.attr("src","img/yidongxt/yidongxt_peizhi.png");
		car_1_bg.css("background","url(./img/yidongxt/car_1.jpg) top center no-repeat");
		car_1.css("background","url(./img/yidongxt/car_1.jpg) top center no-repeat");
		car_2_bg.css("background","url(./img/yidongxt/car_2.jpg) top center no-repeat");
		car_2.css("background","url(./img/yidongxt/car_2.jpg) top center no-repeat");
		for (var i = 0; i < yidongxt_arry.length; i++) {
			carpic_src = yidongxt_arry[i];
			slide_html = '<div class="swiper-slide">'+
							'<img src="'+carpic_src+'">'+
						 '</div>';
			ctrl_html = '<span class="item">'+
							'<img src="'+carpic_src+'">'+
						'</span>';
			// ctrl_arry.push(ctrl_html);
			slide_ctrl.append(ctrl_html);
			car_slide.append(slide_html);
		}		
	}
	if (index === "5") {
		peizhi_title.attr("src","img/yuexiangv7/yuexiangv7.png");
		peizhi.attr("src","img/yuexiangv7/yuexiangv7_peizhi.png");
		car_1_bg.css("background","url(./img/yuexiangv7/car_1.jpg) top center no-repeat");
		car_1.css("background","url(./img/yuexiangv7/car_1.jpg) top center no-repeat");
		car_2_bg.css("background","url(./img/yuexiangv7/car_2.jpg) top center no-repeat");
		car_2.css("background","url(./img/yuexiangv7/car_2.jpg) top center no-repeat");
		for (var i = 0; i < yuexiangv7_arry.length; i++) {
			carpic_src = yuexiangv7_arry[i];
			slide_html = '<div class="swiper-slide">'+
							'<img src="'+carpic_src+'">'+
						 '</div>';
			ctrl_html = '<span class="item">'+
							'<img src="'+carpic_src+'">'+
						'</span>';
			// ctrl_arry.push(ctrl_html);
			slide_ctrl.append(ctrl_html);
			car_slide.append(slide_html);
		}
	}
	if (index === "6") {
		peizhi_title.attr("src","img/yuexiangv3/yuexiangv3.png");
		peizhi.attr("src","img/yuexiangv3/yuexiangv3_peizhi.png");
		car_1_bg.css("background","url(./img/yuexiangv3/car_1.jpg) top center no-repeat");
		car_1.css("background","url(./img/yuexiangv3/car_1.jpg) top center no-repeat");
		car_2_bg.css("background","url(./img/yuexiangv3/car_2.jpg) top center no-repeat");
		car_2.css("background","url(./img/yuexiangv3/car_2.jpg) top center no-repeat");
		for (var i = 0; i < yuexiangv3_arry.length; i++) {
			carpic_src = yuexiangv3_arry[i];
			slide_html = '<div class="swiper-slide">'+
							'<img src="'+carpic_src+'">'+
						 '</div>';
			ctrl_html = '<span class="item">'+
							'<img src="'+carpic_src+'">'+
						'</span>';
			// ctrl_arry.push(ctrl_html);
			slide_ctrl.append(ctrl_html);
			car_slide.append(slide_html);
		}		
	}
	if (index === "7") {
		peizhi_title.attr("src","img/ruichi/ruichi.png");
		peizhi.attr("src","img/ruichi/ruichi_peizhi.png");
		car_1_bg.css("background","url(./img/ruichi/car_1.jpg) top center no-repeat");
		car_1.css("background","url(./img/ruichi/car_1.jpg) top center no-repeat");
		car_2_bg.css("background","url(./img/ruichi/car_2.jpg) top center no-repeat");
		car_2.css("background","url(./img/ruichi/car_2.jpg) top center no-repeat");
		for (var i = 0; i < ruichi_arry.length; i++) {
			carpic_src = ruichi_arry[i];
			slide_html = '<div class="swiper-slide">'+
							'<img src="'+carpic_src+'">'+
						 '</div>';
			ctrl_html = '<span class="item">'+
							'<img src="'+carpic_src+'">'+
						'</span>';
			// ctrl_arry.push(ctrl_html);
			slide_ctrl.append(ctrl_html);
			car_slide.append(slide_html);
		}
	}
	if (index === "8") {
		peizhi_title.attr("src","img/xinbenben/xinbenben.png");
		peizhi.attr("src","img/xinbenben/xinbenben_peizhi.png");
		car_1_bg.css("background","url(./img/xinbenben/car_1.jpg) top center no-repeat");
		car_1.css("background","url(./img/xinbenben/car_1.jpg) top center no-repeat");
		car_2_bg.css("background","url(./img/xinbenben/car_2.jpg) top center no-repeat");
		car_2.css("background","url(./img/xinbenben/car_2.jpg) top center no-repeat");
		for (var i = 0; i < xinbenben_arry.length; i++) {
			carpic_src = xinbenben_arry[i];
			slide_html = '<div class="swiper-slide">'+
							'<img src="'+carpic_src+'">'+
						 '</div>';
			ctrl_html = '<span class="item">'+
							'<img src="'+carpic_src+'">'+
						'</span>';
			// ctrl_arry.push(ctrl_html);
			slide_ctrl.append(ctrl_html);
			car_slide.append(slide_html);
		}		
	}
	setTimeout(function (argument) {
		jsScroll(document.getElementById('peizhi_scroll'), 10, 'divScrollBar');
		// 车展示切换
		var mySwiper = new Swiper('.swiper-container',{
			onInit: function(swiper){
		      swiper.swipeNext()
		    }
		})
		slide_wrap = $(".swiper-container .swiper-slide");
		ctrl_item = $(".slide_ctrl .item");
		setInterval(function (argument) {
			slide_wrap.each(function (i) {
				if ($(this).hasClass("swiper-slide-active")) {
					ctrl_item.each(function (j) {
						if (i === j) {
							$(this).addClass("item_active").siblings().removeClass("item_active");
						};
					});
				};
			});
		},100);
		ctrl_item.each(function (i) {
			$(this).click(function (argument) {
				slide_wrap.each(function (j) {
					if (i===j) {
						mySwiper.swipeTo(j, 1000, false);
					};
				})
			})
		})
		$('#swiper-button-prev').click(function(){
			mySwiper.swipePrev(); 
		})
		$('#swiper-button-next').click(function(){
			mySwiper.swipeNext(); 
		})
	},100)
}

var api_base_url = 'http://e.changan.com.cn/marketing2016_7/synchronous/index.php?m=Home&';

$(document).ready(function(argument) {
	//导航分组
	var fourTab = function(_num) {
		var tab = $(".car_list"),
			tab_item = $(".car_list li");
		var k = 0;
		for (var i = 0; i < tab.length; i++) {
			for (var j = 0; j < _num; j++) {
				if (k < tab_item.length) {
					$(tab_item[k]).attr("index", j);
					k++;
				}
			}
		}
	};
	//导航切换
	var tabOnchange = function(argument) {
			var tab_item = $(".car_list li");
			tab_item.each(function(argument) {
				$(this).click(function(argument) {
					var _index = $(this).attr("index");
					$("[index=" + _index + "]").addClass("on").siblings().removeClass("on");
					tabWrapChange(_index);
					if (_index === "3") {
						// jsScroll(document.getElementById('word_scroll'), 10, 'divScrollBar');
					} else {
						$(".divScrollBar").remove();
						setTimeout(function() {
							jsScroll(document.getElementById('peizhi_scroll'), 10, 'divScrollBar');
						}, 500)
					}
				})
			})
		}
		//内容切换
	var tabWrapChange = function(_index) {
			$("#slide .ctrl_item,#prev,#next").unbind();
			var cs15_arry_len = 34,
				cs75_arry_len = 28,
				cs35_arry_len = 130,
				yidong_arry_len = 46,
				yidongxt_arry_len = 7,
				yuexiangv7_arry_len = 89,
				yuexiangv3_arry_len = 7,
				ruichi_arry_len = 106,
				xinbenben_arry_len = 78;
			switch (parseInt(_index)) {
				case 0:
					var img_arry = car_pic("cs15", cs15_arry_len);
					break;
				case 1:
					var img_arry = car_pic("cs75", cs75_arry_len);
					break;
				case 2:
					var img_arry = car_pic("cs35", cs35_arry_len);
					break;
				case 3:
					var img_arry = car_pic("yidong", yidong_arry_len);
					break;
				case 4:
					var img_arry = car_pic("yidongxt", yidongxt_arry_len);
					break;
				case 5:
					var img_arry = car_pic("yuexiangv7", yuexiangv7_arry_len);
					break;
				case 6:
					var img_arry = car_pic("yuexiangv3", yuexiangv3_arry_len);
					break;
				case 7:
					var img_arry = car_pic("ruichi", ruichi_arry_len);
					break;
				case 8:
					var img_arry = car_pic("xinbenben", xinbenben_arry_len);
					break;
			}
			var descript_car = $(".m-car_1 .car_huisheng"),
				message_car = $(".message_wrap .car_message"),
				car_descript = $(".message_wrap .car_descript"),
				descript_txt = $(".m-car_1 .txt"),
				zuisheng = $(".m-car_1"),
				zuisheng_wrap = $(".m-car_1 .car_wrap"),
				car2_4 = $(".m-car_4"),
				car2_4_wrap = $(".m-car_4 .car_wrap"),
				car2_5 = $(".m-car_5"),
				car2_5_wrap = $(".m-car_5 .car_wrap"),
				detail_1 = $(".m-car_2"),
				detail_1_wrap = $(".m-car_2 .car_wrap"),
				detail_2 = $(".m-car_3"),
				detail_2_wrap = $(".m-car_3 .car_wrap"),
				peizhi_hd = $(".peizhi_box .box_hd img"),
				peizhi_bd = $(".peizhi_box .box_bd img"),
				slide_wrap = $("#slide .slide_wrap"),
				slide_ctrl = $(".slide_ctrl .ctrl_wrap"),
				peizhi = $(".m-car_4"),
				yidong_submit = $(".m-yidong_submit"),
				yidong_read = $(".m-yidong_read");
			if (_index === "3") {
				detail_1.hide();
				detail_2.hide();
				peizhi.hide();
				yidong_submit.show();
				yidong_read.show();
				$(".divScrollBar").hide();
			} else {
				yidong_submit.hide();
				yidong_read.hide();
				detail_1.show();
				detail_2.show();
				peizhi.show();
				$(".divScrollBar").show();
			}
			if (_index === "1") {
				car_descript.attr("src", "img/cs75/txt_928.png");
			} else {
				car_descript.attr("src", "img/descript.png");
			}
			var descript_car_arry = ["img/cs75/car.png", "img/cs35/car.png", "img/yidong/car.png", "img/yidongxt/car.png", "img/yuexiangv7/car.png", "img/yuexiangv3/car.png", "img/ruichi/car.png", "img/xinbenben/car.png"];
			var message_car_arry = ["img/cs15/car_message.png", "img/cs75/car_message.png", "img/cs35/car_message.png", "img/yidong/car_message.png", "img/yidongxt/car_message.png", "img/yuexiangv7/car_message.png", "img/yuexiangv3/car_message.png", "img/ruichi/car_message.png", "img/xinbenben/car_message.png"];
			var detail_1_arry = ["./img/cs15/car_1.jpg", "./img/cs75/car_1.jpg", "./img/cs35/car_1.jpg", "./img/yidong/car_1.jpg", "./img/yidongxt/car_1.jpg", "./img/yuexiangv7/car_1.jpg", "./img/yuexiangv3/car_1.jpg", "./img/ruichi/car_1.jpg", "./img/xinbenben/car_1.jpg"];
			var detail_2_arry = ["./img/cs15/car_2.jpg", "./img/cs75/car_2.jpg", "./img/cs35/car_2.jpg", "./img/yidong/car_2.jpg", "./img/yidongxt/car_2.jpg", "./img/yuexiangv7/car_2.jpg", "./img/yuexiangv3/car_2.jpg", "./img/ruichi/car_2.jpg", "./img/xinbenben/car_2.jpg"];
			var peizhi_hd_arry = ["img/cs15/cs15.png", "img/cs75/cs75.png", "img/cs35/cs35.png", "img/yidong/yidong.png", "img/yidongxt/yidongxt.png", "img/yuexiangv7/yuexiangv7.png", "img/yuexiangv3/yuexiangv3.png", "img/ruichi/ruichi.png", "img/xinbenben/xinbenben.png"];
			var peizhi_bd_arry = ["img/cs15/cs15_peizhi.png", "img/cs75/cs75_peizhi.png", "img/cs35/cs35_peizhi.png", "img/yidong/yidong_peizhi.png", "img/yidongxt/yidongxt_peizhi.png", "img/yuexiangv7/yuexiangv7_peizhi.png", "img/yuexiangv3/yuexiangv3_peizhi.png", "img/ruichi/ruichi_peizhi.png", "img/xinbenben/xinbenben_peizhi.png"];
			// var peizhi_h_arry = ["4252", "2367", "0", "3855", "2409", "482", "3487", "1332"];

			message_car.attr("src", message_car_arry[_index]);
			$(descript_txt[_index]).addClass("txt_on").siblings().removeClass("txt_on");
			detail_1.css("background", "url(" + detail_1_arry[_index] + ") center center no-repeat");
			detail_1_wrap.css("background", "url(" + detail_1_arry[_index] + ") center center no-repeat");
			detail_2.css("background", "url(" + detail_2_arry[_index] + ") center center no-repeat");
			detail_2_wrap.css("background", "url(" + detail_2_arry[_index] + ") center center no-repeat");
			peizhi_hd.attr("src", peizhi_hd_arry[_index]);
			if (_index !== "3") {
				peizhi_bd.attr("src", peizhi_bd_arry[_index]);
			};
			if (_index !== "0") {
				zuisheng.css({
					"background": "url(img/car1_1.jpg) center center no-repeat",
					"height": "569px"
				});
				zuisheng_wrap.css({
					"background": "url(img/car1_1.jpg) center center no-repeat",
					"height": "569px"
				});
				car2_4.css({
					"background": "url(img/car1_4.jpg) center center no-repeat",
					"height": "749px"
				});
				car2_4_wrap.css({
					"background": "url(img/car1_4.jpg) center center no-repeat",
					"height": "749px"
				});
				car2_5.css({
					"background": "url(img/car1_5.jpg) center center no-repeat",
					"height": "884px"
				});
				car2_5_wrap.css({
					"background": "url(img/car1_5.jpg) center center no-repeat",
					"height": "884px"
				});
				descript_car.show().attr("src", descript_car_arry[_index - 1]);
				$(".cs15_360").hide();
				$(".cs15_colorful").hide();
			} else {
				zuisheng.css({
					"background": "url(img/car1_2.jpg) center center no-repeat",
					"height": "919px"
				});
				zuisheng_wrap.css({
					"background": "url(img/car1_2.jpg) center center no-repeat",
					"height": "919px"
				});
				car2_4.css({
					"background": "url(img/car2_4.jpg) center center no-repeat",
					"height": "747px"
				});
				car2_4_wrap.css({
					"background": "url(img/car2_4.jpg) center center no-repeat",
					"height": "747px"
				});
				car2_5.css({
					"background": "url(img/car2_5.jpg) center center no-repeat",
					"height": "888px"
				});
				car2_5_wrap.css({
					"background": "url(img/car2_5.jpg) center center no-repeat",
					"height": "888px"
				});
				descript_car.hide();
				$(".cs15_360").show();
				$(".cs15_colorful").show();
			}
			var slide_html = "",
				ctrl_html = "";
			for (var i = 0; i < img_arry.length; i++) {
				slide_html += '<div class="slide_item">' +
					'<img src="' + img_arry[i] + '">' +
					'</div>';
				ctrl_html += '<span class="ctrl_item">' +
					'<img src="' + img_arry[i] + '">' +
					'</span>';
			};
			slide_wrap.html(slide_html);
			slide_ctrl.html(ctrl_html);
			var slide_1 = Slide.createNew();
			slide_1.slide_wrap = $("#slide .slide_wrap");
			slide_1.slide_item = $("#slide .slide_item");
			slide_1.slide_ctrl = $(".swiper_ctrl .slide_ctrl");
			slide_1.slide_ctrl_wrap = $(".swiper_ctrl .slide_ctrl .ctrl_wrap");
			slide_1._prev = $("#prev");
			slide_1._next = $("#next");
			slide_1.ctrl_item_yes = "true";
			slide_1.slide_wrap_w = 1000;
			slide_1.move_w = 0;
			slide_1.active_index = 0;
			slide_1.ctrl_wrap_move = 0;
			slide_1.roop = "false";
			var item = $(".ctrl_item");
			var item_w = item.width();
			var item_margin = parseInt(item.css("margin-left")) + parseInt(item.css("margin-right"));
			item.each(function(i) {
				if (i == slide_1.active_index) {
					$(this).addClass("ctrl_item_active").siblings().removeClass("ctrl_item_active");
					$(this).next().addClass("ctrl_item_next").siblings().removeClass("ctrl_item_next");
					$(this).prev().addClass("ctrl_item_prev").siblings().removeClass("ctrl_item_prev");
				};
			})
			var ctrl_w = (item_w + item_margin) * $(".slide_item").length;
			$(".ctrl_wrap").width(ctrl_w);
			if (ctrl_w < $(".slide_ctrl").width()) {
				$(".ctrl_wrap").css("margin", "0 auto");
			};
			slide_1.slide_wrap.css("margin-left", "0");
			slide_1.init();
			slide_1.ctrlItem();
			slide_1.toPrev();
			slide_1.toNext();
		}
		//车图整理
	var car_pic = function(car_series, pic_num) {
		var _src = "";
		var img_arry = [];
		for (var i = 0; i < pic_num; i++) {
			_src = "car_img/" + car_series + "/" + (i + 1) + ".jpg";
			img_arry.push(_src);
		}
		return img_arry;
	};
	//车主用车感言背景色
	var changeColor = function(argument) {
			var li = $(".m-yidong_read li:even");
			li.css("background", "#88ac60");
		}
		//车主感言上传
	var wordSubmit = function(pic_url) {
		var word = $(".m-yidong_submit textarea").val();
		var pic = $("input[name=photo]").val();
		var provinceid = $(".bts .province_2").val();
		if (word === "") {
			alert("您还未输入感言");
		} else if (provinceid === "0") {
			alert("请选择省份");
		} else if (pic_url === "") {
			alert("请选择照片");
		} else {
			$.ajax({
				url: "./index.php?m=Message&c=Index&a=release",
				type: "post",
				data: {
					province_title: provinceid,
					content: word,
					photo_img: pic_url
				},
				dataType: 'json',
				success: function(datajson) {
					if (datajson.status === true) {
						$(".m-yidong_submit textarea").val('');
						$("input[name=photo]").val("");
						$(".bts .province").val(0);
						alert("您的感言将定期发布，谢谢您的参与！");
					} else {
						alert(datajson.info);
					}
				}
			})
		}
	}
	var this_page;
	var this_province;
	//读取车主感言省份选择
	var readProvince = function(argument) {
			var item = $(".car_wrap .areas a");
			var ctrl = $(".car_wrap .show_all");
			var more = $(".car_wrap .more");
			ctrl.click(function(argument) {
				more.toggle();
			})
			item.each(function(argument) {
				$(this).click(function(argument) {
					item.removeClass("active");
					$(this).addClass("active");
					var province = $(this).html();
					wordRead(1, province);
					this_page = 1;
					this_province = province;
					$("#word_scroll").html("");
					$(".more").hide();
					$(".divScrollBar").hide();
				})
			})
		}
		//车主感言读取
	var wordRead = function(_page, _province) {
			var li = "";
			var img = "";
			var word = "";
			var li_box = $("#word_scroll");
			var provinceid = $(".bts .province").val();
			var total_page = 0;
			if (provinceid === "") {
				alert("请选择省份");
			};
			$.ajax({
				url: "./index.php?m=Message&c=Index&a=messageList",
				type: "post",
				data: {
					province_title: _province,
					pageNo: _page,
					pageSize: 23
				},
				anysc: false,
				dataType: 'json',
				success: function(datajson) {
					if (datajson.status === true) {
						for (var i = 0; i < datajson.data.length; i++) {
							img = datajson.data[i].photo_img;
							changePic(img, i, 70, 49);
							word = datajson.data[i].content;
							li += '<li>' +
								'<div id="box"><div class="bg"></div><img src="' + img + '" class=' + i + '></div>' +
								'<span class="words">' + word + '</span>' +
								'</li>';
						};
						total_page = datajson.totalPage;
						li_box.append(li);
						changeColor();
						wordDetail();
						if (total_page > 1 && _page < total_page) {
							$(".show_more").show();
							li = "";
							$(".divScrollBar").remove();
							jsScroll(document.getElementById('word_scroll'), 10, 'divScrollBar');
						} else {
							$(".show_more").hide();
						}

					} else {
						// $("#word_scroll").html("暂无数据");
					};
				}
			})
		}
		//车主感言详情
	var wordDetail = function(argument) {
			var item = $("#word_scroll li");
			var read_detail = $(".read_detail");
			var shade = $(".shade");
			var close = $(".read_detail .close");
			item.each(function(argument) {
				var pic = $(this).find("img").attr("src");
				var word = $(this).find(".words").html();
				$(this).click(function(argument) {
					changePic(pic, "pic", 360, 360);
					read_detail.find(".pic").attr("src", pic);
					read_detail.find(".word").html(word);
					read_detail.show();
					shade.show();
				})
			})
			close.click(function(argument) {
				read_detail.hide();
				shade.hide();
			})
		}
		//图片按比例展示
	function changePic(src, name, width, height) {
		picFlag = true;
		//图片按比例展示
		var _img = new Image();
		_img.src = src;
		_img.onload = function(e) {
			var thisImgRatio = width / height;
			var originalImgRatio = _img.width / _img.height;
			if (thisImgRatio > originalImgRatio) {
				$("." + name).css('height', height);
				$("." + name).css('width', (height * _img.width) / _img.height);
				$("." + name).css('margin-left', (width - ((height * _img.width) / _img.height)) / 2);
				$("." + name).css('margin-top', 0);
			} else if (thisImgRatio < originalImgRatio) {
				$("." + name).css('width', width);
				$("." + name).css('height', (width * _img.height) / _img.width);
				$("." + name).css('margin-top', (height - ((width * _img.height) / _img.width)) / 2);
				$("." + name).css('margin-left', 0);
			} else if (thisImgRatio = originalImgRatio) {
				$("." + name).css('margin-top', (height - _img.height) / 2);
				$("." + name).css('margin-left', (width - _img.width) / 2);
			};
		}
		var thisImgRatio = width / height;
		var originalImgRatio = _img.width / _img.height;

		if (thisImgRatio > originalImgRatio) {
			$("." + name).css('height', height);
			$("." + name).css('width', (height * _img.width) / _img.height);
			$("." + name).css('margin-left', (width - ((height * _img.width) / _img.height)) / 2);
			$("." + name).css('margin-top', 0);
		} else if (thisImgRatio < originalImgRatio) {
			$("." + name).css('width', width);
			$("." + name).css('height', (width * _img.height) / _img.width);
			$("." + name).css('margin-top', (height - ((width * _img.height) / _img.width)) / 2);
			$("." + name).css('margin-left', 0);
		} else if (thisImgRatio == originalImgRatio) {
			$("." + name).css('margin-top', (height - _img.height) / 2);
			$("." + name).css('margin-left', (width - _img.width) / 2);
		};
	};
	//初始化省
	var province_init = function() {
		$.ajax({
			type: "get",
			url: api_base_url + 'c=Api&a=get_region_list',
			async: true,
			dataType: 'jsonp',
			//jsonp:"callback",
			data: {},
			success: function(json) {
				if (json.status == true) {
					var html = '<option value="0">选择省份</option>';
					$.each(json.data, function(k, v) {
						html += '<option value="' + v.regioncode + '">' + v.regionname + '</option>'
					});
					$('.province').html(html);
				}
			}
		});
	};
	//改变地区
	var clickable = true;
	var objNomalLink = function(provinceObj, cityObj, areaObj, dealerObj) {
		var pr_opt = "<option value='0'>请选择省份</option>";
		var city_opt = "<option value='0'>请选择城市</option>";
		var area_opt = "<option value='0'>请选择县区</option>";
		var dealer_opt = "<option value='0'>请选择经销商</option>";

		//改变省
		provinceObj.change(function(argument) {
			cityObj.html(city_opt);
			areaObj.html(area_opt);
			dealerObj.html(dealer_opt);
			var provinceid = provinceObj.val();
			if (provinceid != '0') {
				$.ajax({
					type: "get",
					url: api_base_url + 'c=Api&a=get_region_list',
					async: true,
					dataType: 'jsonp',
					//jsonp:"callback",
					data: {
						parentcode: provinceid
					},
					success: function(json) {
						if (json.status == true) {
							var html = '';
							$.each(json.data, function(k, v) {
								html += '<option value="' + v.regioncode + '">' + v.regionname + '</option>'
							});
							cityObj.append(html);
						}
					}
				});
			}
		});

		//改变市
		cityObj.change(function(argument) {
			areaObj.html(area_opt);
			dealerObj.html(dealer_opt);
			var cityid = cityObj.val();
			if (cityid != '0') {
				$.ajax({
					type: "get",
					url: api_base_url + 'c=Api&a=get_region_list',
					async: true,
					dataType: 'jsonp',
					//jsonp:"callback",
					data: {
						parentcode: cityid
					},
					success: function(json) {
						if (json.status == true) {
							var html = '';
							$.each(json.data, function(k, v) {
								html += '<option value="' + v.regioncode + '">' + v.regionname + '</option>'
							});
							areaObj.append(html);
						}
					}
				});
				$.ajax({
					type: "get",
					url: api_base_url + 'c=Api&a=get_dealer_list',
					async: true,
					dataType: 'jsonp',
					//jsonp:"callback",
					data: {
						city: cityid
					},
					success: function(json) {
						if (json.status == true) {
							var html = '';
							$.each(json.data, function(k, v) {
								html += '<option value="' + v.dealerid + '">' + v.dealername + '</option>'
							});
							dealerObj.append(html);
						}
					}
				});
			}
		});

		//改变区
		areaObj.change(function(argument) {
			dealerObj.html(dealer_opt);
			var cityid = cityObj.val();
			var areaid = areaObj.val();
			$.ajax({
				type: "get",
				url: api_base_url + 'c=Api&a=get_dealer_list',
				async: true,
				dataType: 'jsonp',
				//jsonp:"callback",
				data: {
					city: cityid,
					dist: areaid
				},
				success: function(json) {
					if (json.status == true) {
						var html = '';
						$.each(json.data, function(k, v) {
							html += '<option value="' + v.dealerid + '">' + v.dealername + '</option>'
						});
						dealerObj.append(html);
					}
				}
			});
		});
	};
	//提交信息
	var submitMessage = function(argument) {
		var car_series = $(".car_series").find('option:selected').text(),
			car_series_val = $(".car_series").find('option:selected').val(),
			province = $(".province").find('option:selected').text(),
			province_val = $(".province").find('option:selected').val(),
			city = $(".city").find('option:selected').text(),
			city_val = $(".city").find('option:selected').val(),
			area = $(".area").find('option:selected').text(),
			area_val = $(".area").find('option:selected').val();
		dealer_code_name = $(".dealer").find('option:selected').text(),
			dealer_id = $(".dealer").find('option:selected').val();
		$(".car_series").change(function(argument) {
			car_series = $(this).find('option:selected').text();
			car_series_val = $(this).find('option:selected').val();
		});
		var datas = {
			"name": $.trim($(".name").val()),
			"mobile": $(".phone").val(),
			"dealer_brand": 1,
			"car_series": car_series_val,
			"car_series_name": car_series,
			"region_id_1": province_val,
			"region_id_1_name": province,
			"region_id_2": city_val,
			"region_id_2_name": city,
			"region_id_3": area_val,
			"region_id_3_name": area,
			"dealer_id": dealer_id,
			"dealer_code_name": dealer_code_name,
			"op": 'try',
			"aid": 38,
			"trail_channel_from": 'Autohome'
		};
		var regBox = {
			regMobile: /^1\d{10}$/ //手机
		};
		var mflag = regBox.regMobile.test($(".phone").val());
		if (datas.name == "") {
			alert("请填写您的姓名");
			return;
		} else if (!(mflag)) {
			alert("请填写正确的手机号码");
			return;
		} else if (datas.car_series == undefined || datas.car_series == "" || datas.car_series == "0") {
			alert("请选择车系");
			return;
		} else if (datas.region_id_1 == undefined || datas.region_id_1 == "" || datas.region_id_1 == "0") {
			alert("请选择省份");
			return;
		} else if (datas.region_id_2 == undefined || datas.region_id_2 == "" || datas.region_id_2 == "0") {
			alert("请选择城市");
			return;
		} else if (datas.region_id_3 == undefined || datas.region_id_3 == "" || datas.region_id_3 == "0") {
			alert("请选择县区");
			return;
		} else if (datas.dealer_id == undefined || datas.dealer_id == "" || datas.dealer_id == "0") {
			alert("请选择经销商");
			return;
		} else {
			if (clickable === true) {
				clickable = false;
				$.ajax({
					type: "get",
					url: "./include/api.php",
					data: datas,
					async: true,
					success: function(json) {
						if (json.status == 0) {
							$(".reset").trigger('click');
							datas = {};
							$(".nomal_link .city").html("<option value='0'>请选择城市</option>");
							$(".nomal_link .area").html("<option value='0'>请选择县区</option>");
							$(".nomal_link .dealer").html("<option value='0'>请选择经销商</option>");
							alert("长安汽车温馨提示：\n信息提交成功，稍后将有专人与您联系，谢谢！");
						} else {
							alert(json.msg);
						}
						clickable = true;
					}
				})
			};
			
		}
	};
	//播放视频
	$("#zhezhao").click(function() {
		$("#zhezhao").hide();
		var video = document.getElementById("video");
		video.play();
	})
	fourTab(9);
	tabOnchange();
	$(".car_list li:eq(1)").trigger("click");
	//初始化省份
	province_init();
	//省份城市县区三级联动
	var provinceObj = $(".nomal_link .province"),
		cityObj = $(".nomal_link .city"),
		areaObj = $(".nomal_link .area"),
		dealerObj = $(".nomal_link .dealer");
	objNomalLink(provinceObj, cityObj, areaObj, dealerObj);
	$(".submit_bt").click(submitMessage);
	readProvince();
	$(".bts select[name = province]").change(function(argument) {
		var _value = $(this).find("option:selected").val();
		$(this).val(_value);
	})
	$(".m-yidong_read .areas a:eq(0)").trigger('click');
	var _url = "";
	$('#bannerUpload').change(function() {
		var this_form = $(this).parent();
		this_form.ajaxSubmit(function(dataJson) {
			if (dataJson.status === true) {
				_url = dataJson.url;
			} else {
				alert(dataJson.info);
			}
		});
	});
	$(".bts .submit").click(function(argument) {
		wordSubmit(_url);
	});
	$(".show_more").click(function(argument) {
			this_page++;
			wordRead(this_page, this_province);
			$(".divScrollBar").remove();
			jsScroll(document.getElementById('word_scroll'), 10, 'divScrollBar');
		})
	//360°展示
	var slide_2 = Slide.createNew();
	slide_2.slide_wrap = $("#slide_2 .slide_wrap_2");
	slide_2.slide_item = $("#slide_2 .slide_item_2");
	slide_2._prev = $("#prev_2");
	slide_2._next = $("#next_2");
	slide_2.ctrl_item_yes = "false";
	slide_2.slide_wrap_w = 603;
	slide_2.move_w = 0;
	slide_2.active_index = 0;
	slide_2.slide_wrap.css("margin-left", "0");
	slide_2.init();
	slide_2.toPrev();
	slide_2.toNext();
	slide_2.roop = "true";
});
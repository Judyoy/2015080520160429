$(document).ready(function(argument) {
	//全局变量
	var pic_url, ranth_num;
	var avatar_top = ["1.97", "2.265", "2.335", "2.02", "2.08", "1.99", "2.245", "2.225", "1.915", "1.965"],
		avatar_left = ["0.84", "0.9", "1.275", "0.99", "1.655", "1.61", "0.84", "2.185", "1.51", "1.95"];
	//上传base64图片，获取图片链接以及海报随机数
	var inputAvatar = function(_pic, _callback) {
		$.ajax({
			url: "./index.php?m=Home&c=Index&a=uploadPic",
			type: "post",
			data: {
				pic: _pic
			},
			success: function(datajson) {
				if (datajson.status === 1) {
					// pic_url = datajson.pic_url;
					ranth_num = datajson.number;
					_callback();
				} else {
					alert(datajson.info);
				}
			}
		})
	}
	//根据随机数显示相应海报，并设置头像位置和按钮颜色
	var codeChange = function(argument) {
			mySwiper.slideTo(3, 300, false); //切换到第四个slide，速度为1秒
			switch (ranth_num) {
				case 1:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#34b6dd");
						$(".page_4 .descript").css("color","#34b6dd");
						break;
					};
				case 2:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#784dd9");
						$(".page_4 .descript").css("color","#784dd9");
						break;
					};
				case 3:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#52b9df");
						$(".page_4 .descript").css("color","#52b9df");
						break;
					};
				case 4:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#ee5b78");
						$(".page_4 .descript").css("color","#ee5b78");
						break;
					};
				case 5:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#db3745");
						$(".page_4 .descript").css("color","#db3745");
						break;
					};
				case 6:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#e19108");
						$(".page_4 .descript").css("color","#e19108");
						break;
					};
				case 7:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#078b6a");
						$(".page_4 .descript").css("color","#078b6a");
						break;
					};
				case 8:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#40a7d0");
						$(".page_4 .descript").css("color","#40a7d0");
						break;
					};
				case 9:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#caa769");
						$(".page_4 .descript").css("color","#caa769");
						break;
					};
				case 10:
					{
						$(".page_4 .page_bg").attr("src", 'img/paper_' + ranth_num + '.jpg');
						$(".page_4 .avatar").attr("src",pic_url).css({
							"top": avatar_top[ranth_num - 1]+'rem',
							"left": avatar_left[ranth_num - 1]+'rem'
						});
						$(".page_4 .bt").css("background","#72ce72");
						$(".page_4 .descript").css("color","#72ce72");
						break;
					};
			}
		}
	//切换
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		noSwiping: true,
		loop: false
	})
	
	$('.to_rule').click(function() {
		mySwiper.slideTo(1, 300, false); //切换到第二个slide，速度为1秒
	})
	$('.to_begain').click(function() {
		mySwiper.slideTo(2, 300, false); //切换到第三个slide，速度为1秒
		//图片裁切
		var clip_width = $(".pic_area").width();
		$(".pic_area").photoClip({
			width: clip_width,
			height: clip_width,
			file: "#file",
			// view: "#view",
			ok: "#to_input",
			loadStart: function() {
				console.log("照片读取中");
			},
			loadComplete: function() {
				console.log("照片读取完成");
			},
			clipFinish: function(dataURL) {
				pic_url = dataURL;
				inputAvatar(dataURL, codeChange);

			}
		});
	})
	$('.to_index').click(function() {
		mySwiper.slideTo(0, 300, false); //切换到第一个slide，速度为1秒
	})
	$('.to_again').click(function() {
		mySwiper.slideTo(0, 300, false); //切换到第一个slide，速度为1秒
		var file = $("#file");
		if (file.outerHTML) {
			file.outerHTML = file.outerHTML;
		} else { // FF(包括3.5)
			file.value = "";
		}
		// $(".photo-clip-rotateLayer img").remove();
		pic_url = "";
		ranth_num = 0;
		$(".pic_area").empty();
	})
	$(".to_share").click(function (argument) {
		$(".share").show();
	})
	$(".share").click(function (argument) {
		$(this).hide();
	})
	var _audio = document.getElementById('music');
	_audio.play();
	//微信打开背景音乐自动播放
	document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
			_audio.play();
	    });
	});
	var music_ctrl = $(".music_ctrl");
	music_ctrl.click(function (argument) {
		if ($(this).hasClass("on")) {
			$(this).removeClass("on").attr("src","img/music_off.png");
			_audio.pause();
		}else{
			$(this).addClass("on").attr("src","img/music_on.png");
			_audio.play();
		}
	})
})
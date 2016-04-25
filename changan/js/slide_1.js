var Slide = {
	createNew: function (argument) {//通过调用此方法创建一个新对象并返回该对象从而创建一个类
		var slide = {};
		slide.slide_wrap = "";
		slide.slide_item = "";
		slide.slide_ctrl = "";
		slide.slide_ctrl_wrap = "";
		slide._prev = "";
		slide._next = "";
		slide.wrap_w = "";
		slide.move_w = "";
		slide.active_index = 0;
		slide.ctrl_wrap_move = 0;
		slide.ctrl_item_yes = "";
		slide.roop = "false";
		slide.slide_wrap_w = 0;
		slide.init = function (argument) {
			this.wrap_w = this.slide_item.length*this.slide_item.width();//内容宽度设置
			this.move_w = parseInt(this.slide_wrap.css("margin-left"));//切换一个版面的绝对位移
			this.slide_wrap.width(this.wrap_w);
			$(this.slide_item[this.active_index]).addClass("active_slide");
		};
		slide.addCtrlItem = function (argument) {
			var obj = this;
			var ctrl_item = "";
			for (var i = 0; i < obj.slide_item.length; i++) {
				ctrl_item += '<span class="ctrl_item">'+(i+1)+'</span>';
			};
			obj.slide_ctrl_wrap.html(ctrl_item);
			var item = $(".ctrl_item");
			var item_w = item.width();
			var item_margin = parseInt(item.css("margin-left")) + parseInt(item.css("margin-right"));
			item.each(function (i) {
				if (i == obj.active_index) {
					$(this).addClass("ctrl_item_active").siblings().removeClass("ctrl_item_active");
					$(this).next().addClass("ctrl_item_next").siblings().removeClass("ctrl_item_next");
					$(this).prev().addClass("ctrl_item_prev").siblings().removeClass("ctrl_item_prev");
				};
			})
			var ctrl_w = (item_w + item_margin) * obj.slide_item.length;
			obj.slide_ctrl_wrap.width(ctrl_w);
			if (ctrl_w < obj.slide_ctrl.width()) {
				obj.slide_ctrl_wrap.css("margin","0 auto");
			};
		};
		slide.ctrlItem = function (argument) {
			var obj = this;
			$(".ctrl_item").each(function (i) {
				$(this).css("cursor","pointer");
				$(this).click(function (argument) {
					$(this).addClass("ctrl_item_active").siblings().removeClass("ctrl_item_active");
					$(this).next().addClass("ctrl_item_next").siblings().removeClass("ctrl_item_next");
					$(this).prev().addClass("ctrl_item_prev").siblings().removeClass("ctrl_item_prev");
					obj.slide_item.each(function (j) {
						if ($(this).hasClass("active_slide")) {
							obj.move_w = obj.move_w - obj.slide_wrap_w*(i-j);
							obj.slide_wrap.css("margin-left",obj.move_w+"px");
							$(obj.slide_item[i]).addClass("active_slide").siblings().removeClass("active_slide");
							obj.active_index = i;
						};
					})
				})
			})	
		};
		slide.toPrev = function (argument) {
			var obj = this;
			if (obj.ctrl_item_yes === "true") {
				obj.itemSet();
				this._prev.bind('click',function (argument) {
					if (obj.active_index === 0) {
						if (obj.roop === "true") {
							obj.slideActiveChange("roop_prev");
						}else{
							alert("前面没有了");	
						}
					}else{
						obj.slideActiveChange(-1);
						obj.itemActiveChange(1);
					}
				})
			}else{
				this._prev.bind('click',function (argument) {
					if (obj.active_index === 0) {
						if (obj.roop === "true") {
							obj.slideActiveChange("roop_prev")
						}else{
							alert("前面没有了");	
						}
					}else{
						obj.slideActiveChange(-1);
					}
				})
			}
			
		};
		slide.toNext = function (argument) {
			var obj = this;
			if (obj.ctrl_item_yes === "true") {
				obj.itemSet();
				this._next.click(function (argument) {
					if (obj.active_index === obj.slide_item.length-1) {
						if (obj.roop === "true") {
							obj.slideActiveChange("roop_next");
						}else{
							alert("后面没有了");	
						}
						
					}else{
						obj.slideActiveChange(1);
						obj.itemActiveChange(-1);
					}
				})
			}else{
				this._next.click(function (argument) {
					if (obj.active_index === obj.slide_item.length-1) {
						if (obj.roop === "true") {
							obj.slideActiveChange("roop_next");
						}else{
							alert("后面没有了");	
						}
						
					}else{
						obj.slideActiveChange(1);
					}
				})
			}
		};
		slide.itemSet = function (argument) {
			
		};
		slide.slideActiveChange = function (_derection) {
			var obj = this;
			if (_derection !== 0) {
				obj.active_index = obj.active_index+_derection;
				obj.move_w = obj.move_w + obj.slide_wrap_w*_derection*-1;
				obj.slide_wrap.css("margin-left",obj.move_w+"px");
				$(obj.slide_item[obj.active_index]).addClass("active_slide").siblings().removeClass("active_slide");
			}
			if(_derection === "roop_prev") {
				obj.active_index = obj.slide_item.length-1;
				obj.move_w = obj.slide_wrap_w*(obj.slide_item.length-1)*-1;
				obj.slide_wrap.css("margin-left",obj.move_w+"px");
				$(obj.slide_item[obj.active_index]).addClass("active_slide").siblings().removeClass("active_slide");
			}
			if(_derection === "roop_next") {
				obj.active_index = 0;
				obj.move_w = 0;
				obj.slide_wrap.css("margin-left",obj.move_w+"px");
				$(obj.slide_item[obj.active_index]).addClass("active_slide").siblings().removeClass("active_slide");
			}
		};
		slide.itemActiveChange = function (_derection) {
			if (_derection === 1) {
				var to_active = $(".ctrl_item_prev");
			}else{
				var to_active = $(".ctrl_item_next");
			}
			var obj = this;
			var slide_ctrl_w = obj.slide_ctrl.width();
			var item_w = parseInt($(".ctrl_item").width()),
				item_margin = parseInt($(".ctrl_item").css("margin-left")) + parseInt($(".ctrl_item").css("margin-right"));
			var ctrl_item_move = item_w + item_margin;
			$(to_active).addClass("ctrl_item_active").removeClass("ctrl_item_prev,ctrl_item_next").siblings().removeClass("ctrl_item_active");
			$(".ctrl_item_active").next().addClass("ctrl_item_next").siblings().removeClass("ctrl_item_next");
			$(".ctrl_item_active").prev().addClass("ctrl_item_prev").siblings().removeClass("ctrl_item_prev");
			var item_left = $(".ctrl_item_active").position();
			if (_derection === 1) {
				if (item_left.left < ctrl_item_move) {
					obj.ctrl_wrap_move += ctrl_item_move;
					obj.slide_ctrl_wrap.css("margin-left",obj.ctrl_wrap_move +"px");
				};
			}else{
				if (item_left.left > (slide_ctrl_w - ctrl_item_move)) {
					obj.ctrl_wrap_move += ctrl_item_move*-1;
					obj.slide_ctrl_wrap.css("margin-left",obj.ctrl_wrap_move +"px");
				};
			}
			
		}
		return slide;
	}
}
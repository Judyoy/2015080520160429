var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	lazyLoading: false,
	/*	lazyLoadingInPrevNext : false,*/
	onSlideChangeStart: function(swiper) {

		$(".ac-p1 img, .ac-p2 img, .ac-p3 img, .ac-p4 img, .ac-p5 img, .ac-p6 img, .ac-p7 img").css("opacity", "0");
		TweenMax.killTweensOf($('.swiper-container'));

	},
	onSlideChangeEnd: function(swiper) {
		var index = swiper.activeIndex;
		sceneActive(index);
		swiperLock();
		clearTimeout(setTimeoutId);
		setTimeoutId = setTimeout(unswiperLock, 800)

	}
});
var setTimeoutId;
$().ready(function() {
	$(".ac-p1 img, .ac-p1 .icon1").css("opacity", "0");
	setTimeout(function() {
		$(".loading").hide();
		scene1();
	}, 3000);
	swiperLock();
});

function sceneActive(index) {
	$(".arrow").css("opacity", "1");
	switch (index) {
		case 0:
			scene1();
			break;
		case 1:
			scene2();
			break;
		case 2:
			scene3();
			break;
		case 3:
			scene4();
			break;
		case 4:
			scene5();
			break;
		case 5:
			scene6();
			break;
		case 6:
			scene7();
			break;
		case 7:
			scene8();
			break;

	}

}

function scene1() {
	TweenMax.fromTo(".ac-p1 .icon" /*运动对象*/ , .5 /*时间*/ , {
		//							初始状态
		alpha: 0,
		scale: 0,
		ease: Linear.easeOut
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		delay: .6,
		ease: Linear.easeOut
	});
	TweenMax.fromTo(".ac-p1 .icon1" /*运动对象*/ , .8 /*时间*/ , {
		//							初始状态
		alpha: 0,
		scale: 0,
		x: 0,
		y: 0
	}, {
		//							结束状态
		alpha: 1,
		delay: 1.2,
		scale: 1,
		x: 0,
		y: 0,
		ease: Bounce.easeOut
	});
	TweenMax.fromTo(".ac-p1 .icon4" /*运动对象*/ , .8 /*时间*/ , {
		//							初始状态
		alpha: 0,
		scale: 0,
		x: 0,
		y: 0
	}, {
		//							结束状态
		alpha: 1,
		delay: 1.2,
		scale: 1,
		x: 0,
		y: 0,
		ease: Bounce.easeOut
	});
	TweenMax.fromTo(".ac-p1 .cow-cont img" /*运动对象*/ , .6 /*时间*/ , {
		//							初始状态
		alpha: 0,
		y: 580,
		ease: Linear.easeOut
	}, {
		//结束状态
		alpha: 1,
		y: 0,
		ease: Linear.easeOut,
		onComplete: swiperNext
	});
}

function scene2() {

	TweenMax.fromTo(".ac-p2 .icon2-1" /*运动对象*/ , 1 /*时间*/ , {
		//				初始状态
		alpha: 0,
		scale: 0,
		y: 0
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		ease: Bounce.easeOut,
		y: 0
	});
	TweenMax.fromTo(".ac-p2 .icon2-2" /*运动对象*/ , 1 /*时间*/ , {
		//				初始状态
		alpha: 0,
		scale: 0,
		y: -200
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		ease: Linear.easeOut,
		y: 0
	});
	TweenMax.fromTo(".ac-p2 .icon2-3" /*运动对象*/ , 1 /*时间*/ , {
		//				初始状态
		alpha: 0,
		scale: 0,
		y: -300
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		y: 0,
		ease: Linear.easeOut
	});

	TweenMax.fromTo(".ac-p2 .icon2-4" /*运动对象*/ , 1 /*时间*/ , {
		//				初始状态
		alpha: 0,
		scale: 0,
		y: 500
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		delay: .8,
		y: 0,
		ease: Linear.easeOut
	});

	TweenMax.fromTo(".ac-p2 .down .roade" /*运动对象*/ , 1 /*时间*/ , {
		//				初始状态
		alpha: 1,
		scale: 1,
		y: 500
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		y: 0,
		ease: Linear.easeOut
	});
	TweenMax.fromTo(".ac-p2 .down .cow2" /*运动对象*/ , 1 /*时间*/ , {
		//				初始状态
		alpha: 0,
		scale: 1,
		x: 200
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		x: 0,
		delay: 1,
		ease: Linear.easeOut,
		onComplete: swiperNext
	});
}

function scene3() {
	var tl = new TimelineMax();
	tl.addLabel("begin");

	TweenMax.fromTo(".ac-p3 .icon3-5" /*运动对象*/ , 1 /*时间*/ , {
		//							初始状态
		alpha: 0,
		ease: Linear.easeOut
	}, {
		//结束状态
		alpha: 1,
		delay: 2,
		ease: Linear.easeOut
	})
	tl.add(TweenMax.fromTo(".ac-p3 .icon3-2" /*运动对象*/ , 0.5 /*时间*/ , {
		//							初始状态
		alpha: 0,
		y: 200,
		ease: Linear.easeOut
	}, {
		//结束状态
		alpha: 1,
		y: 0,
		ease: Linear.easeOut
	}), "begin");

	tl.add(TweenMax.fromTo(".ac-p3 .icon3-1" /*运动对象*/ , .4 /*时间*/ , {
		//							初始状态
		alpha: 0,
		ease: Linear.easeOut
	}, {
		//结束状态
		alpha: 1,
		ease: Linear.easeOut
	}), "begin+=1");

	tl.add(TweenMax.fromTo(".ac-p3 .icon3-3" /*运动对象*/ , .3 /*时间*/ , {
		//							初始状态
		alpha: 0,
		ease: Linear.easeOut
	}, {
		//结束状态
		alpha: 1,
		ease: Linear.easeOut
	}), "begin+=1");

	tl.add(TweenMax.to(".ac-p3 .icon3-3", .4, {
		y: 20,
		ease: Linear.easeOut
	}), "begin+=2.8");
	tl.add(TweenMax.to(".ac-p3 .icon3-3", .4, {
		y: 0,
		ease: Linear.easeOut
	}), "begin+=3.2");
	tl.add(TweenMax.fromTo(".ac-p3 .icon3-4", .4, {
		scale: 0,
		alpha: 0,
		x: -640,
		y: 700,
		ease: Bounce.easeOut
	}, {
		x: -180,
		y: 0,
		scale: .5,
		alpha: 1,
		ease: Bounce.easeOut
	}), "begin+=3.6");
	tl.add(TweenMax.fromTo(".ac-p3 .icon3-4", .4, {
		scale: .5,
		x: -180,
		ease: Bounce.easeOut
	}, {
		scale: 1,
		x: 0,
		ease: Bounce.easeOut,
		onComplete: swiperNext
	}), "begin+=4");

}


function scene4() {
	console.log("4");
	var fadeInT = .25;
	var book = $(".ac-p4 .book");
	book.each(function(index, ele) {
		console.log(index);
		TweenMax.fromTo(book[index] /*运动对象*/ , .2 /*时间*/ , {
			//							初始状态
			alpha: 0,
			scale: .5
		}, {
			//							结束状态
			alpha: 1,
			scale: 1,
			ease: Bounce.easeOut,
			delay: fadeInT * index
		});
	})
	TweenMax.fromTo(".ac-p4 .icon4-3" /*运动对象*/ , .1 /*时间*/ , {
		//							初始状态
		alpha: 0
	}, {
		//							结束状态
		alpha: 1,
		ease: Linear.easeNone
	});
	TweenMax.fromTo(".ac-p4 .icon4-1" /*运动对象*/ , .1 /*时间*/ , {
		//							初始状态
		alpha: 0
	}, {
		//							结束状态
		alpha: 1,
		delay: .6,
		ease: Linear.easeNone
	});
	TweenMax.fromTo(".ac-p4 .icon4-2" /*运动对象*/ , .5 /*时间*/ , {
		//							初始状态
		alpha: 0,
		y: 30
	}, {
		//							结束状态
		alpha: 1,
		y: 0,
		delay: 2,
		ease: Linear.easeNone
	});
	TweenMax.fromTo(".ac-p4 .icon4-4" /*运动对象*/ , .1 /*时间*/ , {
		//							初始状态
		alpha: 0,
		scale: .8,
		y: 30
	}, {
		//							结束状态
		alpha: 1,
		y: 0,
		scale: 1,
		delay: 2.5,
		ease: Linear.easeNone,
		onComplete: swiperNext
	});

}


function scene5() {
	console.log("4");
	var fadeInT = .35;
	var book = $(".ac-p5 .animate");
	book.each(function(index, ele) {
		console.log(index);
		TweenMax.fromTo(book[index] /*运动对象*/ , .2 /*时间*/ , {
			//							初始状态
			alpha: 0,
			scale: .5
		}, {
			//							结束状态
			alpha: 1,
			scale: 1,
			delay: 1,
			ease: Bounce.easeOut,
			delay: fadeInT * index
		});
	})
	TweenMax.fromTo(".ac-p5 .icon5-1" /*运动对象*/ , .2 /*时间*/ , {
		//							初始状态
		alpha: 0,
		ease: Linear.easeNone,
		y: 30
	}, {
		//							结束状态
		alpha: 1,
		ease: Linear.easeNone,
		y: 0
	});
	TweenMax.fromTo(".ac-p5 .lou" /*运动对象*/ , .2 /*时间*/ , {
		//							初始状态
		alpha: 0,
		sacle: 1,
		ease: Linear.easeNone
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		ease: Linear.easeNone
	});
	TweenMax.fromTo(".ac-p5 .icon5-2" /*运动对象*/ , .8 /*时间*/ , {
		//							初始状态
		alpha: 1,
		ease: Linear.easeNone,
		y: 30,
		x: 300
	}, {
		//							结束状态
		alpha: 1,
		delay: .5,
		ease: Linear.easeNone,
		y: 0,
		x: 0
	});
	TweenMax.fromTo(".ac-p5 .icon5-3" /*运动对象*/ , .2 /*时间*/ , {
		//							初始状态
		alpha: 1,
		ease: Linear.easeNone
	}, {
		//							结束状态
		alpha: 1,
		ease: Linear.easeNone
	});
	TweenMax.fromTo(".ac-p5 .icon5-5" /*运动对象*/ , .2 /*时间*/ , {
		//							初始状态
		alpha: 0,
		ease: Linear.easeNone,
		y: 30
	}, {
		//							结束状态
		alpha: 1,
		ease: Linear.easeNone,
		y: 0
	});
	TweenMax.fromTo(".ac-p5 .icon5-6" /*运动对象*/ , .3 /*时间*/ , {
		//							初始状态
		alpha: 0,
		scale: .8,
	}, {
		//							结束状态
		alpha: 1,
		scale: 1,
		delay: .5,
		ease: Bounce.easeOut,
		onComplete: swiperNext
	});
}

function scene6() {
	TweenMax.fromTo(".ac-p6 .icon6-1" /*运动对象*/ , .8 /*时间*/ , {
		//							初始状态
		alpha: 0,
		y: 694,
		x: 344
	}, {
		//							结束状态
		alpha: 1,
		y: 0,
		x: 0,
		ease: Linear.easeNone

	});

	TweenMax.fromTo(".ac-p6 img" /*运动对象*/ , .8 /*时间*/ , {
		//							初始状态
		alpha: 0,
		y: 0
	}, {
		//							结束状态
		alpha: 1,
		delay: .7,
		y: 0,
		ease: Linear.easeNone,
		onComplete: swiperNext
	});
	TweenMax.fromTo(".ac-p6 .icon6-2" /*运动对象*/ , 1 /*时间*/ , {
		scale: .8

	}, {
		transformOrigin: "37px 37px",
		scale: 1,
		ease: Linear.easeNone,
		yoyo: true,
		repeat: -1
	});

}

function scene7() {
		TweenMax.fromTo(".ac-p7 img" /*运动对象*/ , 1 /*时间*/ , {
			//							初始状态
			alpha: 0,
			scale: 0,
			ease: Linear.easeNone,
			y: 0
		}, {
			//							结束状态
			alpha: 1,
			scale: 1,
			ease: Bounce.easeOut,
			y: 0
		});
	}
	/*setTimeout(function(){
		$(".dog").addClass("dogRotate");
	},500)*/
	/*	$(".dog").addClass("dogRotate");
		setTimeout("$('.dog').removeClass('dogRotate')", 1000);*/




function swiperLock() {
	/*alert("swiperLock")*/
	mySwiper.lockSwipes();
	$(".arrow").css("opacity", "0");
}

function unswiperLock() {
	/*	alert("unswiperLock")*/
	mySwiper.unlockSwipes();
	$(".arrow").css("opacity", "100");
}
var setTimeOutNext;

function swiperNext() {
	console.log("next");
	clearTimeout(setTimeOutNext);
	setTimeOutNext = setTimeout(function() {
		unswiperLock();
		//mySwiper.slideNext();	
	}, 3000);

}

var direction
var mainLab
var tipsLab
changeTips("#swiper-container", ".changeTips")

function changeTips(_mainLab, _tipsLab, _direction) {

	direction = _direction || 1
	mainLab = _mainLab || ".mainWeb"
	tipsLab = _tipsLab || ".changeTips"

	//	$(tipsLab).css("opacity", "0");
	//$(tipsLab).hide();
	/*$(".changeTips").hide();*/
	//	$(tipsLab).hide();
	window.onorientationchange = orientationChange;
	//orientationChange()
}

function orientationChange() {

	if (window.orientation == 0) {
		if (direction != 1) {
			/*$(mainLab).css("opacity", "0");
			$(tipsLab).css("opacity", "100");*/
			$(mainLab).hide();
			$(tipsLab).show();
			//swiperLock();
		} else {
			/*$(mainLab).css("opacity", "100");
			$(tipsLab).css("opacity", "0");*/
			$(mainLab).show();
			$(tipsLab).hide();
			//	unswiperLock();
		}
	} else {
		if (direction == 1) {
			/*	$(mainLab).css("opacity", "0");
				$(tipsLab).css("opacity", "100");*/
			$(mainLab).hide();
			$(tipsLab).show();
			//	swiperLock();
		} else {
			/*$(mainLab).css("opacity", "100");
			$(tipsLab).css("opacity", "0");*/
			$(mainLab).show();
			$(tipsLab).hide();
			//unswiperLock();
		}
	}
	//window.resize()
};
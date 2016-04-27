/** 
 * 移动端音乐播放控制
 * @param id 音乐开关按钮div
 * @param src 音乐文件地址
 * @param onImg 音乐播放中按钮显示
 * @param offImg 音乐暂停中按钮显示
 **/

/*调用
musicOnOff( {
	id : "onOff" , 
	src : "./girl.mp3" , 
	onImg : "./img/common/music_on.png" , 
	offImg : "./img/common/music_off.png"
});*/

//define(function(require,exports,module){

function musicOnOff(opt) {

	creatDom();

	var onOffId = document.getElementById(opt.id);
	var onImg = document.getElementById('on');
	var offImg = document.getElementById('off');
	var onOff = true;
	var openMusic = false;

	var audio = new Audio();
	audio.src = opt.src;
	audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	audio.play();
	audio.play();

	onOffId.addEventListener("touchend", playOrNot, false);
	document.body.addEventListener("touchend", forIphone, false);

	function playOrNot() {
		if (onOff) {
			audio.pause();
			onImg.style.display = "none";
			offImg.style.display = "block";
			onOff = false;
		} else {
			audio.play();
			onImg.style.display = "block";
			offImg.style.display = "none";
			onOff = true;
		}
	}

	function forIphone() {
		if (!openMusic) return;
		var ev = ev || event;
		ev.stopPropagation();
		audio.play();
		openMusic = true;
	}

	function creatDom() {
		var oLogin = document.createElement('div');
		oLogin.id = opt.id;
		oLogin.innerHTML = '<div id="on"><img src=' + opt.onImg + ' alt=""></div><div id="off"><img src=' + opt.offImg + ' alt=""></div>';

		document.body.appendChild(oLogin);
	}
}

// 	exports.musicOnOff=musicOnOff;
// })
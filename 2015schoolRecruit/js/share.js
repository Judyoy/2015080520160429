
function getAppUrl(){
    var url = window.location.href;
    var getData;

    if(url.indexOf('#') > -1){
        url = url.substr(0,url.indexOf('#')); 
    }

    url = encodeURIComponent(url);

    $.ajax({
        url:'../../weixin/jssdk/sample.php',/*微信后台url*/
        data:{
        	app_url:url
        },
        async:false,
        type:'get',
        dataType:'json',
        success:function(dataJson){
            getData = dataJson;
        }
    });

    return getData;
}


var wxData = getAppUrl();

wx.config({
    debug: false,
    appId: wxData.appId,
    timestamp: wxData.timestamp,
    nonceStr: wxData.nonceStr,
    signature: wxData.signature,
    jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });


wx.ready(function(){
    
    var toLink = 'http://www.gimc.cn/cp/2015schoolRecruit/body.html';
    var logoLink = 'http://www.gimc.cn/cp/2015schoolRecruit/img/share.jpg';
    var shareTitle = '省广股份校招 红旗士招募令'; //分享标题
    var shareDesc = '省广股份2016年校招，放胆过来！'; //分享内容
    
    function addShareLog(){
        $.getJSON('./m=Home&c=Share&a=addShare&type=weixin', function(json, textStatus) { 
        	// alert('分享成功');
        	// window.location.reload();
            $('.share_page').fadeOut();
         });
    }

    var shareMessageData = {
        title: shareTitle,
        desc: shareDesc,
        link: toLink,
        imgUrl: logoLink,
        trigger: function (res) {
          //alert('用户点击发送给朋友');
        },
        success: function (res) {
         // alert('您已分享给朋友');
          // $('#shareCover').fadeOut();
          addShareLog();
        },
        cancel: function (res) {
          //alert('已取消');
        },
        fail: function (res) {
          //alert(JSON.stringify(res));
        }
    }

    var shareTimelineData = {
        title: shareDesc,
        link: toLink,
        imgUrl: logoLink,
        trigger: function (res) {
          //alert('用户点击发送给朋友');
        },
        success: function (res) {
         // alert('您已分享给朋友');
          // $('#shareCover').fadeOut();
          addShareLog();
        },
        cancel: function (res) {
          //alert('已取消');
        },
        fail: function (res) {
          //alert(JSON.stringify(res));
        }
    }

    wx.onMenuShareAppMessage(shareMessageData);
    wx.onMenuShareTimeline(shareTimelineData); 
});	
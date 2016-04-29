require.config({
	paths: {
		'jquery': '../plg/jquery/jquery.min'
	}
})
require(['jquery'], function($) {
	$(document).ready(function(argument) {
		// 弹出框调用
		$(".aler_1").click(function (argument) {
			var aler_name = $(this).attr("id");
			toAler(aler_name);
		})
		// 关闭框调用
		$(".aler_close").click(function (argument) {
			toClose();
		})
		// 弹出框
		function toAler(_name) {
			$(".m-"+_name).removeClass("z-hide").addClass("z-show")
			$(".shade").removeClass("z-hide").addClass("z-show");
		}
		// 关闭框
		function toClose(_name) {
			$(".m-aler,.shade").removeClass("z-show").addClass("z-hide");
		}
	})
})
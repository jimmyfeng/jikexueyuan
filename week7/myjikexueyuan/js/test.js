// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    var $ = require("jquery");
    // 通过 require 引入依赖=
    var index = require.async('index');
    // // 通过 exports 对外提供接口
    // exports.doSomething = ...
	// function(e) {
	//     // lunbo($(".strategy"));
	//     // lunbo($(".swiper-car-box"));
	//     // lunbo($('.focuswork-wrap.swiper-container.top'));
	//     // lunbo($('.index-banner'));
	// }
    // // 或者通过 module.exports 提供整个接口
    // module.exports = ...

});

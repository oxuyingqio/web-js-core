/**
 * Button
 * 
 * 基础按钮
 * 
 * 类
 */

core.html.element.viewer.button.Button = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.button.Button.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerButtonButton" + count);

		// text
		var text = "";

		this.getText = function() {
			return text;
		};

		this.setText = function(_text) {
			text = _text;
		};
	};
	// 继承按钮抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Button);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<button id='");
		html.push(this.getId());
		html.push("'>");
		html.push(this.getText());
		html.push("</button>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

	};

	return Constructor;
})();

/**
 * Input
 * 
 * 输入框
 * 
 * 类
 */

core.html.element.viewer.Input = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            输入框ID
	 * @param type
	 *            输入框类型
	 */
	var Constructor = function(_id, _type) {

		// ID
		var id = _id;
		// 类型
		var type = _type || core.html.element.model.InputType.text;
		// 配置项
		var config = {};

		// 输入框
		var input = core.html.element.controller.InputCreator.getInput(type);
		if (input === undefined) {
			throw "core.html.element.viewer.Input:构造参数异常.类型(" + type + ")暂不支持";
		}

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getType = function() {
			return type;
		};

		this.setType = function(_type) {
			type = _type;
		};

		this.getConfig = function() {
			return config;
		};

		this.setConfig = function(_config) {
			config = _config;
		};

		this.getInput = function() {
			return input;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		// 不存在则添加,存在则展示
		if (input.exist(id, config)) {
			input.show(id, config);
		} else {
			$("body").append(this.convertHtml());
			this.dealHtml();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		input.hide(id, config);
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		input.destroy(id, config);
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Input.add:方法异常.输入框不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.remove = function() {
	};

	/**
	 * 检索子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.find = function() {

		return [];
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		return input.convertHtml(id, config);
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		input.dealHtml(id, config);
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return [];
	};

	return Constructor;
})();
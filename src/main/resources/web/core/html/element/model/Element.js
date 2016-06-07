/**
 * Element
 * 
 * 元素,实现部分core.html.element.Element通用属性及方法
 * 
 * 抽象类
 */

core.html.element.model.Element = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		// 元素ID
		var id = _id || "coreHtmlElementModelElement" + count;

		// 子元素
		var elements = [];

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 获取元素jQuery对象
	 * 
	 * @returns
	 */
	Constructor.prototype.getjQuery = function() {

		return $("#" + this.getId());
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $element = this.getjQuery();
		$element.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $element = this.getjQuery();
		$element.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 元素的jQuery对象
		var $element = this.getjQuery();
		$element.remove();
	};

	/**
	 * 添加元素到
	 * 
	 * @param id
	 *            添加到的位置
	 * @returns
	 */
	Constructor.prototype.appendTo = function(id) {

		$(id === "body" ? id : "#" + id).append(this.convertHtml());
		this.dealHtml();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children{core.html.element.Element}
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 添加子元素
			this.getElements().push(child);
			// 若元素存在,则直接展示添加的子元素
			this.exist() && child.appendTo(this.getId());
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild{core.html.element.Element}
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array<core.html.element.Element>}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array<core.html.element.Element>}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 元素是否存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		// 元素的jQuery对象
		var $element = this.getjQuery();
		return ($element.length !== 0);
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {
		// 抽象方法
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	return Constructor;

})();
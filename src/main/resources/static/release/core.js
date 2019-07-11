/**
 * @name	Array
 * @package	core.js
 * @desc	数组
 * @type	类扩展
 * 
 * @method	array	clear()								清空数组.
 * 			boolean	contains(object object)				是否存在指定对象.
 * 			number	indexOf(object object)				获取指定对象下标值.
 * 			array	insert(number index, object object)	在指定下标位置插入对象.
 * 			array	remove(object object)				删除指定对象.
 * 			array	removeAt(number index)				删除指定下标位置的对象.
 * 
 * @date	2016年8月20日 09:45:15
 */

/**
 * 清空数组
 * 
 * @returns {array}
 */
Array.prototype.clear = function() {

	// 长度>0,则清空
	this.length > 0 && this.splice(0, this.length);

	return this;
};

/**
 * 是否存在指定对象
 * 
 * @param object{object}
 *            对象
 * @returns {boolean}
 */
Array.prototype.contains = function(object) {

	// 获取对象下标值,依据下标值判断是否存在该对象
	return (this.indexOf(object) >= 0);
};

/**
 * 获取指定对象下标值
 * 
 * @param object{object}
 *            对象
 * @returns {number}
 */
Array.prototype.indexOf = function(object) {

	// 遍历数组
	for (var index = 0, length = this.length; index < length; index++) {

		if (this[index] === object) {

			return index;
		}
	}

	return -1;
};

/**
 * 在指定下标位置插入对象
 * 
 * @param index{number}
 *            下标值
 * @param object{object}
 *            对象
 * @returns {array}
 */
Array.prototype.insert = function(index, object) {

	this.splice(index, 0, object);

	return this;
};

/**
 * 删除指定对象
 * 
 * @param object{object}
 *            对象
 * @returns {array}
 */
Array.prototype.remove = function(object) {

	// 获取对象下标值
	var index = this.indexOf(object);
	// 存在则删除
	index >= 0 && this.splice(index, 1);

	return this;
};

/**
 * 删除指定下标位置的对象
 * 
 * @param index{number}
 *            下标索引
 * @returns {array}
 */
Array.prototype.removeAt = function(index) {

	this.splice(index, 1);

	return this;
};
/**
 * @name	Date
 * @package	core.js
 * @desc	日期
 * @type	类扩展
 * 
 * @method	string	format(string format)	格式化日期
 * 
 * @date	2016年8月20日 09:41:57
 */

/**
 * 格式化日期
 * 
 * @param format{string}
 *            格式化参数
 * @returns {string}
 */
Date.prototype.format = function(format) {

	// 日期数据
	var data = {

		// 月
		"M+" : this.getMonth() + 1,
		// 日
		"d+" : this.getDate(),
		// 时,12进制
		"h+" : this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,
		// 时,24进制
		"H+" : this.getHours(),
		// 分
		"m+" : this.getMinutes(),
		// 秒
		"s+" : this.getSeconds(),
		// 毫秒
		"S" : this.getMilliseconds()
	};

	// 处理年
	if (/(y+)/.test(format)) {

		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	// 处理月 日 时 分 秒 毫秒
	for ( var el in data) {

		if (new RegExp("(" + el + ")").test(format)) {

			format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (data[el]) : (("00" + data[el])
					.substr(("" + data[el]).length)));
		}
	}

	return format;
};
/**
 * @name	Math
 * @package	core.js
 * @desc	数学计算
 * @type	对象扩展
 * 
 * @method	static number	subtract(number subtrahend, number minuend, number precision)	减法
 * 
 * @date	2016年8月20日 09:41:02
 */

/**
 * 减法-静态方法
 * 
 * @param subtrahend{number}
 *            减数
 * @param minuend{number}
 *            被减数
 * @param precision{number}
 *            结果精度
 * @returns {number}
 */
Math.subtract = function(subtrahend, minuend, precision) {

	// 减数
	var a = parseFloat(subtrahend);
	// 被减数
	var b = parseFloat(minuend);

	// 计算结果
	return (a - b).toFixed(precision);
};
/**
 * @name	Object
 * @package	core.js
 * @desc	超类
 * @type	类扩展
 * 
 * @method	static object	clone(object object)	克隆对象(原型式继承)
 * 
 * @attention	1.若扩展Object.prototype,引入jQuery时会产生未知错误.
 * 
 * @date	2016年8月20日 09:15:16
 */

/**
 * 克隆对象(原型式继承)-静态方法
 * 
 * @param object{object}
 *            待克隆的对象
 * @returns {object} 克隆后的对象
 */
Object.clone = function(object) {

	// 一个空函数
	var Clone = function() {

	};
	// 空函数原型指向待克隆对象
	Clone.prototype = object;

	// 返回空函数的一个实例
	return new Clone();
};
/**
 * @name	String
 * @package	core.js
 * @desc	字符串
 * @type	类扩展
 * 
 * @method	string	replaceAll(string target, string result)	替换所有字符串
 * 			string	toBinaryString()							转为2进制字符串
 * 			string	toHexString()								转为16进制字符串
 * 
 * @date	2016年8月20日 09:38:33
 */

/**
 * 替换所有字符串
 * 
 * @param target{string}
 *            目标字符串
 * @param result{string}
 *            待替换的字符串
 * @returns {string}
 */
String.prototype.replaceAll = function(target, result) {

	return this.replace(new RegExp(target, "g"), result);
};

/**
 * 转为2进制字符串
 * 
 * @returns {string}
 */
String.prototype.toBinaryString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历字符串所有字符
	for (var i = 0, length = this.length; i < length; i++) {

		// 获取对应字符的2进制字符串
		var bs = this.charCodeAt(i).toString(2);

		// 不足8位,则在前面补0
		for (var j = bs.length; j < 8; j++) {

			rtnStr.push(0);
		}
		rtnStr.push(bs);
	}

	// 返回
	return rtnStr.join("");
};

/**
 * 转为16进制字符串
 * 
 * @returns {string}
 */
String.prototype.toHexString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历字符串所有字符
	for (var i = 0, length = this.length; i < length; i++) {

		// 获取对应字符的16进制字符串
		var hs = this.charCodeAt(i).toString(16);

		// 不足2位,则在前面补0
		for (var j = hs.length; j < 2; j++) {

			rtnStr.push(0);
		}
		rtnStr.push(hs);
	}

	// 返回
	return rtnStr.join("");
};
/**
 * 包
 */
(function() {

	if (typeof (core) !== "undefined") {

		throw "全局变量'core'被占用.请确保'core'未被占用后,再进行使用.";
	} else {

		// 核心包
		core = {

			// HTML 包
			html : {

				// 常量包
				constant : {},

				// 元素包
				element : {

					// 模型包
					model : {},

					// 展示包
					viewer : {}
				},

				// 事件包
				event : {

					// document事件包
					document : {},

					// window事件包
					window : {}
				},

				// 工具包
				util : {}
			},

			// 基础包
			lang : {},

			// 工具包
			util : {}
		};
	}
})();
/**
 * @name	Class
 * @package	core.lang
 * @desc	类
 * @type	类
 * 
 * @constructor	core.lang.Class()
 * 
 * @method	static void	extend(function SubClass, function SuperClass)	类继承-静态方法
 * 
 * @date	2016年8月20日 09:32:06
 */

/**
 * 构造函数
 */
core.lang.Class = function() {

};

/**
 * 类继承-静态方法
 * 
 * @param SubClass{function}
 *            子类
 * @param SuperClass{function}
 *            父类
 * @returns
 */
core.lang.Class.extend = function(SubClass, SuperClass) {

	// 判断参数个数
	if (arguments.length !== 2) {

		new core.lang.Exception(arguments, "core.lang.Class.extend", "方法参数异常", "参数个数必须为2个,实际得到" + arguments.length
				+ "个");
	}

	// 中间函数
	var Middleware = function() {

	};
	// 中间函数原型指向父类
	Middleware.prototype = SuperClass.prototype;
	// 子类原型指向中间函数
	SubClass.prototype = new Middleware();

	// 保持子类构造不变
	SubClass.prototype.constructor = SubClass;
	// 子类添加superClass属性,指向父类原型
	SubClass.superClass = SuperClass.prototype;
	if (SuperClass.prototype.constructor === Object.prototype.constructor) {

		SuperClass.prototype.constructor = SuperClass;
	}
};
/**
 * @name	Exception
 * @package	core.lang
 * @desc	异常
 * @type	类
 * 
 * @constructor core.lang.Exception(object _this, string... message)
 * 
 * @date	2016年8月20日 09:32:06
 */

/**
 * 构造函数
 * 
 * @param _this{object}
 *            异常对象
 */
core.lang.Exception = function(_this) {

	// 异常信息
	var message = [];
	// 遍历参数
	for (var i = 1, length = arguments.length; i < length; i++) {

		// 添加输出信息
		message.push(arguments[i]);
	}

	// 打印信息
	if (window.console && window.console.error) {

		window.console.error(message.join(" "));
		window.console.error(_this);
	} else {

		alert((message.join(" ")));
	}
};
/**
 * @name	Interface
 * @package	core.lang
 * @desc	接口
 * @type	类
 * 
 * @constructor	core.lang.Interface(string name, array<string> methods)
 * 
 * @method	static void	ensureImplements(object object, core.lang.Interface... interface)	检查对象是否实现对应接口的方法
 * 
 * @date	2016年8月20日 09:35:10
 */

/**
 * 构造函数
 * 
 * @param name{string}
 *            接口名称
 * @param methods{array
 *            <string>} 接口方法集合
 */
core.lang.Interface = function(name, methods) {

	// 判断参数个数
	if (arguments.length !== 2) {

		new core.lang.Exception(arguments, "core.lang.Interface", "构造参数异常", "构造参数个数必须为2个,实际得到" + arguments.length
				+ "个.");
	}

	// 接口名称
	this.name = name;
	// 接口方法
	this.methods = [];
	// 设置接口方法
	for (var i = 0, length = methods.length; i < length; i++) {

		if (typeof (methods[i]) !== "string") {

			new core.lang.Exception(methods[i], "core.lang.Interface", "构造参数异常", "接口方法名必须为字符串.");
		} else {

			this.methods.push(methods[i]);
		}
	}
};

/**
 * 接口方法检查-静态方法
 * 
 * 检查对象是否实现对应接口的方法
 * 
 * @param object{object}
 *            对象
 * @returns
 */
core.lang.Interface.ensureImplements = function(object) {

	// 判断参数个数
	if (arguments.length < 2) {

		new core.lang.Exception(arguments, "core.lang.Interface.ensureImplements", "方法参数异常",
				"参数个数至少为2个.首参数为实现接口的对象,后续参数为实现的接口对象.");
	}

	// 遍历实现的接口对象
	for (var i = 1, length = arguments.length; i < length; i++) {

		// 获取实现的接口对象
		var _interface = arguments[i];

		// 接口对象是否存在
		if (_interface) {

			// 存在,则检查接口对象是否为core.lang.Interface类
			if (_interface.constructor !== core.lang.Interface) {

				new core.lang.Exception(_interface, "core.lang.Interface.ensureImplements", "方法参数异常",
						"传入对象非core.lang.Interface对象.");
			}
		} else {

			new core.lang.Exception(_interface, "core.lang.Interface.ensureImplements", "方法参数异常", "传入接口对象不存在");
		}

		// 遍历接口方法
		for (var j = 0, jLength = _interface.methods.length; j < jLength; j++) {

			// 获取接口方法
			var method = _interface.methods[j];

			// 接口方法不存在,或类型不为方法
			if (!object[method] || typeof (object[method]) !== "function") {

				new core.lang.Exception(object, "core.lang.Interface.ensureImplements", "接口方法未实现异常", "传入对象未实现接口"
						+ _interface.name + "(" + method + ")方法.");
			}
		}
	}
};
/**
 * @name	Warning
 * @package	core.lang
 * @desc	警告
 * @type	类
 * 
 * @constructor core.lang.Warning(object _this, string... message)
 * 
 * @date	2016年9月8日 10:20:53
 */

/**
 * 构造函数
 * 
 * @param _this{object}
 *            警告对象
 */
core.lang.Warning = function(_this) {

	// 警告信息
	var message = [];
	// 遍历参数
	for (var i = 1, length = arguments.length; i < length; i++) {

		// 添加输出信息
		message.push(arguments[i]);
	}

	// 打印信息
	if (window.console && window.console.warn) {

		window.console.warn(message.join(" "));
		window.console.warn(_this);
	}
};
/**
 * @name	Map
 * @package	core.util
 * @desc	映射
 * @type	类
 * 
 * @constructor	core.util.Map()
 * 
 * @method	number 			size() 							返回映射个数.
 * 			boolean			isEmpty()						映射是否包含键-值映射关系,未包含则返回 true.
 * 			boolean			containsKey(object key)			映射是否包含指定键的映射关系,包含则返回 true.
 * 			boolean			containsValue(object value)		映射是否包含指定值的映射关系,包含则返回 true.
 * 			object			get(object key)					返回指定键所映射的值;如果映射中不包含该键的映射关系,则返回 undefined.
 * 			core.util.Map	put(object key, object value)	将指定键-值映射保存;若存在键,则更新对应映射的值.
 * 			core.util.Map	remove(object key)				若存在指定键的映射关系,则将其删除.
 * 			core.util.Map	clear()							清除映射中所有映射关系.
 * 
 * @date	2016年8月20日 09:29:54
 */

core.util.Map = function() {

	/**
	 * 元素
	 */
	var elements = {};
	/**
	 * 元素个数
	 */
	var length = 0;

	/**
	 * 返回映射个数.
	 * 
	 * @returns {number}
	 */
	this.size = function() {

		return length;
	};

	/**
	 * 映射是否包含键-值映射关系,未包含则返回 true.
	 * 
	 * @returns {boolean}
	 */
	this.isEmpty = function() {

		return (length === 0);
	};

	/**
	 * 映射是否包含指定键的映射关系,包含则返回 true.
	 * 
	 * @param key{object}
	 *            键
	 * @returns {boolean}
	 */
	this.containsKey = function(key) {

		return (elements[key] !== undefined);
	};

	/**
	 * 映射是否包含指定值的映射关系,包含则返回 true.
	 * 
	 * @param value{object}
	 *            值
	 * @returns {boolean}
	 */
	this.containsValue = function(value) {

		for ( var key in elements) {

			if (elements[key] === value) {

				return true;
			}
		}

		return false;
	};

	/**
	 * 返回指定键所映射的值;如果映射中不包含该键的映射关系,则返回 undefined.
	 * 
	 * @param key{object}
	 *            键
	 * @returns {object}
	 */
	this.get = function(key) {

		return elements[key];
	};

	/**
	 * 将指定键-值映射保存;若存在键,则更新对应映射的值.
	 * 
	 * @param key{object}
	 *            键
	 * @param value{object}
	 *            值
	 * @returns {core.util.Map}
	 */
	this.put = function(key, value) {

		!this.containsKey(key) && length++;
		elements[key] = value;

		return this;
	};

	/**
	 * 若存在指定键的映射关系,则将其删除.
	 * 
	 * @param key{object}
	 *            键
	 * @returns {core.util.Map}
	 */
	this.remove = function(key) {

		this.containsKey(key) && length--;
		delete elements[key];

		return this;
	};

	/**
	 * 清除映射中所有映射关系.
	 * 
	 * @returns {core.util.Map}
	 */
	this.clear = function() {

		length = 0;
		elements = {};

		return this;
	};
};
/**
 * @name	KeyCode
 * @package	core.html.constant
 * @desc	键盘Code值
 * @type	枚举
 * 
 * @date	2016年8月20日 10:20:27
 */
core.html.constant.KeyCode = {

	F1 : "112",
	F2 : "113",
	F3 : "114",
	F4 : "115",
	F5 : "116",
	F6 : "117",
	F7 : "118",
	F8 : "119",
	F9 : "120",
	F10 : "121",
	F11 : "122",
	F12 : "123",

	N0 : "48",
	N1 : "49",
	N2 : "50",
	N3 : "51",
	N4 : "52",
	N5 : "53",
	N6 : "54",
	N7 : "55",
	N8 : "56",
	N9 : "57",

	a : "65",
	b : "66",
	c : "67",
	d : "68",
	e : "69",
	f : "70",
	g : "71",
	h : "72",
	i : "73",
	j : "74",
	k : "75",
	l : "76",
	m : "77",
	n : "78",
	o : "79",
	p : "80",
	q : "81",
	r : "82",
	s : "83",
	t : "84",
	u : "85",
	v : "86",
	w : "87",
	x : "88",
	y : "89",
	z : "90",

	A : "65",
	B : "66",
	C : "67",
	D : "68",
	E : "69",
	F : "70",
	G : "71",
	H : "72",
	I : "73",
	J : "74",
	K : "75",
	L : "76",
	M : "77",
	N : "78",
	O : "79",
	P : "80",
	Q : "81",
	R : "82",
	S : "83",
	T : "84",
	U : "85",
	V : "86",
	W : "87",
	X : "88",
	Y : "89",
	Z : "90",

	Esc : "27",
	Delete : "46",
	Backspace : "8",
	Enter : "13",
	Shift : "16",
	Space : "32",
	Ctrl : "17",
	Alt : "18",

	Left : "37",
	Up : "38",
	Right : "39",
	Down : "40"
};
/**
 * @name	AbstractElement
 * @package core.html.element
 * @desc	HTML元素公共抽象实现
 * @type	抽象类
 * 
 * @constructor core.html.element.AbstractElement(string id)
 * 
 * @date	2018年5月10日 10:43:59
 */
core.html.element.AbstractElement = (function() {

	/**
	 * 初始化元素
	 * 
	 * @param element{core.html.element.Element}
	 * @returns
	 */
	function init(element) {

		// 判断是否为元素对象
		if (element instanceof core.html.element.AbstractElement) {

			// 调用初始化事件
			element.onInit()(element);

			// 获取子集
			var children = element.getChildren();
			// 遍历子集
			for (var i = 0, length = children.length; i < length; i++) {

				// 递归调用初始化子级
				init(children[i])
			}
		}
	}

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            id
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		/**
		 * 属性
		 */
		/**
		 * id
		 */
		var id = _id || "coreHtmlElementAbstractElement" + count;
		/**
		 * 额外信息
		 */
		var title;
		/**
		 * 样式类名
		 */
		var clazz;
		/**
		 * 样式
		 */
		var style;

		/**
		 * 事件
		 */
		/**
		 * 初始化事件
		 */
		var onInit = function() {

		};

		/**
		 * 附加属性
		 */
		/**
		 * 自定义属性
		 */
		var attributes = new core.util.Map();
		/**
		 * 子元素
		 */
		var children = [];

		/**
		 * 获取/设置ID
		 * 
		 * @param id{string}
		 * @returns {string/core.html.element.Element}
		 */
		this.id = function() {

			switch (arguments.length) {
			case 0:
				return id;
			default:
				id = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置额外信息
		 * 
		 * @param title{string}
		 * @returns {string/core.html.element.Element}
		 */
		this.title = function() {

			switch (arguments.length) {
			case 0:
				return title;
			default:
				title = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置样式类名
		 * 
		 * @param class{string}
		 * @returns {string/core.html.element.Element}
		 */
		this.clazz = function() {

			switch (arguments.length) {
			case 0:
				return clazz;
			default:
				clazz = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置样式
		 * 
		 * @param style{string}
		 * @returns {string/core.html.element.Element}
		 */
		this.style = function() {

			switch (arguments.length) {
			case 0:
				return style;
			default:
				style = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置初始化事件
		 * 
		 * @param onInit{function}
		 * @returns {function/core.html.element.Element}
		 */
		this.onInit = function() {

			switch (arguments.length) {
			case 0:
				return onInit;
			default:
				onInit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取属性
		 * 
		 * @param key{object}
		 * @returns {object}
		 */
		this.getAttribute = function(key) {

			return attributes.get(key);
		};

		/**
		 * 设置属性
		 * 
		 * @param key{object}
		 * @param value{object}
		 * @returns {core.html.element.Element}
		 */
		this.setAttribute = function(key, value) {

			attributes.put(key, value);

			return this;
		};

		/**
		 * 移除属性
		 * 
		 * @param key{object}
		 * @returns {core.html.element.Element}
		 */
		this.removeAttribute = function(key) {

			attributes.remove(key);

			return this;
		};

		/**
		 * 清空属性
		 * 
		 * @returns {core.html.element.Element}
		 */
		this.clearAttributes = function() {

			attributes.clear();

			return this;
		};

		/**
		 * 添加子元素
		 * 
		 * @param child{object}
		 *            子元素
		 * @returns {core.html.element.Element}
		 */
		this.addChild = function(child) {

			children.push(child);

			return this;
		};

		/**
		 * 移除子元素
		 * 
		 * @param child{object}
		 *            子元素
		 * @returns {core.html.element.Element}
		 */
		this.removeChild = function(child) {

			children.remove(child);

			return this;
		};

		/**
		 * 获取子元素集合
		 * 
		 * @returns {array}
		 */
		this.getChildren = function() {

			return children;
		};

		/**
		 * 清空子元素
		 * 
		 * @returns {core.html.element.Element}
		 */
		this.clearChildren = function() {

			children.clear();

			return this;
		}
	};

	/**
	 * 获取jQuery对象
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.$jQuery = function() {

		return $("#" + this.id());
	};

	/**
	 * 添加子元素
	 * 
	 * @param element{core.html.element.Element/string}
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.append = function(element) {

		// 首先判断element是否不为空或undefined
		if (element) {

			// 添加子元素
			this.addChild(element);

			// 判断元素是否在HTML中存在
			if (this.$jQuery().length > 0) {

				// 判断子元素类型.若为元素则调用转为convertHtml方法添加,其他则直接添加
				if (element instanceof core.html.element.AbstractElement) {

					// 判断是否实现元素接口
					core.lang.Interface.ensureImplements(element, core.html.element.Element);
					// 添加HTML内容
					this.$jQuery().append(element.convertHtml());
					// 初始化元素
					init(element);
				} else {

					// 直接添加
					this.$jQuery().append(element);
				}
			}
		}

		return this;
	};

	/**
	 * 添加至
	 * 
	 * @param target{String}
	 *            目标位置
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.appendTo = function(target) {

		// 判断目标类型.若为元素则调用添加方法,若为字符串则调用jQuery添加方法
		if (target instanceof core.html.element.AbstractElement) {

			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(target, core.html.element.Element);
			target.append(this);
		} else if (target.constructor === String) {

			// 判断元素是否在HTML中存在
			if (this.$jQuery().length > 0) {

				// 存在则调用jQuery插入
				this.$jQuery().appendTo(target);
			} else {

				// 不存在则调用jQuery添加元素
				$(target).append(this.convertHtml());
				// 初始化元素
				init(this);
			}
		}

		return this;
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Element
 * @package	core.html.element
 * @desc	HTML元素
 * @type	接口
 * 
 * @method	string/core.html.element.Element	id(string id)								获取/设置ID
 * 			string/core.html.element.Element	title(string title)							获取/设置额外信息
 * 			string/core.html.element.Element	clazz(string clazz)							获取/设置样式类名
 * 			string/core.html.element.Element	style(string style)							获取/设置样式
 * 			function/core.html.element.Element	onInit(function onInit)
 * 			object								getAttribute(object key)					获取属性
 * 			core.html.element.Element			setAttribute(object key, object value)		设置属性
 * 			core.html.element.Element			removeAttribute(object key)					移除属性
 * 			core.html.element.Element			clearAttributes()							清空属性
 * 			string								convertHtml()								转为HTML
 * 			object								$jQuery()									获取jQuery对象
 * 			core.html.element.Element			append(object child)						添加子元素
 * 			core.html.element.Element			appendTo(string target)						添加至
 * 			
 * @date	2018年5月10日 10:43:50
 */
core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "id", "title", "clazz", "style",
		"onInit", "getAttribute", "setAttribute", "removeAttribute", "clearAttributes", "convertHtml", "$jQuery",
		"append", "appendTo" ]);

/**
 * @name	A
 * @package	core.html.element.viewer
 * @desc	锚
 * @type	类
 * 
 * @constructor	core.html.element.viewer.A(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 10:53:24
 */
core.html.element.viewer.A = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.A.superClass.constructor.call(this, id);
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// A HTML
		html.push("<a ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</a>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Button
 * @package core.html.element.viewer
 * @desc	按钮
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Button(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2016年8月20日 11:56:33
 */
core.html.element.viewer.Button = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Button.superClass.constructor.call(this, id);
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Button HTML
		html.push("<button ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</button>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Div
 * @package	core.html.element.viewer
 * @desc	文档中的节
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Div(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:29:23
 */
core.html.element.viewer.Div = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Div.superClass.constructor.call(this, id);
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// DIV HTML
		html.push("<div ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</div>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Fieldset
 * @package	core.html.element.viewer
 * @desc	围绕表单中元素的边框
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Fieldset(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:28:17
 */
core.html.element.viewer.Fieldset = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Fieldset.superClass.constructor.call(this, id);
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Fieldset HTML
		html.push("<fieldset ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</fieldset>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Form
 * @package	core.html.element.viewer
 * @desc	供用户输入的 HTML 表单
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Form(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2017年6月14日 15:14:22
 */
core.html.element.viewer.Form = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Form.superClass.constructor.call(this, id);

		/**
		 * 提交方式
		 */
		var method;
		/**
		 * 编码方式
		 */
		var enctype;

		/**
		 * 获取/设置提交方式
		 * 
		 * @param method{string}
		 * @returns {string/core.html.element.viewer.Form}
		 */
		this.method = function() {

			switch (arguments.length) {
			case 0:
				return method;
			default:
				method = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编码方式
		 * 
		 * @param enctype{string}
		 * @returns {string/core.html.element.viewer.Form}
		 */
		this.enctype = function() {

			switch (arguments.length) {
			case 0:
				return enctype;
			default:
				enctype = arguments[0];
				return this;
			}
		};
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Form HTML
		html.push("<form ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		this.method() && html.push("method='" + this.method() + "' ");
		this.enctype() && html.push("enctype='" + this.enctype() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</form>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Input
 * @package	core.html.element.viewer
 * @desc	输入控件
 * @type	类
 * 
 * @constructor core.html.element.viewer.Input(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 14:24:01
 */
core.html.element.viewer.Input = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Input.superClass.constructor.call(this, id);

		/**
		 * 类型
		 */
		var type;
		/**
		 * 名称
		 */
		var name;
		/**
		 * 值
		 */
		var value;

		/**
		 * 获取/设置类型
		 * 
		 * @param type{string}
		 * @returns {string/core.html.element.viewer.Input}
		 */
		this.type = function() {

			switch (arguments.length) {
			case 0:
				return type;
			default:
				type = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置名称
		 * 
		 * @param name{string}
		 * @returns {string/core.html.element.viewer.Input}
		 */
		this.name = function() {

			switch (arguments.length) {
			case 0:
				return name;
			default:
				name = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value{string}
		 * @returns {string/core.html.element.viewer.Input}
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Input HTML
		html.push("<input ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		this.type() && html.push("type='" + this.type() + "' ");
		this.name() && html.push("name='" + this.name() + "' ");
		this.value() && html.push("value='" + this.value() + "' ");
		html.push("/>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Label
 * @package core.html.element.viewer
 * @desc	input 元素的标注
 * @type	类
 * 
 * @constructor core.html.element.viewer.Label(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:50:35
 */
core.html.element.viewer.Label = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Label.superClass.constructor.call(this, id);

		/**
		 * 指定标注
		 */
		var forAttr;

		/**
		 * 获取/设置指定标注
		 * 
		 * @param forAttr{string}
		 * @returns {string/core.html.element.viewer}
		 */
		this.forAttr = function() {

			switch (arguments.length) {
			case 0:
				return forAttr;
			default:
				forAttr = arguments[0];
				return this;
			}
		};
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Label HTML
		html.push("<label ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		this.forAttr() && html.push("for='" + this.forAttr() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</label>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Legend
 * @package	core.html.element.viewer
 * @desc	fieldset 元素的标题
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Legend(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:30:28
 */
core.html.element.viewer.Legend = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Legend.superClass.constructor.call(this, id);
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Legend HTML
		html.push("<legend ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</legend>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Table
 * @package	core.html.element.viewer
 * @desc	表格
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Table(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:42:42
 */
core.html.element.viewer.Table = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Table.superClass.constructor.call(this, id);

		/**
		 * 排列
		 */
		var align;

		/**
		 * 获取/设置排列
		 * 
		 * @param align{string}
		 * @returns {string/core.html.element.viewer.Table}
		 */
		this.align = function() {

			switch (arguments.length) {
			case 0:
				return align;
			default:
				align = arguments[0];
				return this;
			}
		};
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Table HTML
		html.push("<table ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		this.align() && html.push("align='" + this.align() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</table>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Td
 * @package core.html.element.viewer
 * @desc	表格中的单元
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Td(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:41:31
 */
core.html.element.viewer.Td = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Td.superClass.constructor.call(this, id);

		/**
		 * 横跨的列数
		 */
		var colspan = 1;
		/**
		 * 纵跨的行数
		 */
		var rowspan = 1;

		/**
		 * 获取/设置横跨的列数
		 * 
		 * @param colspan{number}
		 * @returns {number/core.html.element.viewer.Td}
		 */
		this.colspan = function() {

			switch (arguments.length) {
			case 0:
				return colspan;
			default:
				colspan = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置纵跨的行数
		 * 
		 * @param rowspan{number}
		 * @returns {number/core.html.element.viewer.Td}
		 */
		this.rowspan = function() {

			switch (arguments.length) {
			case 0:
				return rowspan;
			default:
				rowspan = arguments[0];
				return this;
			}
		};
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Td HTML
		html.push("<td ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		this.colspan() && html.push("colspan='" + this.colspan() + "' ");
		this.rowspan() && html.push("rowspan='" + this.rowspan() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</td>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Textarea
 * @package	core.html.element.viewer
 * @desc	多行的文本输入控件
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Textarea(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:39:22
 */
core.html.element.viewer.Textarea = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Textarea.superClass.constructor.call(this, id);
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Textarea HTML
		html.push("<textarea ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</textarea>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Tr
 * @package	core.html.element.viewer
 * @desc	表格中的行
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Tr(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:39:37
 */
core.html.element.viewer.Tr = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Tr.superClass.constructor.call(this, id);
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Tr HTML
		html.push("<tr ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</tr>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Keydown
 * @package	core.html.event.document
 * @desc	键盘事件
 * @type	数组<函数>
 * 
 * @date	2016年8月20日 10:12:28
 */
core.html.event.document.Keydown = [];

document.onkeydown = function(event) {

	// 遍历键盘事件
	for (var i = 0, length = core.html.event.document.Keydown.length; i < length; i++) {

		// 获取键盘事件,且判断是否为函数
		var keydown = core.html.event.document.Keydown[i];
		// 执行函数
		typeof (keydown) === "function" && keydown(event);
	}
};
/**
 * @name	Resize
 * @package	core.html.event.window
 * @desc	窗口改变事件
 * @type	数组<函数>
 * 
 * @date	2016年8月20日 10:19:16
 */
core.html.event.window.Resize = [];

window.onresize = function(event) {

	// 遍历窗口改变事件
	for (var i = 0, length = core.html.event.window.Resize.length; i < length; i++) {

		// 获取窗口改变事件,且判断是否为函数
		var resize = core.html.event.window.Resize[i];
		// 执行函数
		typeof (resize) === "function" && resize(event);
	}
};
/**
 * @name	Cookie
 * @package core.html.util
 * @desc	Cookie操作
 * @type	类
 * 
 * @method	static					core.html.util.Cookie getInstance()								获取cookie操作
 * 			Object					get(string key)													获取cookie
 * 			core.html.util.Cookie	set(string key, string value, number expireDays, string path) 	设置cookie
 * 			core.html.util.Cookie	del(string key)													删除cookie
 * 
 * @date 2017年8月8日 09:20:30
 */
core.html.util.Cookie = (function() {

	/**
	 * cookie操作
	 */
	var cookie;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 获取cookie
	 * 
	 * @param key{string}
	 *            cookie键
	 * @returns {object}
	 */
	Constructor.prototype.get = function(key) {

		// 正则表达式匹配cookie值
		var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");

		// 返回cookie值
		if (arr = document.cookie.match(reg)) {

			return (arr[2]);
		} else {

			return null;
		}
	};

	/**
	 * 设置cookie
	 * 
	 * @param key{string}
	 *            cookie键
	 * @param value{string}
	 *            cookie值
	 * @param expireDays{number}
	 *            过期天数
	 * @param path{string}
	 *            权限路径
	 * @returns {core.html.util.Cookie}
	 */
	Constructor.prototype.set = function(key, value, expireDays, path) {

		// cookie字符串
		var cookieStr = [];

		// 添加key,value
		cookieStr.push(key + "=" + value + ";");

		// 判断是否存在过期天数
		if (expireDays) {

			// 当前时间
			var exp = new Date();
			// 设置过期时间
			exp.setTime(exp.getTime() + (expireDays * 24 * 60 * 60 * 1000));
			// 添加过期天数
			cookieStr.push("expires=" + exp.toGMTString() + ";");
		}

		//判断是否存在权限路径
		if (path) {

			// 添加权限路径
			cookieStr.push("path=" + path + ";");
		}

		// 设置cookie
		document.cookie = cookieStr.join(" ");

		return this;
	};

	/**
	 * 删除cookie
	 * 
	 * @param key{string}
	 *            cookie键
	 * @returns {core.html.util.Cookie}
	 */
	Constructor.prototype.del = function(key) {

		// 获取cookie值
		var value = this.get(key);

		// 不为空则设置超时时间
		if (value !== null) {

			// 获取当前时间
			var exp = new Date();
			// 设置当前时间前一毫秒
			exp.setTime(exp.getTime() - 1);
			// 设置cookie
			document.cookie = key + "=" + value + ";expires=" + exp.toGMTString();
		}

		return this;
	};

	return {

		/**
		 * 获取cookie操作
		 * 
		 * @returns {core.html.util.Cookie}
		 */
		getInstance : function() {

			// 不存在,则创建
			if (!cookie) {

				cookie = new Constructor();
			}

			return cookie;
		}
	};
})();
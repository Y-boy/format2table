(function($) {
	$.fn.demo = function(json_data){
		// this 变量指向
		// console.log(this[0]);
		// this[0].innerHTML = JSON.stringify(json_data);
		var containerObj = this[0];
		var tableObj = document.createElement("table");
		tableObj.appendChild(createTH(json_data[0]));
		tableObj.appendChild(createTB(json_data));
		containerObj.appendChild(tableObj);
	};
	var createTH = function(content){
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");
		// console.log(content);
		for(var i in content){
			// console.log(i);				// 对象属性
			// console.log(content[i]);		// 属性值
			tr.appendChild(createTD(i));
		}
		thead.appendChild(tr);
		return thead;
	}
	var createTB = function(content){
		var tbody = document.createElement("tbody");
		content.forEach(function(item){
			var tr = document.createElement("tr");
			for(var i in item){
				// console.log(i + ", " + item[i]);
				tr.appendChild(createTD(item[i]));
			}
			tbody.appendChild(tr);
		});
		return tbody;
	}
	var createTD = function(content){
		var td = document.createElement("td");
		td.innerHTML = content;
		return td;
	}
})(jQuery);
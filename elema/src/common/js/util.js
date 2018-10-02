/**
 * 解析URL参数
 * @example ?id=12345&a=bb
 * return {id:12345, a:bb}
 **/
export function urlParse() {
	let url = window.location.search;
	let reg = /[?&][^?&]+=[^?&]+/g;
	let arr = url.match(reg);
	// ['?id=12345', '&a=bb']
	let o = {};
	if (arr) {
		arr.forEach((item) => {
			let tempArr = item.substring(1).split('=');
			let key = decodeURIComponent(tempArr[0]);
			let value = decodeURIComponent(tempArr[1]);
			o[key] = value;
		});
	}
	return o;
};

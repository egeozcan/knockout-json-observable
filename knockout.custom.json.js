window.ko.observable.fn.json = function (propName) {
	return window.ko.computed({
		read: function() {
			var obj = JSON.parse(this());
			if (!!propName) {
				return obj[propName];
			}
			return obj;
		},
		write: function(val) {
			var obj;
			if (!!propName) {
				obj = JSON.parse(this());
				obj[propName] = window.ko.utils.unwrapObservable(val);
			} else {
				obj = window.ko.utils.unwrapObservable(val);
			}
			this(JSON.stringify(obj));
		},
		owner: this
	});
}
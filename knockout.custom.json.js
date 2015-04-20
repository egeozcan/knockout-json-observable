ko.observable.fn.json = function (propName) {
	return ko.computed({
		read: function() {
			var val = this() || '{}';
			var obj = JSON.parse(val);
			if (!!propName) {
				return obj[propName];
			}
			return obj;
		},
		write: function(val) {
			var obj;
			if (!!propName) {
				obj = JSON.parse(this() || '{}');
				obj[propName] = ko.utils.unwrapObservable(val);
			} else {
				obj = ko.utils.unwrapObservable(val);
			}
			this(JSON.stringify(obj));
		},
		owner: this
	});
}

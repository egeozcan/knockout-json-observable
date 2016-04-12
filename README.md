# knockout-json-observable
A json extension to the observable prototype

If you have an observable, which has a JSON (string) value, this helps you to use it as if it was an object.

The changed values are reflected back to the observable.

## An Example

### The viewmodel

    var myJson = ko.observable('{"foo":"bar","anotherProp":"value","andAnother":1}');
    
    ko.applyBindings({myJson: myJson}, document.getElementById('test'));

### The view

    <div id="test">
    <h2>Property extraction</h2>
    <input type="text" data-bind="value: myJson.json('foo'), valueUpdate: 'input'" />
    <p data-bind="text: myJson.json('foo')"></p>
    <h3>Another one</h3>
    <input type="text" data-bind="value: myJson.json('anotherProp'), valueUpdate: 'input'" />
    <p data-bind="text: myJson.json('anotherProp')"></p>
    <h3>And another</h3>
    <input type="text" data-bind="value: myJson.json('andAnother'), valueUpdate: 'input'" />
    <p data-bind="text: myJson.json('andAnother')"></p>
    <h2>Value is preserved as string and can be updated</h2>
    <input type="text" data-bind="value: myJson" />
    <h2>Formatted value</h2>
    <code><pre data-bind='text: JSON.stringify(JSON.parse(myJson()), null, 2)'></pre></code>
    </div>
    
### Result

[Result](http://i.imgur.com/vxx54jP.png)

Here is a demo: https://jsfiddle.net/2u308bzg/

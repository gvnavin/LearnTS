/// <reference path="react.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        _super.apply(this, arguments);
    }
    MyComponent.prototype.render = function () {
        return <span>{this.props.foo}</span>;
    };
    return MyComponent;
}(React.Component));
<MyComponent foo="bar"/>; // ok
<MyComponent foo={0}/>; // error
//# sourceMappingURL=ReactComponentJSX.js.map
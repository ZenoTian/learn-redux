class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.

    // 当组件装载时，React将使用DOM元素调用ref回调，并在卸载时用null调用它。
    // 使用ref回调只是为类设置一个属性是访问DOM元素的常见模式。
    //回调将在组件被挂载或卸载后立即执行。 当在HTML元素上使用ref属性时，ref回调接收基础DOM元素作为其参数。
    // ref接受一个callback,可以通过回调的参数，获取到真是DOM节点对象。

    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}
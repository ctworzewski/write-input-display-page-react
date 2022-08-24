class App extends React.Component {
  state = {
    value: "",
  };
  inputValue = (e) => {
    console.log(e.target);
    this.setState({
      value: e.target.value,
    });
  };

  clickButton = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <>
        <h1>Aplikacja</h1>
        <input
          value={this.state.value}
          onChange={this.inputValue}
          type="text"
          placeholder="podaj słowo..."
        />
        <button onClick={this.clickButton}>Wyczyść</button>
        <h2>Podane słowo to: {this.state.value}</h2>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".root"));

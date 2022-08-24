function App() {
  const [value, setValue] = React.useState("");

  const inputValue = (e) => {
    setValue(e.target.value);
  };
  const clickButton = () => {
    setValue("");
  };
  return (
    <>
      <h1>Aplikacja</h1>
      <input
        value={value}
        onChange={inputValue}
        type="text"
        placeholder="podaj słowo..."
      />
      <button onClick={clickButton}>Wyczyść</button>
      <h2>Podane słowo to: {value}</h2>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));

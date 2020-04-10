import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";

class App extends React.Component {
  state = {
    currentScreen: "General",
  };

  setScreen = (screenName) => this.setState({ currentScreen: screenName });

  render() {
    return (
      <div className="flexer" style={{ width: "100vw" }}>
        <Sidebar setScreen={this.setScreen} />
        <Form currentScreen={this.state.currentScreen}/>
      </div>
    );
  }
}

export default App;

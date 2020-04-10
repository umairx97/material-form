import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";

class App extends React.Component {
  state = {
    currentScreen: "General",
    screenData: {},
  };

  setScreenData = (screenName, fieldsData) => {
    const { screenData } = this.state;
    screenData[screenName] = { ...screenData[screenName], ...fieldsData };
    this.setState({ screenData });
  };

  setScreen = (screenName) => this.setState({ currentScreen: screenName });

  render() {
    console.log(this.state.screenData);
    return (
      <div className="flexer">
        <Sidebar setScreen={this.setScreen} />
        <div className="main-wrapper">
          <Form
            currentScreen={this.state.currentScreen}
            setScreenData={this.setScreenData}
          />
        </div>
      </div>
    );
  }
}

export default App;

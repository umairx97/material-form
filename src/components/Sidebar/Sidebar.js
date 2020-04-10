import React from "react";

class Sidebar extends React.Component {
  render() {
    const sideBarData = [
      {
        screenName: "General",
        displayName: "General",
      },
      {
        screenName: "Award Amount",
        displayName: "Award Amount",
      },
      {
        screenName: "Eligibility",
        displayName: "Eligibility",
      },
      {
        screenName: "Uses",
        displayName: "Uses",
      },
    ];
    return (
      <div
        className="TB"
        style={{
          width: "20%",
          height: "100vh",
          padding: 20,
          backgroundColor: "lightgrey",
        }}
      >
        <ul>
          {sideBarData.map((item) => (
            <li onClick={() => this.props.setScreen(item.screenName)} style={{ listStyleType: "none", lineHeight: 3 }}>
              {item.displayName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;

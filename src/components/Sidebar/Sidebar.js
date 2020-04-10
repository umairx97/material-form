import React from "react";
import './Sidebar.css'

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
      <div className="sidebar-wrapper">
        <ul>
          {sideBarData.map((item, index) => (
            <li key={index} onClick={() => this.props.setScreen(item.screenName)} style={{ listStyleType: "none", lineHeight: 3 }}>
              {item.displayName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;

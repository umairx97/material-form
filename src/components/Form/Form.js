import React, { Component, Fragment } from "react";
import { TextField, Select, MenuItem, FormControl } from "@material-ui/core";
import { formData } from "../../data";

class Form extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "80%",
          height: "100vh",
          padding: 20,
        }}
      >
        {formData[this.props.currentScreen].fields.map((item) => (
          <Fragment>
            {(item.type === "text" || item.type === "number") && (
              <div style={{ marginTop: "30px" }}>
                <label>{item.label}</label>
                <br />
                <TextField
                  onChange={(event) =>
                    this.props.setScreenData(this.props.currentScreen, {
                      [event.target.name]: event.target.value,
                    })
                  }
                  {...item}
                  label=""
                  id="outlined-basic"
                  variant="outlined"
                />
              </div>
            )}

            {item.type === "dropdown" && (
              <div style={{ marginTop: "30px" }}>
                <label>{item.label}</label>
                <br />
                <Select {...item}>
                  {item.options.map((optionItem) => (
                    <MenuItem value={optionItem}>{optionItem}</MenuItem>
                  ))}
                </Select>
              </div>
            )}

            {item.type === "multi-dropdown" && (
              <div style={{ marginTop: "30px" }}>
                <label>{item.label}</label>
                <br />
                {Object.keys(item.dropdowns).map((nestedDropdown) => (
                  <Fragment>
                    <Select
                      defaultValue={item.dropdowns[nestedDropdown].options[0]}
                    >
                      {item.dropdowns[nestedDropdown].options.map(
                        (optionItem) => (
                          <MenuItem value={optionItem}>{optionItem}</MenuItem>
                        )
                      )}
                    </Select>

                    {/* <select {...item.dropdowns[nestedDropdown]}>
                      {item.dropdowns[nestedDropdown].options.map(
                        (optionItem) => (
                          <option>{optionItem}</option>
                        )
                      )}
                    </select> */}
                  </Fragment>
                ))}
              </div>
            )}

            {item.type === "textarea" && (
              <div style={{ marginTop: "30px" }}>
                <label>{item.label}</label>
                <br />

                <TextField
                  {...item}
                  label=""
                  id="outlined-basic"
                  variant="outlined"
                />
                {/* <textarea {...item}></textarea> */}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    );
  }
}

export default Form;

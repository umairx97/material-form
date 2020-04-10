import React, { Component, Fragment } from "react";
import { TextField, Select, MenuItem, Checkbox, FormControlLabel } from "@material-ui/core";
import { formData } from "../../data";
import './Form.css'


class Form extends Component {
  render() {
    return (
      <div className="form-wrapper">
        {formData[this.props.currentScreen].fields.map((item, index) => (
          <Fragment key={index}>
            {(item.type === "text" || item.type === "number") && (
              <div className="field-container">
                <label>{item.label}</label>
                <br />
                <TextField
                  onChange={(event) =>
                    this.props.setScreenData(this.props.currentScreen, {
                      [event.target.name]: event.target.value,
                    })
                  }
                  {...item}
                  style={{ width: '100%', marginTop:'5px' }}
                  label=""
                  id="outlined-basic"
                  variant="outlined"
                />
              </div>
            )}

            {item.type === "dropdown" && (
              <div className="field-container">
                <label>{item.label}</label>
                <br />
                <Select {...item} style={{ width: '30%', marginTop:'5px' }}
                  onChange={(event) =>
                    this.props.setScreenData(this.props.currentScreen, {
                      [event.target.name]: event.target.value,
                    })
                  }
                >
                  {item.options.map((optionItem, index) => (
                    <MenuItem key={index} value={optionItem}>{optionItem}</MenuItem>
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
                      defaultValue={item.dropdowns[nestedDropdown].options[0]}>
                      {item.dropdowns[nestedDropdown].options.map(
                        (optionItem) => (
                          <MenuItem value={optionItem}>{optionItem}</MenuItem>
                        )
                      )}
                    </Select>
                  </Fragment>
                ))}
              </div>
            )}

            {item.type === "textarea" && (
              <div className="field-container">
                <label>{item.label}</label>
                <br />
                <TextField
                  {...item}
                  label=""
                  id="outlined-basic"
                  variant="outlined"
                  style={{ width: '100%', marginTop:'5px' }}
                  onChange={(event) =>
                    this.props.setScreenData(this.props.currentScreen, {
                      [event.target.name]: event.target.value,
                    })
                  }
                />
              </div>
            )}


            {item.type === "checkbox" && (
              <div>
                <br />

                <FormControlLabel
                  control={
                    <Checkbox
                      {...item}
                      color="primary"
                      onChange={(event) =>
                        this.props.setScreenData(this.props.currentScreen, {
                          [event.target.name]: event.target.checked,
                        })
                      }
                    />
                  }
                  label={item.label}
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    );
  }
}

export default Form;

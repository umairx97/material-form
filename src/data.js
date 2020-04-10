import React from "react";

import { InputAdornment } from "@material-ui/core";
const now = new Date().getUTCFullYear();
const years = Array(now - (now - 20))
  .fill("")
  .map((v, idx) => now - idx);

export const formData = {
  General: {
    fields: [
      {
        type: "text",
        name: "Name",
        label: "Name",
        required: true,
        placeholder: "Enter your name",
      },
      {
        type: "text",
        name: "Display Name",
        label: "Display Name",
        required: false,
        placeholder: "Enter your Display Name",
      },

      {
        type: "dropdown",
        name: "Type",
        options: ["Grant", "Loan", "Relief", "Other"],
        defaultValue: "Grant",
        label: "Type",
        required: false,
        placeholder: "Enter your Display Name",
      },
      {
        type: "dropdown",
        name: "Scope",
        options: ["Federal", "State", "Local", "Other"],
        defaultValue: "Local",
        label: "Scope",
        required: false,
        placeholder: "Enter your Display Name",
      },
      {
        type: "text",
        name: "Provider",
        label: "Provider",
        minLength: 0,
        required: false,
        placeholder: "Enter your Provider",
        inputProps: {
          maxLength: 100,
        }
      },
      {
        type: "textarea",
        name: "Description",
        label: "Description",
        minLength: 0,
        multiline: true,
        cols: 32,
        rows: 10,
        required: false,
        placeholder: "Enter your Description",
        inputProps: {
          maxLength: 1000,
        }
      },
      {
        type: "text",
        name: "Resource URL",
        label: "Resource URL",
        required: false,
        // placeholder: "https://",
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">https://</InputAdornment>
          ),
        },
      },
      {
        type: "text",
        name: "Application URL",
        label: "Application URL",
        required: false,
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">https://</InputAdornment>
          ),
        },
      },
      {
        type: "multi-dropdown",
        dropdowns: {
          day: {
            options: ["Day", ...Array.from(Array(30).keys())],
            required: false,
            defaultValue: "Day",
            placeholder: "Enter your Display Name",
          },

          month: {
            options: [
              "Month",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            defaultValue: "Month",
            required: false,
            placeholder: "Enter your Display Name",
          },

          year: {
            options: ["Year", ...years],
            defaultValue: "Year",
            required: false,
            placeholder: "Enter your Display Name",
          },
        },
        label: "Issue Date",
        required: false,
        placeholder: "https://",
      },
      {
        type: "multi-dropdown",
        dropdowns: {
          day: {
            options: ["Day", ...Array.from(Array(30).keys())],
            defaultValue: "Day",
            required: false,
            placeholder: "Enter your Display Name",
          },

          month: {
            options: [
              "Month",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            defaultValue: "Month",
            required: false,
            placeholder: "Enter your Display Name",
          },

          year: {
            options: ["Year", ...years],
            defaultValue: "Year",
            required: false,
            placeholder: "Enter your Display Name",
          },
        },
        label: "Expiry Date",
        required: false,
        name: 'Expiry Date'
      },
      {
        type: "textarea",
        label: "Loan Notes",
        name: "Loan Notes",
        minLength: 0,
        maxLength: 1000,
        multiline: true,
        cols: 32,
        rows: 10,
        required: false,
        placeholder: "Enter your Description",
      },
      {
        type: "number",
        name: "Time to make decision",
        label: "Time to make decision",
        required: false,
        InputProps: {
          endAdornment: (
            <InputAdornment position="end"> % </InputAdornment>
          ),
        },
      },
    ],
  },

  "Award Amount": {
    fields: [
      {
        type: "text",
        name: "Minumum amount",
        label: "Minumum amount",
        required: false,
        fieldType: 'Grant',
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          ),
        },
      },
      {
        type: "text",
        name: "Maximum amount",
        label: "Maximum amount",
        required: false,
        fieldType: 'Grant',
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          ),
        },
      },
      {
        type: "text",
        name: "Text Liability Amount",
        label: "Text Liability Amount",
        required: false,
        fieldType: 'Relief',
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          ),
        },
      },
      {
        type: "text",
        name: "Loan Interest",
        label: "Loan Interest",
        required: false,
        fieldType: 'Loan',
        InputProps: {
          endAdornment: (
            <InputAdornment position="start">%</InputAdornment>
          ),
        },
      },
      {
        type: "text",
        name: "Long term",
        label: "Long Term (in years)",
        required: false,
        fieldType: 'Loan',
      },
      {
        type: "textarea",
        label: "Loan Notes",
        name: 'Amount Loan Notes',
        minLength: 0,
        maxLength: 1000,
        multiline: true,
        cols: 32,
        rows: 10,
        required: false,
        fieldType: 'Loan',
        inputProps: {
          maxLength: 1000,
        }
      },
    ],
  },
  "Eligibility": {
    fields: [
      {
        type: "text",
        name: "Industry",
        label: "Industry",
        required: false,
      },
      {
        type: "dropdown",
        name: "Organization Type",
        options: ["Business", "Non-profit"],
        defaultValue: "Non-profit",
        label: "Type",
        required: false,
      },
      {
        type: "number",
        name: "Minimum size",
        label: "Minimum size",
        required: false,
        defaultValue: 0
      },
      {
        type: "number",
        name: "Maximum size",
        label: "Maximum size",
        required: false,
      },
      {
        type: "text",
        name: "Minimum revenue",
        label: "Minimum revenue",
        required: false,
        defaultValue: 0,
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          ),
        },
      },
      {
        type: "text",
        name: "Maximum revenue",
        label: "Maximum revenue",
        required: false,
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          ),
        },
      },
      {
        type: "number",
        name: "Revenue year",
        label: "Revenue year",
        required: false,
        defaultValue:2019,
      },
      {
        type: "textarea",
        label: "Additional criteria",
        name: "Additional criteria",
        minLength: 0,
        maxLength: 1000,
        multiline: true,
        cols: 32,
        rows: 10,
        required: false,
        inputProps: {
          maxLength: 1000,
        }
      },
    ],
  },
  "Uses": {
    fields: [
      {
        type: "checkbox",
        name: "Rent",
        label: "Rent",
        required: false,
        isChecked: false
      },
      {
        type: "checkbox",
        name: "Payroll",
        label: "Payroll",
        required: false,
        isChecked: false

      },
      {
        type: "checkbox",
        name: "AccountsPayble",
        label: "AccountsPayble",
        required: false,
        isChecked: false

      },
      {
        type: "checkbox",
        name: "OtherFixedCosts",
        label: "OtherFixedCosts",
        required: false,
        isChecked: false

      },
      {
        type: "checkbox",
        name: "JobTraining",
        label: "JobTraining",
        required: false,
        isChecked: false

      },
      {
        type: "checkbox",
        name: "Technology",
        label: "Technology",
        required: false,
        isChecked: false
      },

      {
        type: "checkbox",
        name: "EmployeeRetention",
        label: "EmployeeRetention",
        required: false,
        isChecked: false
      },
    ],
  },
};

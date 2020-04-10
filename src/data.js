import React from 'react'

import { InputAdornment } from '@material-ui/core'
const now = new Date().getUTCFullYear();
const years = Array(now - (now - 20))
  .fill("")
  .map((v, idx) => now - idx);

export const formData = {
  General: {
    fields: [
      {
        type: "text",
        label: "Name",
        required: true,
        placeholder: "Enter your name",
      },
      {
        type: "text",
        label: "Display Name",
        required: false,
        placeholder: "Enter your Display Name",
      },

      {
        type: "dropdown",
        options: ["Grant", "Loan", "Relief", "Other"],
        defaultValue: "Grant",
        label: "Type",
        required: false,
        placeholder: "Enter your Display Name",
      },
      {
        type: "dropdown",
        options: ["Federal", "State", "Local", "Other"],
        defaultValue: "Local",
        label: "Scope",
        required: false,
        placeholder: "Enter your Display Name",
      },
      {
        type: "text",
        label: "Provider",
        minLength: 0,
        maxLength: 100,
        required: false,
        placeholder: "Enter your Provider",
      },
      {
        type: "textarea",
        label: "Description",
        minLength: 0,
        maxLength: 1000,
        multiline: true,
        cols: 32,
        rows: 10,
        required: false,
        placeholder: "Enter your Description",
      },
      {
        type: "text",
        label: "Resource URL",
        required: false,
        // placeholder: "https://",
        InputProps: {
          startAdornment: <InputAdornment position="start">https://</InputAdornment>,
        },
      },
      {
        type: "text",
        label: "Application URL",
        required: false,
        // placeholder: "https://",
        InputProps: {
          startAdornment: <InputAdornment position="start">https://</InputAdornment>,
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
        placeholder: "https://",
      },
      {
        type: "textarea",
        label: "Loan Notes",
        minLength: 0,
        maxLength: 1000,
        multiline: true,
        cols: 32,
        rows: 10,
        required: false,
        placeholder: "Enter your Description",
      },
    ],
  },

  "Award Amount": {
    fields: [
      {
        type: "text",
        label: "Name",
        required: true,
        placeholder: "Enter your name",
      },
      {
        type: "text",
        label: "Display Name",
        required: false,
        placeholder: "Enter your Display Name",
      },
      {
        type: "dropdown",
        label: "Type",
        options: ["Grant", "Loan", "Relief", "Other"],
        defaultValue: "Grant",
        required: true,
        placeholder: "Enter your Display Name",
      },
      {
        type: "dropdown",
        options: ["Federal", "State", "Local", "Other"],
        defaultValue: "Local",
        label: "Scope",
        required: false,
        placeholder: "Enter your Display Name",
      },
      {
        type: "text",
        label: "Provider",
        minLength: 0,
        maxLength: 100,
        required: false,
        placeholder: "Enter your Provider",
      },
    ],
  },
};

import React from 'react';
import { useState } from 'react'
import { readString } from 'react-papaparse';
import siteListCSV from './MCAN_PAST_EXECUTIVES.csv';
import './Original.css'

function Original() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const papaConfig = {
    header: true,
    skipEmptyLines: true,
    complete: (results, file) => {
      console.log('Parsing complete:', results, file);
      const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });


         // Parsed Data Response in array format
         setParsedData(results.data);

         // Filtered Column Names
         setTableRows(rowsArray[0]);
 
         // Filtered Values
         setValues(valuesArray)

    },
    download: true,
    error: (error, file) => {
      console.log('Error while parsing:', error, file);
    },
  };
  readString(siteListCSV, papaConfig);
  return (
    <div className='container mytable'>
    {/* Table */}
    <table className='table'>
    <thead>
      <tr className='table-success'>
        {tableRows.map((rows, index) => {
          return <th className='table-info' key={index}>{rows}</th>;
        })}
      </tr>
    </thead>
    <tbody>
      {values.map((value, index) => {
        return (
          <tr className='table-danger' key={index}>
            {value.map((val, i) => {
              return <td key={i}>{val}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
  </div>
  );
}

export default Original;
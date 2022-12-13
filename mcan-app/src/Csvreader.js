import React from 'react';
import { useState } from 'react'
import { readString } from 'react-papaparse';
import siteListCSV from './MCAN_PAST_EXECUTIVES.csv';


function Csvreader() {
     // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const papaConfig = {
    complete: (results) => {
      console.log('Parsing complete:', results);
    //   header: true,
    //   skipEmptyLines: true,
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    download: true,
    error: (error) => {
      console.log('Error while parsing:', error);
    },
  };
  readString(siteListCSV, papaConfig);
  
   
  return (
    <div className='myTable'>
        <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
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

export default Csvreader
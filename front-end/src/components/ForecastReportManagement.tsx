import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ForecastReport } from '../types/forecastReport';
import { CityInfo } from '../types/cityInfo';

function ForecastReportManagement() {
    const [cities, setCityIds] = useState<CityInfo[]>([]);
    const [selectedCity,setSelectedCityId]=useState<string | null>(null);
    const [reports, setReports] = useState<ForecastReport[]>([]);

  
    useEffect(() => {
        fetchCities();
      }, []);
    
    function fetchCities(){
        const apiUrl = "http://localhost:8080/api/report/";
        fetch(apiUrl)
        .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(`Failed to add report. Status: ${response.status}`);
            }
          })
          .then((data: CityInfo[]) => {
            // Now, `data` contains an array of forecastReport objects
            setCityIds(data);
            console.log(data);
          })
          .catch((error) => {
            // Handle any errors that occur during the request
        });
    }

    function fetchDataByCityId(cityId:string){
        const apiUrl = `http://localhost:8080/api/report/${cityId}`;
        fetch(apiUrl)
        .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(`Failed to add report. Status: ${response.status}`);
            }
          })
          .then((data: ForecastReport[]) => { 
            setReports(data)
          })
          .catch((error) => {
            // Handle any errors that occur during the request
        });
    }

    const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedCityId(selectedValue);
    
        // Call your function with the selected value here
        if (selectedValue) {
          if(selectedValue!="..."){
            fetchDataByCityId(selectedValue);
          }
        }
      };

      const sendToDiscord = async(reportId:string)=>{
        const discordUrl="https://discord.com/api/webhooks/1171737816342994974/svuzrRLciZ5EtiqJVniUviG9vj8M49O5HFaX2Oopubtyqw0ScUVKhB7whrKrXax6o_LJ"
       const selectedReport= reports.find((report) => report.id === reportId);

        const reportData = {
            "tts":false,
            "color":"white",
            "embeds":[{
            "title":"Forecast Report",
            "description":
                "cityName: "+selectedReport?.cityName +"\n " +
                "tempreture : "+selectedReport?.temp+"\n " +
                "humidity : "+selectedReport?.humidity+"\n " +
                "Weather: "+selectedReport?.weatherDescription+"\n " +
                "Report: "+selectedReport?.report
            }]
        }; 
          const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(reportData),
          };
         await fetch(discordUrl, requestOptions)
          .then((response) => {
            return response;
          }) 
          .catch((error) => {
            // Handle any errors that occur during the request
        });
    }

    function deleteReport(reportId:string){

    }

  return (
    < >
    <label>Select a city:</label>
      <select onChange={handleCityChange} value={selectedCity || ""}>
        <option key="0" value="..."></option>
        {cities.map((city) => ( 
          <option key={city.cityId} value={city.cityId}>
            {city.cityName}
          </option>
        ))}
      </select>
      <table>
        {reports.map((report)=>(
            <tr>
                <td>{report.temp}</td>
                <td>{report.realFeel}</td>
                <td>{report.humidity}</td>
                <td>{report.report}</td>
                <td> 
                    <button onClick={() => sendToDiscord(report.id)} id={report.id} 
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Send to discord</button>
                </td>
                <td> 
 
                    <button onClick={() => deleteReport(report.id)} id={report.id} 
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </td>
            </tr>
        ))}
      </table>
    </>
  )
        }

export default ForecastReportManagement
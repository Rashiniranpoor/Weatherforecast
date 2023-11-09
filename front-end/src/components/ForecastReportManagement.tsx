import { ChangeEvent, useEffect, useState } from 'react'
import { ForecastReport } from '../types/forecastReport';
import { CityInfo } from '../types/cityInfo';
import style from "./ForecastReport.module.css"

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
        setSelectedCityId(cityId);
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
          .then((response) => response) 
          .catch((error) => {
            // Handle any errors that occur during the request
        });
    }

    function deleteReport(reportId:string){
        const apiUrl = `http://localhost:8080/api/report/${reportId}`;
        const requestOptions: RequestInit = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
          };
        fetch(apiUrl, requestOptions)
        .then((response) => {
          return response;
        }) 
        .catch((error) => {
          // Handle any errors that occur during the request
      });
    }

  return (
    <div className={style.container}>
    <div className={style.div_dropdown}>
      <label className="flex-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select a city:</label>
      <select
          className="flex-1 bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleCityChange} value={selectedCity || ""}>
        <option key="0" value="..."></option>
        {cities.map((city) => ( 
          <option key={city.cityId} value={city.cityId}>
            {city.cityName}
          </option>
        ))}
      </select>
      </div>
      <br/>
      <table className="w-full text-sm text-left text-black ">
      <thead className="border text-xs text-black uppercase bg-slate-300 dark:bg-slate-300 dark:text-black">
      <tr> 
                <th scope="col" className="border px-6 py-3">
                Report
                </th>
                <th scope="col" className="border px-6 py-3">
                Action
                </th>
            </tr>
        {reports.map((report)=>( 
              <tr> 
                <td className="border px-6 py-4">{report.report}</td>
                <td className="border px-6 py-4">
                <button onClick={() => sendToDiscord(report.id)} id={report.id}
                  className={style.discord}></button>
              
                  <button onClick={() => deleteReport(report.id)} id={report.id}
                    className={style.delete}> </button>
                </td>
            </tr> 
        ))}
        </thead>
      </table>
    </div>
  )
        }

export default ForecastReportManagement
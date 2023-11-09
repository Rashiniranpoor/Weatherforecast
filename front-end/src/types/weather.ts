
export type WeatherData = {
    cod: string;
    message: number;
    cnt: number;
    list: Array<{
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
      };
      weather: Array<{
        description: string;
        icon: string;
      }>;
      dt_txt: string;
    }>;
    city: {
      id: number;
      name: string;
    };
  };
  
   
  
  
  
  
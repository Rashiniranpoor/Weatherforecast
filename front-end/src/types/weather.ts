 /*export type WeatherData = {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherItem[];
    city:{
        id:string;
        name:string;
    }
};

export type WeatherItem = {
    main: {
        temp: number;
        humidity: number;
        feels_like:string;
    };
    weather: WeatherCondition[];
    dt_txt: number;
};

export type WeatherCondition = {
    description: string;
    icon: string;
};
*/

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
  
   
  
  
  
  
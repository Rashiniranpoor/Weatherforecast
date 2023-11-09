import React, { useEffect, useRef, useState } from 'react'
import {  WeatherData } from '../types/weather';

function WeatherForecast() {
    const jsonData = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1699455600,
                "main": {
                    "temp": 55.27,
                    "feels_like": 54.18,
                    "temp_min": 55.27,
                    "temp_max": 55.63,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 78,
                    "temp_kf": -0.2
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 16.2,
                    "deg": 197,
                    "gust": 31.54
                },
                "visibility": 10000,
                "pop": 0.19,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-08 15:00:00"
            },
            {
                "dt": 1699466400,
                "main": {
                    "temp": 55.2,
                    "feels_like": 53.94,
                    "temp_min": 55.04,
                    "temp_max": 55.2,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 75,
                    "temp_kf": 0.09
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 16.46,
                    "deg": 197,
                    "gust": 33.64
                },
                "visibility": 10000,
                "pop": 0.16,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-08 18:00:00"
            },
            {
                "dt": 1699477200,
                "main": {
                    "temp": 54.32,
                    "feels_like": 52.97,
                    "temp_min": 53.83,
                    "temp_max": 54.32,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1003,
                    "humidity": 75,
                    "temp_kf": 0.27
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 16.4,
                    "deg": 199,
                    "gust": 36.66
                },
                "visibility": 10000,
                "pop": 0.54,
                "rain": {
                    "3h": 0.28
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-08 21:00:00"
            },
            {
                "dt": 1699488000,
                "main": {
                    "temp": 52.56,
                    "feels_like": 51.46,
                    "temp_min": 52.56,
                    "temp_max": 52.56,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1000,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 16.44,
                    "deg": 199,
                    "gust": 34.83
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.43
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 00:00:00"
            },
            {
                "dt": 1699498800,
                "main": {
                    "temp": 51.49,
                    "feels_like": 50.34,
                    "temp_min": 51.49,
                    "temp_max": 51.49,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1000,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 12.55,
                    "deg": 282,
                    "gust": 23.24
                },
                "visibility": 10000,
                "pop": 0.76,
                "rain": {
                    "3h": 0.56
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 03:00:00"
            },
            {
                "dt": 1699509600,
                "main": {
                    "temp": 49.59,
                    "feels_like": 45.61,
                    "temp_min": 49.59,
                    "temp_max": 49.59,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1002,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.78,
                    "deg": 235,
                    "gust": 21.41
                },
                "visibility": 10000,
                "pop": 0.7,
                "rain": {
                    "3h": 0.41
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 06:00:00"
            },
            {
                "dt": 1699520400,
                "main": {
                    "temp": 50.13,
                    "feels_like": 48.27,
                    "temp_min": 50.13,
                    "temp_max": 50.13,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1003,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 11.92,
                    "deg": 210,
                    "gust": 27.04
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-09 09:00:00"
            },
            {
                "dt": 1699531200,
                "main": {
                    "temp": 55.2,
                    "feels_like": 53.67,
                    "temp_min": 55.2,
                    "temp_max": 55.2,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1000,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 15.39,
                    "deg": 215,
                    "gust": 30.69
                },
                "visibility": 10000,
                "pop": 0.29,
                "rain": {
                    "3h": 0.25
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-09 12:00:00"
            },
            {
                "dt": 1699542000,
                "main": {
                    "temp": 53.11,
                    "feels_like": 51.46,
                    "temp_min": 53.11,
                    "temp_max": 53.11,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 999,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 13.87,
                    "deg": 241,
                    "gust": 28.45
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.73
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-09 15:00:00"
            },
            {
                "dt": 1699552800,
                "main": {
                    "temp": 49.17,
                    "feels_like": 44.73,
                    "temp_min": 49.17,
                    "temp_max": 49.17,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1000,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 10.85,
                    "deg": 237,
                    "gust": 21.61
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.31
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 18:00:00"
            },
            {
                "dt": 1699563600,
                "main": {
                    "temp": 47.16,
                    "feels_like": 42.58,
                    "temp_min": 47.16,
                    "temp_max": 47.16,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 999,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 9.82,
                    "deg": 229,
                    "gust": 22.53
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 21:00:00"
            },
            {
                "dt": 1699574400,
                "main": {
                    "temp": 45.37,
                    "feels_like": 40.44,
                    "temp_min": 45.37,
                    "temp_max": 45.37,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 999,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 9.64,
                    "deg": 231,
                    "gust": 21.77
                },
                "visibility": 10000,
                "pop": 0.03,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-10 00:00:00"
            },
            {
                "dt": 1699585200,
                "main": {
                    "temp": 44.58,
                    "feels_like": 38.8,
                    "temp_min": 44.58,
                    "temp_max": 44.58,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 999,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 21
                },
                "wind": {
                    "speed": 11.43,
                    "deg": 221,
                    "gust": 26.89
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-10 03:00:00"
            },
            {
                "dt": 1699596000,
                "main": {
                    "temp": 44.44,
                    "feels_like": 37.99,
                    "temp_min": 44.44,
                    "temp_max": 44.44,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 998,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 18
                },
                "wind": {
                    "speed": 13.35,
                    "deg": 221,
                    "gust": 31.7
                },
                "visibility": 10000,
                "pop": 0.19,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-10 06:00:00"
            },
            {
                "dt": 1699606800,
                "main": {
                    "temp": 48.09,
                    "feels_like": 42.04,
                    "temp_min": 48.09,
                    "temp_max": 48.09,
                    "pressure": 1002,
                    "sea_level": 1002,
                    "grnd_level": 997,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 15.64,
                    "deg": 223,
                    "gust": 30.8
                },
                "visibility": 10000,
                "pop": 0.48,
                "rain": {
                    "3h": 0.68
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-10 09:00:00"
            },
            {
                "dt": 1699617600,
                "main": {
                    "temp": 51.76,
                    "feels_like": 49.78,
                    "temp_min": 51.76,
                    "temp_max": 51.76,
                    "pressure": 1000,
                    "sea_level": 1000,
                    "grnd_level": 995,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 16.75,
                    "deg": 227,
                    "gust": 32.97
                },
                "visibility": 10000,
                "pop": 0.47,
                "rain": {
                    "3h": 0.14
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-10 12:00:00"
            },
            {
                "dt": 1699628400,
                "main": {
                    "temp": 51.49,
                    "feels_like": 49.53,
                    "temp_min": 51.49,
                    "temp_max": 51.49,
                    "pressure": 997,
                    "sea_level": 997,
                    "grnd_level": 993,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 19.44,
                    "deg": 242,
                    "gust": 36.53
                },
                "visibility": 10000,
                "pop": 0.96,
                "rain": {
                    "3h": 0.43
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-10 15:00:00"
            },
            {
                "dt": 1699639200,
                "main": {
                    "temp": 49.41,
                    "feels_like": 43.86,
                    "temp_min": 49.41,
                    "temp_max": 49.41,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 997,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 15.05,
                    "deg": 300,
                    "gust": 31.25
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.06
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-10 18:00:00"
            },
            {
                "dt": 1699650000,
                "main": {
                    "temp": 46.38,
                    "feels_like": 41.29,
                    "temp_min": 46.38,
                    "temp_max": 46.38,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1001,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 50
                },
                "wind": {
                    "speed": 10.76,
                    "deg": 289,
                    "gust": 26.91
                },
                "visibility": 10000,
                "pop": 0.27,
                "rain": {
                    "3h": 0.14
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-10 21:00:00"
            },
            {
                "dt": 1699660800,
                "main": {
                    "temp": 45.43,
                    "feels_like": 40.48,
                    "temp_min": 45.43,
                    "temp_max": 45.43,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1004,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 39
                },
                "wind": {
                    "speed": 9.73,
                    "deg": 260,
                    "gust": 25.52
                },
                "visibility": 10000,
                "pop": 0.03,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-11 00:00:00"
            },
            {
                "dt": 1699671600,
                "main": {
                    "temp": 44.94,
                    "feels_like": 39.7,
                    "temp_min": 44.94,
                    "temp_max": 44.94,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1004,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 10.18,
                    "deg": 259,
                    "gust": 26.69
                },
                "visibility": 10000,
                "pop": 0.01,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-11 03:00:00"
            },
            {
                "dt": 1699682400,
                "main": {
                    "temp": 44.35,
                    "feels_like": 39.42,
                    "temp_min": 44.35,
                    "temp_max": 44.35,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1006,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 45
                },
                "wind": {
                    "speed": 9.04,
                    "deg": 257,
                    "gust": 23.15
                },
                "visibility": 10000,
                "pop": 0.33,
                "rain": {
                    "3h": 0.34
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-11 06:00:00"
            },
            {
                "dt": 1699693200,
                "main": {
                    "temp": 46.36,
                    "feels_like": 41.95,
                    "temp_min": 46.36,
                    "temp_max": 46.36,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1007,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 8.93,
                    "deg": 251,
                    "gust": 19.01
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-11 09:00:00"
            },
            {
                "dt": 1699704000,
                "main": {
                    "temp": 51.67,
                    "feels_like": 49.6,
                    "temp_min": 51.67,
                    "temp_max": 51.67,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 7.72,
                    "deg": 268,
                    "gust": 13.38
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-11 12:00:00"
            },
            {
                "dt": 1699714800,
                "main": {
                    "temp": 52.5,
                    "feels_like": 50.47,
                    "temp_min": 52.5,
                    "temp_max": 52.5,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1007,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 5.82,
                    "deg": 258,
                    "gust": 11.05
                },
                "visibility": 10000,
                "pop": 0.2,
                "rain": {
                    "3h": 0.11
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-11 15:00:00"
            },
            {
                "dt": 1699725600,
                "main": {
                    "temp": 49.84,
                    "feels_like": 47.98,
                    "temp_min": 49.84,
                    "temp_max": 49.84,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1007,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 78
                },
                "wind": {
                    "speed": 5.08,
                    "deg": 245,
                    "gust": 11.18
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-11 18:00:00"
            },
            {
                "dt": 1699736400,
                "main": {
                    "temp": 47.79,
                    "feels_like": 46.65,
                    "temp_min": 47.79,
                    "temp_max": 47.79,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.58,
                    "deg": 213,
                    "gust": 7.92
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-11 21:00:00"
            },
            {
                "dt": 1699747200,
                "main": {
                    "temp": 46.96,
                    "feels_like": 45.41,
                    "temp_min": 46.96,
                    "temp_max": 46.96,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1004,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.94,
                    "deg": 175,
                    "gust": 9.98
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-12 00:00:00"
            },
            {
                "dt": 1699758000,
                "main": {
                    "temp": 46.51,
                    "feels_like": 42.91,
                    "temp_min": 46.51,
                    "temp_max": 46.51,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1002,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.16,
                    "deg": 187,
                    "gust": 17.45
                },
                "visibility": 10000,
                "pop": 0.15,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-12 03:00:00"
            },
            {
                "dt": 1699768800,
                "main": {
                    "temp": 43.97,
                    "feels_like": 38.8,
                    "temp_min": 43.97,
                    "temp_max": 43.97,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1001,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.4,
                    "deg": 169,
                    "gust": 18.39
                },
                "visibility": 7361,
                "pop": 0.66,
                "rain": {
                    "3h": 1.23
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-12 06:00:00"
            },
            {
                "dt": 1699779600,
                "main": {
                    "temp": 43.75,
                    "feels_like": 37.78,
                    "temp_min": 43.75,
                    "temp_max": 43.75,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 999,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 11.41,
                    "deg": 157,
                    "gust": 22.41
                },
                "visibility": 10000,
                "pop": 0.94,
                "rain": {
                    "3h": 3.48
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-12 09:00:00"
            },
            {
                "dt": 1699790400,
                "main": {
                    "temp": 47.14,
                    "feels_like": 43.36,
                    "temp_min": 47.14,
                    "temp_max": 47.14,
                    "pressure": 1001,
                    "sea_level": 1001,
                    "grnd_level": 996,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.81,
                    "deg": 181,
                    "gust": 20.33
                },
                "visibility": 10000,
                "pop": 0.91,
                "rain": {
                    "3h": 0.18
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-12 12:00:00"
            },
            {
                "dt": 1699801200,
                "main": {
                    "temp": 51.03,
                    "feels_like": 50.34,
                    "temp_min": 51.03,
                    "temp_max": 51.03,
                    "pressure": 998,
                    "sea_level": 998,
                    "grnd_level": 993,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.11,
                    "deg": 225,
                    "gust": 22.75
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 3.73
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-12 15:00:00"
            },
            {
                "dt": 1699812000,
                "main": {
                    "temp": 53.01,
                    "feels_like": 51.73,
                    "temp_min": 53.01,
                    "temp_max": 53.01,
                    "pressure": 999,
                    "sea_level": 999,
                    "grnd_level": 995,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 15.03,
                    "deg": 273,
                    "gust": 30.96
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.97
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-12 18:00:00"
            },
            {
                "dt": 1699822800,
                "main": {
                    "temp": 53.2,
                    "feels_like": 51.98,
                    "temp_min": 53.2,
                    "temp_max": 53.2,
                    "pressure": 1003,
                    "sea_level": 1003,
                    "grnd_level": 998,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 14.45,
                    "deg": 270,
                    "gust": 29.71
                },
                "visibility": 10000,
                "pop": 0.36,
                "rain": {
                    "3h": 0.18
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-12 21:00:00"
            },
            {
                "dt": 1699833600,
                "main": {
                    "temp": 50.79,
                    "feels_like": 49.48,
                    "temp_min": 50.79,
                    "temp_max": 50.79,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1001,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 9.4,
                    "deg": 305,
                    "gust": 22.7
                },
                "visibility": 10000,
                "pop": 0.4,
                "rain": {
                    "3h": 0.23
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-13 00:00:00"
            },
            {
                "dt": 1699844400,
                "main": {
                    "temp": 48.52,
                    "feels_like": 46.36,
                    "temp_min": 48.52,
                    "temp_max": 48.52,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1003,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.19,
                    "deg": 329,
                    "gust": 10.78
                },
                "visibility": 10000,
                "pop": 0.29,
                "rain": {
                    "3h": 0.23
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-13 03:00:00"
            },
            {
                "dt": 1699855200,
                "main": {
                    "temp": 47.44,
                    "feels_like": 47.44,
                    "temp_min": 47.44,
                    "temp_max": 47.44,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.77,
                    "deg": 10,
                    "gust": 3.71
                },
                "visibility": 10000,
                "pop": 0.32,
                "rain": {
                    "3h": 0.29
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-13 06:00:00"
            },
            {
                "dt": 1699866000,
                "main": {
                    "temp": 47.8,
                    "feels_like": 47.8,
                    "temp_min": 47.8,
                    "temp_max": 47.8,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.66,
                    "deg": 116,
                    "gust": 4.88
                },
                "visibility": 10000,
                "pop": 0.25,
                "rain": {
                    "3h": 0.15
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-13 09:00:00"
            },
            {
                "dt": 1699876800,
                "main": {
                    "temp": 50.72,
                    "feels_like": 49.44,
                    "temp_min": 50.72,
                    "temp_max": 50.72,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.76,
                    "deg": 168,
                    "gust": 10.45
                },
                "visibility": 10000,
                "pop": 0.44,
                "rain": {
                    "3h": 0.38
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-13 12:00:00"
            }
        ],
        "city": {
            "id": 2988507,
            "name": "Paris",
            "coord": {
                "lat": 48.8534,
                "lon": 2.3488
            },
            "country": "FR",
            "population": 2138551,
            "timezone": 3600,
            "sunrise": 1699426074,
            "sunset": 1699460447
        }
    };
    
    const cityRef =  useRef<HTMLInputElement>({} as HTMLInputElement);

    const [weatherInfo, setWeatherInfo] = useState<WeatherData | null>(null);
 
    useEffect(()=>{
        //mapDataoObject();
    },[])
    
    function fetchData(event: React.FormEvent<HTMLFormElement>){
        try {
            event.preventDefault();
            const cityName = cityRef.current.value;
            const data: WeatherData = jsonData; 
            /* fetch("api.openweathermap.org/data/2.5/forecast?q="+{cityName}+"&appid=4269549567f33d38fae72c460bfcb1b4&units=imperial")
            .then(response =>  response.json())
            .then((res :[WeatherData]) => setWeatherInfo(res[0]))
            */
            
            if (data.list.length != null) { 
                setWeatherInfo(data);  
                
            } else { 
                return (
                  <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                     No data available in the "list" array.
                  </p> )
            }
        } catch (error) {
            console.error('Error parsing JSON data:', error);
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }

    function handleSave(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const apiUrl = 'http://localhost:8080/api/report/add';
        const reportData = {
            temp: weatherInfo?.list[0].main.temp,
            humidity:  weatherInfo?.list[0].main.humidity,
            weatherDescription: weatherInfo?.list[0].weather[0].description,
            realFeel: weatherInfo?.list[0].main.feels_like,
            cityId: weatherInfo?.city.id,
            cityName: weatherInfo?.city.name,
            weatherStatusDatetime: weatherInfo?.list[0].dt_txt,
            report: `${document.querySelector<HTMLInputElement>("#report")!.value}"`,
          };

          const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(reportData),
          };

        fetch(apiUrl, requestOptions)
        .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(`Failed to add report. Status: ${response.status}`);
            }
          })
          .then((data) => {
            // Handle a successful response from the server
            console.log('Report added successfully:', data);
          })
          .catch((error) => {
            // Handle any errors that occur during the request
        });
    }

    return (
        <>
        <form onSubmit={fetchData}>
            <input ref={cityRef} className='my-10 rounded-md border-solid ring-offset-2 ring-2 border-blue-600' placeholder='City...'></input>
            <button className='my-10 rounded-full border-solid ring-offset-2 ring-2 border-blue-600'>Show</button>

            <p>Tempreture is: {weatherInfo?.list[0].main.temp}</p>
            <p>Humidity: {weatherInfo?.list[0].main.humidity}</p>
            <img src={`https://openweathermap.org/img/w/${weatherInfo?.list[0].weather[0].icon}.png`}  id="img-weatherIcon"></img>
            <p>Weather: {weatherInfo?.list[0].weather[0].description}</p>

            <p>cityid: {weatherInfo?.city.id}</p>
            <p>cityname: {weatherInfo?.city.name}</p>
            <input id="report" className='my-10 rounded-md' placeholder='Write your report...'></input>
        </form>
<form onSubmit={handleSave}>
<button className='my-10 rounded-full border-solid ring-offset-2 ring-2 border-blue-600' >Save</button>

</form>
        </>
      ) 
}

export default WeatherForecast
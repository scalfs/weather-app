import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchWeatherConditions = async (locationId: string) => {
  const response = await axios.get(API_URL, {
    params: { id: locationId, appid: API_KEY }
  })

  return response.data
}

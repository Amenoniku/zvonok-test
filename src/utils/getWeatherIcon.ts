export const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case 'Солнечно':
      return 'sunny'
    case 'Облачно':
      return 'cloudy'
    case 'Дождливо':
      return 'rainy'
    case 'Ветренно':
      return 'windy'
    default:
      return 'cloudy'
  }
}

import React from "react";
import Form from "./Component/Form";
import Titles from "./Component/Titles";
import Weather from "./Component/Weather";

// const API_KEY = "37d2b27cd92b6113234c01fb234d23c1";

class App extends React.Component { 
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&APPID=e6ffc5ebbe17c3aa660af150fd31572f")
    const data = await api_call.json();
    console.log(data)
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country:data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    })
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    )
  }

} 

export default App;
import React from "react";
import Form from "./Component/Form";
import Titles from "./Component/Titles";
import Weather from "./Component/Weather";

class App extends React.Component { 
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
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

    if(city&&country){
      // console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter city and country."
      })
    }

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">

                <div className="form-container">
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

} 

export default App;
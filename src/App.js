import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "4a96273f9c1eeedc2f7a5f7465f4b263";

class App extends React.Component {

    gettingWeather = async () => {
        // const api_url = await fetch('http://api.openweathermap.org/data/2.5/weather?q={Moscow}&appid={${API_KEY}}'); Моё, но пока не активно
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric)`);
        const data = await api_url.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                <Info />
                <Form />
                <Weather />
            </div>
        )
    }
}

export default App;
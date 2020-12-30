import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__info">
                {
                    this.props.city && this.props.country && <p className="weather__key d-none d-md-block">Location: 
                        <span className="weather__value"> {this.props.city}</span>
                    </p> 
                    }
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                        <span className="weather__value"> {Math.round(this.props.temperature - 273.15)} &deg;C</span>
                    </p> 
                    }
                {
                    this.props.pressure && <p className="weather__key">Pressure: 
                        <span className="weather__value"> {this.props.pressure} hPa</span>
                    </p> 
                    }
                {
                    this.props.description && <p className="weather__key">Conditions: 
                        <span className="weather__value"> {this.props.description}</span>
                    </p> 
                    }              
                {
                    this.props.error && <p className="weather__error">{this.props.error}</p> 
                    }              
            </div>
        );
    }
}

export default Weather;
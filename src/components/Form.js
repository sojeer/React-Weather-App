import React from "react";

class Form extends React.Component {
    render() {
        return(
         <form onSubmit={this.props.getWeather}>
         <p className="title-container__subtitle">Type your location</p>
             <input type="text" name="city" placeholder="City..."/>
             <input type="text" name="country" placeholder="Country..."/>
             <button>Check Weather</button>
         </form>
        );
    }
}

export default Form;
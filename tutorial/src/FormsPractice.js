import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder='First Name' /><br />
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder='Last Name' /><br />
                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder='Age' /><br />
                    <br />
                    <p>Gender</p>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />
                        Female
                    </label>
                    <p>Destination</p>
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value="">---Please choose a destination---</option>
                        <option value="boracay">Boracay</option>
                        <option value="bohol">Bohol</option>
                        <option value="camiguin">Camiguin</option>
                    </select>

                    <p>Dietary restrictions:</p>
                    <textarea />
                    <br />
                    <button>Submit</button>
                </form>

                <hr />
                <h2>Entered Information</h2>
                <p>Your name: {this.state.firstName}  {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
            </main>
        )
    }

}
export default App
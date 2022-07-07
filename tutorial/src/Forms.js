import React from 'react'



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            friendly: "",
            gender:"",
            favColor:""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({
            [name]: value

        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder='First Name'
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName" placeholder='Last Name'
                    onChange={this.handleChange}
                />
                <br />
                <textarea
                    value={"Some value"}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type='checkbox'
                    name='friendly'
                    checked={this.state.friendly}
                    onChange={this.handleChange}
                /> Is friendly?
                <br />
                <input
                    type='radio'
                    name='gender'
                    value="male"
                    checked={this.state.gender==="male"}
                    onChange={this.handleChange}
                /> Male
                <br />
                <input
                    type='radio'
                    name='gender'
                    value="female"
                    checked={this.state.gender==="female"}
                    onChange={this.handleChange}
                /> Female
                <br/>
                <select value={this.state.favColor}
                onChange={this.handleChange}
                name="favColor">
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>You are a {this.state.gender}</h1>
                <h1>You favorite color is {this.state.favColor}</h1>
            </form>

        )
    }
}

export default App
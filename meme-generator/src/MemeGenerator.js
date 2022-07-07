import React from "react";

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/2z3ptc.jpg",
            allImages: []
        }
    }

    componentDidMount() {
        fetch(' https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allImages: memes })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allImages.length)
        const randImg = this.state.allImages[randomNum].url
        this.setState({ randomImage: randImg })
    }
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange} />
                    <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange} />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="meme-text top">{this.state.topText}</h2>
                    <h2 className="meme-text bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}
export default MemeGenerator
class App extends React.Component {
    state = {
        number: 10,
        title: "Aprennez a compter",
    }

    helloPlus = () => {
        this.setState({
            number: this.state.number+1,
        })
    }
    helloMoins = () => {
        this.setState({
            number: this.state.number-1,
        })
    }
    render(){
        return(
            <div className="exo">
                <h1 id="title">{this.state.title}</h1>
                <p id="score">Score : {this.state.number}</p>
                <div id="box-button">
                    <button id ="button1" onClick={this.helloPlus}>+</button>
                    <button id ="button2" onClick={this.helloMoins}>-</button>
                </div>

            </div>


        )
    }    
}


ReactDOM.render(<App/>, document.getElementById('app'));
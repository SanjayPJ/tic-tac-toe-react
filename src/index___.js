import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ name: "sanjay pj", age: 12 }]
        };
    }
    on_click_me_handler = () => {
        const { data } = this.state;
        data[0].name = "Martha May";
        data[0].age = 1;
        this.setState({
            data: data
        });
    };
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
                <AnotherComponent
                    data={this.state.data}
                    on_click_me={() => this.on_click_me_handler()}
                />
            </div>
        );
    }
}

class AnotherComponent extends React.Component {
    render() {
        const { name, age } = this.props.data[0];
        return (
            <div className="shopping-list">
                <h1>Another Component</h1>
                <p>
                    <strong>Name </strong> {name} <br />
                    <strong>Age</strong> {age}
                </p>
                <button onClick={this.props.on_click_me}>Click Me</button>
            </div>
        );
    }
}

ReactDOM.render(
    <ShoppingList name="Jhon Doe" />,
    document.getElementById("root")
);

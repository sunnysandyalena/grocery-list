import { Component } from "react";
import imageThree from './bag.png';

export class GroceryList extends Component {
    state = {
        userInput: '',
        userList: []
    }

    onChangeEvent(event) {
        this.setState({userInput: event})
    }
    
    addItem(input) {
        if (input === "") {
            alert("Please add an item!")
        }
        else {
        let listArray = this.state.userList;
        listArray.push(input);
        this.setState({userList: listArray, userInput: ''})
        }
    }
    crossItem(event){
        const listItem = event.target;
        listItem.classList.toggle('crossed');
    }
    deleteList(event) {
        let listArray = this.state.userList;
        listArray=[];
        this.setState({userList: listArray})
    }
    formSubmit(event) {
        event.preventDefault();
    }
    render () {
        return (
            <div className="my-container">
                <form onSubmit={this.formSubmit}>
                        <input className="field my-input" 
                        type="text" 
                        placeholder="I need to buy..."
                        onChange = {(event) => {this.onChangeEvent(event.target.value)}}
                        value = {this.state.userInput}/>
                        <button className="add-button" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
                </form>    
                    <ul className="my-list">
                        {this.state.userList.map((item, index) => (
                            <li onClick={this.crossItem} key={index}>
                                <img src={imageThree} width="20px" alt="Bag"/>
                                {item}</li>
                        ))}
                    </ul>
                    <button onClick={() => this.deleteList()} className="delete-button">EMPTY LIST</button>
            </div>
        )
    }
}
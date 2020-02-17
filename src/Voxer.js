import React from "react";

class Voxer extends React.Component {

    constructor() {
        super();
        this.state = {
            list: [],
            numtodo: 0,
            input: ''
        };
    }

    addToList = (e) => {
        e.preventDefault();
        if (this.state.input) {
            const list = [...this.state.list, { item: this.state.input, complete: false }];
            this.setState({ list: list, numtodo: this.state.numtodo + 1 });
        }
    }

    changeTask = (index) => {
        let { list, numtodo } = this.state;
        list[index].complete ? numtodo++ : numtodo--;
        list[index].complete = !list[index].complete;
        this.setState({ list, numtodo });
    }

    inputChange = (e) => {
        this.setState({ input: e.target.value })
    }



    render() {
        const line = { textDecoration: 'line-through' };
        return (

            <div>
                <h1>
                    Todo-List
                </h1>
                <h5>
                    {this.state.numtodo} tasks todo from {this.state.list.length} tasks
                </h5>
                <form onSubmit={this.addToList}>
                    <input size="35" placeholder="enter task" onChange={this.inputChange} />
                    <button type="submit"> ADD TO LIST </button>
                </form>

                <ul> {this.state.list.map((item, index) =>
                    <li style={(item.complete) ? line : {}} key={index} onClick={() => this.changeTask(index)}>{item.item}</li>
                )
                }
                </ul>
            </div>
        );
    }

}


export default Voxer;
import React from "react";

class Voxer extends React.Component {

    constructor() {
        super();
        this.state = { list: [], numtodo: 0};
    }

    Addtolist = (e) => {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            const list = [...this.state.list, {item: this._inputElement.value, complete: false}];
            let numtohave = this.state.numtodo;
            numtohave++;
            this.setState({ list: list, numtodo: numtohave });
        }
        this._inputElement.value = "";
    }

    Change = (index) => {
        let numtohave = this.state.numtodo;
        if(numtohave > 0)
        numtohave--;
        let list = this.state.list;
        list[index].complete = true;
        this.setState({ list: list, numtodo: numtohave });
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
                <form onSubmit={this.Addtolist}>
                    <input size="35" placeholder="enter task" ref={(a) => this._inputElement = a} />
                    <button type="submit"> ADD TO LIST </button>
                </form>

                <ul> {this.state.list.map((item, index) => 
                        <li style={(item.complete) ? line : {}} key={index} onClick={() => this.Change(index)}>{item.item}</li>
                    )
                }
                </ul>
            </div>
        );
    }

}


export default Voxer;
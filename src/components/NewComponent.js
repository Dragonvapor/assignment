import React, { Component } from 'react'

export default class NewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            display: "",
            wordCount: "",
        }
    }

    selectedValue(val) {
        const wordCount = val === "" ? 0 : val.split(/[ ,.]+/).length;
        this.setState({
            wordCount: wordCount,
        });
        this.setState({ value: val }, () => {

        })
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert(this.state.wordCount);
        if (this.state.wordCount == "") {
            this.setState({ display: "Please enter the value first" })
        }
        else if (this.state.wordCount > 0 && this.state.wordCount <= 3) {
            this.setState({ display: "enjoy" })
        } else if (this.state.wordCount > 3 && this.state.wordCount < 5) {
            this.setState({ display: "carefull" })
        } else {
            this.setState({ display: "toomuch" })
        }
    }
    render() {
        return (
            <div>
                <form className="form-inline">
                    <div class="form-group mb-2 mt-2">
                        <label for="text">Food Types</label> &nbsp;
                        <input type="textbox" class="form-control" onChange={(event) => this.selectedValue(event.target.value)} />&nbsp;
                    </div>
                    <button type="submit" class="btn btn-primary btn btn-primary mb-2 mt-2" onClick={(event) => this.handleSubmit(event)}>Check if Too much</button>
                </form>
                <p>{this.state.display}</p>
            </div>
        )
    }
}

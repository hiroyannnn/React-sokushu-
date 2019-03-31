
import React, { Component } from 'react';

export default class MyEvent extends Component {
    show(e) {
        console.log(e.type);
        setTimeout(() => {
            console.log(e.type);
        }, 1000);
    }
    render() {
        return (
            <button type="button" onClick={this.show.bind(this)}>
                イベント情報
            </button>
        );
    }
}

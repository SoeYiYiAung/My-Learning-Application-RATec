import React from 'react';

class Toolbar extends React.Component {
    dataRef = React.createRef();

    dataShow = () => {
        let data = this.dataRef.current.value;
        this.props.add(data); // send data back to parent
        this.dataRef.current.value = ""; // optional: clear input
    }

    render() 
    {
        return (
            
            <div style={{ background: 'cyan', padding: 10 }}>
                <input type="text" placeholder="Data Name" ref={this.dataRef} /><br />
                <button onClick={this.dataShow}>Submit</button>

                {/* composition content */}
                {this.props.children}
            </div>
        );
    }
}
export default Toolbar;

import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.name},
        ${this.props.price}
      </li>
      
    );
  }
}

class Fruit extends React.Component{
  render(){
    return(
      <li>{this.props.name}</li>
    )
  }
}

class Name extends React.Component{
  render(){
    return(
      <li>{this.props.nameBerry}</li>
    )
  }
}

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Apple', price: 0.99 },
      { id: 2, name: 'Orange', price: 0.89 },
    ],
    fruits: [],
    names: [],
    mynum : 0,
  }

  nameRef = React.createRef();
  priceRef = React.createRef();
  fruitRef = React.createRef();
  nameBerryRef  = React.createRef();

  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;
    this.setState({
      items: [
        ...this.state.items,
        { id, name, price }
      ],

      mynum: this.state.mynum + 1 
    });
  }

  addFruit = () => {
    let id = this.state.fruits.length + 1;
    let name = this.fruitRef.current.value;

    this.setState({
      fruits: [...this.state.fruits, { id, name }],
    });
  };

  printName = () => {
    let id = this.state.names.length + 1;
    let nameBerry = this.nameBerryRef.current.value;

    this.setState({
      names: [...this.state.names, { id, nameBerry }],
    });
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {
            this.state.items.map(i => {
              return (
                <Item id={i.id} name={i.name} price={i.price} />
              )
            })
          }
        </ul>

        <ol>
          {this.state.fruits.map((f) => (
            <Fruit id={f.id} name={f.name} />
          ))}
        </ol>

        <ul>
          {this.state.names.map((berry) => (
            <Name id={berry.id} nameBerry={berry.nameBerry} />
          ))}
        </ul>
        
        <h3>My Number is {this.state.mynum}</h3>

        <input type="text" ref={this.nameRef} /><br />
        <input type="text" ref={this.priceRef} /><br />
        <button onClick={this.add}>Add</button>

        <br /><br />

        <input type="text" placeholder="Fruit name" ref={this.fruitRef} /><br />
        <button onClick={this.addFruit}>Add Fruit</button>

        <br /><br />

        <input type="text" placeholder="Name" ref={this.nameBerryRef} /><br />
        <button onClick={this.printName}>Add Name</button>

      </div>

    )
  }
}


export default App;


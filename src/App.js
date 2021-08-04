import React, { Component } from 'react';
import './App.css';

//Pseudo rosnaca baza danych
const data = [
  {
    id: 1,
    title: 'Massage nr 1',
    body: 'Content av massasge nr 1 ...'
  },
  {
    id: 2,
    title: 'Massage nr 2',
    body: 'Content av massasge nr 2 ...'
  }
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Message nr ${index}`,
    body: `Content av massage nr ${index}`
  })
  // console.log(data);
}, 5000)

class App extends Component {
  state = {
    comments: [...data]
  }

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data]
      })
      console.log('Wywolana sie metoda getData()');
    } else {
      console.log('Nie aktalizuje');
    }
  }

  componentDidMount() {
    this.idInterval = setInterval(this.getData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  render() {

    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));

    return (
      <div className="App">
        {comments.reverse()}
      </div>
    );
  }
}

export default App;

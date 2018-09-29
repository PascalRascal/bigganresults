import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.state.pic_data = {
      run: {
        num: 0,
        img: 0,
        class: 0,
        pic: 0
      }
    }
  }

  nextImage() {
    let run_data = this.state.pic_data.run

    let curr_img = run_data.img
    let curr_class = run_data.class
    let curr_pic = run_data.pic + 1
    // Check Our Logic Make Sure Nothing is Broken
    if(curr_pic > 12){
      curr_pic = 0
      curr_class += 1
      if(curr_class > 49) {
        curr_class = 0
        curr_img += 1
        if(curr_img > 19){
          curr_img = 0
        }
      }
    }

    this.setState({
      pic_data: {
        run: {
          img: curr_img,
          class: curr_class,
          pic: curr_pic
        }
      }
    })
  }

  prevImage() {
    let run_data = this.state.pic_data.run

    let curr_img = run_data.img
    let curr_class = run_data.class
    let curr_pic = run_data.pic - 1
    // Check Our Logic Make Sure Nothing is Broken
    if(curr_pic < 0){
      curr_pic = 12
      curr_class -= 1
      if(curr_class < 1) {
        curr_class = 49
        curr_img -= 1
        if(curr_img < 1){
          curr_img = 19
        }
      }
    }

    this.setState({
      pic_data: {
        run: {
          img: curr_img,
          class: curr_class,
          pic: curr_pic
        }
      }
    })
  }

  componentDidMount() {
    document.addEventListener("keypress", (e) => {
      console.log(e.keyCode)
      let kc = e.keyCode;
      if(kc == 100 || kc == 39){
        this.nextImage()
      }
      if(kc == 97 || kc == 37){
        this.prevImage()
      }
    })
  }

  randomImage() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{display: 'flex'}}>
          <div style={{width: '512px', height: '512px'}}> <h4> {JSON.stringify(this.state.pic_data.run)} </h4> </div>
        </div>
      </div>
    );
  }
}

export default App;

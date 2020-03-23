import React, { Component } from 'react';
import MyButton from './components/MyButton.js';
import MyCard from './components/MyCard.js';
import MyFooter from './components/MyFooter.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'World',
      data: {},
    };
  }

  handleOverview = () => {
    fetch('https://corona.lmao.ninja/all')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.setState(state => ({
          tab: 'World',
          data: jsonData,
        }));
      });
  };

  handleTaiwan = () => {
    fetch('https://corona.lmao.ninja/countries/taiwan')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.setState(state => ({
          tab: 'Taiwan',
          data: jsonData,
        }));
      });
  };

  handleCountries = () => {
    fetch('https://corona.lmao.ninja/countries')
      .then(res => {
        return res.json();
      })
      .then(jsonData => {
        this.setState(state => ({
          tab: 'countries',
          data: jsonData,
        }));
      });
  };

  componentDidMount() {
    this.handleOverview();
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <p className="brand-logo" style={{ margin: 0 }}>
              COVID-19 Cases Live Data Update
            </p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <MyButton handleFn={this.handleOverview} str={'Overview'} />
              </li>
              <li>
                <MyButton handleFn={this.handleTaiwan} str={'Taiwan Latest'} />
              </li>
              <li>
                <a
                  href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd"
                  target="_blank"
                >
                  WHO Coverage Map
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="col l1" style={{ marginLeft: 30, marginRight: 30 }}>
          <ui class="collection">
            <h6 className="collection-item active red lighten-2 z-depth-5">
              {'Data of: ' + this.state.tab}
            </h6>
            <li className="collection-item z-depth-3">Total Cases: {data.cases}</li>
            <li className="collection-item z-depth-3">Total Deaths: {data.deaths}</li>
            <li className="collection-item z-depth-2">Total Recovered: {data.recovered}</li>
          </ui>
        </div>

        <div className="row">
          <MyCard
            str={`Total Cases (${this.state.tab})`}
            value={data.cases}
            imageLink={
              'https://cdn.geekwire.com/wp-content/uploads/2020/03/200304-corona-micro.jpg'
            }
          />
          <MyCard
            str={`Total Deaths (${this.state.tab})`}
            value={data.deaths}
            imageLink={
              'https://cryptoiscoming.com/wp-content/uploads/2020/03/corona-4893215_1280.jpg'
            }
          />
        </div>
        <MyFooter />
      </div>
    );
  }
}

export default App;

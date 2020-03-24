import React, { Component } from 'react';

export default class MyFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h6 className="white-text">Made with ReactJS & MaterializeCSS</h6>
              </div>
              <div className="col l4 offset-l2 s12">
                <h6>
                  <a
                    href="https://github.com/ianpan870102/covid-19-data"
                    target="_blank"
                    className="white-text"
                  >
                    Github Repo (Source Code)
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">Thanks for dropping by!</div>
          </div>
        </footer>
      </>
    );
  }
}

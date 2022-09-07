import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        <div className="number-page">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>...</span>
          <span>10</span>
        </div>
        <div className="switch-btn">
          <button className="prev">Revenir</button>
          <button className="next">Suivant</button>
        </div>
      </div>
    );
  }
}

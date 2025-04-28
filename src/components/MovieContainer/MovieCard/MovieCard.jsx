import React, { Component } from "react";

export default class MovieCard extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4 cardCont">
        <div className="card movie-card h-100 shadow-sm">
          <img
            src={this.props.movie.poster}
            className="card-img-top"
            alt={this.props.movie.title}
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title text-center">
                {this.props.movie.title}
              </h5>
              <p className="card-text text-center text-muted">
                {this.props.movie.director}
              </p>
              <p className="text-center mt-2">
                <span className="badge bg-dark fs-6">
                  {this.props.movie.rating}
                </span>
              </p>
              <p className="card-text text-center text-muted">
                {this.props.movie.year}
              </p>
            </div>

            <div className="text-center mt-3">
              <button className="btn btn-primary details-btn">
                {" "}
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

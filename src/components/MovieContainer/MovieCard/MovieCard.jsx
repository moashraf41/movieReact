import React, { Component } from "react";

export default class MovieCard extends Component {
  render() {
    const { movie, deleteMovie } = this.props;
    const modalId = `modal-${movie.id}`;
    const remove = () => {
      deleteMovie(movie.id);
    };

    return (
      <div className="col-md-6 col-lg-4 cardCont">
        <div className="card movie-card h-100 shadow-sm">
          <img
            src={movie.poster}
            className="card-img-top"
            alt={movie.title}
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title text-center">{movie.title}</h5>
              <p className="card-text text-center text-muted">
                {movie.director}
              </p>
              <p className="text-center mt-2">
                <span className="badge bg-dark fs-6">{movie.rating}</span>
              </p>
              <p className="card-text text-center text-muted">{movie.year}</p>
            </div>

            <div className="text-center mt-3 d-flex gap-2 justify-content-center">
              <button
                type="button"
                className="btn  details-btn"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
              >
                More Details
              </button>
              <button
                type="button"
                className="btn btn-danger px-3 py-2 rounded-5"
                onClick={remove}
              >
                Remove{" "}
              </button>

              {/* Modal */}
              <div
                className="modal fade"
                id={modalId}
                tabIndex={-1}
                aria-labelledby={`${modalId}-label`}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id={`${modalId}-label`}>
                        {movie.title}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body text-center">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="img-fluid rounded mb-3"
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                      />
                      <p>
                        <strong>Year:</strong> {movie.year}
                      </p>
                      <p>
                        <strong>Director:</strong> {movie.director || "Unknown"}
                      </p>
                      <p>
                        <strong>Rating:</strong> {movie.rating}
                      </p>
                      <p className="fw-bold text-lead text-success">
                        <strong>Ticket Price:</strong> {movie.ticketPrice}
                      </p>
                      <ul>
                        <strong>Cast:</strong>
                        {movie.cast.map((actor, index) => (
                          <li className="list-group-item" key={index}>
                            {actor}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

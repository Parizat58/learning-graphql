const { RESTDataSource } = require('apollo-datasource-rest');

class MoviesAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://movies-api.example.com/';
  }

  async getMovie(id) {
    // Send a GET request to the specified endpoint
    return this.get(`movies/${id}`);
  }
  
  async postMovie(movie) {
    return this.post(
      `movies`, // path
      movie, // request body
    );
  }

  // PUT
  async newMovie(movie) {
    return this.put(
      `movies`, // path
      movie, // request body
    );
  }
  
  async updateMovie(movie) {
    return this.patch(
      `movies`, // path
      { id: movie.id, movie }, // request body
    );
  }

  async deleteMovie(movie) {
    return this.delete(
      `movies/${movie.id}`, // path
    );
  }

  async getMostViewedMovies(limit = 10) {
    const data = await this.get('movies', {
      // Query parameters
      per_page: limit,
      order_by: 'most_viewed',
    });
    return data.results;
  }
}
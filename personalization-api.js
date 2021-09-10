class PersonalizationAPI extends RESTDataSource {
    willSendRequest(request) {
      request.headers.set('Authorization', this.context.token);
    }
  }
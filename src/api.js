class API {

  getData = function() {
    // let url = 'http://demo7235469.mockable.io/transactions';
    let url = 'https://raw.githubusercontent.com/jordandrako/TheHotSauceTest/master/hotsauces.json';
    return fetch(url)
      .then(response => response.json())
      .catch(function(error) {
        console.error(
          `There has been a problem with your fetch operation: (${url}) ${error}`
        );
        throw error;
      });
  };

}

export default new API()


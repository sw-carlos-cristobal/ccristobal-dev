// Make a GET request to your LinkedIn profile page
axios
  .get({
    URL: 'https://www.linkedin.com/in/carloscristobal/',
    Headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
  .then((response) => {
    // Parse the HTML of the page
    const html = response.data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Select the elements you want to display on the page
    const name = doc.querySelector('.pv-top-card-section__name').textContent;
    const headline = doc.querySelector(
      '.pv-top-card-section__headline'
    ).textContent;
    const location = doc.querySelector(
      '.pv-top-card-section__location'
    ).textContent;
    const summary = doc.querySelector(
      '.pv-top-card-section__summary-text'
    ).textContent;

    // Insert the information into the HTML page
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
      <h1>${name}</h1>
      <h2>${headline}</h2>
      <h3>${location}</h3>
      <p>${summary}</p>
    `;
  })
  .catch((error) => {
    console.log(error);
  });

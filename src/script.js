const fetchData = async () => {
    const url = 'https://nodegraphql.onrender.com/';
    const query = `
      {
        publishers {
          company
          booksByPublisher {
            title
          }
        }
      }
    `;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };
  
  fetchData();
  
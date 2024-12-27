const Base_Url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

const ulElement = document.querySelector('.book-list');

async function fetchData(Base_Url: string): Promise<any> {
    try {
        const response = await fetch(Base_Url);
        if (!response.ok) {
            throw new Error("Något gick fel!");
        }
        const data = await response.json();
        console.log(data);

        for (let i = 0; i >= data.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = data[i].titel;

            const infoElement = document.createElement('div');
            infoElement.className = 'book-info';
            infoElement.textContent = 'Författare: ' + `${data[i].författare}`, 'Antal sidor: ' + `${data[i].sidor}`;

            liElement.addEventListener('click', function() {
                infoElement.style.display = 'block'})

      }
    }catch (error){
      console.error('error!', error)
    }
  }


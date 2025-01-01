const Base_Url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

const ulElement = document.querySelector('.book-list');

interface book{
  title: string,
  author: string,
  pages: number,
  plot: string

}

async function fetchData(Base_Url: string): Promise<any> {
    try {
        const response = await fetch(Base_Url);
        if (!response.ok) {
            throw new Error("Något gick fel!");
        }
        const data: book[] = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = data[i].title;

            const infoElement = document.createElement('div');
            infoElement.className = 'book-info';
            infoElement.textContent = `Author: ${data[i].author}` + `, ` + `Pages: ${data[i].pages}` + `, ` + `Plot: ${data[i].plot}`;

            liElement.appendChild(infoElement);
            ulElement.appendChild(liElement);

            liElement.addEventListener('click', function() {
                infoElement.style.display = 'flex'})

      }
    }catch (error){
      console.error('error!', error)
    }
  }

fetchData(Base_Url)
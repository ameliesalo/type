var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Base_Url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
function fetchData(Base_Url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(Base_Url);
            if (!response.ok) {
                throw new Error("Något gick fel!");
            }
            const data = yield response.json();
            console.log(data);
            const book1 = document.querySelector('.book1');
            book1.innerHTML = `<h2>${data[0].title}<h2>`;
            book1.addEventListener('click', () => {
                book1.innerHTML =
                    `<ul> 
        <li>${data[0].author}</li>
        <li>Audience: ${data[0].audience}</li>
        <li>${data[0].pages} pages</li>
        <li>${data[0].plot}</li>
        <li>Released year: ${data[0].year}</li>
        </ul>`;
            });
            book1.addEventListener('keydown', () => { book1.innerHTML = `<h2>${data[0].title}<h2>`; });
            const book2 = document.querySelector('.book2');
            book2.innerHTML = `<h2>${data[1].title}<h2>`;
            book2.addEventListener('click', () => {
                book2.innerHTML =
                    `<ul> 
        <li>${data[1].author}</li>
        <li>Audience: ${data[1].audience}</li>
        <li>${data[1].pages} pages</li>
        <li>${data[1].plot}</li>
        <li>Released year: ${data[1].year}</li>
        </ul>`;
            });
            book2.addEventListener('keydown', () => { book2.innerHTML = `<h2>${data[1].title}<h2>`; });
            const book3 = document.querySelector('.book3');
            book3.innerHTML = `<h2>${data[2].title}<h2>`;
            book3.addEventListener('click', () => {
                book3.innerHTML =
                    `<ul> 
        <li>${data[2].author}</li>
        <li>Audience: ${data[2].audience}</li>
        <li>${data[2].pages} pages</li>
        <li>${data[2].plot}</li>
        <li>Released year: ${data[2].year}</li>
        </ul>`;
            });
            book3.addEventListener('keydown', () => { book3.innerHTML = `<h2>${data[2].title}<h2>`; });
            const book4 = document.querySelector('.book4');
            book4.innerHTML = `<h2>${data[3].title}<h2>`;
            book4.addEventListener('click', () => {
                book4.innerHTML =
                    `<ul> 
        <li>${data[3].author}</li>
        <li>Audience: ${data[3].audience}</li>
        <li>${data[3].pages} pages</li>
        <li>${data[3].plot}</li>
        <li>Released year: ${data[3].year}</li>
        </ul>`;
            });
            book4.addEventListener('keydown', () => { book4.innerHTML = `<h2>${data[3].title}<h2>`; });
            const book5 = document.querySelector('.book5');
            book5.innerHTML = `<h2>${data[4].title}<h2>`;
            book5.addEventListener('click', () => {
                book5.innerHTML =
                    `<ul> 
        <li>${data[4].author}</li>
        <li>Audience: ${data[4].audience}</li>
        <li>${data[4].pages} pages</li>
        <li>${data[4].plot}</li>
        <li>Released year: ${data[4].year}</li>
        </ul>`;
            });
            book5.addEventListener('keydown', () => { book5.innerHTML = `<h2>${data[4].title}<h2>`; });
            const book6 = document.querySelector('book6');
            book6.innerHTML = `<h2>${data[5].title}<h2>`;
            book6.addEventListener('click', () => {
                book6.innerHTML =
                    `<ul> 
        <li>${data[5].author}</li>
        <li>Audience: ${data[5].audience}</li>
        <li>${data[5].pages} pages</li>
        <li>${data[5].plot}</li>
        <li>Released year: ${data[5].year}</li>
        </ul>`;
            });
            book6.addEventListener('keydown', () => { book6.innerHTML = `<h2>${data[5].title}<h2>`; });
            const book7 = document.querySelector('.book7');
            book7.innerHTML = `<h2>${data[6].title}<h2>`;
            book7.addEventListener('click', () => {
                book7.innerHTML =
                    `<ul> 
        <li>${data[6].author}</li>
        <li>Audience: ${data[6].audience}</li>
        <li>${data[6].pages} pages</li>
        <li>${data[6].plot}</li>
        <li>Released year: ${data[6].year}</li>
        </ul>`;
            });
            book7.addEventListener('keydown', () => { book7.innerHTML = `<h2>${data[6].title}<h2>`; });
            const book8 = document.querySelector('.book8');
            book8.innerHTML = `<h2>${data[7].title}<h2>`;
            book8.addEventListener('click', () => {
                book8.innerHTML =
                    `<ul> 
        <li>${data[7].author}</li>
        <li>Audience: ${data[7].audience}</li>
        <li>${data[7].pages} pages</li>
        <li>${data[7].plot}</li>
        <li>Released year: ${data[7].year}</li>
        </ul>`;
            });
            book8.addEventListener('keydown', () => { book8.innerHTML = `<h2>${data[7].title}<h2>`; });
        }
        catch (error) {
            console.error("Oops!", error);
        }
    });
}
fetchData(Base_Url);

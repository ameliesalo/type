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
const ulElement = document.querySelector('.book-list');
function fetchData(Base_Url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(Base_Url);
            if (!response.ok) {
                throw new Error("Något gick fel!");
            }
            const data = yield response.json();
            console.log(data);
            for (let i = 0; i >= data.length; i++) {
                const liElement = document.createElement('li');
                liElement.textContent = data[i].titel;
                const infoElement = document.createElement('div');
                infoElement.className = 'book-info';
                infoElement.textContent = 'Författare: ' + `${data[i].författare}`, 'Antal sidor: ' + `${data[i].sidor}`;
                liElement.addEventListener('click', function () {
                    infoElement.style.display = 'block';
                });
            }
        }
        catch (error) {
            console.error('error!', error);
        }
    });
}

const resultNode = document.querySelector('.result');
const btn = document.querySelector('.btn');

document.addEventListener("DOMContentLoaded", () => {
   storageItem = localStorage.getItem('lastResponse')
   if (storageItem) {
      showResult(JSON.parse(storageItem));
   }
});

function showError(msg) {
   // localStorage.clear()
   resultNode.innerHTML = ""
   elem = document.createElement('p');
   elem.textContent = msg;
   resultNode.style.fontSize = '50px';
   resultNode.append(elem);
}

const useRequest = (page, limit) => {
   const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
   return fetch(url)
      .then((response) => {
         return response;
      })
      .then(data => {
         result = data.json();
         return result;
      })
      .catch(() => {
         console.log('error');
      });
}

function showResult(apiData) {
   let cards = '';
   apiData.forEach(item => {
      const cardImg = `
            <div>
                <img src="${item.download_url}">
                <p>${item.author}</p>
            </div>
        `;
      cards += cardImg;
   });
   resultNode.innerHTML = cards;
   resultNode.style.fontSize = 'normal';
}

btn.addEventListener('click', async () => {
   const page = document.querySelector('.input1').value;
   const limit = document.querySelector('.input2').value;
   const pageError = isNaN(page) || page < 1 || page > 10;
   const limitError = isNaN(limit) || limit < 1 || limit > 10;

   if (pageError) {
      showError('Номер страницы вне диапазона от 1 до 10');
   }
   if (limitError) {
      showError('Лимит вне диапазона от 1 до 10');
   }
   if (pageError && limitError) {
      showError('Номер страницы и лимит вне диапазона от 1 до 10');
   }
   if (!pageError && !limitError) {
      const requestResult = await useRequest(page, limit);
      localStorage.setItem('lastResponse', JSON.stringify(requestResult));
      showResult(requestResult);
   }
})


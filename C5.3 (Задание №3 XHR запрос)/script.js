function useRequest(url, callback) {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', url);

   xhr.onload = function () {
      if (xhr.status !== 200) {
         console.log('Статус ответа: ', xhr.status);
      } else {
         const result = JSON.parse(xhr.response);
         console.log(result)
         if (callback) {
            callback(result);
         }
      }
   };

   xhr.onerror = function () {
      console.log('Ошибка! Статус ответа: ', xhr.status);
   };

   xhr.send();
}

const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

function displayResult(apiData) {
   let cards = ''

   apiData.forEach(item => {
      const cardImg = `
       <div class="card">
         <img class="card_image" src="${item.download_url}" alt="image">
         <p>${item.author}</p>
       </div>`;
      cards += cardImg;
   });

   resultNode.innerHTML = cards;
}

btn.addEventListener('click', () => {
   const value = document.querySelector('.inpt').value;
   if (value > 0 && value < 11) {
      useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
   } else {
      alert('«число вне диапазона от 1 до 10»');
   }
});

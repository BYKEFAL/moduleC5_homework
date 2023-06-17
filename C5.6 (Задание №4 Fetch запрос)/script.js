const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

function useRequest(val1, val2) {
   return fetch(`https://picsum.photos/${val1}/${val2}`)
      .then((response) => {
         console.log(response)
         return response;
      })
      .then(data => data.url)
      // .then(response => response.blob())
      // .then(blob => URL.createObjectURL(blob))
      .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
   const value1 = document.querySelector('.input1').value;
   const value2 = document.querySelector('.input2').value;
   if (value1 > 99 && value1 < 301 && value2 > 99 && value2 < 301) {
      resultUrl = await useRequest(value1, value2);
      resultNode.innerHTML = `<img src=${resultUrl} alt='image'>`
   } else {
      alert('одно из чисел вне диапазона от 100 до 300»');
   }
   // formNode.reset();
});

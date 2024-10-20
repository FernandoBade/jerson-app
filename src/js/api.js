// require('dotenv').config();

// const API_URL = process.env.API_URL;
// const API_KEY = process.env.API_KEY;

// console.log(API_KEY, API_URL);

// async function query(data) {
// 	const response = await fetch(
// 		API_URL,
// 		{
// 			headers: {
// 				"Authorization": `Bearer ${API_KEY}`,
// 				"Content-Type": "application/json",
// 			},
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return console.log(result[0]);
// }


// // const criterio = {
// //     "inputs": "Qual a capital do Brasil?",
// //     "options": {
// //       "wait_for_model": true,
// //     }
// // }


// // query(criterio).then((response) => {
// // 	console.log(JSON.stringify(response, null, 2));
// // });

// module.exports = query;

require('dotenv').config();

const API_URL = process.env.API_KEY;
const API_KEY = process.env.API_KEY;

console.log(API_KEY, API_URL);

async function query(data) {
  const response = await fetch(
    API_URL,
    {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`Erro na resposta: ${response.statusText}`);
  }

  const imageBlob = await response.blob();
  const imageUrl = URL.createObjectURL(imageBlob);
  return imageUrl;
}

const payload = {
  "inputs": "A black magestic horse.",
  "options": {
    "wait_for_model": true
  }
};

query(payload).then((imageUrl) => {
    const conteinerResposta = document.querySelector('.resposta-img');
    console.log(imageUrl);
  conteinerResposta.innerHTML = `<img src="${imageUrl}" class="icone-loading" alt="Generated Image">`;
}).catch(error => {
  console.error("Erro ao gerar a imagem:", error);
});

module.exports = query;

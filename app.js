// fetch
// function verileriYukle(){
//   fetch("https://restcountries.eu/rest/v2/name/germany")
//   .then((gelen) => gelen.json())
//   .then((data) => console.log(data[0]))
// }

verileriYukle();
list = []
async function verileriYukle() {
  const gelen = await fetch("https://restcountries.eu/rest/v2");
  let data = await gelen.json();
  
  // for (let index = 0; index < data.length; index++) {
  //   list.push(data[index].name)
  // }
  // console.log(list[0].toLowerCase())
}

const renderCountry = (data, className = "") => {
  const countriesSection = document.querySelector(".countries");
  const html = `
  <main class="container">
  <section class="countries"">
  <div class="country">
  <div class="country__img">
    <img
      src="${data.flag}"
      alt=""
      class="country__img"
    />
  </div>
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row">
      <span><i class="fas fa-landmark"> ${data.capital}</i></span>
    </p>
    <p class="country__row">
      <span><i class="fas fa-users"></i></span> ${(
        data.population / 1_000_000
      ).toFixed(1)} M People
    </p> 
    <p class="country__row">
      <span><i class="fas fa-comments"></i></span> ${data.languages[0].name}
    </p>
    <p class="country__row">
      <span><i class="fas fa-money-bill-wave"></i></span> ${
        data.currencies[0].name
      }
    </p>
  </div>
</div>
<br>
<br
  </div>
  </div>
  </div>
  `;

  countriesSection.insertAdjacentHTML("beforeend", html);
  countriesSection.style.opacity = 1;
};
/* toFixed virgülden sonra 1 basamak al demek */
// HTML DOM insertAdjacentHTML() Method
// This method inserts a specified text as HTML, into a specified position in the document.

// fetch("https://restcountries.eu/rest/v2/name/germany")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     renderCountry(data[0]);
//   });
// fetch("https://restcountries.eu/rest/v2/name/italy")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     renderCountry(data[0]);
//   });
// fetch("https://restcountries.eu/rest/v2/name/turkey")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     renderCountry(data[0]);
//   });
// fetch("https://restcountries.eu/rest/v2/name/france")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     renderCountry(data[0]);
//   });




const getCountryData = (prop) => {
fetch(`https://restcountries.eu/rest/v2/name/${prop}`)
.then((response) => {
  if(!response.ok) throw new Error('something went wrong!')
  return response.json();
})
  .then((data) => {
    renderCountry(data[0]);
  });
}

getCountryData('germany')
getCountryData('italy')
getCountryData('france')
getCountryData('spain')
getCountryData('usa')
getCountryData('turkey')

const getCountryAndNeighbours = (prop) => {
  fetch(`https://restcountries.eu/rest/v2/name/${prop}`)
  .then((response) => {
    if(!response.ok) throw new Error('something went wrong!')
    return response.json();
  })
    .then((data) => {
      renderCountry(data[0]);
      return data[0].borders
    })
    .then((neighbors) => {
      if (neighbors.length) {
          console.log(`neighbors ${prop}: `, ...neighbors)
        }
    })
    .catch((err) => console.log(err.message));
  }

getCountryAndNeighbours('italy')



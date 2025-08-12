// fetch("https://jsonplaceholder.typicode.com/users")
//  .then(response => {
//    if (!response.ok) {
//      throw new Error(response.status);
//    }
//    return response.json();
//  })
//  .then(data => {
//     body.innerHTML = data.map(user => `
//         <div>
//             <p>${user.address.street}</p>
//             <p>${user.company.name}</p>
//             <p>${user.name}</p>
//             <p>${user.phone}</p>
//         </div>
//     `)
//     console.log(data)
//  })
//  .catch(error => {
//    console.log(error)
   
//  });

// const body = document.querySelector('body')





// const searchParams = new URLSearchParams({
//  _limit: 5,
//  _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name







const box = document.querySelector('.box')
const country = document.querySelector('.country')
const btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags")
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const found = data.find(element => element.name.common.toLowerCase() === country.value.toLowerCase())
        if(found){
          box.innerHTML = `
          <h1 class="box-name"></h1>
          <div class="box-case1">
              <p class="name">Name: ${found.name.common}</p>
              <p class="capital">Capital: ${found.capital}</p>
              <p class="region">Region: ${found.region}</p>
          </div>
          <div class="box-case2">
              <img src="${found.flags.png}" alt="" class="box-case2-photo">
          </div>
          `
        }
        else{
          alert('such country do not exist')
        }
    })
    .catch(error => {
      console.error("Помилка:", error.message);
    });
})
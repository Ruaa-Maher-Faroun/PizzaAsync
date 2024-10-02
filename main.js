async function getPizza(){
    const res = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await res.json();
    console.log(data);
    
    const pizza = data.recipes;

    const result = pizza.map(function(proPizza){
        return `<div class="proPizza">
            <h2>${proPizza.title}</h2>
            <img src="${proPizza.image_url}" />
        </div>`;
    }).join("");
    document.querySelector('.product .row').innerHTML = result;
}

getPizza();
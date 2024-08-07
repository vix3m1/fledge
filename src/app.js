const baseUrl = "https://api.escuelajs.co/api/v1"

const getData = async () => {
    try {
        const products  = await axios.get(`${baseUrl}/products`);
        const categories = await axios.get(`${baseUrl}/categories`)
        
        renderData(categories.data, products.data);
    } catch (e) {
        if (e.response && e.response.status === 404) {
            console.log(e);
        }
    }
};
getData();

function renderData(categories,products) {
    const tempDivs = document.querySelectorAll(".loading");
    tempDivs.forEach(loading => {
        loading.classList.add("hide");
    });
    for(let i = 0; i < categories.length; i++) {
      const dataCategories = document.createElement("div");
      dataCategories.classList.add("px-5", "whitespace-nowrap", "loading", "bg-[#f5f5f5]", "h-[.95cm]", "flex", "justify-center", "items-center", "w-full", "font-jakar")
      dataCategories.innerHTML = `${categories[i].name}`
      document.getElementById("category").appendChild(dataCategories)
    }

    for (let i = 0; i < products.length; i++) {
        const dataDiv = document.createElement("div");

        dataDiv.classList.add(
            "w-[4.1cm]",
            "max-h-[6.5cm]",
            "rounded-md",
            "h-[6.5cm]",
            "bg-gray-300",
            "overflow-y-scroll",
            "flex",
            "flex-col"
        );
        
        dataDiv.innerHTML = `                    <div class="w-[4.1cm] max-h-[6.5cm] rounded-md h-[6.5cm] bg-gray-300 overflow-y-scroll flex flex-col">
        
        <div class="h-[7.5cm]">
          <img src="${products[i].images[2]}" />
        </div>
        
        <div class="h-full w-full bg-[#f9f9f9] overflow-x-hidden flex relative flex-col py-3 px-3 rounded-md">
          
          <p class="ellipsis w-[11ch] overflow-hidden inline-block whitespace-nowrap font-jakar">${products[i].title}</p>
          
          <p class="text-[20px] absolute font-jakar bottom-0 right-0 m-2">$${products[i].price.toFixed(1)}</p>
        </div>
      </div>`;
        document.getElementById("products").appendChild(dataDiv);
    }
}

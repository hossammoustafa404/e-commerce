const baseUrl = "https://fakestoreapi.com/products";

const getProducts = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;

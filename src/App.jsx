const foods = [
  {
    name: "Ramen",
    url: "https://recipes.net/wp-content/uploads/2022/09/rsz_miso-ramen-1024x683.jpg",
    price: 30.0,
  },
  {
    name: "Tofu",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Hiyayakko_with_bonito_flakes_and_welsh_onion_2.jpg/1200px-Hiyayakko_with_bonito_flakes_and_welsh_onion_2.jpg",
    price: 20.0,
  },
  {
    name: "Tonkatsu",
    url: "https://oatseveryday.com/wp-content/uploads/2022/08/Pollo-Katsu-Photo.jpg",
    price: 25.0,
  },
  {
    name: "Kakuni",
    url: "https://www.naokoskitchen.com/wp-content/uploads/2020/04/P4062670-1024x768.jpg",
    price: 28.0,
  },
];
function Food(props) {
  return (
    <div className="flex flex-col gap-2 w-52 bg-zinc-200 p-4 cursor-pointer rounded">
      <img src={props.url} />
      <h3 className="text-center font-bold text-lg">{props.name}</h3>
      <div className="flex justify-between">
        <p className="font-bold">R${props.price}</p>
        <button className="bg-blue-200 px-4  rounded hover:bg-blue-400 font-bold text-lg">
          +
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="flex gap-2">
      {foods.map((props) => (
        <Food name={props.name} url={props.url} price={props.price} />
      ))}
    </div>
  );
}

export default App;

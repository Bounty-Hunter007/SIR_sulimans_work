import "./App.css";
import FACEBOOK from "./FACBOOK";

function App() {
  const data = {
    title: "kesa dia",
    username: "ashhadu",
    image: [
      "https://i.pinimg.com/736x/ed/7f/6b/ed7f6beb78b7fdd9193856fed36931e1.jpg",
      "https://th.bing.com/th/id/R.ea4d6e172ce5b4ae19ce8821b4a40007?rik=WLq5KeGq%2fa2rfQ&pid=ImgRaw&r=0",
      "https://wallpaperaccess.com/full/13678.jpg",
      "https://cdn.wallpapersafari.com/32/0/qxpirL.jpeg",
      "https://wallpaperaccess.com/full/13647.jpg",
      "https://images.hdqwalls.com/wallpapers/ferrari-4k-latest-9y.jpg",
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <FACEBOOK
            title={data.title}
            username={data.username}
            image={data.image}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Details from "./components/Details";

function App() {
  const position = [39.83142855260717, -86.27218415865319];

  return (
    <div className="font-main w-full h-screen relative">
      <div className="w-full h-[35%] bg-mobile lg:bg-desk  bg-cover bg-center pt-10 space-y-8">
        <h1 className="text-center text-white text-2x1 font-semibold">
          Ip Address Tracker
        </h1>
        <form
          action=""
          className="w-1/2 h-14 mx-auto rounded-2xl overflow-hidden relative"
        >
          <input
            type="text"
            placeholder="search for any IP address or domain"
            className="w-full h-full px-5 "
          />
          <button className="w-20 h-full bg-[#2b2b2b] flex items-center justify-center absolute right-0 top-0">
            <img src="icon-arrow.svg" alt=" " />
          </button>
        </form>
      </div>
      <div className="absolute w-[80%] lg:w-[80%] h-[400px] lg:h-[170px] left-0 right-0 top-[25%] mx-auto overflow-hidden rounded-xl shadow-sm shadow-gray-200 z-[999] ">
        <Details />
      </div>
      <div id="map"className="w-full h-[70%]">
        {" "}
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;

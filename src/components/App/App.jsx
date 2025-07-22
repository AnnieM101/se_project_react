import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import {
  getWeather,
  filterWeatherData,
  getWeatherType,
} from "../../utils/weatherAPI";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, addItems, deleteItems } from "../../utils/api";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const[currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const onAddClick = () => {
    setActiveModal("add-garment");
    setImageUrl("");
    setName("");
    setWeather("");
    console.log("Add button clicked");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  }

  const handleAddItemModalSubmit = ({name, imageUrl, weather,}) => {
    addItems({name, imageUrl, weather}).then((newItem) => {
      setClothingItems([newItem, ...clothingItems]);  
      closeActiveModal();
    })
    .catch((err) => {
      console.error(err);
    })
  }

const handleDeleteItem = (_id) => {
  deleteItems(_id)
    .then(() => {
      setClothingItems((items) =>
        items.filter((item) => item._id !== _id)
      );
      closeActiveModal();
    })
    .catch((err) => {
      console.error(err);
    });
};

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

    useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
      <div className="app">
        <div className="app__content">
          <Header onAddClick={onAddClick} weatherData={weatherData} />
          <Routes>
            <Route path="/" element={<Main weatherData={weatherData} onCardClick={handleCardClick} 
            clothingItems={clothingItems} />}></Route>
            <Route path="/profile" element={<Profile onCardClick={handleCardClick}  clothingItems={clothingItems}  onAddClick={onAddClick}/>}></Route>
          </Routes>
          <Footer />
        </div>
        <AddItemModal isOpen={activeModal === "add-garment"} activeModal={activeModal} closeActiveModal={closeActiveModal} onAddItemModalSubmit={handleAddItemModalSubmit}></AddItemModal>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
          onDelete ={handleDeleteItem}
          clothingItems={clothingItems}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

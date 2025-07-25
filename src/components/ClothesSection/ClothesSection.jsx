import "../ClothesSection/ClothesSection.css"
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({clothingItems, onCardClick, onAddClick}){
    return(
        <div className="clothes-section">
            <div className="clothes-section__container">
            <p className="clothes-section__title">Your Items</p>
            <button type="button" className="clothes-section__button" onClick={onAddClick}>+ Add New </button>
            </div>
            <ul className="clothes-section__items">
          {clothingItems
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
        </div>
    )
}

export default ClothesSection;
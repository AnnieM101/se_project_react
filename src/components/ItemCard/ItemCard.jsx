import '../ItemCard/ItemCard.css'

function ItemCard({ item, handleCardClick,  }) {
  const handleItemClick = (item) => {
    handleCardClick(item);
    console.log("Clicked item:", item);
  }

  return (
    <li className='item-card'>
      <h2 className='item-card__name'>{item.name}</h2>
      <img onClick={() => handleItemClick(item)} className='item-card__image' src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;

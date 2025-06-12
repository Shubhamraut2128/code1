
function selectCard(cardElement, boxId) {

  const cards = document.querySelectorAll('.card');


  cards.forEach(card => {
    card.classList.remove('selected');
    const radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = false;
    }
  });

 
  cardElement.classList.add('selected');
  const radio = cardElement.querySelector('input[type="radio"]');
  if (radio) {
    radio.checked = true;
  }
}


function addToCart() {
  const selectedCard = document.querySelector('.card.selected');

  if (!selectedCard) {
    alert("⚠️ Please select a bundle option first.");
    return;
  }


  const selectedLabel = selectedCard.querySelector('.card-header span').textContent;

 
  const selects = selectedCard.querySelectorAll('select');
  let selections = [];

  selects.forEach(select => {
    const label = select.parentElement.textContent.trim().replace(':', '');
    const value = select.value;
    selections.push(`${label}: ${value}`);
  });

  const optionsSummary = selections.join(', ');

  
  alert(`✅ Added to cart: ${selectedLabel}\n🧾 Options: ${optionsSummary}`);
}

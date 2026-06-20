document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const filterSection = document.getElementById('filter-section');
  const btnRecommend = document.getElementById('btn-recommend');
  const errorMessage = document.getElementById('error-message');
  const rouletteContainer = document.getElementById('roulette-container');
  const rouletteText = document.getElementById('roulette-text');
  const resultContainer = document.getElementById('result-container');
  
  // Result Card Elements
  const resCategory = document.getElementById('res-category');
  const resLocation = document.getElementById('res-location');
  const resName = document.getElementById('res-name');
  const resMenu = document.getElementById('res-menu');
  const resPrice = document.getElementById('res-price');
  const btnMap = document.getElementById('btn-map');
  const btnRetry = document.getElementById('btn-retry');

  // Currently selected restaurant reference
  let selectedRestaurant = null;

  // Initialize: ensure clean state
  resetToFilterView();

  // Button: Recommend Click Handler
  btnRecommend.addEventListener('click', () => {
    // 1. Get filter options
    const checkedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
      .map(cb => cb.value);
    
    const selectedLocation = document.querySelector('input[name="location"]:checked').value;
    const selectedPriceLimit = document.querySelector('input[name="price"]:checked').value;

    // Validation: Category must be selected
    if (checkedCategories.length === 0) {
      showError("음식 종류를 최소 하나 이상 선택해 주세요!");
      return;
    }

    // 2. Filter Restaurants
    const filteredRestaurants = RESTAURANTS_DATA.filter(res => {
      // Category match
      const categoryMatch = checkedCategories.includes(res.category);
      
      // Location match
      const locationMatch = (selectedLocation === 'all') || (res.location === selectedLocation);
      
      // Price match (10k = under or equal to 10,000 KRW)
      const priceMatch = (selectedPriceLimit === 'any') || (res.price <= 10000);

      return categoryMatch && locationMatch && priceMatch;
    });

    // 3. Handle No Results
    if (filteredRestaurants.length === 0) {
      showError("조건에 일치하는 맛집이 없습니다. 필터를 조정해 주세요!");
      return;
    }

    // Clear error if any
    hideError();

    // 4. Trigger Roulette Animation
    startRoulette(filteredRestaurants);
  });

  // Button: Retry Click Handler
  btnRetry.addEventListener('click', () => {
    resetToFilterView();
  });

  // Button: Map Click Handler
  btnMap.addEventListener('click', () => {
    if (selectedRestaurant && selectedRestaurant.mapUrl) {
      window.open(selectedRestaurant.mapUrl, '_blank');
    }
  });

  // Helper: Show Error Message
  function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
  }

  // Helper: Hide Error Message
  function hideError() {
    errorMessage.style.display = 'none';
  }

  // Helper: Reset to initial filter state
  function resetToFilterView() {
    filterSection.style.display = 'block';
    btnRecommend.style.display = 'flex';
    btnRecommend.disabled = false;
    
    rouletteContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    hideError();
    selectedRestaurant = null;
  }

  // Helper: Roulette effect
  function startRoulette(restaurantList) {
    // Hide inputs, show roulette
    filterSection.style.display = 'none';
    btnRecommend.style.display = 'none';
    rouletteContainer.style.display = 'flex';
    
    // Choose list of menu display pools (can fall back to general menus if list is small)
    const displayPool = restaurantList.map(r => r.menu);
    let counter = 0;
    const duration = 1500; // 1.5 seconds roulette
    const intervalTime = 70; // speed of cycling (70ms)
    
    const interval = setInterval(() => {
      // Pick a random menu from the pool to show in the roulette text
      const randomMenuName = displayPool[Math.floor(Math.random() * displayPool.length)];
      rouletteText.textContent = randomMenuName;
      counter += intervalTime;
      
      if (counter >= duration) {
        clearInterval(interval);
        
        // Final draw
        const finalPick = restaurantList[Math.floor(Math.random() * restaurantList.length)];
        showResult(finalPick);
      }
    }, intervalTime);
  }

  // Helper: Display final result card
  function showResult(restaurant) {
    selectedRestaurant = restaurant;
    
    // Bind data to DOM
    resCategory.textContent = restaurant.category;
    resLocation.textContent = `📍 ${restaurant.location}`;
    resName.textContent = restaurant.name;
    resMenu.textContent = restaurant.menu;
    resPrice.textContent = `${restaurant.price.toLocaleString()}원`;

    // Hide roulette, show result container
    rouletteContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  }
});

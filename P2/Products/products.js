const tasks = [
    {
        "title": "Blue Floral Hawaiian Shirt",
        "img": "Hawaiian shirts/anotherblueflower-shirt.png",
        "category": 'flowers, blue',
    },
    {
        "title": "Black Hawaiian Shirt",
        "img": 'Hawaiian shirts/black-flower-shirt.png',
        "category": 'black, flowers',
    },
    {
        "title": "Minimalst Floral Hawaiian Shirt",
        "img": 'Hawaiian shirts/black-green-red-flower-shirt.png',
        "category": 'black, green, red, flowers',
    },
    {
      "title": "Blue Car Hawaiian Shirt",
      "img": 'Hawaiian shirts/blue-car-surf-parm-shirt.png',
      "category": 'blue, cars, surfers, palmtrees',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt2.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt3.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt4.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt6.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt7.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt8.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt9.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt10.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-shirt11.png',
    "category": 'blue, flowers',
  },
  {
    "title": "Blue flower waves Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-flower-wave-shirt.png',
    "category": 'blue, flowers, waves',
  },
  {
    "title": "Blue hula and fish Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-hula-fish-wave-palm-flower-shirt.png',
    "category": 'blue, flowers, palm trees, fish, hula, waves',
  },
  {
    "title": "Blue hula waves Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-hula-wave-flower-surf-shirt.png',
    "category": 'blue, flowers, huladancers, beaches, surfers',
  },
  {
    "title": "Blue pineapples palmtrees flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-pineapple-palm-flower-surf-fish-shirt.png',
    "category": 'blue, pineapples, palmtrees, beaches, flowers,fish,surfers',
  },
  {
    "title": "Blue pineapples beaches Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-pineapple-palm-shirt.png',
    "category": 'blue, pineapples, palmtrees',
  },
  {
    "title": "Blue pineapples Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-pineapple-shirt.png',
    "category": 'blue, pineapples',
  },
  {
    "title": "Blue pineapples ukulele Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-pineapple-ukulele-shirt.png',
    "category": 'blue, pineapples,ukuleles',
  },
  {
    "title": "Blue wave Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-wave-shirt.png',
    "category": 'blue, beaches',
  },
  {
    "title": "Blue white pineapple flower Hawaiian Shirt",
    "img": 'Hawaiian shirts/blue-white=pineapple-flower-shirt.png',
    "category": 'blue, white, pineapples, flowers',
  },
  {
    "title": "fish parmtree beaches Hawaiian Shirt",
    "img": 'Hawaiian shirts/fish-palm-waves-blue-shirt.png',
    "category": 'fish, palmtrees, beaches, blue',
  },
  {
    "title": "flowers blue Hawaiian Shirt",
    "img": 'Hawaiian shirts/flower-blue-shirt.png',
    "category": 'flowers, blue',
  },
  {
    "title": "flowers blue Hawaiian Shirt",
    "img": 'Hawaiian shirts/flower-pattern-blue-shirt.png',
    "category": 'flowers, blue',
  },
  {
    "title": "flowers white green pink Hawaiian Shirt",
    "img": 'Hawaiian shirts/flower-white-green-pink-shirt.png',
    "category": 'flowers, white, green, pink',
  },
  {
    "title": "green yellow fish Hawaiian Shirt",
    "img": 'Hawaiian shirts/green-yellow-fish-shirt.png',
    "category": 'yellow, fish, green',
  },
    // Add more tasks as needed
  ];
// green-yellow-fish-shirt.png Hawaiian shirts/hula-blue-ukulele-pineapple-flower-pattern.png Hawaiian shirts/hula-blue-ukulele-pineapple-flower-shirt.png Hawaiian shirts/hula-palm-flower-blue-pattern.png Hawaiian shirts/hula-palm-flower-blue-shirt.png Hawaiian shirts/island-palm-blue-pattern.png Hawaiian shirts/island-palm-blue-shirt.png Hawaiian shirts/orange-flower-palm-wave-pattern.png Hawaiian shirts/orange-flower-palm-wave-shirt.png Hawaiian shirts/palm-white-pattern.png Hawaiian shirts/palm-white-shirt.png Hawaiian shirts/pink-flower-pattern.png Hawaiian shirts/pink-flower-shirt.png Hawaiian shirts/pink-purple-flower-palm-pattern.jpg Hawaiian shirts/pink-purple-flower-palm-shirt.png Hawaiian shirts/pink-red-palm-hula-flower-pattern.png Hawaiian shirts/pink-red-palm-hula-flower-shirt.png Hawaiian shirts/pink-red-pineapple-palm-hula-ukulele-pattern.jpg Hawaiian shirts/pink-red-pineapple-palm-hula-ukulele-shirt.png Hawaiian shirts/purple-flower-pattern.png Hawaiian shirts/purple-flower-pattern2.png Hawaiian shirts/purple-flower-shirt.png Hawaiian shirts/purple-flower-shirt2.png Hawaiian shirts/red-flower-pattern.png Hawaiian shirts/red-flower-shirt.png Hawaiian shirts/red-hula-wave-flower-palm-pattern.png Hawaiian shirts/red-hula-wave-flower-palm-shirt.png Hawaiian shirts/red-pineapple-flower-pattern.png Hawaiian shirts/red-pineapple-flower-shirt.png Hawaiian shirts/red-white-flower-pattern.png Hawaiian shirts/red-white-flower-shirt.png Hawaiian shirts/white-flower-pattern.png Hawaiian shirts/white-flower-shirt.png Hawaiian shirts/white-yellow-green-flower-pattern.png Hawaiian shirts/white-yellow-green-flower-shirt.png
  
    // Function to render images based on selected categories
function renderContent() {
    const toolbox = document.getElementById('toolbox');
    const filterOptions = document.querySelectorAll('#filter-options input[type="checkbox"]:checked');
    const selectedCategories = Array.from(filterOptions).map(option => option.value);
  
    toolbox.innerHTML = '';
  
    tasks.forEach(task => {
      const categories = task.category.split(', ');
  
      // Check if any of the selected categories match the task's categories
      if (selectedCategories.some(category => categories.includes(category))) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
  
        const img = document.createElement('img');
        img.src = task.img;
        img.alt = task.title;
  
        const title = document.createElement('p');
        title.textContent = task.title;
  
        taskElement.appendChild(img);
        taskElement.appendChild(title);
        toolbox.appendChild(taskElement);
      }
    });
  }
  
  // Event listener to re-render content when checkboxes are clicked
  document.querySelectorAll('#filter-options input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', renderContent);
  });
  
  // Initial render
  renderContent();
  
    
function showImages(option) {
    // Get the image gallery container
    const imageGallery = document.getElementById('imageGallery');
    // Remove any existing images
    imageGallery.innerHTML = '';
  
    // Add images based on the selected option
    if (option === 'all') {
      // Code to add all photos
      imageGallery.innerHTML += `
      <img src="img1.jpg" alt="img1">
      <img src="img2.jpg" alt="img2">
      <img src="img3.jpg" alt="img3">
      <img src="img4.jpg" alt="img4">
      <img src="img5.jpg" alt="img5">
      <img src="img6.jpg" alt="img6">
      <img src="img7.jpg" alt="img7">
      <img src="img8.jpg" alt="img8">
      <img src="img9.jpg" alt="img9">
        <!-- Add more images as needed -->
      `;
    } else if (option === 'ss') {
      // Code to add screenshots
      imageGallery.innerHTML += `
      <img src="img9.jpg" alt="img1">
      <img src="img8.jpg" alt="img2">
      <img src="img7.jpg" alt="img3">
      <img src="img6.jpg" alt="img4">
      <img src="img5.jpg" alt="img5">
      <img src="img4.jpg" alt="img6">
      <img src="img3.jpg" alt="img7">
      <img src="img2.jpg" alt="img8">
      <img src="img1.jpg" alt="img9">
        <!-- Add more screenshots as needed -->
      `;
    } else if (option === 'wU') {
      // Code to add WhatsUp-images
      imageGallery.innerHTML += `
      <img src="img1.jpg" alt="img1">
      <img src="img2.jpg" alt="img2">
      <img src="img3.jpg" alt="img3">
      <img src="img4.jpg" alt="img4">
      <img src="img5.jpg" alt="img5">
      <img src="img6.jpg" alt="img6">
      <img src="img7.jpg" alt="img7">
      <img src="img8.jpg" alt="img8">
      <img src="img9.jpg" alt="img9">
        <!-- Add more WhatsUp-images as needed -->
      `;
    } else if (option === 'fav') {
      // Code to add favorite images
      imageGallery.innerHTML += `
      <img src="img1.jpg" alt="img1">
      <img src="img2.jpg" alt="img2">
      <img src="img3.jpg" alt="img3">
      <img src="img4.jpg" alt="img4">
      <img src="img5.jpg" alt="img5">
        <!-- Add more favorite images as needed -->
      `;
    }
  }
  function toggleLeftNavbar() {
    const leftNavbar = document.getElementById('leftNavbar');
    leftNavbar.classList.toggle('hidden'); // Toggle the 'hidden' class
  }

  
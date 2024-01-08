import React, { useState, useEffect } from "react";

function Herosection() {
  const images = [
    "https://raw.githubusercontent.com/2001abhishek/private_repo/main/Hero_page.JPG",
    "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.nvidia.com/content/dam/en-zz/Solutions/drivers/home/promo-banners/us/geforce-ada-40-series-web-nv-sfg-2560x1440.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [currentImageIndex, images.length]);

  return (
    <div>
      <img className="w-[500px] h-[150px] md:w-[1920px] md:h-[400px] object-cover" src={images[currentImageIndex]} alt="" />
    </div>
  );
}

export default Herosection;
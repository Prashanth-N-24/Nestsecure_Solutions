import React from 'react'

const Map = () => {
      const containerStyle = {
    width: "100%",
    height: "500px", // Customize height as needed
  };

  const center = {
    lat: 12.837230, // Example latitude (San Francisco)
    lng: 77.785805, // Example longitude
  };
  return (
    <div className="flex justify-center items-center p-4">
      <LoadScript googleMapsApiKey="AlzaSyZpkJgZUHuU7y4duzIvHa2bnkUK2LS76ha">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Optional Marker */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};



export default Map
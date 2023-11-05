import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../../src/index.css';

const Leaflet = () => {
  const position = [23.8103, 90.4125];
  return (
    <div className="mb-10">
      <div className="hero max-w-7xl mx-auto py-14 px-6 lg:px-0">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center">
          <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Find us Here. <br /> Visit Our Office.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center lg:text-left mt-4">
              Meet us in Our Office!
            </h1>
            <p className="py-6">
              Find us in the heart of Dhaka, Bangladesh. Our office is a vibrant
              hub of creativity and collaboration. Explore the map below to get
              a sense of our inspiring workspace. We look forward to welcoming
              you here.
            </p>
            <div className="py-6">
              <p>Address: Dhanmondi 27, Dhanmondi, Dhaka, Bangladesh.</p>
              <p>Call us Now: (+880)-178952528</p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button className="btn btn-secondary">Call Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leaflet;

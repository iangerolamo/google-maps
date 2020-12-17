import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { latitude: -21.9998595, longitude: -47.8942138, local: "Home" },
        { latitude: -22.0191882, longitude: -47.8723489, local: "Bola" },]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      />
    })
  }

  render() {
    return (

      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{ lat: -21.9998595, lng: -47.8942138 }}
      >
         {this.displayMarkers()}
      </Map>

    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: '',
  }
))(MapContainer)
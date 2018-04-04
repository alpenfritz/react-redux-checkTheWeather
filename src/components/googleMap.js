import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    // create embedded map
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map (reference to a html node)
    return <div ref="map" />
  }
}

export default GoogleMap;

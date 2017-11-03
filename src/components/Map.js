import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 300px;
  width: 100%;
`

const bnCoord = {
  lat: 44.597923,
  lng: 0.873799,
}

const Map = () => (
  <Wrapper>
    <ReactGoogleMapLoader
      params={{
        key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
      }}
      style={{height: "100%"}}
      render={googleMaps => {
        return (
          googleMaps && (
            <ReactGoogleMap
              googleMaps={googleMaps}
              coordinates={[
                {
                  title: "Bosc Nègre",
                  position: bnCoord,
                },
              ]}
              center={bnCoord}
              zoom={8}
            />
          )
        )
      }}
    />
  </Wrapper>
)

export default Map

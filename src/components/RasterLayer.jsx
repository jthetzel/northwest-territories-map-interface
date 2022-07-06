import React, { useContext, useState } from 'react'
import { Source, Layer, useMap } from 'react-map-gl'

import useSource from '../hooks/useSource'
import {
  defaultRasterUrl,
} from '../config'


function RasterLayer ({
  id = 'mosaic',
  rasterUrl = defaultRasterUrl,
  type = 'raster',
  debug = false
}) {
  if (debug) {
    console.log({ id })
    console.log({ rasterUrl })
  }

  const { current: mapContext } = useMap()
  const map = mapContext.getMap()
  // const { current: map } = useMap()
  // m.style._sourceCaches['other:mosaic']
  
  console.log({map})
  window.map = map
  window.mapContext = mapContext
  useSource({ mapContext, url: rasterUrl, id })

  return (
    <Source id={id} type={type} tiles={[rasterUrl]}>
      <Layer id={id} type={type} />
    </Source>
  )
}

export default RasterLayer

import { createGlobalStyle } from 'styled-components'

import GeometriaEot from 'assets/fonts/Geometria/Geometria.eot'
import GeometriaTtf from 'assets/fonts/Geometria/Geometria.ttf'
import GeometriaWoff from 'assets/fonts/Geometria/Geometria.woff'
import GeometriaWoff2 from 'assets/fonts/Geometria/Geometria.woff2'

import GeometriaBoldEot from 'assets/fonts/Geometria/Geometria-Bold.eot'
import GeometriaBoldTtf from 'assets/fonts/Geometria/Geometria-Bold.ttf'
import GeometriaBoldWoff from 'assets/fonts/Geometria/Geometria-Bold.woff'
import GeometriaBoldWoff2 from 'assets/fonts/Geometria/Geometria-Bold.woff2'

import GeometriaExtraBoldEot from 'assets/fonts/Geometria/Geometria-ExtraBold.eot'
import GeometriaExtraBoldTtf from 'assets/fonts/Geometria/Geometria-ExtraBold.ttf'
import GeometriaExtraBoldWoff from 'assets/fonts/Geometria/Geometria-ExtraBold.woff'
import GeometriaExtraBoldWoff2 from 'assets/fonts/Geometria/Geometria-ExtraBold.woff2'

import GeometriaLightEot from 'assets/fonts/Geometria/Geometria-Light.eot'
import GeometriaLightTtf from 'assets/fonts/Geometria/Geometria-Light.ttf'
import GeometriaLightWoff from 'assets/fonts/Geometria/Geometria-Light.woff'
import GeometriaLightWoff2 from 'assets/fonts/Geometria/Geometria-Light.woff2'

import GilroyExtraBoldOtf from 'assets/fonts/Gilroy-FREE/Gilroy-ExtraBold.otf'
import GilroyLightOtf from 'assets/fonts/Gilroy-FREE/Gilroy-Light.otf'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Geometria';
    font-weight: 400;
    font-style: normal;
    src: url(${GeometriaEot});
    src: url(${GeometriaEot}) format('embedded-opentype'),
      url(${GeometriaWoff2}) format('woff2'),
      url(${GeometriaWoff}) format('woff'),
      url(${GeometriaTtf}) format('truetype'),
  }

  @font-face {
    font-family: 'Geometria';
    font-weight: 700;
    font-style: normal;
    src: url(${GeometriaBoldEot});
    src: url(${GeometriaBoldEot}) format('embedded-opentype'),
      url(${GeometriaBoldWoff2}) format('woff2'),
      url(${GeometriaBoldWoff}) format('woff'),
      url(${GeometriaBoldTtf}) format('truetype'),
  }

  @font-face {
    font-family: 'Geometria';
    font-weight: 800;
    font-style: normal;
    src: url(${GeometriaExtraBoldEot});
    src: url(${GeometriaExtraBoldEot}) format('embedded-opentype'),
      url(${GeometriaExtraBoldWoff2}) format('woff2'),
      url(${GeometriaExtraBoldWoff}) format('woff'),
      url(${GeometriaExtraBoldTtf}) format('truetype'),
  }

  @font-face {
    font-family: 'Geometria';
    font-weight: 300;
    font-style: normal;
    src: url(${GeometriaLightEot});
    src: url(${GeometriaLightEot}) format('embedded-opentype'),
      url(${GeometriaLightWoff2}) format('woff2'),
      url(${GeometriaLightWoff}) format('woff'),
      url(${GeometriaLightTtf}) format('truetype'),
  }

  @font-face {
    font-family: 'Geometria';
    font-weight: 300;
    font-style: normal;
    src: url(${GeometriaLightEot});
    src: url(${GeometriaLightEot}) format('embedded-opentype'),
      url(${GeometriaLightWoff2}) format('woff2'),
      url(${GeometriaLightWoff}) format('woff'),
      url(${GeometriaLightTtf}) format('truetype'),
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 800;
    font-style: normal;
    src: url(${GilroyExtraBoldOtf}) format('opentype')
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 300;
    font-style: normal;
    src: url(${GilroyLightOtf}) format('opentype')
  }
`

export default GlobalFonts

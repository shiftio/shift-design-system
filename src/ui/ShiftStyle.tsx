import React from "react";
import { Global, css } from "@emotion/core"
import { Theme } from "./theme"

export const ShiftStyle = () => (
    <div>
        <Global
        styles={css`
        @import url("//hello.myfonts.net/count/390c9b");
        @font-face {font-family: 'ProximaNovaA-Black';src: url('/fonts/Only_A/webfonts/390C9B_0_0.eot');src: url('/fonts/Only_A/webfonts/390C9B_0_0.eot?#iefix') format('embedded-opentype'),url('/fonts/Only_A/webfonts/390C9B_0_0.woff2') format('woff2'),url('/fonts/Only_A/webfonts/390C9B_0_0.woff') format('woff'),url('/fonts/Only_A/webfonts/390C9B_0_0.ttf') format('truetype');}
        @font-face {font-family: 'ProximaNovaA-Bold';src: url('/fonts/Only_A/webfonts/390C9B_1_0.eot');src: url('/fonts/Only_A/webfonts/390C9B_1_0.eot?#iefix') format('embedded-opentype'),url('/fonts/Only_A/webfonts/390C9B_1_0.woff2') format('woff2'),url('/fonts/Only_A/webfonts/390C9B_1_0.woff') format('woff'),url('/fonts/Only_A/webfonts/390C9B_1_0.ttf') format('truetype');}
        @font-face {font-family: 'ProximaNovaA-Extrabld';src: url('/fonts/Only_A/webfonts/390C9B_2_0.eot');src: url('/fonts/Only_A/webfonts/390C9B_2_0.eot?#iefix') format('embedded-opentype'),url('/fonts/Only_A/webfonts/390C9B_2_0.woff2') format('woff2'),url('/fonts/Only_A/webfonts/390C9B_2_0.woff') format('woff'),url('/fonts/Only_A/webfonts/390C9B_2_0.ttf') format('truetype');}
        @font-face {font-family: 'ProximaNovaA-Light';src: url('/fonts/Only_A/webfonts/390C9B_3_0.eot');src: url('/fonts/Only_A/webfonts/390C9B_3_0.eot?#iefix') format('embedded-opentype'),url('/fonts/Only_A/webfonts/390C9B_3_0.woff2') format('woff2'),url('/fonts/Only_A/webfonts/390C9B_3_0.woff') format('woff'),url('/fonts/Only_A/webfonts/390C9B_3_0.ttf') format('truetype');}
        @font-face {font-family: 'ProximaNovaA-Medium';src: url('/fonts/Only_A/webfonts/390C9B_4_0.eot');src: url('/fonts/Only_A/webfonts/390C9B_4_0.eot?#iefix') format('embedded-opentype'),url('/fonts/Only_A/webfonts/390C9B_4_0.woff2') format('woff2'),url('/fonts/Only_A/webfonts/390C9B_4_0.woff') format('woff'),url('/fonts/Only_A/webfonts/390C9B_4_0.ttf') format('truetype');}
        @font-face {font-family: 'ProximaNovaA-Thin';src: url('/fonts/Only_A/webfonts/390C9B_5_0.eot');src: url('/fonts/Only_A/webfonts/390C9B_5_0.eot?#iefix') format('embedded-opentype'),url('/fonts/Only_A/webfonts/390C9B_5_0.woff2') format('woff2'),url('/fonts/Only_A/webfonts/390C9B_5_0.woff') format('woff'),url('/fonts/Only_A/webfonts/390C9B_5_0.ttf') format('truetype');}
        `}
        />
        <Global
        styles={{
            'html, body': {
            fontFamily:'ProximaNovaA-Light',
            fontSize: "14px",
            color: Theme.colors.text.dark
            },
            'strong': {
                fontFamily:'ProximaNovaA-Bold',
            },
            'b': {
                fontFamily:'ProximaNovaA-ExtraBld',
            }
        }}
        />
    </div>
)
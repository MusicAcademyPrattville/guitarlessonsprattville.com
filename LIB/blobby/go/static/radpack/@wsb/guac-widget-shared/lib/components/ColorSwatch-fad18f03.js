define("@wsb/guac-widget-shared/lib/components/ColorSwatch-fad18f03.js",["exports"],(function(e){"use strict";const o=({color:e,isActive:o,inStock:t,isSmall:r})=>{const l=t||void 0===t,a=r?"24px":"38px",c=r?"20px":"32px",n={borderRadius:"50%",borderWidth:"1px",borderStyle:"solid"},i={outer:{...n,display:"flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderColor:o?"lowContrast":"transparent"},inner:{...n,borderColor:"ultraLowContrast",color:"ultraLowContrast",width:c,height:c,background:l?e:`linear-gradient(to left top, ${e} calc(50% - 1px), currentColor, ${e} calc(50% + 1px) )`}};return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:i.outer},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:i.inner}))};o.propTypes={color:(global.PropTypes||guac["prop-types"]).string.isRequired,isActive:(global.PropTypes||guac["prop-types"]).bool,inStock:(global.PropTypes||guac["prop-types"]).bool,isSmall:(global.PropTypes||guac["prop-types"]).bool},e.default=o,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);


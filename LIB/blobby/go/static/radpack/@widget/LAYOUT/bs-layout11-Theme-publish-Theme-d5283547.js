define("@widget/LAYOUT/bs-layout11-Theme-publish-Theme-d5283547.js",["exports","~/c/bs-_rollupPluginBabelHelpers","~/c/bs-index3","~/c/bs-themeOverrides","~/c/bs-modernThinRound","~/c/bs-defaultSocialIconPack","~/c/bs-loaders","~/c/bs-index"],(function(e,t,r,a,n,o,s,i){"use strict";const{colorPackCategories:l,buttons:g}=(global.Core||guac["@wsb/guac-widget-core"]).constants,{LIGHT:d,LIGHT_ALT:p,LIGHT_COLORFUL:u,DARK:c,DARK_ALT:m,DARK_COLORFUL:h,COLORFUL:y}=(global.Core||guac["@wsb/guac-widget-core"]).constants.paintJobs;var b={id:"layout11",name:"clarity",packs:{color:"019",font:"cabin"},logo:{font:"primary"},packCategories:{color:l.NEUTRAL},headerProperties:{alignmentOption:"center"},paintJobs:[d,p,u,y,h,m,c],defaultPaintJob:d,buttons:{primary:{fill:g.fills.SOLID,shape:g.shapes.SQUARE,decoration:g.decorations.NONE,shadow:g.shadows.NONE,color:g.colors.PRIMARY},secondary:{fill:g.fills.SOLID,shape:g.shapes.SQUARE,decoration:g.decorations.NONE,shadow:g.shadows.NONE,color:g.colors.PRIMARY},...i.C}};const{FULL_UNDERLINE:f}=i.s,H=["about1","content2","content4","introduction4","payment1","payment2"],{buttons:x}=(global.Core||guac["@wsb/guac-widget-core"]).constants,C={style:{font:"primary",color:"highContrast",fontSize:"xxlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}};class S extends r.D{constructor(){super(),this.mappedValues={...this.mappedValues,typographyOverrides:{LogoAlpha:{...C},HeadingAlpha:{...C},HeadingBeta:{style:{font:"primary",fontSize:"large",color:"highContrast",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingGamma:{style:{font:"alternate",fontSize:"xlarge",color:"highContrast",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingEpsilon:e=>({...r.m.call(this,"DetailsGamma",e)}),DetailsGamma:{style:{font:"alternate",color:"lowContrast",fontSize:"small",fontWeight:"normal",letterSpacing:"0.143em",textTransform:"uppercase"}},NavAlpha:{style:{font:"alternate",color:"highContrast",fontSize:"small",fontWeight:"normal",letterSpacing:"0.143em",textTransform:"uppercase"}},SubNavAlpha:{style:{font:"alternate",color:"section",fontSize:"small",fontWeight:"normal",letterSpacing:"none",textTransform:"none"}},ButtonAlpha:{style:{font:"alternate",fontWeight:"bold",letterSpacing:"0.143em",textTransform:"uppercase"}}}}}static get displayName(){return"Theme11"}static getMutatorDefaultProps(e,t){const r=super.getMutatorDefaultProps(e,t),a=i.W[t]||r.enableCircularImage;return"HEADER"===e?{...r,useCropBackground:!0,useAddress:!0,useBigLogo:!0,phoneOnSecondaryPage:!0,headerTreatmentsConfig:{},showAddressDefault:!0}:{...r,enableCircularImage:a}}static getWidgetDefaultProps(e,t){return{...super.getWidgetDefaultProps(e,t),...!H.includes(t)&&{alignmentOption:"left"}}}Section(e){let{children:t,skipDivider:r,...a}=e;const n={paddingVertical:"xlarge","@xs-only":{paddingVertical:"large"}};let o=this.merge({style:n,children:t},a);return"FOOTER"!==this.base.widgetType||r||(o=this.merge({style:n,children:(global.React||guac.react).createElement((global.React||guac.react).Fragment,null,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Divider,{style:{paddingVertical:"medium"}}),t)},a)),super.Section(o)}Hero(e){const t=(global._||guac.lodash).omit(e.style,["> :nth-child(n)"," > :last-child"]);return super.Hero(Object.assign(e,{style:t}))}Tagline(e){return super.Tagline(this.merge({style:{marginTop:"xsmall",width:"100%"},typography:"HeadingEpsilon"},e))}HeroText(e){let{alignmentOption:t,...r}=e;return super.SubTagline(this.merge({style:{overflowWrap:"break-word",wordWrap:"break-word",maxWidth:"100%",lineHeight:"1.25",marginBottom:"center"===t?"medium":"small"},typography:"BodyAlpha",featured:!1},r))}CardBannerHeading(e){return this.HeadingMajor(e)}ContentHeading(e){const{widgetPreset:t}=this.base;return"payment2"===t?this.HeadingMajor(e):super.ContentHeading(e)}ContentBasic(e){const t=-1===H.indexOf(this.base.widgetPreset)?{alignment:"left"}:{};return super.ContentBasic(this.merge(t,e))}ContentCard(e){const t=-1===H.indexOf(this.base.widgetPreset)?{alignment:"left"}:{},r="about1"===this.base.widgetPreset?{style:{alignItems:"center"}}:{};return super.ContentCard(this.merge(t,r,e))}Icon(e){return super.Icon(this.merge({iconPack:{...n.m,...o.s}},e))}Loader(e){return s.B.apply(this,[e])}Button(e){const{fill:t=this.getButtonDefaults().fill}=e,r=t!==x.fills.OPEN?{style:{transitionProperty:"background-color",transitionDuration:"medium",transitionTimingFunction:"ease-in-out"}}:{};return super.Button(this.merge(r,e))}SectionHeading(e){const t=this.base,r=this.merge({},a.s(t),a.b(t),a.c(t),a.a(t));return super.SectionHeading(this.merge({style:{"@xs-only":{marginBottom:"medium"}},sectionHeadingHR:f},r,e))}SectionSplitHeading(e){return this.SectionHeading(this.merge({style:{textAlign:"left"}},e))}Divider(e){const t=this.base.category,r="FOOTER"!==this.base.widgetType||"primary"!==t&&"accent"!==t?{}:{visibility:"hidden"};return super.Divider(this.merge(e,{style:r}))}Pipe(e){return super.Pipe(this.merge({style:{opacity:.4}},e))}Input(e){return super.Input(this.merge({typography:"BodyAlpha",style:{borderColor:"input",borderWidth:"xsmall",borderRadius:"none",paddingVertical:"small",paddingHorizontal:"small",borderStyle:"solid"}},e))}InputFloatLabelInput(e){return super.InputFloatLabelInput(this.merge({style:{paddingBottom:"xsmall"}},e))}InputFloatLabelLabel(e){return super.InputFloatLabelLabel(this.merge({style:{left:"16px"}},e))}InputSelect(e){return super.InputSelect(this.merge({typography:"BodyAlpha",style:{borderWidth:"xsmall",borderRadius:"medium",borderStyle:"solid"}},e))}Intro(e){return super.Intro(this.merge({alignment:"left"},e))}InputSelectElement(e){return super.InputSelectElement(this.merge({style:{paddingVertical:"small",paddingHorizontal:"small"}},e))}HeadingMajor(e){return super.HeadingMajor(this.merge({typography:"HeadingAlpha"},e))}HeadingMinor(e){return super.HeadingMinor(this.merge({typography:"HeadingDelta"},e))}Phone(e){const t="accent"===this.base.category?{"@xs-only":{color:"neutral"},"@sm-only":{color:"neutral"}}:{};return super.Phone(this.merge({typography:"BodyAlpha",featured:!1,style:t},e))}FeaturedHeading(e){return super.FeaturedHeading(this.merge({typography:"HeadingDelta"},e))}NavVerticalHeading(e){return super.NavVerticalHeading(this.merge({typography:"HeadingDelta"},e))}ContentBigHeading(e){return super.ContentBigHeading(this.merge({typography:"HeadingGamma"},e))}ContentBigText(e){return super.ContentBigText(this.merge({typography:"BodyAlpha"},e))}NavMenuLink(e){return super.NavMenuLink(this.merge({typography:"NavAlpha"},e))}ContactBarPhone(e){return super.ContactBarPhone(this.merge({style:{"@xs-only":{fontSize:"small"}}},e))}ContactBarAddress(e){return super.ContactBarAddress(this.merge({style:{"@xs-only":{fontSize:"small"}}},e))}ContactBarPipe(e){return super.ContactBarPipe(this.merge({style:{"@xs-only":{fontSize:"small"}}},e))}PromoBanner(e){return super.PromoBanner(this.merge({style:{paddingVertical:"xsmall"}},e))}PromoBannerText(e){return super.PromoBannerText(this.merge({style:{"@xs-only":{fontSize:"small"}}},e))}Image(e){return super.Image(this.merge({mobileGutterWidth:24},e))}EmbedVideo(e){let{isVerticalVideo:t,...r}=e;return t?super.EmbedVideo(this.merge({style:{maxHeight:"680px"}},r)):super.EmbedVideo(r)}WrapperInsetEmbedVideo(e){let{isVerticalVideo:t,...r}=e;return t?super.WrapperInsetEmbedVideo(this.merge({style:{maxHeight:"680px"}},r)):super.WrapperInsetEmbedVideo(r)}}t._(S,"config",b),t._(S,"excludedProps",(global._||guac.lodash).without(r.D.excludedProps,"address")),e.default=S,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);


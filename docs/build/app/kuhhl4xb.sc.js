/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{constructor(){this.state=0,this.nu=50}componentDidLoad(){setTimeout(()=>this.state=1,500),setInterval(()=>this.state++,7e3)}hostData(){return{style:{"--border-color":`${Math.random()<.5?"transparent":"black"}`,"--state":`${.1*this.state}`}}}render(){return Array.from({length:this.nu},(e,s)=>t("div",{class:{square:!0,odd:s%2==0},style:{"--index":`${s+1}`}})).reverse()}static get is(){return"app-home"}static get encapsulation(){return"shadow"}static get properties(){return{nu:{type:Number,attr:"nu"},state:{state:!0}}}static get style(){return"[data-app-home-host]{display:grid;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:center;--rotation:135deg;--rotation:225deg;--size-step:10px;--odd-color-step:5;--even-color-step:5;--center:12;height:100vh;width:100vw;contain:strict}.square[data-app-home]{--size:calc(40px + var(--index) * var(--size-step));display:block;width:var(--size);height:var(--size);-webkit-transform:rotateZ(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));transform:rotateZ(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));-webkit-transition-property:border-color,-webkit-transform;transition-property:border-color,-webkit-transform;transition-property:transform,border-color;transition-property:transform,border-color,-webkit-transform;-webkit-transition-duration:5s;transition-duration:5s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;grid-area:1/1;background:#fff;border-width:2px;border-style:solid;border-color:var(--border-color);-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform,border-color;contain:strict}.square.odd[data-app-home]{--luminance:calc(var(--index) * var(--odd-color-step));background:rgb(var(--luminance),var(--luminance),var(--luminance))}"}}export{e as AppHome};
(function(){"use strict";var __webpack_modules__={4468:function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5130),_App_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2350),_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8160),vant_lib_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2241),axios__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4373);async function fetchData(){try{const e=await fetch("./assets/example.json");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return t.examples}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}async function fetchUtils(){try{const e=await fetch("./assets/utils.json");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return t.calRisk}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}async function fetchScatter(){try{const e=await fetch("./assets/scatterData.json");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return t}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}async function fetchURL(){try{const e=await fetch("./assets/url.json");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return t.url}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}const app=(0,vue__WEBPACK_IMPORTED_MODULE_3__.Ef)(_App_vue__WEBPACK_IMPORTED_MODULE_0__.A);async function initializeApp(){const url=await fetchURL(),examples=await fetchData(),calRiskStr=await fetchUtils(),scatterData=await fetchScatter();app.config.globalProperties.$examples=examples,app.config.globalProperties.$calRisk=eval(calRiskStr.join("\n")),app.config.globalProperties.$predict=function(e,t=null){let a={type:e.model_type,record:{Age:e.Age||0,Gender:e.Gender||0,NIHSS:e.NIHSS||0,Diabetes_mellitus:e.Diabetes_mellitus||0,Hypertension:e.Hypertension||0,Atrial_fibrillation:e.Atrial_fibrillation||0,Time_from_onset_to_MRI:e.Time_from_onset_to_MRI||0,ADC_620:e.ADC_620||0,Tmax_4s:e.Tmax_4s||0,Tmax_6s:e.Tmax_6s||0,Tmax_8s:e.Tmax_8s||0,Tmax_10s:e.Tmax_10s||0,PWI_DWI_mismatch:e.PWI_DWI_mismatch||0,HIR:e.HIR||0}};axios__WEBPACK_IMPORTED_MODULE_4__.A.post(url+"predict",a).then((a=>{t.varRisk=a.data.probability.toFixed(6),t["count_"+e.model_type]=a.data[e.model_type]})).catch((e=>{this.error=e,console.error(e)}))},app.config.globalProperties.$scatterData=scatterData,axios__WEBPACK_IMPORTED_MODULE_4__.A.post(url+"hello").then((e=>{let t=e.data;app.config.globalProperties.$counts=t,app.use(_router__WEBPACK_IMPORTED_MODULE_1__.A).mount("#app")})).catch((e=>{console.error(e),app.config.globalProperties.$counts={home:-1,practical:-1,refined:-1},app.use(_router__WEBPACK_IMPORTED_MODULE_1__.A).mount("#app")}))}initializeApp()},8160:function(e,t,a){a.d(t,{A:function(){return It}});var i=a(1387),l=a(6329),n=(a(7540),a(6467)),r=(a(5769),a(2288)),o=(a(1876),a(8139)),s=(a(7057),a(7877)),d=(a(8859),a(6920)),c=(a(7762),a(6768)),p=a(4232);const u=e=>((0,c.Qi)("data-v-60bdaa59"),e=e(),(0,c.jt)(),e),m={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},_={class:"navigator"},h=u((()=>(0,c.Lk)("h2",{class:"right-title"},"Predict the Risk of HT",-1))),b={class:"nav-buttons"},x=u((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("h1",null,"Predict the Risk of Hemorrhagic transformation (HT) after Acute Ischemic Stroke (AIS)"),(0,c.Lk)("h2",null,"Hemorrhagic Transformation Prediction in Stroke")])],-1))),f={class:"home-page"},g={class:"content-wrapper"},v={class:"text-content"},k=(0,c.Fv)('<section data-v-60bdaa59><p data-v-60bdaa59><h3 data-v-60bdaa59>BACKGROUND AND PURPOSE</h3><p data-v-60bdaa59> Hemorrhagic transformation (HT) following acute ischemic stroke (AIS) critically affects patient prognosis. This study aims to develop reliable machine learning (ML) models for predicting HT in AIS patients using magnetic resonance imaging (MRI). </p></p><p data-v-60bdaa59><h3 data-v-60bdaa59>METHODS</h3><p data-v-60bdaa59> We enrolled 379 AIS patients, 131 with HT and 248 without. All underwent MRI, including diffusion-weighted imaging (DWI) and perfusion-weighted imaging (PWI), within 24 hours of symptom onset, and had follow-up CT or MRI within 14 days. Clinical baseline features and MRI parameters (volume of ADC &lt; 620 × 10 <sup data-v-60bdaa59>−6</sup> mm2/s, Tmax &gt; 4 s, 6 s, 8 s, 10 s, PWI-DWI mismatch area, and hypoperfusion intensity ratio [HIR]) were collected. Patients were randomly split into a training set (70%, n=265; 92 with HT) and a testing set (30%, n=114; 39 with HT). Six ML algorithms—Logistic Regression, Support Vector Machine, Decision Tree, XGBoost, LightGBM, and Random Forest—were trained and optimized using 5-fold cross-validation. 1,000 times’ shuffling was performed for the training set of each baseline model. Various fusion models were created, including soft voting, stacking, and integrating prior key patient characteristics into robust baseline models. The best-performing model was selected based on testing set performance. </p></p><p data-v-60bdaa59><h3 data-v-60bdaa59>RESULTS</h3><p data-v-60bdaa59> The Logistic Regression-based model was chosen as the practical model with a relatively high area under the curve (AUC) of 0.907 for its simplicity and efficiency by utilizing only three characteristics: the volume of Tmax &gt; 6 s, the National Institutes of Health Stroke Scale score at admission, and HIR with feature importance scores of 0.7507, 0.2269, and 0.0996, respectively. The refined fusion model, by utilizing HIR as a prior stratification parameter with cutoff value set as 0.5 and two robust baseline models (XGBoost and LightGBM), achieved the highest AUC of 0.9161 with an accuracy of 0.8947 among all fusion models and exceeded all baseline models. Both the practical and refined models are accessible at <a style="text-decoration:underline;color:black;" href="https://yike-wood.github.io/HT-Predict/" data-v-60bdaa59>https://yike-wood.github.io/HT-Predict/</a>. </p></p><p data-v-60bdaa59><h3 data-v-60bdaa59>CONCLUSIONS</h3><p data-v-60bdaa59> Both the practical and the refined ML model, leveraging MRI-DWI and PWI, reliably predict HT in AIS patients with high sensitivity and specificity, potentially aiding radiologists and clinicians in timely HT risk assessment post-MRI. </p></p></section>',1),y={style:{"max-width":"48%","min-width":"480px"}},w=u((()=>(0,c.Lk)("h3",{style:{color:"#000"}},"Risk calculator: ",-1))),L={style:{display:"flex","justify-content":"space-between"}},T={style:{"max-width":"50%","min-width":"500px"}},F={style:{"max-width":"48%","min-width":"480px",margin:"10px","padding-top":"5px",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px"}},R=u((()=>(0,c.Lk)("h4",{style:{margin:"8px","font-size":"medium",color:"#000","font-weight":"bold",height:"20px","text-align":"left"}},"Example",-1))),I=u((()=>(0,c.Lk)("h4",{style:{"margin-bottom":"0px"}},"Patient Name",-1))),H=u((()=>(0,c.Lk)("h4",{style:{"margin-bottom":"0px"}},"Patient ID",-1))),S=u((()=>(0,c.Lk)("h4",{style:{"margin-bottom":"0px"}},"Demo",-1))),A={style:{"font-size":"medium",color:"#000","font-weight":"bold",height:"20px","text-align":"left"}},D={style:{"font-size":"small",color:"dimgray","font-weight":"bold",height:"20px","text-align":"left"}},M={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},E={style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left","justify-content":"center"}},P={style:{"font-style":"italic","font-weight":"bold",color:"black"}};function z(e,t,a,i,u,z){const V=d.$n,j=s.cG,C=o.fh,O=r.fv,q=n.fI,W=l.Qh;return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.Lk)("div",m,[(0,c.Lk)("div",_,[h,(0,c.Lk)("nav",b,[(0,c.bF)(V,{color:"black",type:"primary",tag:"router-link",to:"/"},{default:(0,c.k6)((()=>[(0,c.eW)("Home")])),_:1})])])]),x,(0,c.Lk)("div",f,[(0,c.Lk)("div",g,[(0,c.Lk)("div",v,[k,(0,c.bF)(j),(0,c.Lk)("div",y,[(0,c.bF)(C,{center:""},{title:(0,c.k6)((()=>[w])),value:(0,c.k6)((()=>[(0,c.Lk)("div",L,[(0,c.bF)(V,{style:{flex:"1",margin:"10px"},type:"primary",size:"mini",color:"cornflowerblue",tag:"router-link",to:"/Calculator/practical"},{default:(0,c.k6)((()=>[(0,c.eW)("Practical Model")])),_:1}),(0,c.bF)(V,{style:{flex:"1",margin:"10px"},type:"primary",size:"mini",color:"cornflowerblue",tag:"router-link",to:"/Calculator/refined"},{default:(0,c.k6)((()=>[(0,c.eW)("Refined Model")])),_:1})])])),_:1})]),(0,c.Lk)("div",T,[(0,c.Lk)("div",F,[(0,c.bF)(W,{inset:"",style:{"--van-cell-group-background":"white"},title:""},{default:(0,c.k6)((()=>[(0,c.bF)(q,null,{default:(0,c.k6)((()=>[(0,c.bF)(O,{span:"8"},{default:(0,c.k6)((()=>[R])),_:1}),(0,c.bF)(O,{span:"8"}),(0,c.bF)(O,{span:"8"})])),_:1}),(0,c.bF)(q,{style:{"margin-left":"8px"}},{default:(0,c.k6)((()=>[(0,c.bF)(O,{span:"8"},{default:(0,c.k6)((()=>[I])),_:1}),(0,c.bF)(O,{span:"8"},{default:(0,c.k6)((()=>[H])),_:1}),(0,c.bF)(O,{span:"8"},{default:(0,c.k6)((()=>[S])),_:1})])),_:1}),(0,c.bF)(j,{style:{margin:"8px"}}),((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(u.examples,((e,t)=>((0,c.uX)(),(0,c.CE)("li",{key:t,style:{"list-style-type":"none"}},[(0,c.bF)(q,{style:{"margin-left":"8px"}},{default:(0,c.k6)((()=>[(0,c.bF)(O,{span:"8"},{default:(0,c.k6)((()=>[(0,c.Lk)("h4",A,(0,p.v_)(e.name),1)])),_:2},1024),(0,c.bF)(O,{span:"8"},{default:(0,c.k6)((()=>[(0,c.Lk)("h4",D,(0,p.v_)(e.id),1)])),_:2},1024),(0,c.bF)(O,{span:"8"},{default:(0,c.k6)((()=>[(0,c.bF)(V,{style:{height:"20px"},type:"primary",size:"mini",color:"cornflowerblue",onClick:z.gotoExample,"data-id":e.id},{default:(0,c.k6)((()=>[(0,c.eW)("View")])),_:2},1032,["onClick","data-id"])])),_:2},1024)])),_:2},1024),(0,c.bF)(j,{style:{margin:"8px"}})])))),128))])),_:1})])])])])]),(0,c.Lk)("div",M,[(0,c.Lk)("div",E,[(0,c.Lk)("div",null,[(0,c.Lk)("h2",P,(0,p.v_)(`Total Page Views: ${u.countHome}`),1)])])])])}a(4114);var V=a(144),j={name:"SweetHome",data(){return{examples:(0,V.KR)([]),countHome:0}},methods:{gotoExample(e){const t=e.target.dataset.id;this.$router.push({name:"MoTools",params:{id:t}})}},mounted(){this.examples=[...this.$examples],console.log("mounted home"),this.countHome=this.$counts["home"]}},C=a(1241);const O=(0,C.A)(j,[["render",z],["__scopeId","data-v-60bdaa59"]]);var q=O;const W=e=>((0,c.Qi)("data-v-66d46893"),e=e(),(0,c.jt)(),e),K={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},U={class:"navigator"},N=W((()=>(0,c.Lk)("h2",null,"Predict the Risk of HT",-1))),$={class:"nav-buttons"},B=W((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("h1",null,"Predict the Risk of Hemorrhagic transformation (HT) after Acute Ischemic Stroke (AIS)"),(0,c.Lk)("h2",null,"Hemorrhage Transformation Prediction in Stroke")])],-1))),G={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"720px",width:"100%","min-height":"320px",margin:"0",padding:"0"}},X={style:{background:"rgba(255, 255, 255, 0.9)",padding:"5px","max-width":"900px",width:"96%",display:"flex","justify-content":"center","border-color":"black","border-top-color":"black","border-style":"inset solid","border-radius":"10px"}},Q={class:"custom-row-divider",style:{width:"100%"}},J={class:"custom-row-divider",style:{width:"100%",display:"flex","flex-direction":"row"}},Y={class:"custom-divider",style:{width:"50%"}},Z={style:{width:"50%"}},ee={class:"custom-row-divider",style:{width:"100%",display:"flex","flex-direction":"row"}},te={class:"custom-divider",style:{width:"50%"}},ae={style:{width:"50%"}},ie={class:"custom-row-divider",style:{width:"100%",display:"flex","flex-direction":"row"}},le={class:"custom-divider",style:{width:"50%"}},ne={style:{width:"50%"}},re={class:"custom-row-divider",style:{width:"100%",display:"flex","flex-direction":"row"}},oe={class:"custom-divider",style:{width:"50%"}},se={style:{width:"50%"}},de={style:{width:"100%",display:"flex","flex-direction":"row"}},ce={class:"custom-divider",style:{width:"50%"}},pe={style:{width:"50%"}},ue={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0","padding-top":"10px","padding-bottom":"10px"}},me={style:{background:"rgba(255, 255, 255, 0.9)",padding:"5px","max-width":"1080px",width:"100%",display:"flex","flex-wrap":"wrap","justify-content":"center"}},_e={style:{"justify-content":"center","min-width":"450px","max-width":"594px",width:"60%",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px",margin:"0 auto","padding-left":"5px","padding-right":"5px"}},he=W((()=>(0,c.Lk)("div",{class:"custom-row-divider",style:{width:"100%","min-width":"300px","max-width":"528px",display:"flex","justify-content":"center"}},[(0,c.Lk)("h3",null,"Risk of HT")],-1))),be=W((()=>(0,c.Lk)("h4",{style:{color:"black","max-height":"30px",padding:"0px"}},"Practical Model (Risk of HT)",-1))),xe={style:{color:"#000","max-height":"30px",padding:"0px"}},fe=W((()=>(0,c.Lk)("h4",{style:{color:"black","max-height":"30px",padding:"0px"}},"Refined Model (Risk of HT)",-1))),ge={style:{color:"#000","max-height":"30px",padding:"0px"}},ve={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},ke={style:{background:"rgba(255, 255, 255, 0.9)",padding:"5px","max-width":"1080px",width:"100%",display:"flex","flex-wrap":"wrap","justify-content":"center"}},ye={class:"picDiv"},we=["src"],Le={class:"picDiv"},Te=["src"],Fe=W((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("div",null,[(0,c.Lk)("h2",{style:{"font-style":"italic","font-weight":"bold",color:"black"}},"Only for Research")])])],-1)));function Re(e,t,a,i,n,r){const u=d.$n,m=o.fh,_=l.Qh,h=s.cG;return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.Lk)("div",K,[(0,c.Lk)("div",U,[N,(0,c.Lk)("nav",$,[(0,c.bF)(u,{color:"black",type:"primary",tag:"router-link",to:"/"},{default:(0,c.k6)((()=>[(0,c.eW)("Home")])),_:1})])])]),B,(0,c.Lk)("div",G,[(0,c.Lk)("div",X,[(0,c.bF)(_,{inset:"",style:{width:"100%","text-align":"left","padding-top":"8px","padding-bottom":"8px"}},{default:(0,c.k6)((()=>[(0,c.Lk)("div",Q,[(0,c.bF)(m,{style:{padding:"5px",width:"40%","--van-cell-font-size":"20px","--van-cell-value-font-size":"18px","--van-cell-value-color":"black"},title:"Patient Name",value:n.example.name},null,8,["value"])]),(0,c.Lk)("div",J,[(0,c.Lk)("div",Y,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"Gender",value:n.example.Gender},null,8,["value"])]),(0,c.Lk)("div",Z,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"Hypertension",value:n.example.Hypertension},null,8,["value"])])]),(0,c.Lk)("div",ee,[(0,c.Lk)("div",te,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"Age",value:n.example.Age},null,8,["value"])]),(0,c.Lk)("div",ae,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"NIHSS",value:n.example.NIHSS},null,8,["value"])])]),(0,c.Lk)("div",ie,[(0,c.Lk)("div",le,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"Time from onset to MRI",value:n.example.Time_from_onset_to_MRI},null,8,["value"])]),(0,c.Lk)("div",ne,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"ADC < 620 * 10^(-6) Volume (mL)",value:n.example.ADC_620},null,8,["value"])])]),(0,c.Lk)("div",re,[(0,c.Lk)("div",oe,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"Tmax > 4s Volume (mL)",value:n.example.Tmax_4s},null,8,["value"])]),(0,c.Lk)("div",se,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"Tmax > 6 s Volume (mL)",value:n.example.Tmax_6s},null,8,["value"])])]),(0,c.Lk)("div",de,[(0,c.Lk)("div",ce,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"Tmax > 8s Volume (mL)",value:n.example.Tmax_8s},null,8,["value"])]),(0,c.Lk)("div",pe,[(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"12px","--van-cell-value-font-size":"12px","--van-cell-value-color":"black"},title:"Tmax > 10 s Volume (mL)",value:n.example.Tmax_10s},null,8,["value"])])])])),_:1})])]),(0,c.Lk)("div",ue,[(0,c.Lk)("div",me,[(0,c.Lk)("div",_e,[he,(0,c.bF)(m,{class:"custom-row-divider",style:{"min-width":"300px","max-width":"528px",width:"100%","max-height":"64px","text-align":"center","justify-self":"center",padding:"2px"}},{title:(0,c.k6)((()=>[be])),value:(0,c.k6)((()=>[(0,c.Lk)("h4",xe,(0,p.v_)(n.practicalRisk),1)])),_:1}),(0,c.bF)(m,{style:{"min-width":"300px","max-width":"528px",width:"100%","max-height":"64px","text-align":"center","justify-self":"center",padding:"2px"}},{title:(0,c.k6)((()=>[fe])),value:(0,c.k6)((()=>[(0,c.Lk)("h4",ge,(0,p.v_)(n.refinedRisk),1)])),_:1})])])]),(0,c.Lk)("div",ve,[(0,c.Lk)("div",ke,[(0,c.Lk)("div",ye,[(0,c.Lk)("img",{style:{"max-width":"96%",height:"auto",border:"2px solid #ccc inset","border-radius":"3px"},src:n.pic0,alt:"Dynamic Image"},null,8,we)]),(0,c.bF)(h),(0,c.Lk)("div",Le,[(0,c.Lk)("img",{style:{"max-width":"96%",height:"auto",border:"2px solid #ccc inset","border-radius":"3px"},src:n.pic1,alt:"Dynamic Image"},null,8,Te)])])]),Fe])}var Ie={name:"MoTools",data(){return{example:(0,V.KR)({}),pic0:(0,V.KR)(""),pic1:(0,V.KR)(""),practicalRisk:(0,V.KR)(0),refinedRisk:(0,V.KR)(0)}},methods:{calRiskDeprecated(e,t,a){let i=(e-64.09811320754717)/78.48224048733397,l=(t-.24603773584905667)/.2762166200964652,n=(a-8.086792452830188)/7.304948897212536,r=Math.round(1/(1+Math.exp(-(.3463*i+.0888*l+.0384*n)))*1e4,4)/1e4;return r}},mounted(){const e=this.$route.params.id,t={};this.$examples.map((e=>{t[e.id]=e})),this.example=t[e],this.practicalRisk=Math.round(1e4*this.example.practicalRisk)/1e4,this.refinedRisk=Math.round(1e4*this.example.refinedRisk)/1e4,this.pic0=this.example.pic0,this.pic1=this.example.pic1}};const He=(0,C.A)(Ie,[["render",Re],["__scopeId","data-v-66d46893"]]);var Se=He,Ae=a(6678),De=(a(818),a(1656)),Me=(a(3174),a(2537)),Ee=(a(5148),a(7652)),Pe=(a(7403),a(3384));a(9766);const ze=e=>((0,c.Qi)("data-v-2160b4b9"),e=e(),(0,c.jt)(),e),Ve={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},je={class:"navigator"},Ce={class:"nav-buttons"},Oe=ze((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("h1",null,"Predict the Risk of Hemorrhagic transformation (HT) after Acute Ischemic Stroke (AIS)"),(0,c.Lk)("h2",null,"Hemorrhage Transformation Prediction in Stroke")])],-1))),qe={style:{display:"flex","justify-content":"center","align-items":"center",margin:"0",padding:"0"}},We={style:{background:"rgba(255, 255, 255, 0.9)",padding:"5px","max-width":"960px",width:"100%","text-align":"left","align-items":"center","justify-content":"center",display:"flex","flex-direction":"column"}},Ke={key:0,style:{width:"540px","align-items":"center"}},Ue=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," Tmax > 6s Volume (mL) ",-1))),Ne=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold","text-align":"right"}},[(0,c.eW)(" HIR(V"),(0,c.Lk)("sub",null,"Tmax>10s"),(0,c.eW)("/V"),(0,c.Lk)("sub",null,"Tmax>6s"),(0,c.eW)(") ")],-1))),$e=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}},"NIHSS score at admission",-1))),Be={style:{width:"450px",margin:"16px","margin-left":"40px","margin-right":"40px"}},Ge={style:{"justify-content":"center","min-width":"360px","max-width":"594px",width:"90%",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px",margin:"0 auto","padding-left":"5px","padding-right":"5px"}},Xe=ze((()=>(0,c.Lk)("h2",{style:{color:"black","max-height":"30px",padding:"0px"}},"Risk of HT",-1))),Qe={style:{color:"#000","max-height":"30px",padding:"0px"}},Je={key:1,style:{width:"inherit","min-width":"720px","align-items":"center"}},Ye=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold",width:"220px"}}," Gender ",-1))),Ze=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold",width:"220px"}}," Hypertension ",-1))),et={style:{width:"150px"}},tt=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," Age ",-1))),at=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," NIHSS ",-1))),it=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," Time from onset to MRI ",-1))),lt=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," ADC < 620 * 10^(-6) Volume (mL) ",-1))),nt=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," Tmax > 4s Volume (mL) ",-1))),rt=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," Tmax > 6 s Volume (mL) ",-1))),ot=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," Tmax > 8s Volume (mL) ",-1))),st=ze((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," Tmax > 10 s Volume (mL) ",-1))),dt={style:{margin:"16px","margin-left":"40px","margin-right":"40px",display:"flex","justify-content":"center"}},ct={style:{"min-width":"360px","max-width":"594px"}},pt={style:{"justify-content":"center","min-width":"360px","max-width":"594px",width:"90%",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px",margin:"0 auto","padding-left":"5px","padding-right":"5px"}},ut=ze((()=>(0,c.Lk)("h2",{style:{color:"black","max-height":"30px",padding:"0px"}},"Risk of HT",-1))),mt={style:{color:"#000","max-height":"30px",padding:"0px"}},_t={key:2,style:{width:"inherit","align-items":"center","text-align":"center",display:"flex"}},ht=ze((()=>(0,c.Lk)("div",{style:{"justify-content":"center","min-width":"480px","max-width":"636px",width:"92%",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px",margin:"0 auto","padding-left":"3px","padding-right":"3px"}},[(0,c.Lk)("div",{id:"tester",style:{"max-width":"600px",width:"auto","min-width":"450px","max-height":"600px",height:"auto","min-height":"450px",margin:"auto"}})],-1))),bt=[ht],xt={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},ft={style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},gt={style:{"font-style":"italic","font-weight":"bold",color:"black"}};function vt(e,t,a,i,u,m){const _=d.$n,h=Pe.D0,b=l.Qh,x=s.cG,f=Ee.lV,g=o.fh,v=Me.sx,k=De.z6,y=r.fv,w=Ae.In,L=n.fI;return(0,c.uX)(),(0,c.CE)("div",null,[(0,c.Lk)("div",Ve,[(0,c.Lk)("div",je,[(0,c.Lk)("h2",null,"Predict the Risk of HT ("+(0,p.v_)(u.model_type)+" model)",1),(0,c.Lk)("nav",Ce,[(0,c.bF)(_,{color:"black",type:"primary",tag:"router-link",to:"/"},{default:(0,c.k6)((()=>[(0,c.eW)("Home")])),_:1})])])]),Oe,(0,c.Lk)("div",qe,[(0,c.Lk)("div",We,["practical"===u.model_type?((0,c.uX)(),(0,c.CE)("div",Ke,[(0,c.bF)(f,{onSubmit:m.onSubmitPractical},{default:(0,c.k6)((()=>[(0,c.bF)(b,{inset:""},{default:(0,c.k6)((()=>[(0,c.bF)(h,{style:{"--van-field-label-width":"200px"},border:"",modelValue:u.varTmax_6s,"onUpdate:modelValue":t[0]||(t[0]=e=>u.varTmax_6s=e),placeholder:"Enter Tmax > 6s Volume (mL)",name:"Tmax_6s","input-align":"center","label-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[Ue])),_:1},8,["modelValue"]),(0,c.bF)(h,{style:{"--van-field-label-width":"200px"},modelValue:u.varHIR,"onUpdate:modelValue":t[1]||(t[1]=e=>u.varHIR=e),placeholder:"Enter Volume Ratio",name:"HIR","input-align":"center","label-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[Ne])),_:1},8,["modelValue"]),(0,c.bF)(h,{style:{"--van-field-label-width":"200px"},modelValue:u.varNIHSS,"onUpdate:modelValue":t[2]||(t[2]=e=>u.varNIHSS=e),placeholder:"Enter NIHSS",name:"NIHSS","input-align":"center","label-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[$e])),_:1},8,["modelValue"])])),_:1}),(0,c.Lk)("div",Be,[(0,c.bF)(_,{round:"",block:"",type:"primary",plain:"","native-type":"submit"},{default:(0,c.k6)((()=>[(0,c.eW)(" Calculate ")])),_:1})]),(0,c.bF)(x)])),_:1},8,["onSubmit"]),(0,c.Lk)("div",Ge,[(0,c.bF)(g,{style:{"min-width":"300px","max-width":"528px",width:"80%","max-height":"64px","text-align":"center","justify-self":"center",padding:"2px"}},{title:(0,c.k6)((()=>[Xe])),value:(0,c.k6)((()=>[(0,c.Lk)("h2",Qe,(0,p.v_)(u.varRisk),1)])),_:1})])])):(0,c.Q3)("",!0),"refined"===u.model_type?((0,c.uX)(),(0,c.CE)("div",Je,[(0,c.bF)(f,{onSubmit:m.onSubmitRefined},{default:(0,c.k6)((()=>[(0,c.bF)(b,{inset:""},{default:(0,c.k6)((()=>[(0,c.bF)(L,{class:"custom-row-divider"},{default:(0,c.k6)((()=>[(0,c.bF)(y,{class:"custom-divider",span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(g,{border:"","value-align":"center","title-align":"left"},{title:(0,c.k6)((()=>[Ye])),"right-icon":(0,c.k6)((()=>[(0,c.bF)(k,{modelValue:u.varGender,"onUpdate:modelValue":t[3]||(t[3]=e=>u.varGender=e),direction:"horizontal",shape:"dot"},{default:(0,c.k6)((()=>[(0,c.bF)(v,{name:"1"},{default:(0,c.k6)((()=>[(0,c.eW)("male")])),_:1}),(0,c.bF)(v,{name:"0"},{default:(0,c.k6)((()=>[(0,c.eW)("female")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,c.bF)(y,{span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(g,{border:"","value-align":"center","title-align":"left"},{title:(0,c.k6)((()=>[Ze])),"right-icon":(0,c.k6)((()=>[(0,c.Lk)("div",et,[(0,c.bF)(k,{modelValue:u.varHypertension,"onUpdate:modelValue":t[4]||(t[4]=e=>u.varHypertension=e),direction:"horizontal",shape:"dot"},{default:(0,c.k6)((()=>[(0,c.bF)(v,{name:"1"},{default:(0,c.k6)((()=>[(0,c.bF)(w,{name:"success"})])),_:1}),(0,c.bF)(v,{name:"0"},{default:(0,c.k6)((()=>[(0,c.bF)(w,{name:"cross"})])),_:1})])),_:1},8,["modelValue"])])])),_:1})])),_:1})])),_:1}),(0,c.bF)(L,{class:"custom-row-divider"},{default:(0,c.k6)((()=>[(0,c.bF)(y,{class:"custom-divider",span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(h,{type:"number",border:"",placeholder:"value",modelValue:u.varAge,"onUpdate:modelValue":t[5]||(t[5]=e=>u.varAge=e),name:"Age","input-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[tt])),_:1},8,["modelValue"])])),_:1}),(0,c.bF)(y,{span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(h,{type:"number",border:"",placeholder:"value",modelValue:u.varNIHSS,"onUpdate:modelValue":t[6]||(t[6]=e=>u.varNIHSS=e),name:"NIHSS","input-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[at])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,c.bF)(L,{class:"custom-row-divider"},{default:(0,c.k6)((()=>[(0,c.bF)(y,{class:"custom-divider",span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(h,{type:"number",border:"",placeholder:"value",modelValue:u.varTime_from_onset_to_MRI,"onUpdate:modelValue":t[7]||(t[7]=e=>u.varTime_from_onset_to_MRI=e),name:"Time_from_onset_to_MRI","input-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[it])),_:1},8,["modelValue"])])),_:1}),(0,c.bF)(y,{span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(h,{type:"number",border:"",placeholder:"value",modelValue:u.varADC_620,"onUpdate:modelValue":t[8]||(t[8]=e=>u.varADC_620=e),name:"ADC_620","input-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[lt])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,c.bF)(L,{class:"custom-row-divider"},{default:(0,c.k6)((()=>[(0,c.bF)(y,{class:"custom-divider",span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(h,{type:"number",border:"",placeholder:"value",modelValue:u.varTmax_4s,"onUpdate:modelValue":t[9]||(t[9]=e=>u.varTmax_4s=e),name:"Tmax_4s","input-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[nt])),_:1},8,["modelValue"])])),_:1}),(0,c.bF)(y,{span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(h,{type:"number",border:"",placeholder:"value",modelValue:u.varTmax_6s,"onUpdate:modelValue":t[10]||(t[10]=e=>u.varTmax_6s=e),name:"Tmax_6s","input-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[rt])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,c.bF)(L,null,{default:(0,c.k6)((()=>[(0,c.bF)(y,{class:"custom-divider",span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(h,{type:"number",border:"",placeholder:"value",modelValue:u.varTmax_8s,"onUpdate:modelValue":t[11]||(t[11]=e=>u.varTmax_8s=e),name:"Tmax_8s","input-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[ot])),_:1},8,["modelValue"])])),_:1}),(0,c.bF)(y,{span:"12"},{default:(0,c.k6)((()=>[(0,c.bF)(h,{type:"number",border:"",placeholder:"value",modelValue:u.varTmax_10s,"onUpdate:modelValue":t[12]||(t[12]=e=>u.varTmax_10s=e),name:"Tmax_10s","input-align":"center",rules:[{required:!0,message:"need number"}]},{label:(0,c.k6)((()=>[st])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,c.Lk)("div",dt,[(0,c.Lk)("div",ct,[(0,c.bF)(_,{round:"",block:"",type:"primary",plain:"","native-type":"submit"},{default:(0,c.k6)((()=>[(0,c.eW)(" Calculate ")])),_:1})])]),(0,c.bF)(x)])),_:1},8,["onSubmit"]),(0,c.Lk)("div",pt,[(0,c.bF)(g,{style:{"min-width":"300px","max-width":"528px",width:"80%","max-height":"64px","text-align":"center","justify-self":"center",padding:"2px"}},{title:(0,c.k6)((()=>[ut])),value:(0,c.k6)((()=>[(0,c.Lk)("h2",mt,(0,p.v_)(u.varRisk),1)])),_:1})])])):(0,c.Q3)("",!0),(0,c.bF)(x),"practical"===u.model_type?((0,c.uX)(),(0,c.CE)("div",_t,bt)):(0,c.Q3)("",!0)])]),(0,c.Lk)("div",xt,[(0,c.Lk)("div",ft,[(0,c.Lk)("div",null,[(0,c.Lk)("h2",gt,"Only for Research. "+(0,p.v_)("practical"===u.model_type?`practical model usage: ${u.count_practical}`:`refined model usage: ${u.count_refined}`),1)])])])])}var kt=a(1328),yt=a.n(kt),wt={data(){return{model_type:"none",varAge:(0,V.KR)(""),varGender:(0,V.KR)("1"),varNIHSS:(0,V.KR)(""),varDiabetes_mellitus:(0,V.KR)(""),varHTCheck:(0,V.KR)([]),varHypertension:(0,V.KR)("1"),varAtrial_fibrillation:(0,V.KR)(""),varTime_from_onset_to_MRI:(0,V.KR)(""),varADC_620:(0,V.KR)(""),varTmax_4s:(0,V.KR)(""),varTmax_6s:(0,V.KR)(""),varTmax_8s:(0,V.KR)(""),varTmax_10s:(0,V.KR)(""),varPWI_DWI_mismatch:(0,V.KR)(""),varHIR:(0,V.KR)(""),varRisk:(0,V.KR)(""),count_practical:-1,count_refined:-1}},methods:{calRiskDeprecated(e,t,a){let i=(e-64.09811320754717)/78.48224048733397,l=(t-.24603773584905667)/.2762166200964652,n=(a-8.086792452830188)/7.304948897212536,r=Math.round(1/(1+Math.exp(-(.3463*i+.0888*l+.0384*n)))*1e4,4)/1e4;return r},onSubmit(e){let t=parseFloat(e.var0),a=parseFloat(e.var1),i=parseFloat(e.var2),l={x:[],y:[],z:[],mode:"markers",marker:{color:"rgba(255, 0, 0, 0.9)",size:4,line:{color:"rgba(255, 0, 0, 0.3)",width:.5},opacity:.8},type:"scatter3d",name:"HT"},n={x:[],y:[],z:[],mode:"markers",marker:{color:"rgba(0, 0, 255, 0.9)",size:4,line:{color:"rgba(0, 0, 255, 0.3)",width:.5},opacity:.8},type:"scatter3d",name:"non-HT"},r={x:[t],y:[a],z:[i],mode:"markers",marker:{color:"rgba(0, 255, 0, 0.9)",size:6,opacity:.9},type:"scatter3d",name:"UserInput"};for(let s of this.$scatterData)1===s.label?(l.x.push(s.var0),l.y.push(s.var1),l.z.push(s.var2)):0===s.label?(n.x.push(s.var0),n.y.push(s.var1),n.z.push(s.var2)):console.log("你的label怎么回事?",s.label);let o=document.getElementById("tester");yt().newPlot(o,[l,n,r],{margin:{l:0,r:0,b:0,t:0,pad:0},scene:{xaxis:{title:"x: Tmax > 6s",linewidth:4},yaxis:{title:"y: HIR",linewidth:4},zaxis:{title:"z: NIHSS score at admission",linewidth:4}},legend:{orentation:"h",traceorder:"normal",size:10,bgcolor:"#E8E8E8",bordercolor:"#FFFFFF",borderwidth:2}})},onSubmitPractical(e){let t=parseFloat(e.Tmax_6s),a=parseFloat(e.HIR),i=parseFloat(e.NIHSS);this.$predict({model_type:this.model_type,Tmax_6s:t,HIR:a,NIHSS:i},this),this.onSubmit({var0:t,var1:a,var2:i})},onSubmitRefined(e){console.log(this.varHypertension,this.varGender),this.$predict({model_type:this.model_type,Age:parseFloat(e.Age),Gender:parseFloat(this.varGender),NIHSS:parseFloat(e.NIHSS),Hypertension:parseFloat(this.varHypertension),Time_from_onset_to_MRI:parseFloat(e.Time_from_onset_to_MRI),ADC_620:parseFloat(e.ADC_620),Tmax_4s:parseFloat(e.Tmax_4s),Tmax_6s:parseFloat(e.Tmax_6s),Tmax_8s:parseFloat(e.Tmax_8s),Tmax_10s:parseFloat(e.Tmax_10s),PWI_DWI_mismatch:parseFloat(e.Tmax_6s)-parseFloat(e.ADC_620),HIR:Math.round(parseFloat(e.Tmax_10s)/parseFloat(e.Tmax_6s)*10)/10},this)}},name:"MoCalculator",mounted(){this.model_type=this.$route.params.type,console.log(this.model_type),this.count_practical=this.$counts["practical"],this.count_refined=this.$counts["refined"]}};console.log("everywhere");const Lt=(0,C.A)(wt,[["render",vt],["__scopeId","data-v-2160b4b9"]]);var Tt=Lt;const Ft=[{path:"/",component:q},{path:"/Calculator/:type",component:Tt},{path:"/Tools/:id",component:Se,name:"MoTools"}],Rt=(0,i.aE)({history:(0,i.Bt)(),routes:Ft});var It=Rt},2350:function(e,t,a){a.d(t,{A:function(){return d}});var i=a(6768);const l={id:"app"};function n(e,t,a,n,r,o){const s=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",l,[(0,i.bF)(s)])}var r={name:"App",mounted(){console.log("mounted App")}},o=a(1241);const s=(0,o.A)(r,[["render",n]]);var d=s}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var a=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(a.exports,a,a.exports,__webpack_require__),a.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,a,i,l){if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],l=e[d][2];for(var r=!0,o=0;o<a.length;o++)(!1&l||n>=l)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](a[o])}))?a.splice(o--,1):(r=!1,l<n&&(n=l));if(r){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,i,l]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var a in t)__webpack_require__.o(t,a)&&!__webpack_require__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,l,n=a[0],r=a[1],o=a[2],s=0;if(n.some((function(t){return 0!==e[t]}))){for(i in r)__webpack_require__.o(r,i)&&(__webpack_require__.m[i]=r[i]);if(o)var d=o(__webpack_require__)}for(t&&t(a);s<n.length;s++)l=n[s],__webpack_require__.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return __webpack_require__.O(d)},a=self["webpackChunkht_project"]=self["webpackChunkht_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var __webpack_exports__=__webpack_require__.O(void 0,[504],(function(){return __webpack_require__(4468)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.02a6f769.js.map
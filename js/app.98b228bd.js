(function(){"use strict";var __webpack_modules__={4468:function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5130),_App_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1380),_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(513),vant_lib_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2241);async function fetchData(){try{const e=await fetch("./assets/example.json");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return t.examples}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}async function fetchUtils(){try{const e=await fetch("./assets/utils.json");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return t.calRisk}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}async function fetchScatter(){try{const e=await fetch("./assets/scatterData.json");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();return t}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}const app=(0,vue__WEBPACK_IMPORTED_MODULE_3__.Ef)(_App_vue__WEBPACK_IMPORTED_MODULE_0__.A);async function initializeApp(){const examples=await fetchData(),calRiskStr=await fetchUtils(),scatterData=await fetchScatter();console.log(examples),console.log(calRiskStr),console.log(scatterData),app.config.globalProperties.$examples=examples,app.config.globalProperties.$calRisk=eval(calRiskStr.join("\n")),app.config.globalProperties.$scatterData=scatterData,app.use(_router__WEBPACK_IMPORTED_MODULE_1__.A).mount("#app")}initializeApp()},513:function(e,t,a){a.d(t,{A:function(){return Ae}});var i=a(1387),n=a(6329),r=(a(7540),a(6467)),l=(a(5769),a(2288)),o=(a(1876),a(8139)),s=(a(7057),a(7877)),d=(a(8859),a(6920)),c=(a(7762),a(6768)),p=a(4232);const u=e=>((0,c.Qi)("data-v-382ab1dc"),e=e(),(0,c.jt)(),e),m={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},h={class:"navigator"},_=u((()=>(0,c.Lk)("h2",{class:"right-title"},"Predict the Risk of HT",-1))),g={class:"nav-buttons"},x=u((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("h1",null,"Predict the Risk of Hemorrhagic transformation (HT) after Acute Ischemic Stroke (AIS)"),(0,c.Lk)("h2",null,"Hemorrhagic Transformation Prediction in Stroke")])],-1))),f={class:"home-page"},b={class:"content-wrapper"},k={class:"text-content"},v=(0,c.Fv)('<section data-v-382ab1dc><p data-v-382ab1dc><h3 data-v-382ab1dc>BACKGROUND AND PURPOSE</h3> Hemorrhage transformation (HT) after acute ischemic stroke (AIS) significantly impacts the prognosis of patients. This study aims to apply machine learning (ML) to develop a reliable HT prediction model for AIS patients based on magnetic resonance imaging (MRI). </p><p data-v-382ab1dc><h3 data-v-382ab1dc>METHODS</h3> A total of 379 AIS patients with 131 in the HT group and 248 in non-HT group were enrolled in this study. All patients received MRI including diffusion-weighted imaging (DWI) and perfusion-weighted imaging (PWI) within 24 hours from symptom onset and had a follow-up CT or MRI within 14 days. The clinical baseline features and MRI parameters (the volume of ADC &lt; 620 x 10⁻⁶ mm²/s, Tmax &gt; 4 s, 6 s, 8 s, and 10 s, PWI-DWI mismatch area, and volume ratio of Tmax &gt; 10 s to Tmax &gt; 6 s [V<sub data-v-382ab1dc>Tmax&gt;10</sub>/V<sub data-v-382ab1dc>Tmax&gt;6</sub>]) were collected for each patient and used as variables for ML. Patients were randomly divided into the model training set (70%, n = 265 with 92 in HT group) and testing set (30%, n = 114 with 39 in HT group). Six representative ML algorithms, including Logistic Regression, Support Vector Machine, Decision Tree, XGBoost, LightGBM, and Random Forest, were trained for HT prediction and 5-fold cross-validation was performed for model optimization. After parameter optimization, the models were assessed on the testing set, and the one with best performance was selected and put in the final model. </p><p data-v-382ab1dc><h3 data-v-382ab1dc>RESULTS</h3> The Logistic Regression algorithm demonstrated superior performance, achieving the highest F1-score of 0.8889, and an area under the curve of 0.96 with a sensitivity of 92.31% and specificity of 92% in the testing set. The MRI parameters of the volume of Tmax &gt; 6 s and V Tmax&gt;10/V Tmax&gt;6 and the National Institutes of Health Stroke Scale score at admission significantly influenced the prediction of HT with feature importance of 0.3343, 0.0813, and 0.029, respectively. The trained model is available on <a style="text-decoration:underline;color:black;" href="https://yike-wood.github.io/HT-Predict/" data-v-382ab1dc>https://yike-wood.github.io/HT-Predict/</a>. </p><p data-v-382ab1dc><h3 data-v-382ab1dc>CONCLUSIONS</h3><span style="font-size:large;font-weight:bold;" data-v-382ab1dc></span>A ML model based on MRI-PWI can be used to reliably predict HT for AIS patients with high sensitivity and specificity, which may assist radiologists and clinicians in timely assessing HT risk after MRI examinations. </p></section>',1),y={style:{"max-width":"35%","min-width":"300px"}},w=u((()=>(0,c.Lk)("h3",{style:{color:"#000"}},"Risk calculator: ",-1))),L={style:{"max-width":"50%","min-width":"500px"}},T={style:{"max-width":"48%","min-width":"480px",margin:"10px","padding-top":"5px",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px"}},F=u((()=>(0,c.Lk)("h4",{style:{margin:"8px","font-size":"medium",color:"#000","font-weight":"bold",height:"20px","text-align":"left"}},"Example",-1))),R=u((()=>(0,c.Lk)("h4",{style:{"margin-bottom":"0px"}},"Patient Name",-1))),I=u((()=>(0,c.Lk)("h4",{style:{"margin-bottom":"0px"}},"Patient ID",-1))),S=u((()=>(0,c.Lk)("h4",{style:{"margin-bottom":"0px"}},"Demo",-1))),E={style:{"font-size":"medium",color:"#000","font-weight":"bold",height:"20px","text-align":"left"}},H={style:{"font-size":"small",color:"dimgray","font-weight":"bold",height:"20px","text-align":"left"}};function P(e,t,a,i,u,P){const D=d.$n,O=s.cG,z=o.fh,A=l.fv,j=r.fI,M=n.Qh;return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("div",m,[(0,c.Lk)("div",h,[_,(0,c.Lk)("nav",g,[(0,c.bF)(D,{color:"black",type:"primary",tag:"router-link",to:"/"},{default:(0,c.k6)((()=>[(0,c.eW)("Home")])),_:1})])])]),x,(0,c.Lk)("div",f,[(0,c.Lk)("div",b,[(0,c.Lk)("div",k,[v,(0,c.bF)(O),(0,c.Lk)("div",y,[(0,c.bF)(z,{center:""},{title:(0,c.k6)((()=>[w])),value:(0,c.k6)((()=>[(0,c.bF)(D,{type:"primary",size:"mini",color:"cornflowerblue",tag:"router-link",to:"/Calculator"},{default:(0,c.k6)((()=>[(0,c.eW)("Here")])),_:1})])),_:1})]),(0,c.Lk)("div",L,[(0,c.Lk)("div",T,[(0,c.bF)(M,{inset:"",style:{"--van-cell-group-background":"white"},title:""},{default:(0,c.k6)((()=>[(0,c.bF)(j,null,{default:(0,c.k6)((()=>[(0,c.bF)(A,{span:"8"},{default:(0,c.k6)((()=>[F])),_:1}),(0,c.bF)(A,{span:"8"}),(0,c.bF)(A,{span:"8"})])),_:1}),(0,c.bF)(j,{style:{"margin-left":"8px"}},{default:(0,c.k6)((()=>[(0,c.bF)(A,{span:"8"},{default:(0,c.k6)((()=>[R])),_:1}),(0,c.bF)(A,{span:"8"},{default:(0,c.k6)((()=>[I])),_:1}),(0,c.bF)(A,{span:"8"},{default:(0,c.k6)((()=>[S])),_:1})])),_:1}),(0,c.bF)(O,{style:{margin:"8px"}}),((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(u.examples,((e,t)=>((0,c.uX)(),(0,c.CE)("li",{key:t,style:{"list-style-type":"none"}},[(0,c.bF)(j,{style:{"margin-left":"8px"}},{default:(0,c.k6)((()=>[(0,c.bF)(A,{span:"8"},{default:(0,c.k6)((()=>[(0,c.Lk)("h4",E,(0,p.v_)(e.name),1)])),_:2},1024),(0,c.bF)(A,{span:"8"},{default:(0,c.k6)((()=>[(0,c.Lk)("h4",H,(0,p.v_)(e.id),1)])),_:2},1024),(0,c.bF)(A,{span:"8"},{default:(0,c.k6)((()=>[(0,c.bF)(D,{style:{height:"20px"},type:"primary",size:"mini",color:"cornflowerblue",onClick:P.gotoExample,"data-id":e.id},{default:(0,c.k6)((()=>[(0,c.eW)("View")])),_:2},1032,["onClick","data-id"])])),_:2},1024)])),_:2},1024),(0,c.bF)(O,{style:{margin:"8px"}})])))),128))])),_:1})])])])])])],64)}a(4114);var D=a(144),O={name:"SweetHome",data(){return{examples:(0,D.KR)([])}},methods:{gotoExample(e){const t=e.target.dataset.id;this.$router.push({name:"MoTools",params:{id:t}})}},mounted(){this.examples=[...this.$examples]}},z=a(1241);const A=(0,z.A)(O,[["render",P],["__scopeId","data-v-382ab1dc"]]);var j=A;const M=e=>((0,c.Qi)("data-v-538af598"),e=e(),(0,c.jt)(),e),q={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},C={class:"navigator"},V=M((()=>(0,c.Lk)("h2",null,"Predict the Risk of HT",-1))),W={class:"nav-buttons"},K=M((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("h1",null,"Predict the Risk of Hemorrhagic transformation (HT) after Acute Ischemic Stroke (AIS)"),(0,c.Lk)("h2",null,"Hemorrhage Transformation Prediction in Stroke")])],-1))),N={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px","min-height":"320px",margin:"0",padding:"0"}},U={style:{background:"rgba(255, 255, 255, 0.9)",padding:"5px","max-width":"720px",width:"90%",display:"flex","justify-content":"center","border-color":"black","border-top-color":"black","border-style":"inset solid","border-radius":"10px"}},$={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0","padding-top":"10px","padding-bottom":"10px"}},B={style:{background:"rgba(255, 255, 255, 0.9)",padding:"5px","max-width":"1080px",width:"100%",display:"flex","flex-wrap":"wrap","justify-content":"center"}},G={style:{"justify-content":"center","min-width":"540px","max-width":"594px",width:"75%",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px",margin:"0 auto","padding-left":"5px","padding-right":"5px"}},X=M((()=>(0,c.Lk)("h2",{style:{color:"black","max-height":"30px",padding:"0px"}},"Risk of HT:",-1))),Q={style:{color:"#000","max-height":"30px",padding:"0px"}},J={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},Y={style:{background:"rgba(255, 255, 255, 0.9)",padding:"5px","max-width":"1080px",width:"100%",display:"flex","flex-wrap":"wrap","justify-content":"center"}},Z={class:"picDiv"},ee=["src"],te={class:"picDiv"},ae=["src"],ie=M((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("div",null,[(0,c.Lk)("h2",{style:{"font-style":"italic","font-weight":"bold",color:"black"}},"Only for Research")])])],-1)));function ne(e,t,a,i,r,l){const u=d.$n,m=o.fh,h=n.Qh,_=s.cG;return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("div",q,[(0,c.Lk)("div",C,[V,(0,c.Lk)("nav",W,[(0,c.bF)(u,{color:"black",type:"primary",tag:"router-link",to:"/"},{default:(0,c.k6)((()=>[(0,c.eW)("Home")])),_:1})])])]),K,(0,c.Lk)("div",N,[(0,c.Lk)("div",U,[(0,c.bF)(h,{inset:"",style:{width:"100%","text-align":"left","padding-top":"8px","padding-bottom":"8px"}},{default:(0,c.k6)((()=>[(0,c.bF)(m,{style:{padding:"5px","padding-bottom":"1px","padding-top":"15px","--van-cell-font-size":"16px","--van-cell-value-font-size":"16px","--van-cell-text-color":"dimgray"},title:"Patient Information",value:"Value"}),(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"20px","--van-cell-value-font-size":"18px","--van-cell-value-color":"black"},title:"Patient Name",value:r.example.name},null,8,["value"]),(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"20px","--van-cell-value-font-size":"18px","--van-cell-value-color":"black"},title:"Patient Gender",value:r.example.gender},null,8,["value"]),(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"20px","--van-cell-value-font-size":"18px","--van-cell-value-color":"black"},title:"Patient Age",value:r.example.age},null,8,["value"]),(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"20px","--van-cell-value-font-size":"18px","--van-cell-value-color":"black"},title:"Tmax > 6 Volume (ml)",value:r.example.var0},null,8,["value"]),(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"20px","--van-cell-value-font-size":"18px","--van-cell-value-color":"black"},title:"HIR",value:r.example.var1},null,8,["value"]),(0,c.bF)(m,{style:{padding:"5px","--van-cell-font-size":"20px","--van-cell-value-font-size":"18px","--van-cell-value-color":"black"},title:"NIHSS score at admission",value:r.example.var2},null,8,["value"])])),_:1})])]),(0,c.Lk)("div",$,[(0,c.Lk)("div",B,[(0,c.Lk)("div",G,[(0,c.bF)(m,{style:{"min-width":"300px","max-width":"528px",width:"80%","max-height":"64px","text-align":"center","justify-self":"center",padding:"2px"}},{title:(0,c.k6)((()=>[X])),value:(0,c.k6)((()=>[(0,c.Lk)("h2",Q,(0,p.v_)(r.varRisk),1)])),_:1})])])]),(0,c.Lk)("div",J,[(0,c.Lk)("div",Y,[(0,c.Lk)("div",Z,[(0,c.Lk)("img",{style:{"max-width":"96%",height:"auto",border:"2px solid #ccc inset","border-radius":"3px"},src:r.pic0,alt:"Dynamic Image"},null,8,ee)]),(0,c.bF)(_),(0,c.Lk)("div",te,[(0,c.Lk)("img",{style:{"max-width":"96%",height:"auto",border:"2px solid #ccc inset","border-radius":"3px"},src:r.pic1,alt:"Dynamic Image"},null,8,ae)])])]),ie],64)}var re={name:"MoTools",data(){return{example:(0,D.KR)({}),pic0:(0,D.KR)(""),pic1:(0,D.KR)(""),varRisk:(0,D.KR)(0)}},methods:{calRiskDeprecated(e,t,a){let i=(e-64.09811320754717)/78.48224048733397,n=(t-.24603773584905667)/.2762166200964652,r=(a-8.086792452830188)/7.304948897212536,l=Math.round(1/(1+Math.exp(-(.3463*i+.0888*n+.0384*r)))*1e4,4)/1e4;return l}},mounted(){const e=this.$route.params.id,t={};this.$examples.map((e=>{t[e.id]=e})),this.example=t[e],this.varRisk=this.$calRisk(this.example.var0,this.example.var1,this.example.var2),this.pic0=this.example.pic0,this.pic1=this.example.pic1}};const le=(0,z.A)(re,[["render",ne],["__scopeId","data-v-538af598"]]);var oe=le,se=a(7652),de=(a(7403),a(3384));a(9766);const ce=e=>((0,c.Qi)("data-v-1f92202c"),e=e(),(0,c.jt)(),e),pe={style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},ue={class:"navigator"},me=ce((()=>(0,c.Lk)("h2",null,"Predict the Risk of HT",-1))),he={class:"nav-buttons"},_e=ce((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("h1",null,"Predict the Risk of Hemorrhagic transformation (HT) after Acute Ischemic Stroke (AIS)"),(0,c.Lk)("h2",null,"Hemorrhage Transformation Prediction in Stroke")])],-1))),ge={style:{display:"flex","justify-content":"center","align-items":"center",margin:"0",padding:"0"}},xe={style:{background:"rgba(255, 255, 255, 0.9)",padding:"5px","max-width":"660px",width:"100%","text-align":"left","align-items":"center","justify-content":"center"}},fe={style:{width:"inherit","align-items":"center"}},be=ce((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}}," Tmax > 6s Volume (mL) ",-1))),ke=ce((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold","text-align":"right"}},[(0,c.eW)(" HIR(V"),(0,c.Lk)("sub",null,"Tmax>10s"),(0,c.eW)("/V"),(0,c.Lk)("sub",null,"Tmax>6s"),(0,c.eW)(") ")],-1))),ve=ce((()=>(0,c.Lk)("label",{style:{"font-size":"12px","font-weight":"bold"}},"NIHSS score at admission",-1))),ye={style:{margin:"16px","margin-left":"40px","margin-right":"40px"}},we={style:{"justify-content":"center","min-width":"360px","max-width":"594px",width:"90%",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px",margin:"0 auto","padding-left":"5px","padding-right":"5px"}},Le=ce((()=>(0,c.Lk)("h2",{style:{color:"black","max-height":"30px",padding:"0px"}},"Risk of HT:",-1))),Te={style:{color:"#000","max-height":"30px",padding:"0px"}},Fe=ce((()=>(0,c.Lk)("div",{style:{width:"inherit","align-items":"center","text-align":"center",display:"flex"}},[(0,c.Lk)("div",{style:{"justify-content":"center","min-width":"480px","max-width":"636px",width:"92%",border:"dimgray solid","border-style":"inset solid","border-top":"dimgray solid","border-radius":"10px",margin:"0 auto","padding-left":"3px","padding-right":"3px"}},[(0,c.Lk)("div",{id:"tester",style:{"max-width":"600px",width:"auto","min-width":"450px","max-height":"600px",height:"auto","min-height":"450px",margin:"auto"}})])],-1))),Re=ce((()=>(0,c.Lk)("div",{style:{display:"flex","justify-content":"center","align-items":"center","min-width":"540px",margin:"0",padding:"0"}},[(0,c.Lk)("div",{style:{background:"rgba(255, 255, 255, 0.9)",padding:"10px","max-width":"1080px",width:"100%","text-align":"left"}},[(0,c.Lk)("div",null,[(0,c.Lk)("h2",{style:{"font-style":"italic","font-weight":"bold",color:"black"}},"Only for Research")])])],-1)));function Ie(e,t,a,i,r,l){const u=d.$n,m=de.D0,h=n.Qh,_=s.cG,g=se.lV,x=o.fh;return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("div",pe,[(0,c.Lk)("div",ue,[me,(0,c.Lk)("nav",he,[(0,c.bF)(u,{color:"black",type:"primary",tag:"router-link",to:"/"},{default:(0,c.k6)((()=>[(0,c.eW)("Home")])),_:1})])])]),_e,(0,c.Lk)("div",ge,[(0,c.Lk)("div",xe,[(0,c.Lk)("div",fe,[(0,c.bF)(g,{onSubmit:l.onSubmit},{default:(0,c.k6)((()=>[(0,c.bF)(h,{inset:""},{default:(0,c.k6)((()=>[(0,c.bF)(m,{style:{"--van-field-label-width":"200px"},border:"",modelValue:r.varTmaxO6mL,"onUpdate:modelValue":t[0]||(t[0]=e=>r.varTmaxO6mL=e),placeholder:"Enter Tmax > 6s Volume (mL)",name:"var0","input-align":"center","label-align":"center",rules:[{required:!0,message:"need a numeric input"}]},{label:(0,c.k6)((()=>[be])),_:1},8,["modelValue"]),(0,c.bF)(m,{style:{"--van-field-label-width":"200px"},modelValue:r.varTmaxO10sDTmaxO6s,"onUpdate:modelValue":t[1]||(t[1]=e=>r.varTmaxO10sDTmaxO6s=e),placeholder:"Enter Volume Ratio",name:"var1","input-align":"center","label-align":"center",rules:[{required:!0,message:"need a numeric input"}]},{label:(0,c.k6)((()=>[ke])),_:1},8,["modelValue"]),(0,c.bF)(m,{style:{"--van-field-label-width":"200px"},modelValue:r.varNIHSS,"onUpdate:modelValue":t[2]||(t[2]=e=>r.varNIHSS=e),placeholder:"Enter NIHSS",name:"var2","input-align":"center","label-align":"center",rules:[{required:!0,message:"need a numeric input"}]},{label:(0,c.k6)((()=>[ve])),_:1},8,["modelValue"])])),_:1}),(0,c.Lk)("div",ye,[(0,c.bF)(u,{round:"",block:"",type:"primary",plain:"","native-type":"submit"},{default:(0,c.k6)((()=>[(0,c.eW)(" Calculate ")])),_:1})]),(0,c.bF)(_)])),_:1},8,["onSubmit"]),(0,c.Lk)("div",we,[(0,c.bF)(x,{style:{"min-width":"300px","max-width":"528px",width:"80%","max-height":"64px","text-align":"center","justify-self":"center",padding:"2px"}},{title:(0,c.k6)((()=>[Le])),value:(0,c.k6)((()=>[(0,c.Lk)("h2",Te,(0,p.v_)(r.varRisk),1)])),_:1})])]),(0,c.bF)(_),Fe])]),Re],64)}var Se=a(1328),Ee=a.n(Se),He={data(){return{varTmaxO6mL:(0,D.KR)(""),varTmaxO10sDTmaxO6s:(0,D.KR)(""),varNIHSS:(0,D.KR)(""),varRisk:0}},methods:{calRiskDeprecated(e,t,a){let i=(e-64.09811320754717)/78.48224048733397,n=(t-.24603773584905667)/.2762166200964652,r=(a-8.086792452830188)/7.304948897212536,l=Math.round(1/(1+Math.exp(-(.3463*i+.0888*n+.0384*r)))*1e4,4)/1e4;return l},onSubmit(e){let t=parseFloat(e.var0),a=parseFloat(e.var1),i=parseFloat(e.var2);this.varRisk=this.$calRisk(t,a,i);let n={x:[],y:[],z:[],mode:"markers",marker:{color:"rgba(255, 0, 0, 0.9)",size:4,line:{color:"rgba(255, 0, 0, 0.3)",width:.5},opacity:.8},type:"scatter3d",name:"HT"},r={x:[],y:[],z:[],mode:"markers",marker:{color:"rgba(0, 0, 255, 0.9)",size:4,line:{color:"rgba(0, 0, 255, 0.3)",width:.5},opacity:.8},type:"scatter3d",name:"non-HT"},l={x:[t],y:[a],z:[i],mode:"markers",marker:{color:"rgba(0, 255, 0, 0.9)",size:6,opacity:.9},type:"scatter3d",name:"UserInput"};for(let s of this.$scatterData)1===s.label?(n.x.push(s.var0),n.y.push(s.var1),n.z.push(s.var2)):0===s.label?(r.x.push(s.var0),r.y.push(s.var1),r.z.push(s.var2)):console.log("你的label怎么回事?",s.label);let o=document.getElementById("tester");Ee().newPlot(o,[n,r,l],{margin:{l:0,r:0,b:0,t:0,pad:0},scene:{xaxis:{title:"x: Tmax > 6s",linewidth:4},yaxis:{title:"y: HIR",linewidth:4},zaxis:{title:"z: NIHSS score at admission",linewidth:4}},legend:{orentation:"h",traceorder:"normal",size:10,bgcolor:"#E8E8E8",bordercolor:"#FFFFFF",borderwidth:2}})}},name:"MoCalculator",mounted(){}};console.log("everywhere");const Pe=(0,z.A)(He,[["render",Ie],["__scopeId","data-v-1f92202c"]]);var De=Pe;const Oe=[{path:"/",component:j},{path:"/Calculator",component:De},{path:"/Tools/:id",component:oe,name:"MoTools"}],ze=(0,i.aE)({history:(0,i.Bt)(),routes:Oe});var Ae=ze},1380:function(e,t,a){a.d(t,{A:function(){return d}});var i=a(6768);const n={id:"app"};function r(e,t,a,r,l,o){const s=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",n,[(0,i.bF)(s)])}var l={name:"App"},o=a(1241);const s=(0,o.A)(l,[["render",r]]);var d=s}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var a=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(a.exports,a,a.exports,__webpack_require__),a.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,a,i,n){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],n=e[d][2];for(var l=!0,o=0;o<a.length;o++)(!1&n||r>=n)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](a[o])}))?a.splice(o--,1):(l=!1,n<r&&(r=n));if(l){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,i,n]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var a in t)__webpack_require__.o(t,a)&&!__webpack_require__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,r=a[0],l=a[1],o=a[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(i in l)__webpack_require__.o(l,i)&&(__webpack_require__.m[i]=l[i]);if(o)var d=o(__webpack_require__)}for(t&&t(a);s<r.length;s++)n=r[s],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return __webpack_require__.O(d)},a=self["webpackChunkthree"]=self["webpackChunkthree"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var __webpack_exports__=__webpack_require__.O(void 0,[504],(function(){return __webpack_require__(4468)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.98b228bd.js.map
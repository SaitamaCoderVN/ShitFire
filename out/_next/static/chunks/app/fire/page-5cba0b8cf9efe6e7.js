(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4697],{38385:function(e,r,t){Promise.resolve().then(t.bind(t,39434)),Promise.resolve().then(t.bind(t,21663)),Promise.resolve().then(t.t.bind(t,62421,23)),Promise.resolve().then(t.bind(t,41315))},39434:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return _}});var s=t(17361),a=t(29620),n=t(15766),i=t(17740),l=t(22575),o={src:"/_next/static/media/shit.a4d0a44d.gif",height:498,width:498,blurWidth:0,blurHeight:0},c=t(24711),d=t(1820),u=t(76406),m=t(87607),f=t(12541);let x=m.forwardRef((e,r)=>{let{className:t,type:a,...n}=e;return(0,s.jsx)("input",{type:a,className:(0,f.cn)("flex h-50 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n})});x.displayName="Input";var h=t(84565),b=t(15228),p=t(99734),g=t(99808),v=t(60882),j=t(56295),N=t(57256),y=t(91746),w=t(75895);let k="Shooting Shit",S="!@#$%^&*():{};|,.<>/?";var I=()=>{let e=(0,m.useRef)(null),[r,t]=(0,m.useState)(k),a=()=>{clearInterval(e.current||void 0),t(k)};return(0,s.jsxs)(w.E.button,{type:"submit",whileHover:{scale:1.025},whileTap:{scale:.975},onMouseEnter:()=>{let r=0;e.current=setInterval(()=>{t(k.split("").map((e,t)=>{if(r/2>t)return e;let s=Math.floor(Math.random()*S.length);return S[s]}).join("")),++r>=2*k.length&&a()},50)},onMouseLeave:a,className:"group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-black px-4 py-2 font-mono font-medium uppercase text-secondary transition-colors hover:text-secondary",children:[(0,s.jsxs)("div",{className:"relative z-10 flex items-center gap-2",children:[(0,s.jsx)(y.UIZ,{}),(0,s.jsx)("span",{children:r})]}),(0,s.jsx)(w.E.span,{initial:{y:"100%"},animate:{y:"-100%"},transition:{repeat:1/0,repeatType:"mirror",duration:1,ease:"linear"},className:"duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-blue-400/0 from-40% via-blue-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"})]})},E=t(88398),A=t(24269);let C=l.z.object({to:l.z.coerce.string({required_error:"Address is required",invalid_type_error:"Address must be a string"}),uri:l.z.coerce.string({required_error:"uri is required",invalid_type_error:"uri must be a number"})});function F(){let e,r;let{toast:t}=(0,h.pm)(),a=(0,E.x)();switch(a){case A.lG.BAOBAB:e=A.DS;break;case A.lG.CYPRESS:e=A.n0;break;case A.lG.UNIQUE:e=A.LI;break;case A.lG.QUARTZ:e=A.Jx;break;case A.lG.OPAL:e=A.ex}switch(a){case A.lG.BAOBAB:r=A.gE;break;case A.lG.CYPRESS:r=A.yG;break;case A.lG.UNIQUE:r=A.DD;break;case A.lG.QUARTZ:r=A.VI;break;case A.lG.OPAL:r=A.ZO}let{data:l,error:m,isPending:f,writeContract:y}=(0,b.S)(),w=(0,i.cI)({resolver:(0,n.F)(C)});async function k(r){try{await y({abi:g.M,address:e,functionName:"safeMint",args:["0x".concat(r.to.slice(2)),r.uri.toString()]}),t({variant:"default",className:"bg-white",title:"Transaction successful",description:"SoulBound NFT minted successfully!"})}catch(e){t({variant:"destructive",title:"Transaction reverted",description:"".concat(e.shortMessage.split(":")[1])})}}let{isLoading:S,isSuccess:F}=(0,p.A)({hash:l});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.l0,{...w,children:(0,s.jsxs)("form",{onSubmit:w.handleSubmit(k),className:"space-y-8 w-full text-white",children:[(0,s.jsx)(u.Wi,{control:w.control,name:"uri",render:e=>{let{field:r}=e;return(0,s.jsxs)(u.xJ,{className:"flex flex-col gap-1",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{children:(0,s.jsx)(u.NI,{className:"my-1.5",children:(0,s.jsx)(x,{type:"hidden",...r,value:"https://peach-realistic-spider-498.mypinata.cloud/ipfs/QmQNEoAnnNmyacZmEMTSH39B2E2SMMB89fHZHZjyu5yd3R"})})}),(0,s.jsx)("div",{className:"mb-1",children:(0,s.jsx)(c.default,{src:o,alt:"Shit",width:300,height:300,className:"rounded-lg"})})]})}}),(0,s.jsx)(u.Wi,{control:w.control,name:"to",render:e=>{var r;let{field:t}=e;return(0,s.jsxs)(u.xJ,{className:"flex flex-col gap-8",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)(u.lX,{className:"text-md text-black font-semibold hover:text-gray-700 transition-colors duration-300",children:["To Address:"," "]}),(0,s.jsx)(u.NI,{className:"my-1.5",children:(0,s.jsx)(x,{required:!0,type:"text",placeholder:"Enter Address",...t,value:null!==(r=t.value)&&void 0!==r?r:"",className:"   bg-secondary-bg text-dark-text   border-none   focus:outline-none   placeholder-dark-text   "})})]}),(0,s.jsx)(u.zG,{})]})}}),f?(0,s.jsxs)(d.z,{disabled:!0,children:[(0,s.jsx)(j.Z,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]}):(0,s.jsx)(I,{})]})}),(0,s.jsxs)("div",{className:"bg-secondary-bg p-6 mt-10 inline-block w-full lg:w-[70%] rounded-xl",children:[(0,s.jsx)("h3",{className:"scroll-m-20 text-lg font-semibold tracking-tight",children:"Transaction status"}),l?(0,s.jsxs)("div",{className:"flex flex-row gap-2",children:["Hash:",(0,s.jsx)("a",{target:"_blank",className:"text-blue-500 underline",href:"".concat(r+l),children:"".concat(l.slice(0,6),"...").concat(l.slice(-6))})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex flex-row gap-2",children:"Hash: no transaction hash until after submission"}),(0,s.jsx)(v.C,{variant:"outline",className:"border-[#2B233C]",children:"No transaction yet"})]}),S&&(0,s.jsxs)(v.C,{variant:"secondary",children:[(0,s.jsx)(j.Z,{className:"mr-2 h-4 w-4 animate-spin"}),"Waiting for confirmation..."]}),F&&(0,s.jsxs)(v.C,{className:"flex flex-row items-center w-[40%] bg-green-500 cursor-pointer",children:[(0,s.jsx)(N.Z,{className:"mr-2 h-4 w-4"}),"Transaction confirmed!"]})]})]})}var G=t(65850);function R(){return(0,s.jsx)("div",{className:" pt-4 pb-20  lg:px-10 w-full",children:(0,s.jsxs)("div",{className:"w-full px-2 lg:px-5 py-8 rounded-2xl border-2 border-black",children:[(0,s.jsxs)("div",{className:"bg-gradient bg-clip-text text-black text-xl lg:text-4xl font-extrabold",children:["Shooting "," ",(0,s.jsx)("span",{className:"text-white animate-color-change",children:"Shit"}),"."]}),(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsx)("div",{className:"w-full lg:w-[55%]",children:(0,s.jsx)(F,{})}),(0,s.jsx)("div",{className:"w-[45%] hidden lg:block",children:(0,s.jsx)(c.default,{src:G.Z,alt:"Mint",className:"w-full h-full object-contain"})})]})]})})}t(55870);var _=(0,a.default)(()=>Promise.resolve(R),{ssr:!1})},60882:function(e,r,t){"use strict";t.d(r,{C:function(){return l}});var s=t(17361);t(87607);var a=t(80372),n=t(12541);let i=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l(e){let{className:r,variant:t,...a}=e;return(0,s.jsx)("div",{className:(0,n.cn)(i({variant:t}),r),...a})}},76406:function(e,r,t){"use strict";t.d(r,{l0:function(){return u},NI:function(){return g},Wi:function(){return f},xJ:function(){return b},lX:function(){return p},zG:function(){return v}});var s=t(17361),a=t(87607),n=t(74750),i=t(17740),l=t(12541),o=t(32138);let c=(0,t(80372).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(o.f,{ref:r,className:(0,l.cn)(c(),t),...a})});d.displayName=o.f.displayName;let u=i.RV,m=a.createContext({}),f=e=>{let{...r}=e;return(0,s.jsx)(m.Provider,{value:{name:r.name},children:(0,s.jsx)(i.Qr,{...r})})},x=()=>{let e=a.useContext(m),r=a.useContext(h),{getFieldState:t,formState:s}=(0,i.Gc)(),n=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=r;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...n}},h=a.createContext({}),b=a.forwardRef((e,r)=>{let{className:t,...n}=e,i=a.useId();return(0,s.jsx)(h.Provider,{value:{id:i},children:(0,s.jsx)("div",{ref:r,className:(0,l.cn)("space-y-2",t),...n})})});b.displayName="FormItem";let p=a.forwardRef((e,r)=>{let{className:t,...a}=e,{error:n,formItemId:i}=x();return(0,s.jsx)(d,{ref:r,className:(0,l.cn)(n&&"text-destructive",t),htmlFor:i,...a})});p.displayName="FormLabel";let g=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:i,formDescriptionId:l,formMessageId:o}=x();return(0,s.jsx)(n.g7,{ref:r,id:i,"aria-describedby":a?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!a,...t})});g.displayName="FormControl",a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:n}=x();return(0,s.jsx)("p",{ref:r,id:n,className:(0,l.cn)("text-sm text-muted-foreground",t),...a})}).displayName="FormDescription";let v=a.forwardRef((e,r)=>{let{className:t,children:a,...n}=e,{error:i,formMessageId:o}=x(),c=i?String(null==i?void 0:i.message):a;return c?(0,s.jsx)("p",{ref:r,id:o,className:(0,l.cn)("text-sm font-medium text-destructive",t),...n,children:c}):null});v.displayName="FormMessage"},55870:function(){}},function(e){e.O(0,[9296,5241,6581,3230,547,3571,1744],function(){return e(e.s=38385)}),_N_E=e.O()}]);
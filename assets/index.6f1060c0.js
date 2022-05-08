import{j as $,r as a,G as E,f as k,s as A,a as U,R as Z,b as _}from"./vendor.3dd4dc6a.js";const ee=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const n of u.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function d(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerpolicy&&(u.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?u.credentials="include":l.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function c(l){if(l.ep)return;l.ep=!0;const u=d(l);fetch(l.href,u)}};ee();const s=$.exports.jsx,h=$.exports.jsxs,j=$.exports.Fragment;function y({card:t}){return s("div",{className:"text-base md:text-base font-normal h-12 w-12 md:h-44 md:w-24 rounded-lg bg-yellow-100 flex justify-center items-center shadow-md relative",children:h("div",{className:"md:top-4 md:left-4 flex flex-row items-center gap-1 justify-between",children:[s("img",{src:`./${t.suit}.png`,className:"w-4 h-4 md:w-6 md:h-6"}),s("p",{className:"h-6 font-semibold",children:`${t.value==="T"?"10":t.value}`})]})})}function se({cards:t,round:i,winStates:d}){const[c,l]=a.exports.useState([]);return a.exports.useEffect(()=>{l(t)},[i]),s("div",{className:" max-w-8/12 mx-auto flex flex-col mt-8",children:c.map((u,n)=>n>=i?s(j,{}):h("div",{className:"grid grid-cols-6 md:-mb-12",children:[s("div",{className:`flex justify-center items-center ${d[n]?"text-green-300":"text-red-300"}`,children:d[n]?"V":"X"}),u.map((m,f)=>s(y,{card:m},f))]},n))})}function F({playerCards:t}){return h("div",{className:"flex flex-row justify-center",children:[s(y,{card:t[0]}),s(y,{card:t[1]})]})}function te({card:t,shownCards:i,select:d,selectedCards:c}){const[l,u]=a.exports.useState(!1),[n,m]=a.exports.useState(!1);a.exports.useEffect(()=>{i.filter(w=>w.value===t.value&&w.suit===t.suit).length>0?u(!0):u(!1)},[i]);const f=()=>{l||(d(t),m(!n))};return a.exports.useEffect(()=>{m(c.filter(v=>v.value===t.value&&v.suit===t.suit).length>0)},[c]),s("div",{className:`text-sm md:text-base font-normal h-8 w-8 md:h-8 md:w-12 rounded-none justify-center ${l?"bg-gray-200":n?"bg-green-200":"bg-yellow-100"}  border-2 border-gray-100 cursor-pointer flex items-center shadow-md relative`,children:h("div",{className:"md:top-4 md:left-4 flex flex-row items-center gap-1 justify-between",onClick:()=>f(),children:[s("img",{src:`./${t.suit}.png`,className:"w-3 h-3 md:w-4 md:h-4"}),s("p",{className:"h-6 font-semibold",children:`${t.value==="T"?"10":t.value}`})]})})}function ae({cards:t,round:i,tables:d,select:c,selectedCards:l}){const[u,n]=a.exports.useState([]),m=()=>{let f=[];for(let v=0;v<d.length;v++)v+1>i||(f=[...f,...d[v]]);n(f)};return a.exports.useEffect(()=>m(),[d,i]),s("div",{className:"flex justify-center",children:s("div",{className:"grid grid-cols-13 gap-0 fixed bottom-0 mx-auto h-32",children:t.map((f,v)=>s(te,{card:f,shownCards:u,select:c,selectedCards:l},v))})})}function le({open:t,hand:i,round:d}){let[c,l]=a.exports.useState(!1);function u(){l(!1)}return a.exports.useEffect(()=>{l(t)},[t]),s(j,{children:s(E,{appear:!0,show:c,as:a.exports.Fragment,children:h(k,{as:"div",className:"relative z-10",onClose:u,children:[s(E.Child,{as:a.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:s("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),s("div",{className:"fixed inset-0 overflow-y-auto",children:s("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:s(E.Child,{as:a.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:h(k.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[s(k.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Victory"}),s("div",{className:"mt-2",children:s("p",{className:"text-sm text-gray-500",children:`Good Job! You have managed to guess the opponents hand in ${d} rounds!`})}),h("div",{className:"flex flex-row mt-2",children:[s(y,{card:i[0]}),s(y,{card:i[1]})]}),s("div",{className:"mt-4",children:s("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:u,children:"Got it, thanks!"})})]})})})})]})})})}const H=["hearts","diamonds","clubs","spades"],G=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"],ue=()=>{let t=new Date;t="d"+t.getDate()+"y"+t.getFullYear+"m"+t.getMonth,A(t,{global:!0});var i=Math.random();A(t,{global:!0});var d=Math.random();console.log(i,d);const[c,l]=a.exports.useState([{suit:"hearts",value:2},{suit:"hearts",value:3},{suit:"hearts",value:4},{suit:"hearts",value:5},{suit:"hearts",value:6},{suit:"hearts",value:7},{suit:"hearts",value:8},{suit:"hearts",value:9},{suit:"hearts",value:"T"},{suit:"hearts",value:"J"},{suit:"hearts",value:"Q"},{suit:"hearts",value:"K"},{suit:"hearts",value:"A"},{suit:"diamonds",value:2},{suit:"diamonds",value:3},{suit:"diamonds",value:4},{suit:"diamonds",value:5},{suit:"diamonds",value:6},{suit:"diamonds",value:7},{suit:"diamonds",value:8},{suit:"diamonds",value:9},{suit:"diamonds",value:"T"},{suit:"diamonds",value:"J"},{suit:"diamonds",value:"Q"},{suit:"diamonds",value:"K"},{suit:"diamonds",value:"A"},{suit:"clubs",value:2},{suit:"clubs",value:3},{suit:"clubs",value:4},{suit:"clubs",value:5},{suit:"clubs",value:6},{suit:"clubs",value:7},{suit:"clubs",value:8},{suit:"clubs",value:9},{suit:"clubs",value:"T"},{suit:"clubs",value:"J"},{suit:"clubs",value:"Q"},{suit:"clubs",value:"K"},{suit:"clubs",value:"A"},{suit:"spades",value:2},{suit:"spades",value:3},{suit:"spades",value:4},{suit:"spades",value:5},{suit:"spades",value:6},{suit:"spades",value:7},{suit:"spades",value:8},{suit:"spades",value:9},{suit:"spades",value:"T"},{suit:"spades",value:"J"},{suit:"spades",value:"Q"},{suit:"spades",value:"K"},{suit:"spades",value:"A"}]),[u,n]=a.exports.useState([{suit:"hearts",value:2},{suit:"hearts",value:3},{suit:"hearts",value:4},{suit:"hearts",value:5},{suit:"hearts",value:6},{suit:"hearts",value:7},{suit:"hearts",value:8},{suit:"hearts",value:9},{suit:"hearts",value:"T"},{suit:"hearts",value:"J"},{suit:"hearts",value:"Q"},{suit:"hearts",value:"K"},{suit:"hearts",value:"A"},{suit:"diamonds",value:2},{suit:"diamonds",value:3},{suit:"diamonds",value:4},{suit:"diamonds",value:5},{suit:"diamonds",value:6},{suit:"diamonds",value:7},{suit:"diamonds",value:8},{suit:"diamonds",value:9},{suit:"diamonds",value:"T"},{suit:"diamonds",value:"J"},{suit:"diamonds",value:"Q"},{suit:"diamonds",value:"K"},{suit:"diamonds",value:"A"},{suit:"clubs",value:2},{suit:"clubs",value:3},{suit:"clubs",value:4},{suit:"clubs",value:5},{suit:"clubs",value:6},{suit:"clubs",value:7},{suit:"clubs",value:8},{suit:"clubs",value:9},{suit:"clubs",value:"T"},{suit:"clubs",value:"J"},{suit:"clubs",value:"Q"},{suit:"clubs",value:"K"},{suit:"clubs",value:"A"},{suit:"spades",value:2},{suit:"spades",value:3},{suit:"spades",value:4},{suit:"spades",value:5},{suit:"spades",value:6},{suit:"spades",value:7},{suit:"spades",value:8},{suit:"spades",value:9},{suit:"spades",value:"T"},{suit:"spades",value:"J"},{suit:"spades",value:"Q"},{suit:"spades",value:"K"},{suit:"spades",value:"A"}]),[m,f]=a.exports.useState(1),[v,w]=a.exports.useState([]);a.exports.useState(3);const[C,J]=a.exports.useState([]),[S,K]=a.exports.useState([]),[b,M]=a.exports.useState([]),[P,Q]=a.exports.useState(!1),[N,D]=a.exports.useState([{suit:H[0],value:G[0]},{suit:H[0],value:G[1]}]),[I,O]=a.exports.useState(1),R=e=>{const r=[...e];let o=e.length,p;for(;o!=0;)p=Math.floor(Math.random()*o),o--,[r[o],r[p]]=[r[p],r[o]];n(r)};a.exports.useEffect(()=>{R(c)},[]),a.exports.useEffect(()=>{B()},[u]);const L=e=>{let r=[...N],o=(I+1)%2;r[o]=e,O(o),D(r)},W=e=>{let r=b[e].map(x=>`${x.value}${x.suit}`.slice(0,2)),o=C.map(x=>`${x.value}${x.suit}`.slice(0,2)),p=S.map(x=>`${x.value}${x.suit}`.slice(0,2));o=[...o,...r],p=[...p,...r];let T=[{id:1,cards:o},{id:2,cards:p}],g=U.orderHands(T);return console.log(g,e),g[0][0].id===1},B=()=>{const e=u;J([e[0],e[1]]),K([e[2],e[3]]),M([[e[4],e[5],e[6],e[7],e[8]],[e[9],e[10],e[11],e[12],e[13]],[e[14],e[15],e[16],e[17],e[18]],[e[19],e[20],e[21],e[22],e[23]],[e[24],e[25],e[26],e[27],e[28]],[e[29],e[30],e[31],e[32],e[33]],[e[34],e[35],e[36],e[37],e[38]],[e[39],e[40],e[41],e[42],e[43]]])};a.exports.useEffect(()=>{if(b.length===0)return;let e=[];for(let r=0;r<b.length;r++)e.push(W(r));w([...e])},[b]);function Y(){return s(se,{round:m,winStates:v,cards:b})}function z(){return C.length===0?s(j,{}):s(F,{playerCards:C})}function V(){return S.length===0?s(j,{}):s(F,{playerCards:N})}const q=(e,r)=>{let o=!0;return e.forEach(p=>{let T=!1;r.forEach(g=>{g.suit===p.suit&&g.value===p.value&&(T=!0)}),T||(o=!1)}),o},X=e=>{if(q(N,S)){console.log("Good"),Q(!0);return}else console.log("Bad");e>b.length||f(e)};return h("div",{className:"font-bold text-2xl flex mt-40 flex-col h-full min-h-screen",children:[s(le,{open:P,hand:S,round:m}),s("div",{className:"text-center pb-2 border-b-2 mx-0 fixed w-screen top-4 bg-white z-10",children:"Pokerdle"}),h("div",{className:"bg-white z-10",children:[h("div",{className:"flex flex-col justify-center fixed top-24 left-8",children:[s("div",{className:"text-sm",children:"Your Cards"}),s(z,{})]}),h("div",{className:"flex flex-col justify-center fixed top-24 right-8",children:[s("div",{className:"text-sm",children:"Your Guess"}),s(V,{})]})]}),s("div",{className:"flex justify-center fixed bottom-36 right-6 text-sm",children:s("button",{className:"bg-slate-200 rounded-md p-2",onClick:e=>X(m+1),children:"Guess"})}),s(Y,{}),s(ae,{cards:c,round:m,tables:b,select:L,selectedCards:N})]})};Z.render(s(_.StrictMode,{children:s(ue,{})}),document.getElementById("root"));

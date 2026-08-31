(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var a=e.i(43476),t=e.i(71645);let s=(...e)=>e.filter((e,a,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===a).join(" ").trim(),n=e=>{let a=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,t)=>t?t.toUpperCase():a.toLowerCase());return a.charAt(0).toUpperCase()+a.slice(1)};var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,t.createContext)({}),i=(0,t.forwardRef)(({color:e,size:a,strokeWidth:n,absoluteStrokeWidth:i,className:o="",children:d,iconNode:c,...u},m)=>{let{size:x=24,strokeWidth:p=2,absoluteStrokeWidth:g=!1,color:h="currentColor",className:b=""}=(0,t.useContext)(l)??{},f=i??g?24*Number(n??p)/Number(a??x):n??p;return(0,t.createElement)("svg",{ref:m,...r,width:a??x??r.width,height:a??x??r.height,stroke:e??h,strokeWidth:f,className:s("lucide",b,o),...!d&&!(e=>{for(let a in e)if(a.startsWith("aria-")||"role"===a||"title"===a)return!0;return!1})(u)&&{"aria-hidden":"true"},...u},[...c.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(d)?d:[d]])}),o=(e,a)=>{let r=(0,t.forwardRef)(({className:r,...l},o)=>(0,t.createElement)(i,{ref:o,iconNode:a,className:s(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,r),...l}));return r.displayName=n(e),r},d=o("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),c=o("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),u=o("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),m=o("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]),x=o("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),p=o("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),g=o("piggy-bank",[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]]),h=o("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),b="kantong-tracker-data-v1",f=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],k=[{bg:"var(--sage-100)",text:"var(--sage-700)",dot:"var(--sage-500)"},{bg:"var(--orange-100)",text:"var(--orange-600)",dot:"var(--orange-500)"},{bg:"var(--teal-100)",text:"var(--teal-700)",dot:"var(--teal-500)"},{bg:"var(--rose-100)",text:"var(--rose-700)",dot:"var(--rose-500)"}];function v(){let e=new Date,a=e.getTimezoneOffset();return new Date(e.getTime()-6e4*a).toISOString().slice(0,10)}function j(e){return e.slice(0,7)}function y(){return v().slice(0,7)}function N(e){let[a,t]=e.split("-").map(Number);return`${f[t-1]} ${a}`}function w(e,a){let[t,s]=e.split("-").map(Number);for(s+=a;s>12;)s-=12,t+=1;for(;s<1;)s+=12,t-=1;return`${t}-${String(s).padStart(2,"0")}`}function C(e){let a=new Date(e+"T00:00:00");return`${a.getDate()} ${f[a.getMonth()].slice(0,3)}`}function S(e){return`${e<0?"-":""}Rp${Math.round(Math.abs(e)).toLocaleString("id-ID")}`}function M(e){let a=String(e).replace(/\D/g,"");return a?Number(a).toLocaleString("id-ID"):""}function F(e){return Number(String(e).replace(/\D/g,""))||0}function B(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function A(){return(0,a.jsx)("style",{children:`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

      .kt-root {
        --bg: #F6F7F0;
        --surface: #FFFFFF;
        --surface-soft: #FBFAF4;
        --ink: #2B3328;
        --ink-soft: #6E7A65;
        --ink-faint: #A6AF9B;
        --sage-50: #EEF5EA;
        --sage-100: #DCEBD3;
        --sage-300: #ABCE9A;
        --sage-500: #6FA25C;
        --sage-600: #578A47;
        --sage-700: #3F6733;
        --orange-50: #FDF2E3;
        --orange-100: #F8E0BB;
        --orange-300: #F0B76F;
        --orange-500: #E28F3C;
        --orange-600: #C17324;
        --teal-100: #D8ECE3;
        --teal-500: #58A88C;
        --teal-700: #2F6B56;
        --rose-100: #F6DFD6;
        --rose-500: #C97D5F;
        --rose-700: #964E36;
        --danger-100: #FBDBD2;
        --danger-500: #D0644A;
        --danger-700: #A03F2A;
        --border: #E7E3D3;
        --shadow-sm: 0 1px 2px rgba(43,51,40,0.06);
        --shadow-md: 0 10px 24px rgba(43,51,40,0.08);
        font-family: 'Inter', system-ui, sans-serif;
        color: var(--ink);
        background: var(--bg);
        min-height: 100%;
      }
      .kt-heading { font-family: 'Poppins', 'Inter', sans-serif; }
      .kt-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 20px;
        box-shadow: var(--shadow-sm);
      }
      .kt-card-flat {
        background: var(--surface-soft);
        border: 1px solid var(--border);
        border-radius: 16px;
      }
      .kt-btn-primary {
        background: var(--sage-600);
        color: #fff;
        font-weight: 600;
        border-radius: 999px;
        transition: background 0.15s ease, transform 0.1s ease;
      }
      .kt-btn-primary:hover { background: var(--sage-700); }
      .kt-btn-primary:active { transform: scale(0.97); }
      .kt-btn-ghost {
        background: transparent;
        color: var(--ink-soft);
        border: 1px solid var(--border);
        border-radius: 999px;
      }
      .kt-btn-ghost:hover { background: var(--sage-50); color: var(--sage-700); border-color: var(--sage-300); }
      .kt-input, .kt-select {
        width: 100%;
        background: var(--surface-soft);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 10px 12px;
        font-size: 14px;
        color: var(--ink);
        outline: none;
        transition: border-color 0.15s ease;
      }
      .kt-input:focus, .kt-select:focus { border-color: var(--sage-500); background: var(--surface); }
      .kt-label {
        font-size: 12.5px;
        font-weight: 600;
        color: var(--ink-soft);
        margin-bottom: 6px;
        display: block;
      }
      .kt-progress-track {
        width: 100%;
        height: 8px;
        border-radius: 999px;
        background: var(--sage-50);
        overflow: hidden;
      }
      .kt-progress-fill { height: 100%; border-radius: 999px; transition: width 0.4s ease; }
      .kt-fab {
        position: fixed;
        right: 20px;
        bottom: 24px;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: var(--sage-600);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 12px 24px rgba(63,103,51,0.35);
        transition: transform 0.15s ease, background 0.15s ease;
      }
      .kt-fab:hover { background: var(--sage-700); transform: translateY(-2px); }
      .kt-fab:active { transform: scale(0.94); }
      .kt-overlay {
        position: fixed; inset: 0;
        background: rgba(43,51,40,0.35);
        backdrop-filter: blur(2px);
        display: flex; align-items: flex-end; justify-content: center;
        z-index: 50;
        padding: 0;
      }
      @media (min-width: 640px) {
        .kt-overlay { align-items: center; padding: 20px; }
      }
      .kt-modal {
        background: var(--surface);
        width: 100%;
        max-width: 460px;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 24px 24px 0 0;
        box-shadow: var(--shadow-md);
      }
      @media (min-width: 640px) {
        .kt-modal { border-radius: 24px; }
      }
      .kt-chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 12.5px;
        font-weight: 600;
      }
      .kt-row-btn {
        color: var(--ink-faint);
        border-radius: 8px;
        transition: color 0.15s ease, background 0.15s ease;
      }
      .kt-row-btn:hover { color: var(--danger-500); background: var(--danger-100); }
      .kt-icon-btn:hover { background: var(--sage-50); }
      .kt-scrollbar-none::-webkit-scrollbar { display: none; }
    `})}function D({ratio:e,tone:t}){let s=100*Math.max(0,Math.min(1,e));return(0,a.jsx)("div",{className:"kt-progress-track",children:(0,a.jsx)("div",{className:"kt-progress-fill",style:{width:`${s}%`,background:"danger"===t?"var(--danger-500)":"warn"===t?"var(--orange-500)":"var(--sage-500)"}})})}function z({title:e,subtitle:t,actionLabel:s,onAction:n}){return(0,a.jsxs)("div",{className:"kt-card-flat flex flex-col items-center text-center gap-2 py-10 px-6",children:[(0,a.jsx)("p",{className:"kt-heading text-sm font-semibold",style:{color:"var(--ink)"},children:e}),(0,a.jsx)("p",{className:"text-sm",style:{color:"var(--ink-soft)"},children:t}),s&&(0,a.jsx)("button",{onClick:n,className:"kt-btn-primary text-sm px-4 py-2 mt-2",children:s})]})}function E({title:e,onClose:t,children:s}){return(0,a.jsx)("div",{className:"kt-overlay",onMouseDown:e=>{e.target===e.currentTarget&&t()},children:(0,a.jsxs)("div",{className:"kt-modal",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-5 pt-5 pb-3",children:[(0,a.jsx)("h3",{className:"kt-heading text-base font-semibold",children:e}),(0,a.jsx)("button",{onClick:t,className:"kt-icon-btn p-1.5 rounded-full",style:{color:"var(--ink-soft)"},children:(0,a.jsx)(c,{size:18})})]}),(0,a.jsx)("div",{className:"px-5 pb-5",children:s})]})})}function I({kantong:e,value:s,onChange:n,onCreateNew:r}){let[l,i]=(0,t.useState)(!1),[o,d]=(0,t.useState)(""),[c,u]=(0,t.useState)("");return l?(0,a.jsxs)("div",{className:"kt-card-flat p-3 flex flex-col gap-2",children:[(0,a.jsx)("input",{autoFocus:!0,value:o,onChange:e=>d(e.target.value),placeholder:"Nama kantong baru",className:"kt-input"}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-sm",style:{color:"var(--ink-soft)"},children:"Rp"}),(0,a.jsx)("input",{value:c,onChange:e=>u(M(e.target.value)),placeholder:"Budget bulanan (opsional)",inputMode:"numeric",className:"kt-input"})]}),(0,a.jsxs)("div",{className:"flex gap-2 mt-1",children:[(0,a.jsx)("button",{type:"button",onClick:()=>{i(!1),d(""),u("")},className:"kt-btn-ghost text-sm px-3 py-1.5 flex-1",children:"Batal"}),(0,a.jsx)("button",{type:"button",disabled:!o.trim(),onClick:()=>{r(o.trim(),F(c)),i(!1),d(""),u("")},className:"kt-btn-primary text-sm px-3 py-1.5 flex-1 disabled:opacity-40",children:"Tambah & pilih"})]})]}):(0,a.jsxs)("select",{value:s||"",onChange:e=>{"__new__"===e.target.value?i(!0):n(e.target.value)},className:"kt-select",children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Pilih kantong"}),e.map(e=>(0,a.jsx)("option",{value:e.id,children:e.name},e.id)),(0,a.jsx)("option",{value:"__new__",children:"+ Tambah kantong baru"})]})}function T({kantong:e,defaultKantongId:s,onClose:n,onSubmit:r,onCreateKantong:l}){let[i,o]=(0,t.useState)(""),[d,c]=(0,t.useState)(v()),[u,m]=(0,t.useState)(""),[x,p]=(0,t.useState)(s||""),g=F(u),h=i.trim()&&g>0&&x;return(0,a.jsx)(E,{title:"Catat pengeluaran",onClose:n,children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"kt-label",children:"Nama pengeluaran"}),(0,a.jsx)("input",{autoFocus:!0,value:i,onChange:e=>o(e.target.value),placeholder:"Misalnya: Makan siang",className:"kt-input"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"kt-label",children:"Tanggal"}),(0,a.jsx)("input",{type:"date",value:d,onChange:e=>c(e.target.value),className:"kt-input"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"kt-label",children:"Jumlah"}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-sm",style:{color:"var(--ink-soft)"},children:"Rp"}),(0,a.jsx)("input",{value:u,onChange:e=>m(M(e.target.value)),placeholder:"0",inputMode:"numeric",className:"kt-input"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"kt-label",children:"Kantong"}),(0,a.jsx)(I,{kantong:e,value:x,onChange:p,onCreateNew:(e,a)=>{p(l(e,a))}})]}),(0,a.jsx)("button",{disabled:!h,onClick:()=>r({name:i.trim(),date:d,amount:g,kantongId:x}),className:"kt-btn-primary text-sm py-2.5 mt-1 disabled:opacity-40",children:"Simpan pengeluaran"})]})})}function $({onCancel:e,onSubmit:s}){let[n,r]=(0,t.useState)(""),[l,i]=(0,t.useState)("");return(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"kt-label",children:"Nama kantong"}),(0,a.jsx)("input",{autoFocus:!0,value:n,onChange:e=>r(e.target.value),placeholder:"Misalnya: Makan, Transport, Hiburan",className:"kt-input"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"kt-label",children:"Budget bulanan (opsional)"}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-sm",style:{color:"var(--ink-soft)"},children:"Rp"}),(0,a.jsx)("input",{value:l,onChange:e=>i(M(e.target.value)),placeholder:"0",inputMode:"numeric",className:"kt-input"})]}),(0,a.jsx)("p",{className:"text-xs mt-1.5",style:{color:"var(--ink-faint)"},children:"Bisa diatur atau diubah kapan saja nanti."})]}),(0,a.jsxs)("div",{className:"flex gap-2 mt-1",children:[(0,a.jsx)("button",{onClick:e,className:"kt-btn-ghost text-sm py-2.5 flex-1",children:"Batal"}),(0,a.jsx)("button",{disabled:!n.trim(),onClick:()=>s(n.trim(),F(l)),className:"kt-btn-primary text-sm py-2.5 flex-1 disabled:opacity-40",children:"Tambah kantong"})]})]})}function K({kantong:e,monthKey:s,isCurrentMonth:n,budget:r,spent:l,expenses:i,onClose:o,onDeleteExpense:d,onDeleteKantong:c,onSaveBudget:x,onAddExpenseHere:p}){let[g,b]=(0,t.useState)(!1),[f,k]=(0,t.useState)(r?r.toLocaleString("id-ID"):""),v=r-l,j=r>0?l/r:0,y=r<=0?"sage":j>=1?"danger":j>=.7?"warn":"sage";return(0,a.jsx)(E,{title:e.name,onClose:o,children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"kt-card-flat p-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"text-xs mb-1",style:{color:"var(--ink-soft)"},children:["Terpakai bulan ",N(s).toLowerCase()]}),(0,a.jsx)("p",{className:"kt-heading text-lg font-semibold",children:S(l)})]}),g?null:(0,a.jsxs)("button",{onClick:()=>{k(r?r.toLocaleString("id-ID"):""),b(!0)},className:"kt-btn-ghost text-xs px-3 py-1.5 flex items-center gap-1.5",children:[(0,a.jsx)(u,{size:12})," Atur budget"]})]}),g?(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-sm",style:{color:"var(--ink-soft)"},children:"Rp"}),(0,a.jsx)("input",{autoFocus:!0,value:f,onChange:e=>k(M(e.target.value)),inputMode:"numeric",className:"kt-input"}),(0,a.jsx)("button",{onClick:()=>{x(F(f)),b(!1)},className:"kt-btn-primary p-2.5","aria-label":"Simpan budget",children:(0,a.jsx)(h,{size:16})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-1.5",children:[(0,a.jsxs)("span",{className:"text-xs",style:{color:"var(--ink-faint)"},children:["Budget ",n?"bulan ini":N(s).toLowerCase(),": ",r>0?S(r):"belum diatur"]}),r>0&&(0,a.jsxs)("span",{className:"text-xs font-medium",style:{color:v<0?"var(--danger-500)":"var(--sage-700)"},children:["Sisa ",S(v)]})]}),r>0&&(0,a.jsx)(D,{ratio:j,tone:y})]})]}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("button",{onClick:p,className:"kt-btn-primary text-sm py-2 flex-1",children:"+ Catat di kantong ini"}),(0,a.jsx)("button",{onClick:c,className:"kt-btn-ghost text-sm py-2 px-3","aria-label":"Hapus kantong",children:(0,a.jsx)(m,{size:16})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-xs font-semibold mb-2",style:{color:"var(--ink-soft)"},children:"Pengeluaran yang mengurangi budget ini"}),0===i.length?(0,a.jsxs)("p",{className:"text-sm py-4 text-center",style:{color:"var(--ink-faint)"},children:["Belum ada pengeluaran di kantong ini bulan ",N(s).toLowerCase(),"."]}):(0,a.jsx)("div",{className:"kt-card-flat divide-y",style:{borderColor:"var(--border)"},children:i.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center gap-3 px-3.5 py-2.5",style:0!==t?{borderTop:"1px solid var(--border)"}:{},children:[(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-medium truncate",children:e.name}),(0,a.jsx)("p",{className:"text-xs",style:{color:"var(--ink-faint)"},children:C(e.date)})]}),(0,a.jsx)("p",{className:"text-sm font-semibold whitespace-nowrap",children:S(e.amount)}),(0,a.jsx)("button",{onClick:()=>window.confirm(`Hapus pengeluaran "${e.name}"?`)&&d(e.id),className:"kt-row-btn p-1.5","aria-label":"Hapus",children:(0,a.jsx)(m,{size:14})})]},e.id))})]})]})})}e.s(["default",0,function(){let[e,s]=(0,t.useState)(!1),[n,r]=(0,t.useState)([]),[l,i]=(0,t.useState)([]),[o,c]=(0,t.useState)({}),[u,h]=(0,t.useState)(y()),[f,v]=(0,t.useState)(!1),[M,F]=(0,t.useState)(!1),[I,H]=(0,t.useState)(null),[L,R]=(0,t.useState)(null),[O,P]=(0,t.useState)(null),[_,J]=(0,t.useState)(!1);(0,t.useEffect)(()=>{try{let e=localStorage.getItem(b);if(e){let a=JSON.parse(e);r(a.kantong||[]),i(a.expenses||[]),c(a.budgetOverrides||{})}}catch(e){console.error("Gagal membaca data:",e)}s(!0)},[]),(0,t.useEffect)(()=>{if(e)try{localStorage.setItem(b,JSON.stringify({kantong:n,expenses:l,budgetOverrides:o})),J(!1)}catch(e){console.error("Gagal menyimpan data:",e),J(!0)}},[n,l,o,e]);let W=u===y();function U(e,a){let t=o[a]?.[e];if(void 0!==t)return t;let s=n.find(a=>a.id===e);return s&&s.defaultBudget||0}function V(e,a){return l.filter(t=>t.kantongId===e&&j(t.date)===a).reduce((e,a)=>e+a.amount,0)}function G(e,a){let t=B();return r(s=>[...s,{id:t,name:e,defaultBudget:a||0,colorIdx:s.length%k.length}]),t}function Z(e){i(a=>a.filter(a=>a.id!==e))}let q=(0,t.useMemo)(()=>l.filter(e=>j(e.date)===u).sort((e,a)=>e.date<a.date?1:e.date>a.date?-1:a.createdAt-e.createdAt),[l,u]),Y=(0,t.useMemo)(()=>{let e=0,a=0;return n.forEach(t=>{e+=U(t.id,u),a+=V(t.id,u)}),{budget:e,spent:a,sisa:e-a}},[n,o,l,u]),Q=n.find(e=>e.id===I);return e?(0,a.jsxs)("div",{className:"kt-root",style:{minHeight:"100%"},children:[(0,a.jsx)(A,{}),(0,a.jsxs)("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 py-6 pb-28",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,a.jsx)("div",{className:"flex items-center justify-center rounded-2xl",style:{width:40,height:40,background:"var(--sage-100)",color:"var(--sage-700)"},children:(0,a.jsx)(g,{size:22})}),(0,a.jsx)("h1",{className:"kt-heading text-lg font-semibold",children:"Kantong Ica"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("button",{onClick:()=>h(e=>w(e,-1)),className:"kt-icon-btn p-1.5 rounded-full",style:{color:"var(--ink-soft)"},"aria-label":"Bulan sebelumnya",children:(0,a.jsx)(x,{size:18})}),(0,a.jsx)("span",{className:"text-sm font-medium px-1.5 min-w-[110px] text-center",children:N(u)}),(0,a.jsx)("button",{onClick:()=>!W&&h(e=>w(e,1)),disabled:W,className:"kt-icon-btn p-1.5 rounded-full disabled:opacity-30",style:{color:"var(--ink-soft)"},"aria-label":"Bulan berikutnya",children:(0,a.jsx)(p,{size:18})})]})]}),!W&&(0,a.jsxs)("div",{className:"text-xs font-medium mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",style:{background:"var(--orange-50)",color:"var(--orange-600)"},children:["Melihat riwayat ",N(u)]}),(0,a.jsxs)("div",{className:"kt-card p-5 mb-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-3 mb-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-xs mb-1",style:{color:"var(--ink-soft)"},children:"Budget"}),(0,a.jsx)("p",{className:"kt-heading text-base font-semibold",children:S(Y.budget)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-xs mb-1",style:{color:"var(--ink-soft)"},children:"Terpakai"}),(0,a.jsx)("p",{className:"kt-heading text-base font-semibold",style:{color:"var(--orange-600)"},children:S(Y.spent)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-xs mb-1",style:{color:"var(--ink-soft)"},children:"Sisa"}),(0,a.jsx)("p",{className:"kt-heading text-base font-semibold",style:{color:Y.sisa<0?"var(--danger-500)":"var(--sage-700)"},children:S(Y.sisa)})]})]}),(0,a.jsx)(D,{ratio:Y.budget>0?Y.spent/Y.budget:0,tone:Y.budget>0&&Y.spent/Y.budget>=1?"danger":Y.budget>0&&Y.spent/Y.budget>=.7?"warn":"sage"})]}),(0,a.jsx)("div",{className:"flex items-center justify-between mb-3",children:(0,a.jsx)("h2",{className:"kt-heading text-sm font-semibold",style:{color:"var(--ink-soft)"},children:"Kantong"})}),0===n.length?(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)(z,{title:"Belum ada kantong",subtitle:"Kantong adalah kategori pengeluaranmu, misalnya Makan atau Transport.",actionLabel:"Tambah kantong pertama",onAction:()=>F(!0)})}):(0,a.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6",children:[n.map(e=>{let t=U(e.id,u),s=V(e.id,u),n=t>0?s/t:0,r=k[e.colorIdx%k.length];return(0,a.jsxs)("button",{onClick:()=>H(e.id),className:"kt-card p-4 text-left flex flex-col gap-2.5",children:[(0,a.jsxs)("span",{className:"kt-chip",style:{background:r.bg,color:r.text,alignSelf:"flex-start"},children:[(0,a.jsx)("span",{style:{width:6,height:6,borderRadius:999,background:r.dot}}),e.name]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"kt-heading text-sm font-semibold",children:S(s)}),(0,a.jsx)("p",{className:"text-xs",style:{color:"var(--ink-faint)"},children:t>0?`dari ${S(t)}`:"budget belum diatur"})]}),t>0&&(0,a.jsx)(D,{ratio:n,tone:t<=0?"sage":n>=1?"danger":n>=.7?"warn":"sage"})]},e.id)}),(0,a.jsxs)("button",{onClick:()=>F(!0),className:"kt-card-flat flex flex-col items-center justify-center gap-1.5 py-6",style:{borderStyle:"dashed",color:"var(--ink-faint)"},children:[(0,a.jsx)(d,{size:18}),(0,a.jsx)("span",{className:"text-xs font-medium",children:"Kantong baru"})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,a.jsx)("h2",{className:"kt-heading text-sm font-semibold",style:{color:"var(--ink-soft)"},children:"Pengeluaran"}),(0,a.jsxs)("span",{className:"text-xs",style:{color:"var(--ink-faint)"},children:[q.length," catatan"]})]}),0===q.length?(0,a.jsx)(z,{title:"Belum ada pengeluaran",subtitle:`Catat pengeluaranmu di ${N(u)} lewat tombol tambah.`}):(0,a.jsx)("div",{className:"kt-card divide-y",style:{borderColor:"var(--border)"},children:q.map((e,t)=>{var s;let r,l=(s=e.kantongId,(r=n.find(e=>e.id===s))?{name:r.name,...k[r.colorIdx%k.length]}:{name:"Kantong dihapus",...k[0]});return(0,a.jsxs)("div",{className:"flex items-center gap-3 px-4 py-3",style:0!==t?{borderTop:"1px solid var(--border)"}:{},children:[(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-medium truncate",children:e.name}),(0,a.jsxs)("div",{className:"flex items-center gap-2 mt-1",children:[(0,a.jsx)("span",{className:"kt-chip",style:{background:l.bg,color:l.text,padding:"2px 8px",fontSize:11.5},children:l.name}),(0,a.jsx)("span",{className:"text-xs",style:{color:"var(--ink-faint)"},children:C(e.date)})]})]}),(0,a.jsx)("p",{className:"text-sm font-semibold whitespace-nowrap",children:S(e.amount)}),(0,a.jsx)("button",{onClick:()=>window.confirm(`Hapus pengeluaran "${e.name}"?`)&&Z(e.id),className:"kt-row-btn p-1.5","aria-label":"Hapus",children:(0,a.jsx)(m,{size:15})})]},e.id)})}),_&&(0,a.jsx)("p",{className:"text-xs mt-4 text-center",style:{color:"var(--danger-500)"},children:"Perubahan terakhir gagal disimpan. Periksa koneksimu."})]}),(0,a.jsx)("button",{onClick:()=>{P(null),v(!0)},className:"kt-fab","aria-label":"Catat pengeluaran",children:(0,a.jsx)(d,{size:26})}),f&&(0,a.jsx)(T,{kantong:n,defaultKantongId:O,onClose:()=>v(!1),onCreateKantong:G,onSubmit:e=>{!function({name:e,date:a,amount:t,kantongId:s}){i(n=>[...n,{id:B(),name:e,date:a,amount:t,kantongId:s,createdAt:Date.now()}]),h(j(a))}(e),v(!1)}}),M&&(0,a.jsx)(E,{title:"Kantong baru",onClose:()=>F(!1),children:(0,a.jsx)($,{onCancel:()=>F(!1),onSubmit:(e,a)=>{G(e,a),F(!1)}})}),Q&&(0,a.jsx)(K,{kantong:Q,monthKey:u,isCurrentMonth:W,budget:U(Q.id,u),spent:V(Q.id,u),expenses:q.filter(e=>e.kantongId===Q.id),onClose:()=>{H(null),R(null)},onDeleteExpense:Z,onDeleteKantong:()=>{var e;let a;return e=Q.id,a=l.some(a=>a.kantongId===e),void(window.confirm(a?"Kantong ini punya riwayat pengeluaran. Hapus kantong beserta semua pengeluarannya?":"Hapus kantong ini?")&&(r(a=>a.filter(a=>a.id!==e)),i(a=>a.filter(a=>a.kantongId!==e)),H(null)))},onSaveBudget:e=>{var a;return a=Q.id,void(c(t=>({...t,[u]:{...t[u],[a]:e}})),u===y()&&r(t=>t.map(t=>t.id===a?{...t,defaultBudget:e}:t)))},onAddExpenseHere:()=>{P(Q.id),H(null),v(!0)}})]}):(0,a.jsx)("div",{className:"kt-root flex items-center justify-center",style:{minHeight:400},children:(0,a.jsx)("p",{style:{color:"var(--ink-soft)"},className:"text-sm",children:"Memuat data..."})})}],31713)}]);
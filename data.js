
// Course study note: data driven rendering. Programs are data, cards are derived from state (filter + search + sort), never hard coded in HTML.
// Pack pricing is derived state: single price is stored once, pack prices are computed from it.
const PROGRAMS=[
{id:1,name:"Steady Steps Mobility",cat:"Mobility",price:68,img:"images/p5793917.jpg",desc:"Gentle one to one sessions that rebuild walking confidence after illness or a fall.",mins:50},
{id:2,name:"Hip and Knee Recovery",cat:"Post Surgery",price:82,img:"images/p6111589.jpg",desc:"Structured recovery after joint replacement, paced to your surgeon notes.",mins:50},
{id:3,name:"Strong Core Strength",cat:"Strength",price:58,img:"images/p4506166.jpg",desc:"Progressive strength work with bands and light weights, checked every session.",mins:45},
{id:4,name:"Balance Without Fear",cat:"Balance",price:62,img:"images/p20860622.jpg",desc:"Balance drills and home safety practice for steadier days.",mins:45},
{id:5,name:"Shoulder Return Plan",cat:"Post Surgery",price:78,img:"images/p6111585.jpg",desc:"Post surgery shoulder care that restores reach step by step.",mins:50},
{id:6,name:"Back Pain Care Studio",cat:"Pain Care",price:66,img:"images/p4506160.jpg",desc:"Plain word back pain care, movement first, with a home plan you can follow.",mins:50},
{id:7,name:"Sports Return Training",cat:"Sports",price:74,img:"images/p6111604.jpg",desc:"Return to sport testing and training after sprains and strains.",mins:55},
{id:8,name:"Arm and Hand Therapy",cat:"Mobility",price:64,img:"images/p5793792.jpg",desc:"Reach, grip, and arm movement therapy after injury or surgery.",mins:45},
{id:9,name:"Leg Strength Lab",cat:"Strength",price:60,img:"images/p4506073.jpg",desc:"Leg strength sessions with measured progress every two weeks.",mins:45},
{id:10,name:"Stretch and Move Class",cat:"Balance",price:48,img:"images/p6973123.jpg",desc:"Guided stretching and movement in a small, calm group.",mins:40},
{id:11,name:"Prosthetic Rehab Support",cat:"Sports",price:86,img:"images/p20860588.jpg",desc:"Rehabilitation support for prosthetic users, gait first.",mins:55},
{id:12,name:"Neck and Shoulder Ease",cat:"Pain Care",price:63,img:"images/p4506074.jpg",desc:"Hands on care and posture practice for neck and shoulder pain.",mins:45}
];
function packPrice(p,pack){ if(pack===4) return Math.round(p.price*4*0.9); if(pack===8) return Math.round(p.price*8*0.8); return p.price; }
function money(n){ return "$"+n.toFixed(2); }
function getBasket(){ try{return JSON.parse(localStorage.getItem("nr_basket")||"[]")}catch(e){return[]} }
function setBasket(b){ localStorage.setItem("nr_basket",JSON.stringify(b)); updateBasketCount(); }
function updateBasketCount(){ const el=document.getElementById("basketCount"); if(el){ const b=getBasket(); el.textContent=b.reduce((s,i)=>s+i.qty,0);} }
function addToBasket(id,pack){ const b=getBasket(); const key=id+"-"+pack; const f=b.find(i=>i.key===key); if(f) f.qty++; else b.push({key:key,id:id,pack:pack,qty:1}); setBasket(b); }

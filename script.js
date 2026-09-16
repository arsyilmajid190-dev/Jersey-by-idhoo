const WA="6285706743638";
const products=[
 {name:"North London — Home",league:"Premier League",price:249000,bg:"#e7ece8",shirt:"#e8e9e4",stripe:"#b31f32",num:"7"},
 {name:"Manchester — Home",league:"Premier League",price:259000,bg:"#e6ebf1",shirt:"#dfe7f1",stripe:"#8c1d2c",num:"10"},
 {name:"Catalunya — Home",league:"La Liga",price:249000,bg:"#f0e5e2",shirt:"#b52a35",stripe:"#183d7a",num:"9"},
 {name:"Madrid — Away",league:"La Liga",price:259000,bg:"#eee9dd",shirt:"#e7d9b5",stripe:"#182c52",num:"11"},
 {name:"Milano — Home",league:"Serie A",price:249000,bg:"#e8edf0",shirt:"#111820",stripe:"#c9c9c9",num:"9"},
 {name:"Torino — Home",league:"Serie A",price:239000,bg:"#efe9e2",shirt:"#f4f0e7",stripe:"#a51f2b",num:"10"},
 {name:"Munich — Home",league:"Bundesliga",price:259000,bg:"#f0e2e3",shirt:"#b51f32",stripe:"#183d75",num:"25"},
 {name:"Paris — Home",league:"Ligue 1",price:249000,bg:"#e6eaf0",shirt:"#152744",stripe:"#d8d8d8",num:"7"},
 {name:"Jakarta — Home",league:"Liga 1 Indonesia",price:219000,bg:"#f0e3e3",shirt:"#c7202c",stripe:"#eee",num:"10"},
 {name:"Surabaya — Home",league:"Liga 1 Indonesia",price:219000,bg:"#e8e9eb",shirt:"#173f78",stripe:"#e9e9e9",num:"9"}
];
const fmt=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
function render(filter="Semua"){
 const list=filter==="Semua"?products:products.filter(p=>p.league===filter);
 document.getElementById("count").textContent=`${list.length} jersey`;
 document.getElementById("products").innerHTML=list.map((p,i)=>`
 <article class="product">
   <div class="visual" style="background:${p.bg}">
     <div class="shirt" style="background:linear-gradient(90deg,${p.shirt} 0 34%,${p.stripe} 34% 39%,${p.shirt} 39% 61%,${p.stripe} 61% 66%,${p.shirt} 66% 100%);">
       <div class="name">PLAYER</div><div class="num">${p.num}</div>
     </div>
   </div>
   <div class="meta">
     <div class="league-name">${p.league}</div>
     <h3>${p.name}</h3>
     <div class="price">${fmt(p.price)}</div>
     <a class="order" target="_blank" rel="noopener" href="${wa(p)}">Pesan via WhatsApp →</a>
   </div>
 </article>`).join("");
}
function wa(p){
 const text=`Halo JerseyHUB, saya mau pesan:%0A%0AJersey: ${encodeURIComponent(p.name)}%0ALiga: ${encodeURIComponent(p.league)}%0AHarga katalog: ${encodeURIComponent(fmt(p.price))}%0A%0AUkuran: (S/M/L/XL)%0AJumlah: 1%0A%0AMohon cek stok dan total pembayaran.`;
 return `https://wa.me/${WA}?text=${text}`;
}
document.querySelectorAll(".league").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".league").forEach(x=>x.classList.remove("active"));
 b.classList.add("active"); render(b.dataset.league);
}));
render();

/* Tiện ích dùng chung: lưu tiến độ (an toàn nếu trình duyệt chặn) + chế độ sáng/tối */
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
(function(){
  const t=store.get("theme",null);
  if(t) document.documentElement.setAttribute("data-theme",t);
  document.addEventListener("DOMContentLoaded",()=>{
    const b=document.getElementById("themeBtn");
    if(!b) return;
    b.addEventListener("click",()=>{
      const cur=document.documentElement.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
      const nx=cur==="dark"?"light":"dark";
      document.documentElement.setAttribute("data-theme",nx);store.set("theme",nx);
    });
  });
})();
const slideSrc=(id,i)=>`slides/${id}/${String(i).padStart(2,"0")}.webp`;

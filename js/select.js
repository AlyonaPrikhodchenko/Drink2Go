const getTemplate=(e=[],t,s)=>{let i=t??"Выбрать сортировку";const l=e.map((e=>{let t="";return e.id===s&&(i=e.text,t="selected"),`<li class="select__item ${t}" data-type="item" data-id="${e.id}">${e.text}</li>`}));return`\n  <div class="select__backdrop" data-type="backdrop"></div>\n  <div class="select__input" data-type="input">\n    <span data-type="text">${i}</span>\n  </div>\n  <div class="select__dropdown">\n    <ul class="select__list reset-list">\n      ${l.join("")}\n    </ul>\n  </div>\n  `};export class Select{constructor(e,t){this.el=document.querySelector(e),this.options=t,this.selectedId=t.selectedId,this.#e(),this.#t()}#e(){const{placeholder:e,data:t}=this.options;this.el.classList.add("select"),this.el.innerHTML=getTemplate(t,e,this.selectedId)}#t(){this.clickHandler=this.clickHandler.bind(this),this.el.addEventListener("click",this.clickHandler),this.text=this.el.querySelector('[data-type="text"]')}clickHandler(e){const{type:t}=e.target.dataset;if("input"===t||"text"===t)this.toggle();else if("item"===t){const{id:t}=e.target.dataset;this.select(t)}else"backdrop"===t&&this.close()}get isOpen(){return this.el.classList.contains("open")}get current(){return this.options.data.find((e=>e.id===this.selectedId))}select(e){this.selectedId=e,this.text.textContent=this.current.text,this.el.querySelectorAll('[data-type="item"]').forEach((e=>{e.classList.remove("selected")})),this.el.querySelector(`[data-id="${e}"]`).classList.add("selected"),this.close()}toggle(){this.isOpen?this.close():this.open()}open(){this.el.classList.add("open")}close(){this.el.classList.remove("open")}destroy(){this.el.removeEventListener("click",this.clickHandler),this.el.innerHTML=""}}
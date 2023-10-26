(()=>{"use strict";var e={};function n(e,n){n.forEach((n=>e.appendChild(n)))}function t(e,n,...t){const a=document.createElement(e);return n&&a.classList.add(n),t.forEach((e=>{a.setAttribute(e[0],e[1])})),a}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!n;)n=a[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})();const a=e.p+"0cdeb25440bec2eb5662.png",o=e.p+"295dfd1fa5ea3b77db2d.jpg",i=e.p+"b63c574f9251103c1676.jpg",r=e.p+"69cacd390dd80ca5f46e.jpg",d=e.p+"90237b57c5d2de493e18.png";function s(){const e=document.querySelector("#content"),d=function(){const e=t("div",void 0,["id","content"]),d=t("header","main-header"),s=t("nav","main-header-nav");let c=t("div"),l=[t("a","active",["href","#"]),t("a",void 0,["href","#"]),t("a",void 0,["href","#"])];l[0].textContent="Home",l[1].textContent="Menu",l[2].textContent="Contact",n(c,l),s.appendChild(c);const h=t("div","main-header-header"),p=t("div","main-header-title");p.textContent="The Pepper Fox";const u=t("div","main-header-desc");u.innerHTML="Welcome to <strong>Pepper Fox</strong>, a cozy and charming\n  restaurant that serves delicious dishes with a touch of spice.\n  Pepper Fox is more than just a place to eat, it’s a place to\n  experience the warmth and hospitality of the fox family.";const m=t("div","main-header-logo"),f=t("img","logo");f.src=a,m.appendChild(f),n(h,[p,u,m]),n(d,[s,h]),e.appendChild(d);const g=t("main","main-main"),v=t("section","main-intro");let y=t("p","main-intro-desc");y.textContent="At Pepper Fox, you can enjoy a variety of cuisines, from traditional\nlocal dishes to international favorites, all prepared with fresh and\nhigh-quality ingredients. Whether you are looking for a hearty\nbreakfast, a satisfying lunch, or a romantic dinner, you will find\nsomething to suit your taste and mood at Pepper Fox.",v.appendChild(y),y=t("p","main-intro-desc"),y.textContent="Pepper Fox is also a place to have fun and relax, with a lively\n  atmosphere that reflects the personality of the fox. You can admire\n  the beautiful decor, featuring orange and red tones and a cute fox\n  logo, while listening to some upbeat music. You can also join in the\n  fun activities and events that Pepper Fox organizes regularly, such\n  as trivia nights, karaoke nights, and live performances.",v.appendChild(y);let C=t("img");C.src=o,v.appendChild(C),y=t("p","main-intro-desc"),y.textContent="Pepper Fox is more than just a restaurant, it’s a community of\n  friends and family who share a love for food and fun. Come and join\n  us at Pepper Fox, where you will always feel welcome and happy. We\n  look forward to seeing you soon!",v.appendChild(y),g.appendChild(v);let w=t("section","main-section"),x=t("div","main-section-header"),b=t("h2");b.textContent="Dining Lodge",C=t("img"),C.src=i,n(x,[b,C]);let k=t("p","main-section-desc");k.textContent="If you are looking for a more casual and familiar dining experience,\n  you can check out our main section, where we serve a range of normal\n  foods that are sure to satisfy your appetite. Our main section\n  offers a variety of dishes, from burgers and sandwiches to salads\n  and soups, all made with fresh and quality ingredients. You can also\n  choose from our selection of drinks, such as coffee, tea, juice, or\n  soda, to complement your meal. Our main section is open for\n  breakfast, lunch, and dinner, and you can enjoy your food in a\n  comfortable and relaxed setting. Whether you want a quick bite or a\n  leisurely meal, our main section is the perfect place for you.",n(w,[x,k]),g.appendChild(w),w=t("section","main-section"),x=t("div","main-section-header"),b=t("h2"),b.textContent="Cafeteria",C=t("img"),C.src=r,n(x,[b,C]),k=t("p","main-section-desc"),k.textContent="If you are looking for a more cozy and intimate dining experience,\n  you can check out our cafeteria section, where we serve a range of\n  snacks and desserts that are sure to delight your taste buds. Our\n  cafeteria section offers a variety of treats, from cakes and cookies\n  to ice cream and smoothies, all made with fresh and natural\n  ingredients. You can also choose from our selection of hot and cold\n  beverages, such as espresso, latte, cappuccino, or milkshake, to\n  enjoy with your snack. Our cafeteria section is open for all day,\n  and you can enjoy your treat in a warm and inviting setting. Whether\n  you want a sweet indulgence or a refreshing break, our cafeteria\n  section is the perfect place for you.",n(w,[x,k]),g.appendChild(w);const j=t("section","main-comments");b=t("h2"),b.innerHTML="Others also think we are the <strong>best</strong>";let F=t("ul"),P=[t("li","comment"),t("li","comment"),t("li","comment")],S=t("blockquote");S.textContent="“I had a great time at Pepper Fox. The food was delicious and\n  the service was friendly. I loved the fox theme and the decor.\n  It was a cozy and charming place to eat and have fun. I would\n  definitely recommend it to anyone who is looking for a good\n  restaurant in Mashhad.”";let T=t("span","reviewer");return T.textContent="Sara, TripAdvisor",n(P[0],[S,T]),S=t("blockquote"),S.textContent="“Pepper Fox is one of my favorite restaurants in Mashhad. The\n  food is always fresh and tasty, and the portions are generous.\n  The staff is attentive and helpful, and the atmosphere is lively\n  and colorful. I especially enjoyed the trivia night and the\n  karaoke night, they were so much fun. Pepper Fox is a must-visit\n  for anyone who loves food and fun.”",T=t("span","reviewer"),T.textContent="Ali, Google Reviews",n(P[1],[S,T]),S=t("blockquote"),S.textContent="“Pepper Fox is a gem of a restaurant in Mashhad. The food is\n  amazing and the prices are reasonable. The menu has a lot of\n  variety, from Iranian dishes to international dishes, and\n  everything is cooked with a touch of spice. The desserts are\n  also heavenly, I loved the ice cream and the smoothies. The\n  restaurant has a fox theme, which is very cute and original. The\n  music is upbeat and the events are entertaining. Pepper Fox is a\n  great place to hang out with friends and family.”",T=t("span","reviewer"),T.textContent="Maryam, Yelp",n(P[2],[S,T]),n(F,P),n(j,[b,F]),g.appendChild(j),e.appendChild(g),e}();e.remove(),document.body.append(d),c()}function c(){const e=document.querySelectorAll('nav[class$="header-nav"] a');e[0].addEventListener("click",(()=>{e[0].classList.contains("active")||s()})),e[1].addEventListener("click",(()=>{e[1].classList.contains("active")||function(){const e=document.querySelector("#content"),a=function(){const e=["Starters","Side Dishes","Main Course","Deserts"],a={Starters:["Baked Chicken Wings.webp","Tomato Soup.jpeg","Teriyaki Chicken.webp","meatballs.jpg","Mashed Potatos.jpg","Fried Chicken.webp"],"Side Dishes":["Arancini.webp","Calamari.jpg","Salad.jpeg","Pesto Pasta.webp","Fries.jpg","Fish Sticks.webp"],"Main Course":["Beef Stew.jpg","Burger.jpg","White Chicken Chili.webp","Udon Noodles.webp","Spaghetti.jpg","Roasted Chicken.webp","Pork Ribs.jpg","Pizza.jpg","Grilled Fish.jpg"],Deserts:["Ice Cream.webp","Fruit Salad.jpg","Chocolate Cake.jpg"]},o=t("div",void 0,["id","content"]),i=t("header","menu-header"),r=t("nav","menu-header-nav");let s=t("div");const c=[t("a","no-right-border",["href","#"]),t("a","active",["href","#"]),t("a",void 0,["href","#"])];c[0].textContent="Home",c[1].textContent="Menu",c[2].textContent="Contact",n(s,c),r.appendChild(s),i.appendChild(r);const l=t("header","menu-header-header"),h=t("img","menu-header-logo");h.src=d,l.appendChild(h),i.appendChild(l),o.appendChild(i);const p=t("nav","menu-nav-category-nav");e.forEach((e=>{let n=t("a","category-link",["href",`#${e.split(" ").join("-")}`]);n.textContent=e,p.appendChild(n)})),o.appendChild(p);const u=t("main","menu-main");return e.forEach((e=>{const o=t("section","menu-main-category",["id",`${e.split(" ").join("-")}`]),i=t("h3","menu-main-category-title");i.textContent=e,o.appendChild(i);const r=t("div","menu-main-category-content");a[e].forEach((e=>{const a=e.split(".")[0],o=t("div","food-card"),i=t("figure"),d=t("img","food-card-img",["alt",a]);d.src=`./img/foods/${e}`;const s=t("figcaption","food-card-title");s.textContent=a,n(i,[d,s]),o.appendChild(i),r.appendChild(o)})),o.appendChild(r),u.appendChild(o)})),o.appendChild(u),o}();e.remove(),document.body.append(a),c()}()})),e[2].addEventListener("click",(()=>{e[2].classList.contains("active")||function(){const e=document.querySelector("#content"),a=function(){const e=t("div",void 0,["id","content"]),a=t("header","contact-header"),o=t("nav","contact-header-nav");let i=t("div");const r=[t("a",void 0,["href","#"]),t("a","no-right-border",["href","#"]),t("a","active",["href","#"])];r[0].textContent="Home",r[1].textContent="Menu",r[2].textContent="Contact",n(i,r),o.appendChild(i),a.appendChild(o),e.appendChild(a);const d=t("main","contact-main"),s=t("form","contact-form",["action",""]),c=t("h1","contact-form-header");c.textContent="Contact Us",s.appendChild(c);let l=t("div","input-field"),h=t("label",void 0,["for","name"]);h.textContent="Name";let p=t("input",void 0,["type","text"],["id","name"],["name","name"],["placeholder","Example: John Doe"],["required",!0]);n(l,[h,p]),s.appendChild(l),l=t("div","input-field"),h=t("label",void 0,["for","email"]),h.textContent="E-mail",p=t("input",void 0,["type","email"],["id","email"],["name","email"],["placeholder","Example: example@gmail.com"],["required",!0]),n(l,[h,p]),s.appendChild(l),l=t("div","input-field"),h=t("label",void 0,["for","message"]),h.textContent="Message",p=t("textarea",void 0,["id","message"],["name","message"],["placeholder","Write your message here..."],["required",!0]),n(l,[h,p]),s.appendChild(l),l=t("div","input-field");let u=t("button",void 0,["type","submit"]);return u.textContent="Send Message",l.appendChild(u),s.appendChild(l),d.appendChild(s),e.appendChild(d),e}();e.remove(),document.body.append(a),c()}()}))}window.addEventListener("load",(()=>{s(),c()}))})();
//# sourceMappingURL=main.js.map
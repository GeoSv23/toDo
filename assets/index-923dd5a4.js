(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const s=[];function a(){const r=document.getElementById("taskInput"),t=r.value.trim();t!==""&&(s.unshift({text:t,completed:!1,nonVisibility:!1}),r.value="",d())}function d(){const r=document.getElementById("taskList");r.innerHTML="";for(let t=0;t<s.length;t++){const c=document.createElement("li"),i=document.createElement("p");c.append(i),i.textContent=`${t+1} .${s[t].text}`,c.className="task-item";const e=document.createElement("img");e.src="src/public/images/done.png",e.alt="Выполнено",e.addEventListener("click",function(){if(!s[t].completed&&!s[t].nonVisibility){s[t].completed=!0,s[t].nonVisibility=!0;let l=s.splice(t,1);s.push(l[0])}d()});const n=document.createElement("img");n.src="src/public/images/pencil.png",n.alt="Измеить",n.addEventListener("click",function(){n.classList.add("img_change");const l=prompt("Введите новое значение задачи");l!==null&&(s[t].text=l,d())});const o=document.createElement("img");o.src="src/public/images/delete.png",o.alt="Удалить",o.addEventListener("click",function(){c.className="removing",o.classList.add("img_del"),setTimeout(function(){s.splice(t,1),d()},600)}),s[t].completed&&s[t].nonVisibility&&(i.classList.add("completed"),i.classList.add("nonvis"),e.classList.add("img_done"),i.parentNode.classList.add("green")),c.appendChild(e),c.appendChild(n),c.appendChild(o),r.appendChild(c)}}const u=document.getElementById("addTask");u.addEventListener("click",a);document.querySelector(".wrapper");const m=document.querySelector(".form"),p=document.querySelector(".tasks__wrapper"),f=document.querySelector(".theme"),g=document.body;f.addEventListener("click",function(){g.classList.toggle("black"),m.classList.toggle("black"),p.classList.toggle("black")});

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const g="/toDo/assets/delete-9efd5715.png",L="/toDo/assets/pencil-72ce7ac6.png",y="/toDo/assets/done-71e81321.png",n=[];function p(){const o=document.getElementById("taskInput"),t=o.value.trim();t!==""&&(n.unshift({text:t,completed:!1,nonVisibility:!1}),o.value="",d())}function u(){n.length===0&&(taskList.innerHTML='<p class="zaglushka">Нет задач</p>')}u();let r=!1;function k(){if(n.length>2&&!r){const o=document.createElement("button");o.classList.add("deleteAllButton"),o.innerHTML="Очистить список",f.append(o),r=!0,o.addEventListener("click",function(){n.splice(0,n.length),o.outerHTML="",r=!1,d(),u()})}}function d(){const o=document.getElementById("taskList");o.innerHTML="",k();for(let t=0;t<n.length;t++){const c=document.createElement("div"),l=document.createElement("p"),e=document.createElement("input");e.type="text",e.value=n[t].text,e.className="task-input",e.addEventListener("input",function(){n[t].text=e.value}),e.classList.add("task"),c.append(l),c.append(e),l.textContent=`${t+1}.`,e.value=`${n[t].text}`,c.className="task-item";const s=document.createElement("img");s.src=y,s.alt="Выполнено",s.addEventListener("click",function(){if(!n[t].completed&&!n[t].nonVisibility){n[t].completed=!0,n[t].nonVisibility=!0;let m=n.splice(t,1);n.push(m[0])}d()});const i=document.createElement("img");i.src=L,i.alt="Измеить",i.addEventListener("click",()=>{n[t].completed?alert("Задача выполнена"):(i.classList.add("img_change"),e.focus(),e.value=e.value.trim(),n[t].text=e.value.trim())});const a=document.createElement("img");a.src=g,a.alt="Удалить",a.addEventListener("click",function(){c.className="removing",a.classList.add("img_del"),setTimeout(function(){n.splice(t,1),d(),u()},600)}),n[t].completed&&n[t].nonVisibility&&(e.classList.add("completed"),e.classList.add("nonvis"),s.classList.add("img_done"),e.parentNode.classList.add("green")),c.appendChild(s),c.appendChild(i),c.appendChild(a),o.appendChild(c)}}const h=document.getElementById("addTask");h.addEventListener("click",p);const E=document.getElementById("taskInput");E.addEventListener("keydown",function(o){o.key==="Enter"&&(o.preventDefault(),p())});document.querySelector(".wrapper");const v=document.querySelector(".form"),f=document.querySelector(".tasks__wrapper"),b=document.querySelector(".theme"),B=document.body;b.addEventListener("click",function(){B.classList.toggle("black"),v.classList.toggle("black"),f.classList.toggle("black")});

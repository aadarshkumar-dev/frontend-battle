import { features } from "../data/features.js";

const container = document.querySelector("#feature-container");

let activeIndex = 0;

function renderDesktop(){

    container.innerHTML = `
        <div class="bento-grid">

            ${features.map((feature,index)=>`

                <article
                    class="bento-card ${index===activeIndex?"active":""}"
                    data-index="${index}">

                    <h3>${feature.title}</h3>

                    <p>${feature.description}</p>

                </article>

            `).join("")}

        </div>
    `;

    container.querySelectorAll(".bento-card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            activeIndex = Number(card.dataset.index);

            render();

        });

    });

}

function renderMobile(){

    container.innerHTML = `
        <div class="accordion">

            ${features.map((feature,index)=>`

                <article class="accordion-item">

                    <button
                        class="accordion-btn"
                        data-index="${index}">

                        ${feature.title}

                    </button>

                    <div
                        class="accordion-content ${index===activeIndex?"open":""}">

                        <p>${feature.description}</p>

                    </div>

                </article>

            `).join("")}

        </div>
    `;

    container.querySelectorAll(".accordion-btn").forEach(btn=>{

        btn.addEventListener("click",()=>{

            activeIndex = Number(btn.dataset.index);

            render();

        });

    });

}

function render(){

    if(window.innerWidth>768){

        renderDesktop();

    }else{

        renderMobile();

    }

}

window.addEventListener("resize",render);

render();
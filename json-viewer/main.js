const resultTag = document.getElementById("result");
const textArea = document.getElementById("textarea");
const submitBtn = document.getElementById("submit-btn");

// TODO:  Write your codes here
let x = 1;
resultTag.innerHTML =
    `<ul>
                        <li><span class="json-viewer-object-start">
                            {
                        </span> 
                        <ul>
                        
                        </ul>
                        <span class="json-viewer-object-end">
                          }
                        </span></li>
                    </ul>`

let json = {};
function jsonHandler(innerJson, key) {
    for(let innerKey in innerJson) {
        if(typeof innerJson[innerKey] !== "object" || Array.isArray(innerJson[innerKey])) {

            document.querySelector(`.${key}-ul-${x}`).innerHTML += `<li><span class="key">"${innerKey}"</span>: <span class="value-${typeof innerJson[innerKey]}">${typeof innerJson[innerKey] === "string"? `"${innerJson[innerKey]}"`:  JSON.stringify(innerJson[innerKey])}</span></li>`
        } else if (typeof innerJson[innerKey] === "object") {
            x += 1;
            document.querySelector(`.${key}-ul-${x - 1}`).innerHTML += `
                <li> 
                    <span class="json-viewer-object-start">
                           "${innerKey}": {
                        </span> 
                        <ul class="${innerKey}-ul-${x}"></ul>
                        <span class="json-viewer-object-end">
                            }
                    </span>
                </li>
            `
            console.log("a", x)
            jsonHandler(innerJson[innerKey], innerKey);
        }
    }
}

submitBtn.addEventListener("click", () => {
    try {
        textArea.classList.remove("has-error");
        document.querySelector("#result ul ul").innerHTML = ``;
        json = JSON.parse(textArea.value.replaceAll("\n", ""));
        for(let key in json) {
            if(typeof json[key] !== "object" || Array.isArray(json[key])) {
                document.querySelector("#result ul ul").innerHTML += `<li><span class="key">"${key}"</span>: <span class="value-${typeof json[key]}">${typeof json[key] === "string"? `"${json[key]}"`:  JSON.stringify(json[key])}</span></li>`
            } else if(typeof json[key] === "object"){
                document.querySelector("#result ul ul").innerHTML += `
                <li>
                    <span class="json-viewer-object-start">
                            "${key}": {
                        </span> 
                        <ul class="${key}-ul-${x}"></ul>
                        <span class="json-viewer-object-end">
                            }
                    </span>
                </li>
            `;
                jsonHandler(json[key], key);
            }
        }

        document.querySelectorAll(".json-viewer-object-start").forEach(item => {
            item.textContent = item.textContent.trim()
        })
        document.querySelectorAll(".json-viewer-object-end").forEach(item => {
            item.textContent = item.textContent.trim()
        })
        document.querySelectorAll(".json-viewer-object-start").forEach(item => {
            item.onclick = () => {
                item.classList.toggle("json-viewer-object-close");
            }
        })
    } catch (e) {
        if(e.message.indexOf("JSON") !== -1) {
            textArea.classList.add("has-error");
        } else {
            console.error(e)
        }
    }
})

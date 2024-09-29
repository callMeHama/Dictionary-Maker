const $ = (selector)=>document.querySelector(selector);
const $$ = (selector)=> document.querySelectorAll(selector);
const dom = (param)=> document.createElement(param);

createTheInputs = ()=>{
    let child = dom("input");
    child.type = "text";
    child.className = "1";
    let child2 = dom("input");
    child2.type = "text";
    child2.className = "2";
    img = dom("img");
    img.src = "icons/plus.png";
    img.alt = "plus";
    img.setAttribute('onclick',"addspecific(this)");

    return [child,child2,img]
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        if (document.activeElement === $$("input")[$$("input").length-2]){
            let elements = createTheInputs()

            $('#dict').appendChild(elements[0]);
            $('#dict').appendChild(elements[1]); 
            $('#dict').appendChild(elements[2])
        }
    }
});
function addspecific(element){
    let elements = createTheInputs();
    let index = Array.from($('#dict').children).indexOf(element);
    let target = $('#dict').children[index-2];

    $('#dict').insertBefore(elements[0],target);
    $('#dict').insertBefore(elements[1],target);
    $('#dict').insertBefore(elements[2],target);
}
function dictCreate(){
    let output = $('#name').value + " = " + "{";
    inp1 = $$('.\\31');
    inp2 = $$('.\\32');

    for (let i = 0; i < inp1.length-1; i++){
        output+= "<br>&nbsp;&nbsp;&nbsp;&nbsp;\""+inp1[i].value+'\" : \"'+inp2[i].value+"\",";
    }
    output+="<br>&nbsp;&nbsp;&nbsp;&nbsp;\""+inp1[inp2.length-1].value+'\" : \"'+inp2[inp2.length-1].value+"\"<br>}";
    document.querySelector('h1').innerHTML = output;
}
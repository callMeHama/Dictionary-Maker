document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        if (document.activeElement === document.querySelectorAll("input")[document.querySelectorAll("input").length-2]){
            let child = document.createElement("input");
            child.type = "text";
            child.className = "1";
            let child2 = document.createElement("input");
            child2.type = "text";
            child2.className = "2";

            document.querySelector('#dict').appendChild(child);
            document.querySelector('#dict').appendChild(child2);  
        }
    }
});

function dictCreate(){
    let output = document.getElementById('name').value + " = " + "{";
    inp1 = document.getElementsByClassName('1');
    inp2 = document.getElementsByClassName('2');

    for (let i = 0; i < inp1.length; i++){
        output+= "<br>&nbsp;&nbsp;&nbsp;&nbsp;\""+inp1[i].value+'\" : \"'+inp2[i].value+"\"";
    }
    output+="<br>}";
    console.log(output);
    document.querySelector('h1').innerHTML = output;
}
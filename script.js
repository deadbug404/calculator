const bottom = document.querySelector("#bottom");
let keys = ["7","8","9","÷","4","5","6","×","1","2","3","-","c","0","=","+"];
let keyNumber = 0;

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 4; j++) {
        const column = document.createElement("div");
        column.textContent = keys[keyNumber];
        column.classList.add("column");
        isNaN(keys[keyNumber]) ? column.classList.add("nan"): column.classList.add("number");
        row.appendChild(column);
        keyNumber++;
    }    
    bottom.appendChild(row);
}
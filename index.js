const cols = document.querySelectorAll(".col");
let color = "";

cols.forEach((col) => {
  col.addEventListener("mouseover", () => {
    const hovered_row = Number(col.id[0]);
    const hovered_column = Number(col.id[1]);
    let j = hovered_column;
    color = document.getElementById(`${hovered_row}${hovered_column}`).style
      .backgroundColor;
    for (let i = hovered_row; i <= 7 && j >= 0; i++) {
      document.getElementById(`${i}${j}`).style.backgroundColor = "blue";
      j--;
    }
    j = hovered_column;
    for (let i = hovered_row; i >= 0 && j <= 7; i--) {
      document.getElementById(`${i}${j}`).style.backgroundColor = "blue";
      j++;
    }
    j = hovered_column;
    for (let i = hovered_row; i >= 0 && j >= 0; i--) {
      document.getElementById(`${i}${j}`).style.backgroundColor = "blue";
      j--;
    }
    j = hovered_column;
    for (let i = hovered_row; i <= 7 && j <= 7; i++) {
      document.getElementById(`${i}${j}`).style.backgroundColor = "blue";
      j++;
    }
  });
  col.addEventListener("mouseout", () => {
    const hovered_row = Number(col.id[0]);
    const hovered_column = Number(col.id[1]);
    let j = hovered_column;
    for (let i = hovered_row; i <= 7 && j >= 0; i++) {
      document.getElementById(`${i}${j}`).style.backgroundColor = color;
      j--;
    }
    j = hovered_column;
    for (let i = hovered_row; i >= 0 && j <= 7; i--) {
      document.getElementById(`${i}${j}`).style.backgroundColor = color;
      j++;
    }
    j = hovered_column;
    for (let i = hovered_row; i >= 0 && j >= 0; i--) {
      document.getElementById(`${i}${j}`).style.backgroundColor = color;
      j--;
    }
    j = hovered_column;
    for (let i = hovered_row; i <= 7 && j <= 7; i++) {
      document.getElementById(`${i}${j}`).style.backgroundColor = color;
      j++;
    }
  });
});

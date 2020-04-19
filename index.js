function changeText() {
  let inputBox = document.getElementById("newText");
  let newValue = inputBox.value;
  if (newValue) {
    anim.renderer.elements[1].updateDocumentData({
      t: newValue,
    });
    anim.play();
  } else {
    anim.renderer.elements[1].updateDocumentData({
      t: "Walking exercises to lose weight fast.",
    });
    anim.play();
  }
}

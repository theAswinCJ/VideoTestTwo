function changeText() {
  let inputBox1 = document.getElementById("line1Text");
  let inputBox2 = document.getElementById("line2Text");
  let inputBox3 = document.getElementById("line3Text");

  let box1value = inputBox1.value;
  if (box1value) {
    anim.renderer.elements[0].updateDocumentData({
      t: box1value,
    });
    anim.play();
  } else {
    anim.renderer.elements[0].updateDocumentData({
      t: " ",
    });
    anim.play();
  }

  let box2value = inputBox2.value;
  if (box2value) {
    anim.renderer.elements[1].updateDocumentData({
      t: box2value,
    });
    anim.play();
  } else {
    anim.renderer.elements[1].updateDocumentData({
      t: " ",
    });
    anim.play();
  }

  let box3value = inputBox3.value;
  if (box3value) {
    anim.renderer.elements[2].updateDocumentData({
      t: box3value,
    });
    anim.play();
  } else {
    anim.renderer.elements[2].updateDocumentData({
      t: " ",
    });
    anim.play();
  }
}

function resetText() {
  anim.renderer.elements[0].updateDocumentData({
    t: "Walking exercises",
  });
  anim.renderer.elements[1].updateDocumentData({
    t: "to lose weight",
  });
  anim.renderer.elements[2].updateDocumentData({
    t: "fast.",
  });
  anim.play();
}

function downloadVideo() {
  swal.fire(
    "Coming Soon",
    "Research is ongoing to make this video download right from this page",
    "info"
  );
}

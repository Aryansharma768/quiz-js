document.getElementById("btn1").addEventListener("click", markQuiz);


function markQuiz() {
  let name1 = document.getElementById("one").value;
  let name2 = document.getElementById("two").value;
  let name3 = document.getElementById("three").value;
  let name4 = document.getElementById("four").value;
  let name5 = document.getElementById("five").value;
  name = name.toLowerCase();

  if (name1 == "ps4") {
    document.getElementById("text").innerHTML = "Correct";
  } else {
    document.getElementById("text").innerHTML = "Incorrect";
  }

  if (name2 == "basketball") {
    document.getElementById("text2").innerHTML = "Correct";
  } else {
    document.getElementById("text2").innerHTML = "Incorrect";
  }

  if (name3 == "dad") {
    document.getElementById("text3").innerHTML = "Correct";
  } else {
    document.getElementById("text3").innerHTML = "Incorrect";
  }
  if (name4 == "jobs") {
    document.getElementById("text4").innerHTML = "Correct";
  } else {
    document.getElementById("text4").innerHTML = "Incorrect";
  }

  if (name5 == "the world") {
    document.getElementById("text5").innerHTML = "Correct";
  } else {
    document.getElementById("text5").innerHTML = "Incorrect";
  }

    if (name1 && name2 && name3 && name4 && name5)
    document.getElementById("text6").innerHTML = "5/5";

}
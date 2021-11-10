function changeAngel(){
  let picture = document.getElementById("Angel1")
  if(picture.src.match("blue1")){
    document.getElementById("Angel1").src = "blue.jpg"
    document.getElementById("angelDescription").style.display = "none"
  }else {
    document.getElementById("Angel1").src = "blue1.jpg"
    document.getElementById("angelDescription").style.display = "inline"
    document.getElementById("Logan1").src = "orange.jpg"
    document.getElementById("loganDescription").style.display = "none"
    document.getElementById("Chris1").src = "red.jpg"
    document.getElementById("chrisDescription").style.display = "none"
    document.getElementById("Luke1").src = "purple.jpg"
    document.getElementById("lukeDescription").style.display = "none"
    document.getElementById("An1").src = "master1.jfif"
    document.getElementById("anDescription").style.display = "none"
  }
}

function changeLogan(){
  var picture = document.getElementById("Logan1")
  if(picture.src.match("orange1")){
    document.getElementById("Logan1").src = "orange.jpg"
    document.getElementById("loganDescription").style.display = "none"
  }else {
    document.getElementById("Logan1").src = "orange1.jpg"
    document.getElementById("loganDescription").style.display = "inline"
    document.getElementById("Angel1").src = "blue.jpg"
    document.getElementById("angelDescription").style.display = "none"
    document.getElementById("Chris1").src = "red.jpg"
    document.getElementById("chrisDescription").style.display = "none"
    document.getElementById("Luke1").src = "purple.jpg"
    document.getElementById("lukeDescription").style.display = "none"
    document.getElementById("An1").src = "master1.jfif"
    document.getElementById("anDescription").style.display = "none"
  }
}

function changeChris(){
  var picture = document.getElementById("Chris1")
  if(picture.src.match("red1")){
    document.getElementById("Chris1").src = "red.jpg"
    document.getElementById("chrisDescription").style.display = "none"
  }else {
    document.getElementById("Chris1").src = "red1.jpg"
    document.getElementById("chrisDescription").style.display = "inline"
    document.getElementById("Angel1").src = "blue.jpg"
    document.getElementById("angelDescription").style.display = "none"
    document.getElementById("Logan1").src = "orange.jpg"
    document.getElementById("loganDescription").style.display = "none"
    document.getElementById("Luke1").src = "purple.jpg"
    document.getElementById("lukeDescription").style.display = "none"
    document.getElementById("An1").src = "master1.jfif"
    document.getElementById("anDescription").style.display = "none"
  }
}

function changeLuke(){
  var picture = document.getElementById("Luke1")
  if(picture.src.match("purple1")){
    document.getElementById("Luke1").src = "purple.jpg"
    document.getElementById("lukeDescription").style.display = "none"
  }else {
    document.getElementById("Luke1").src = "purple1.jpg"
    document.getElementById("lukeDescription").style.display = "inline"
    document.getElementById("Angel1").src = "blue.jpg"
    document.getElementById("angelDescription").style.display = "none"
    document.getElementById("Logan1").src = "orange.jpg"
    document.getElementById("loganDescription").style.display = "none"
    document.getElementById("Chris1").src = "red.jpg"
    document.getElementById("chrisDescription").style.display = "none"
    document.getElementById("An1").src = "master1.jfif"
    document.getElementById("anDescription").style.display = "none"
  }
}

function changeAn(){
  var picture = document.getElementById("An1")
  if(picture.src.match("master2.webp")){
    document.getElementById("An1").src = "master1.jfif"
    document.getElementById("anDescription").style.display = "none"
  }else {
    document.getElementById("An1").src = "master2.webp"
    document.getElementById("anDescription").style.display = "inline"
    document.getElementById("Angel1").src = "blue.jpg"
    document.getElementById("angelDescription").style.display = "none"
    document.getElementById("Logan1").src = "orange.jpg"
    document.getElementById("loganDescription").style.display = "none"
    document.getElementById("Chris1").src = "red.jpg"
    document.getElementById("chrisDescription").style.display = "none"
    document.getElementById("Luke1").src = "purple.jpg"
    document.getElementById("lukeDescription").style.display = "none"
  }
}

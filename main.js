var action = document.getElementsByClassName("click");


for (i = 0; i < action.length; i++){
    action[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var questions = this.nextElementSibling;
        if (questions.style.maxHeight){
            questions.style.maxHeight = null;
        }else {
            questions.style.maxHeight = questions.scrollHeight + "px";
        }
    });
}


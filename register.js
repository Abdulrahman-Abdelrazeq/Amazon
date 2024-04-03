// check name
$(".nameRegister").on("blur", () => {
    let checkName = /^[a-z A-Z]{3,20}\s[a-z A-Z]{3,20}$/
    let testName = checkName.test($(".nameRegister").val())
    if(testName && $(".nameRegister").val().split(" ").length < 4) {
        $("p.miss-name").removeClass("show")
    } else {
        $("p.miss-name").addClass("show")
    }
})

// check email
$(".emailRegister").on("blur", () => {
    let checkEmail = /^[a-z][a-z 0-9 (-_.)]{3,40}@[a-z]{3,15}(.com|.net|.edu|.org)$/;
    let testEmail = checkEmail.test($(".emailRegister").val())
    if(testEmail) {
        $(".miss-email").removeClass("show")
    } else {
        $(".miss-email").addClass("show")
    }
    for(let i = 0; i <= JSON.parse(localStorage.users).length; i++) {
        try{
            if(JSON.parse(localStorage.users)[i].email == $(".emailRegister").val()) {
                $(".already-registered").addClass("show")
                i = JSON.parse(localStorage.users).length
            } else {
                $(".already-registered").removeClass("show")
            }
        }catch{}
    }
})




// check password and values of inputs
$(document).on("mousemove", () => {
    // check password
    if ($(".passwordRegister").val() == $(".passwordRegister2").val()) {
        $(".not-mutch").removeClass("show")
    } else {
        $(".not-mutch").addClass("show")
    }
    if ($(".passwordRegister").val().length >= 8 && $(".passwordRegister2").val().length >= 8) {
        $(".miss-password").removeClass("show")
    } else {
        $(".miss-password").addClass("show")
    }

    // values of inputs
    !($(".nameRegister").val()) ? $(".empty-name").addClass("show") : $(".empty-name").removeClass("show")
    !($(".emailRegister").val()) ? $(".empty-email").addClass("show") : $(".empty-email").removeClass("show")
})





// // check all for register
$("form").on("submit", (e) => {
    if($("p.miss-name").hasClass("show") || $(".miss-email").hasClass("show") || $(".not-mutch").hasClass("show") || $(".miss-password").hasClass("show") || $(".already-registered").hasClass("show") || $(".empty-name").hasClass("show") || $(".empty-email").hasClass("show")){
        e.preventDefault()
    }else {
        if(localStorage.getItem("users")){
        let arr = JSON.parse(localStorage.getItem("users"))
        let newUser = {fullname: $(".nameRegister").val(), email: $(".emailRegister").val(), password: $(".passwordRegister").val()}
        arr.push(newUser)
        localStorage.setItem(`users`, JSON.stringify(arr))
        }else{
            localStorage.setItem(`users`, JSON.stringify([{fullname: $(".nameRegister").val(), email: $(".emailRegister").val(), password: $(".passwordRegister").val()}]))
        }
    }
})


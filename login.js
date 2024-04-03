// check email and password for login
$("form[action='/amazon.html']").on("submit", (e) => {
    let result = true;
    let secondResult = true;
    if(JSON.parse(localStorage.users).length) {
        for(let i = 0; i < JSON.parse(localStorage.users).length; i++) {
            if(secondResult) {
                if(JSON.parse(localStorage.users)[i].email == $(".email-login").val()) {
                    result = false;
                    secondResult = false;
                    $(".miss-email").removeClass("show")
                    $(".name-login").val(JSON.parse(localStorage.users)[i].fullname)
                } else {
                    result = true; 
                    $(".miss-email").addClass("show")
                }
            }
            if(result == false) {
                if(JSON.parse(localStorage.users)[i].password == $(".password-login").val()) {
                    result = false;
                    $(".miss-password").removeClass("show")
                    i = JSON.parse(localStorage.users).length
                } else {
                    result = true;
                    $(".miss-password").addClass("show")
                }
            }
        }
        if(result) {
            e.preventDefault()
        }
    }else {
        e.preventDefault()
        $(".miss-email").addClass("show")
    }
})




// print name and email in store page
try{
    if(location.search.length) {
        let arrInfo = location.search.split("&")
        let nameInfo = arrInfo[0].split("=")
        localStorage.setItem("nameUserNow", nameInfo[1].split("+").join(" "))
        $(".user-name-email h6").text(localStorage.getItem("nameUserNow"))
        let emailInfo = arrInfo[1].split("=")
        localStorage.setItem("emailUserNow", emailInfo[1].split("%40").join("@"))
        $(".user-name-email p small").text(localStorage.getItem("emailUserNow"))

        $(".user-name-email a small").text("Log-out")
    }
}catch{}




// // log out to login page

try{
    $(".log-out").on("click", () => {
        localStorage.removeItem("nameUserNow")
        localStorage.removeItem("emailUserNow")
        location.replace("login.html")
    }) 
}catch{}















//  else {
//     $(".user-name-email h6").text(localStorage.getItem("nameUserNow"))
//     $(".user-name-email p small").text(localStorage.getItem("emailUserNow"))
// }
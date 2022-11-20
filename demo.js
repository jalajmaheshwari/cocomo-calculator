var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");

function changeIntermediate(elementId) {
    document.getElementById("main").style.display = "none";
    document.getElementById(elementId).style.display = "block";
    document.getElementById("detailed").style.display = "none";
}

function changedetailed(elementId) {
    document.getElementById("intermediate").style.display = "none";
    document.getElementById(elementId).style.display = "block";
    document.getElementById("main").style.display = "none";
}

function changeBasic(elementId) {
    document.getElementById("intermediate").style.display = "none";
    document.getElementById("detailed").style.display = "none";
    document.getElementById(elementId).style.display = "block";
}

function cal() {
    var org = document.getElementById("org");
    var semi = document.getElementById("semi");
    var emb = document.getElementById("emb");
    var kl = document.getElementById("kl").value;
    var cr = document.getElementById("cr").value;
    var nd = document.getElementById("nd").value;
    var numb_checked = 0;
    var effort = 0;
    var dev = 0;
    var cost = 0;
    var productivity = 0;

    if (org.checked) {
        numb_checked += 1;
    }
    if (semi.checked) {
        numb_checked += 1;
    }
    if (emb.checked) {
        numb_checked += 1;
    }

    if (numb_checked > 1) {
        alert("More than 1 Option Selected");
    } else if (org.checked) {
        effort = Math.pow(kl, 1.05) * 2.4;
        dev = Math.round(Math.pow(effort, 0.38) * 2.5);
        cost = cr * nd * dev;
        productivity = Math.trunc((kl / effort) * 1000);

        // document.getElementById('res').innerText = dev;
    } else if (semi.checked) {
        effort = Math.pow(kl, 1.12) * 3;
        dev = Math.round(Math.pow(effort, 0.35) * 2.5);
        cost = cr * nd * dev;
        productivity = Math.trunc((kl / effort) * 1000);

        // document.getElementById('res').innerText = dev;
    } else if (emb.checked) {
        effort = Math.pow(kl, 1.2) * 3.6;
        dev = Math.round(Math.pow(effort, 0.32) * 2.5);
        cost = cr * nd * dev;
        productivity = Math.trunc((kl / effort) * 1000);

        // document.getElementById('res').innerText = dev;
    }

    document.getElementById("res").innerHTML =
        "Effort = " +
        effort +
        " Per month<br><br>" +
        "Development Time = " +
        dev +
        " Month <br><br>" +
        "Cost  = " +
        cost +
        "<br><br>" +
        "People requires = " +
        Math.floor(effort / dev) +
        "<br><br> Productivity = " +
        productivity +
        " LOC/PM";
}



var drive_checked = 0;


// document.querySelectorAll(".btn")[1].addEventListener("click", function() {
//     drive_checked += 1;
//     console.log(drive_checked);
// });

let val = 1;
let Eaf = 0;
function fun(checked,value) {
    if (checked) {
        val *= value; 
        drive_checked += 1;
        // console.log(drive_checked);
    } else {
        val /= value;
        drive_checked -= 1;
        // console.log(drive_checked);
    }

    if(drive_checked == 2){
        Eaf = val;
    }
}


function fun2()  {
    var orga = document.getElementById("orga");
    var smd = document.getElementById("smd");
    var embd = document.getElementById("embd");
    var klc = document.getElementById("klc").value;
    var cor = document.getElementById("cor").value;
    var nod = document.getElementById("nod").value;
    var num_checked = 0;
    var effrt = 0;
    var tdev = 0;
    var tcost = 0;
    var prodcty = 0;
    var eaf = Eaf;
    

    if (orga.checked) {
        num_checked += 1;
    }
    if (smd.checked) {
        num_checked += 1;
    }
    if (embd.checked) {
        num_checked += 1;
    }
    if (num_checked > 1) {
        alert("More than 1 Option Selected");
    } else if (orga.checked) {
        effrt = Math.pow(klc, 1.05) * 3.2 * eaf;
        tdev = Math.round(Math.pow(effrt, 0.38) * 2.5);
        tcost = cor * nod * tdev;
        prodcty = Math.trunc((klc / effrt) * 1000);

        // document.getElementById('res').innerText = dev;
    } else if (smd.checked) {
        effrt = Math.pow(klc, 1.12) * 3 * eaf;
        tdev = Math.round(Math.pow(effrt, 0.35) * 2.5);
        tcost = cor * nod * tdev;
        prodcty = Math.trunc((klc / effrt) * 1000);

        // document.getElementById('res').innerText = dev;
    } else if (embd.checked) {
        effrt = Math.pow(klc, 1.2) * 1.20 * eaf;
        tdev = Math.round(Math.pow(effrt, 0.32) * 2.5);
        tcost = cor * nod * tdev;
        productivity = Math.trunc((klc / effrt) * 1000);

        // document.getElementById('res').innerText = dev;
    }

    document.getElementById("res").innerHTML =
        "Effort = " +
        effrt +
        " Per month<br><br>" +
        "Development Time = " +
        tdev +
        " Month <br><br>" +
        "Cost  = " +
        tcost +
        "<br><br>" +
        "People requires = " +
        Math.floor(effrt / tdev) +
        "<br><br> Productivity = " +
        prodcty +
        " LOC/PM <br><br>"+"Eaf = "+eaf;
}



// function intermediate() {
//     var orga = document.getElementById("orga");
//     var smd = document.getElementById("smd");
//     var embd = document.getElementById("embd");
//     var rvl = document.getElementById("rvl");
//     var rl = document.getElementById("rl");
//     var rn = document.getElementById("rn");
//     var klc = document.getElementById("klc").value;
//     var cor = document.getElementById("cor").value;
//     var nod = document.getElementById("nod").value;
//     var num_checked = 0;
//     var effrt = 0;
//     var tdev = 0;
//     var tcost = 0;
//     var prodcty = 0;
//     var eaf = 0;

//     if (orga.checked) {
//         num_checked += 1;
//     }
//     if (smd.checked) {
//         num_checked += 1;
//     }
//     if (embd.checked) {
//         num_checked += 1;
//     }
//     if (num_checked > 1) {
//         alert("More than 1 Option Selected");
//     } else if (orga.checked) {
//         effrt = Math.pow(klc, 1.05) * 3.2 * eaf;
//         tdev = Math.round(Math.pow(effrt, 0.38) * 2.5);
//         tcost = cor * nod * tdev;
//         prodcty = Math.trunc((klc / effrt) * 1000);

//         // document.getElementById('res').innerText = dev;
//     } else if (smd.checked) {
//         effrt = Math.pow(klc, 1.12) * 3 * eaf;
//         tdev = Math.round(Math.pow(effrt, 0.35) * 2.5);
//         tcost = cor * nod * tdev;
//         prodcty = Math.trunc((klc / effrt) * 1000);

//         // document.getElementById('res').innerText = dev;
//     } else if (embd.checked) {
//         effrt = Math.pow(klc, 1.2) * 1.20 * eaf;
//         tdev = Math.round(Math.pow(effrt, 0.32) * 2.5);
//         tcost = cor * nod * tdev;
//         productivity = Math.trunc((klc / effrt) * 1000);

//         // document.getElementById('res').innerText = dev;
//     }

//     document.getElementById("res").innerHTML =
//         "Effort = " +
//         effrt +
//         " Per month<br><br>" +
//         "Development Time = " +
//         tdev +
//         " Month <br><br>" +
//         "Cost  = " +
//         tcost +
//         "<br><br>" +
//         "People requires = " +
//         Math.floor(effrt / tdev) +
//         "<br><br> Productivity = " +
//         prodcty +
//         " LOC/PM";
// }

// function intermediate() {
//     let rvl = document.getElementById("rvl")
//     let rl = document.getElementById("rl")
//     let eaf = 0
//     if (rvl.checked && rl.checked) {
//         let temp1 = rvl.value
//         let temp2 = rl.value
//         let ans = temp1 * temp2
//         document.getElementById('res').innerHTML = "eaf = " + ans;
//     }
// }
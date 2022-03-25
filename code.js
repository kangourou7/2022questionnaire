var q0900_Name = "entry.1189262394"
var q1000_Name = "entry.1912228487"
var q1100_Name = "entry.1373016093"
var q1200_Name = "entry.1921329787"
var q1300_Name = "entry.2143339229"
var q1400_Name = "entry.1127244046"
var q1500_Name = "entry.1307366704"
var q1600_Name = "entry.364753067"
var q1700_Name = "entry.1567367990"
var q1800_Name = "entry.36840026"
var q1900_Name = "entry.69604023"
var q2000_Name = "entry.1140198498"
var q2101_Name = "entry.848158956"
var q2102_Name = "entry.1450093137"
var q2103_Name = "entry.2109641383"
var q2104_Name = "entry.143211267"
var q2105_Name = "entry.161345526"
var q2106_Name = "entry.610234784"
var q2107_Name = "entry.703959160"
var q2108_Name = "entry.225873728"
var q2109_Name = "entry.1052260797"
var q2110_Name = "entry.986771553"
var q2111_Name = "entry.992443041"
var q2112_Name = "entry.1435453234"
var q2113_Name = "entry.2025236233"
var q2114_Name = "entry.222011874"
var q2115_Name = "entry.1589964351"
var q2116_Name = "entry.822947387"
var q2117_Name = "entry.1828273273"
var q2118_Name = "entry.708614092"
var q2200_Name = "entry.272757457"
var q2300_Name = "entry.1371248371"

/*
var q9targetY = [q11_Name,q12_Name,q13_Name]
var q9targetN = [q10_Name]
//質問9で「はい」と回答した場合
function q9_yes(){
    var q91 = document.getElementById("91")
    if(q91.checked = true){
        for(i=0;i<q9targetY.length;i++){
            var q9target = document.getElementsByName(q9targetY[i])
            for(j=0;j<q9targetY[i].length;j++){
                q9target[j].disabled = false
            }        
        }
        for(i=0;i<q9targetN.length;i++){
            var q9target = document.getElementsByName(q9targetN[i])
            for(j=0;j<q9targetN[i].length;j++){
                q9target[j].disabled = true
            }        
        }
    }
}
*/


/*
//質問9で「いいえ」と回答した場合
function q9_no(){
    var q92 = document.getElementById("92")
    if(q92.checked = true){
        for(i=0;i<q9targetY.length;i++){
            var q9target = document.getElementsByName(q9targetY[i])
            for(j=0;j<q9targetY[i].length;j++){
                q9target[j].disabled = true
            }        
        }
        for(i=0;i<q9targetN.length;i++){
            var q9target = document.getElementsByName(q9targetN[i])
            for(j=0;j<q9targetN[i].length;j++){
                q9target[j].disabled = false
            }        
        }

    }
}
*/


//var q9yesQs = document.getElementById("q9yes");
//alert(q9yesQs)
//q9yesQs.style.display = "none";
//alert(document.getElementById("3011"))

/*
//質問9分岐
function q9(){
    var q9yesBtn = document.getElementById("09001").checked;
    var q9noBtn = document.getElementById("09002").checked;
    var q9wakaranBtn = document.getElementById("0900w").checked;
    var q9yesQs = document.getElementById("q9yes");
    var q9noQs = document.getElementById("q9no");
    var q9yesQsName = [q11_Name,q12_Name,q13_Name]
    var q9noQsName = [q10_Name]
    if(q9yesBtn == true){
        q9yesQs.style.display = "block";
        q9noQs.style.display = "none";
        for(i=0;i<q9noQsName.length;i++){
            var q9target = document.getElementsByName(q9noQsName[i])
            for(j=0;j<q9target.length;j++){
                q9target[j].checked = false;
            }
        }
    }
    else if(q9noBtn == true){
        q9yesQs.style.display = "none";
        q9yesQs.checked = false
        q9noQs.style.display = "block";
        for(i=0;i<q9yesQsName.length;i++){
            var q9target = document.getElementsByName(q9yesQsName[i])
            for(j=0;j<q9target.length;j++){
                q9target[j].checked = false;
            }
        }
    }
    else if(q9wakaranBtn == true){
        q9yesQs.style.display = "none";
        q9noQs.style.display = "none";
        q9yesQs.checked = false;
        q9noQs.checked = false;
        for(i=0;i<q9noQsName.length;i++){
            var q9target = document.getElementsByName(q9noQsName[i])
            for(j=0;j<q9target.length;j++){
                q9target[j].checked = false;
            }
        }
        for(i=0;i<q9yesQsName.length;i++){
            var q9target = document.getElementsByName(q9yesQsName[i])
            for(j=0;j<q9target.length;j++){
                q9target[j].checked = false;
            }
        }
    }
}
*/

//質問Yes・No分岐
function YesNo(ele){
    var qId = ele.id.charAt(0) + ele.id.charAt(1) + ele.id.charAt(2) + ele.id.charAt(3)
    var yesId = qId + "1";
    var noId = qId + "2";
    //alert(noId)
    var wakaranId = qId + "w";
    var yesBtn = document.getElementById(yesId).checked;
    var noBtn = document.getElementById(noId).checked;
    var wakaranBtn = document.getElementById(wakaranId).checked;
    var yesQsId = qId + "yes";
    var noQsId = qId + "no";
    //alert(noQsId)

    //alert(qId)
    if(qId == "0900"){
        var yesQsName = [q1100_Name,q1200_Name,q1300_Name]
        var noQsName = [q1000_Name]
    }else if(qId == "1400"){
        var yesQsName = [q1600_Name,q1700_Name]
        var noQsName = [q1500_Name]
    }else if(qId == "1900"){
        var yesQsName = [q2000_Name,q2101_Name,q2102_Name,q2103_Name,q2104_Name,q2105_Name,q2106_Name,q2107_Name,q2108_Name,q2109_Name,q2110_Name,q2111_Name,q2112_Name,q2113_Name,q2114_Name,q2115_Name,q2116_Name,q2117_Name,q2118_Name,q2200_Name,q2300_Name]
        var noQsName = ""
    }else if(qId == "2112"){
        var yesQsName = [q2300_Name]
        var noQsName = ""
    }
    //alert(yesQsName)

    var yesQs = document.getElementById(yesQsId);
    var noQs = document.getElementById(noQsId);
    //alert(yesQs)
    if(yesBtn == true){
        alert("yes")
        yesQs.style.display = "block";
        noQs.style.display = "none";
        for(i=0;i<yesQsName.length;i++){
            var target = document.getElementsByName(yesQsName[i])
            for(j=0;j<target.length;j++){
                //target[j].checked = false;
                target[j].required = true;
            }
        }
        for(i=0;i<noQsName.length;i++){
            var target = document.getElementsByName(noQsName[i])
            for(j=0;j<target.length;j++){
                target[j].checked = false;
                target[j].required = false;
            }
        }
    }
    else if(noBtn == true){
        alert("no")
        yesQs.style.display = "none";
        noQs.style.display = "block";
        alert("aaa")
        for(i=0;i<yesQsName.length;i++){
            var target = document.getElementsByName(yesQsName[i])
            for(j=0;j<target.length;j++){
                target[j].checked = false;
                target[j].required = false;
            }
        }
        for(i=0;i<noQsName.length;i++){
            var target = document.getElementsByName(noQsName[i])
            for(j=0;j<target.length;j++){
                //target[j].checked = false;
                target[j].required = true;
            }
        }
    }
    else if(wakaranBtn == true){
        alert("wakaran")
        yesQs.style.display = "none";
        noQs.style.display = "none";
        yesQs.checked = false;
        noQs.checked = false;
        for(i=0;i<noQsName.length;i++){
            var target = document.getElementsByName(noQsName[i])
            for(j=0;j<target.length;j++){
                target[j].checked = false;
                target[j].required = false;
            }
        }
        for(i=0;i<yesQsName.length;i++){
            var target = document.getElementsByName(yesQsName[i])
            for(j=0;j<target.length;j++){
                target[j].checked = false;
                target[j].required = false;
            }
        }
    }
}



//質問30単一回答制御
function q30(ele){
    for(i=1;i<=5;i++){
        var checkedId = ele.id;
        var changeId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + i + checkedId.charAt(4);
        if(checkedId != changeId){
            document.getElementById(changeId).checked = false
        }
    }
}

//（わからない）（その他）クリア
function tClear(ele){
    var checkedId = ele.id;
    var wId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + "w";
    var wtId = wId + "t";
    if(document.getElementById(wId).checked == false){
        document.getElementById(wtId).value = "";
        document.getElementById(wtId).disabled = true;
    }else if(document.getElementById(wId).checked == true){
        document.getElementById(wtId).disabled = false;
    }
    var sId = checkedId.charAt(0) + checkedId.charAt(1) + checkedId.charAt(2) + checkedId.charAt(3) + "s";
    var stId = sId + "t";
    if(document.getElementById(sId).checked == false){
        document.getElementById(stId).value = "";
        document.getElementById(stId).disabled = true;
    }else if(document.getElementById(sId).checked == true){
        document.getElementById(stId).disabled = false;
    }    
}

// Enterキーが押された時にSubmitされるのを抑制する
document.getElementById("form1").onkeypress = (e) => {
    // form1に入力されたキーを取得
    const key = e.keyCode || e.charCode || 0;
    // 13はEnterキーのキーコード
    if (key == 13) {
      // アクションを行わない
      e.preventDefault();
    }
  }
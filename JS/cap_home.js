//🠗🠗🠗做開啟選單動畫🠗🠗🠗
$(document).ready(function () {
    //🠗🠗🠗以ul li包子選單🠗🠗🠗
    $(".cart>li>a").click(function (event) {
      event.preventDefault();
      $(this).toggleClass("active");
      $(this).siblings("ul").slideToggle(1500);
    });
});

//🠗🠗🠗將選取的下拉式選單選項以加入且不刪除的方式新增至producttypetext欄位🠗🠗🠗
//🠗🠗🠗產品類型🠗🠗🠗
var producttypetext = document.getElementById('producttypetext');
productType.addEventListener('change', function() {
    var selectedOptions = productType.selectedOptions;
    for (var i = 0; i < selectedOptions.length; i++) {
        var selectedLabel = selectedOptions[i].textContent;
        if (!producttypetext.value.includes(selectedLabel)) {
            producttypetext.value += selectedLabel + '; ';
        }
    }
})


//🠗🠗🠗抓資料至下一頁🠗🠗🠗
var btnSubmitAll = document.getElementById('btnSubmitAll');
btnSubmitAll.onclick = function(){
    //🠗🠗🠗客群🠗🠗🠗
    var targetAudience = document.getElementById('targetAudience').value; //目標客群
    var age1 = document.getElementById('age1').value; //年齡1
    var age2 = document.getElementById('age2').value; //年齡2
    var salary1 = document.getElementById('salary1').value; //薪水1
    var salary2 = document.getElementById('salary2').value; //薪水2
    var selectedGender = document.querySelector('input[name="gender"]:checked'); //性別
    var gender = selectedGender ? selectedGender.nextElementSibling.textContent : '';
    var selectedMarriage = document.querySelector('input[name="marriage"]:checked'); //婚姻
    var marriage = selectedMarriage ? selectedMarriage.nextElementSibling.textContent : '';
    var selectedChild = document.querySelector('input[name="child"]:checked'); //小孩
    var childinchild = selectedChild ? selectedChild.nextElementSibling.textContent : '';
    if(childinchild=="是"){
        var child = `有小孩`;
    }else{
        var child = `沒有小孩`
    }
    var spaceTime = document.getElementById('spaceTime').value; //空間時間運用
    var risksOverwhelming = document.getElementById("risksOverwhelming").value; //理財風險承受度
    var socialParticipant = document.getElementById("socialParticipant").value; //社交媒體參與度
    var otherDiscription = document.getElementById('otherDiscription').value;//其他描述, 有欄位，沒有放進prompt

    //🠗🠗🠗產品🠗🠗🠗
    var productName = document.getElementById('productName').value; //產品名稱
    var producttypetext = document.getElementById('producttypetext').value; //產品類型
    var productFeature = document.getElementById('productFeature').value; //產品特性
    var productImage = document.getElementById('productImage').value; //產品形象
    var productDiscount = document.getElementById('productDiscount').value; //優惠方案
    var activityMethod = document.getElementById('activityMethod').value; //活動辦法
    var productAdvantage = document.getElementById('productAdvantage').value; //優勢
    var productDisadvantage = document.getElementById('productDisadvantage').value; //劣勢
    var productStory = document.getElementById('productStory').value; //產品故事
    var warranty = document.getElementById('warranty').value; //活動截止
    var afterservice = document.getElementById('afterservice').value; //售後服務
    var productPurchase = document.getElementById('productPurchase').value; //購買方式
    var purchaseRule = document.getElementById('purchaseRule').value; //購買條件
    var numlimit = document.getElementById('numlimit').value; //數量限制

    if(!targetAudience || !producttypetext|| !productName || !productFeature || !productImage || !productDiscount || !activityMethod){
        alert('請確實填寫欄位！');
    } else{
        var productInformation = 
        `
        客群資訊如下：
        目標客群：${targetAudience}
        年齡：${age1}歲至${age2}
        年收區間：${salary1}萬至${salary2}萬
        性別：${gender}
        婚姻狀態：${marriage}
        小孩：${child}
        空間時間運用：${spaceTime}
        理財風險承受度：${risksOverwhelming}
        社交媒體參與度：${socialParticipant}

        產品資訊如下：
        產品類型：${producttypetext}
        產品名稱：${productName}
        產品特性：${productFeature}
        產品形象：
        活動辦法(理念)：${activityMethod}
        優惠方案：${productDiscount}
        產品異於同質性優勢：${productAdvantage}
        產品異於同質性劣勢：${productDisadvantage}
        產品故事性：${productStory}
        活動截止日：${warranty}
        售後服務內容：${afterservice}
        如何購買：${productPurchase}
        購買條件：${purchaseRule}
        數量限制：${numlimit}
        想引起什麼話題：`;
        
        localStorage.setItem('productInformation', productInformation);

    }
    //🠗🠗🠗在換頁之前進行一些驗證🠗🠗🠗
    if (confirm('確定填寫完畢？')) {
        window.location.assign ('./style.html') ;
    }else {
        alert('您已取消操作。');
    }
}


//🠗🠗🠗上傳投資警語及讀檔🠗🠗🠗
function onLoadFile() {
    var getfile = document.getElementById('fileUpload');

        //🠗🠗🠗利用檔案陣列長度與檔案類型，來判斷是否有上傳檔案且類型為文字檔🠗🠗🠗
    if(getfile.files.length != 0 && getfile.files[0].type.match(/text.*/)) {
        var reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('uploadedFileContent', e.target.result);
        };
        reader.onerror = function(e) {
            console.log("無法讀取文字檔!");
        }
        //🠗🠗🠗讀取文字檔案，第二個參數預設是UTF-8🠗🠗🠗
        reader.readAsText(getfile.files[0], "UTF-8");
    }else {
        console.log("上傳的檔案非文字檔!");
    }
}


//🠗🠗🠗存or匯入TEMP🠗🠗🠗
var btnSaveAudience = document.getElementById('btnSaveAudience');
var btninputAudience = document.getElementById('btninputAudience');
var btnSaveProducts = document.getElementById('btnSaveProducts');
var btninputProducts = document.getElementById('btninputProducts');
//🠗🠗🠗Get the modal🠗🠗🠗
var AudienceForm = document.getElementById('AudienceForm');
var ProductsForm = document.getElementById('ProductsForm');
//🠗🠗🠗Get the <span> element that closes the modal🠗🠗🠗
var span = document.getElementsByClassName("close");

//🠗🠗🠗存客群🠗🠗🠗
btnSaveAudience.onclick = function(){
    //🠗🠗🠗獲取表格🠗🠗🠗
  var table = document.getElementById("audienceTable");
  var targetAudience = document.getElementById('targetAudience'); //目標客群
  var spaceTime = document.getElementById('spaceTime'); //目標客群
  var otherDiscription = document.getElementById('otherDiscription');//其他描述

  if(!targetAudience.value){
    alert('請輸入資料')
  }else{
    //🠗🠗🠗創建一个新的行🠗🠗🠗
    var newRow = table.insertRow();

    //🠗🠗🠗創建新的單元格並添加到新行中🠗🠗🠗
    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();
    var cell3 = newRow.insertCell();
    var cell4 = newRow.insertCell();
    var cell5 = newRow.insertCell();
    //🠗🠗🠗給新的單元格添加内容🠗🠗🠗
    cell1.innerHTML = '<input type="checkbox" name="checkproduct">';
    cell2.innerHTML = targetAudience.value;
    cell3.innerHTML = otherDiscription.value;
    cell4.innerHTML = spaceTime.value;
    cell5.innerHTML = '<span class="click">編輯</span>/<span class="click" onclick="deleteRow(this)">刪除</span>';

    targetAudience.value="";
    otherDiscription.value="";
  }
}

//🠗🠗🠗存產品🠗🠗🠗
btnSaveProducts.onclick = function(){
    var table = document.getElementById("productsTable");
    var producttypetext = document.getElementById('producttypetext');
    var productName = document.getElementById('productName'); //產品名稱
    var productDiscount = document.getElementById('productDiscount'); //產品描述

    if(!producttypetext.value && !productName.value && !productDiscount.value){
    alert('請輸入完整資料')
  }else{
    //🠗🠗🠗創建一个新的行🠗🠗🠗
    var newRow = table.insertRow();

    //🠗🠗🠗創建新的單元格并添加到新行中🠗🠗🠗
    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();
    var cell3 = newRow.insertCell();
    var cell4 = newRow.insertCell();
    var cell5 = newRow.insertCell();
    //🠗🠗🠗給新的單元格添加内容🠗🠗🠗
    cell1.innerHTML = '<input type="checkbox" name="checkproduct">';
    cell2.innerHTML = productName.value;
    cell3.innerHTML = producttypetext.value;
    cell4.innerHTML = productDiscount.value;
    cell5.innerHTML = '<span class="click">編輯</span>/<span class="click" onclick="deleteRow(this)">刪除</span>';

    producttypetext.value="";
    productName.value="";
    productDiscount.value = ""
  }
}

  //🠗🠗🠗匯入客群🠗🠗🠗
btninputAudience.onclick = function(){
  
    AudienceForm.style.display = "block";
  
  }
  
  //🠗🠗🠗匯入產品🠗🠗🠗
  btninputProducts.onclick = function(){
  
    ProductsForm.style.display = "block";
  
  }


  //🠗🠗🠗When the user clicks on <span> (x), close the modal🠗🠗🠗
for (let i = 0; i < span.length; i++) {
    span[i].onclick = function() {
      AudienceForm.style.display = "none";
      ProductsForm.style.display = "none";
    }
}

//🠗🠗🠗找到行並删除🠗🠗🠗
function deleteRow(element) {
    var row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


//🠗🠗🠗在點擊"編輯"按鈕時打開模態框，並將當前行的數據填入表單中🠗🠗🠗
//🠗🠗🠗目前還沒有完整(上資料庫)🠗🠗🠗
document.querySelectorAll('.click').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.innerText === '編輯') {
            var row = e.target.parentNode.parentNode;
            // Remove the 'selected' class from any previously selected row
            var previouslySelectedRow = document.querySelector('tr.selected');
            if (previouslySelectedRow) {
                previouslySelectedRow.classList.remove('selected');
            }
            // Add the 'selected' class to the current row
        row.classList.add('selected');

        document.getElementById('editTargetAudience').value = row.cells[0].innerText;
        document.getElementById('editotherfeature').value = row.cells[1].innerText;
        document.getElementById('editrisks').value = row.cells[2].innerText;
        document.getElementById('editAudienceModal').style.display = 'block';
        }
    })
})


//🠗🠗🠗選擇匯入客群🠗🠗🠗
let audienceinform, otherDescindorm, spaceTimeinform; //🠗🠗🠗目標客群, 角色(其他特徵描述), 空閒時間運用🠗🠗🠗
document.querySelectorAll('input[name="checkaudience"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function(e) {
        if (e.target.checked) {
            //🠗🠗🠗If the checkbox is checked, uncheck all other checkboxes🠗🠗🠗
            document.querySelectorAll('input[name="checkaudience"]').forEach(function(otherCheckbox) {
                if (otherCheckbox !== e.target) {
                    otherCheckbox.checked = false;
                }
            });
            var row = e.target.parentNode.parentNode;
            audienceinform = row.cells[1].innerText;
            otherDescindorm = row.cells[2].innerText;
            spaceTimeinform = row.cells[3].innerText;
            console.log(audienceinform, otherDescindorm, spaceTimeinform);
        }
    })
})

//🠗🠗🠗將匯入的資料貼到欄位裡🠗🠗🠗
var inputAudience = document.getElementById('inputAudience');
inputAudience.onclick = function(e){
    e.preventDefault();

    if (audienceinform && otherDescindorm && spaceTimeinform) {
        var targetAudience = document.getElementById('targetAudience'); //目標客群
        let spaceTime = document.getElementById('spaceTime'); //空間時間運用
        let otherDiscription = document.getElementById('otherDiscription');//其他描述
        let age1 = document.getElementById('age1'); //年齡1
        let age2 = document.getElementById('age2'); //年齡2
        let salary1 = document.getElementById('salary1'); //薪水1
        let salary2 = document.getElementById('salary2'); //薪水2
        let risksOverwhelming = document.getElementById('risksOverwhelming'); //理財風險承受度
        let socialParticipant = document.getElementById('socialParticipant'); //社交媒體參與度
        let genderEls = {
            '不限': document.getElementById('whateverForGender'),
            '男生': document.getElementById('male'),
            '女生': document.getElementById('female')
        }
        let merriageEls = {
            '不限': document.getElementById('whateverForMarriage'),
            '已婚': document.getElementById('married'),
            '未婚': document.getElementById('single')
        
        }
        let childEls = {
            '不限': document.getElementById('whateverForChild'),
            '是': document.getElementById('yesForChild'),
            '否': document.getElementById('noForChild')
        }

        if(audienceinform =='一人公司'){
            var age1inform = '35';
            var age2inform = '55';
            var salary1inform = '20';
            var salary2inform = '100';
            var genderinform = '不限';
            var marriageinform = '已婚';
            var childinform = '是';
            var riskinform = '追求10%以上的獲利，願意接受10％以上的投資損失';
            var socialinform = '常看社群的投資經驗';
        }else if(audienceinform =='單身族'){
            var age1inform = '35';
            var age2inform = '55';
            var salary1inform = '50';
            var salary2inform = '100';
            var genderinform = '男生';
            var marriageinform = '未婚';
            var childinform = '否';
            var riskinform = '投資損失在5％以內的可以接受';
            var socialinform = '只聽新朋好友的投資想法';
        }
        //🠗🠗🠗將值放進對應欄位🠗🠗🠗
        targetAudience.value = audienceinform;
        age1.value = age1inform;
        age2.value = age2inform;
        salary1.value = salary1inform;
        salary2.value = salary2inform;
        genderEls[genderinform].checked = true;
        merriageEls[marriageinform].checked = true;
        childEls[childinform].checked = true;
        spaceTime.value = spaceTimeinform;
        risksOverwhelming.value = riskinform;
        socialParticipant.value = socialinform;
        otherDiscription.value = otherDescindorm;

        //🠗🠗🠗關閉模態視窗🠗🠗🠗
        var modal = document.getElementById('AudienceForm');
        modal.style.display = 'none';
    }else {
        console.log('No checkbox selected');
    }
}


//🠗🠗🠗選擇匯入產品🠗🠗🠗
let productnameinform, producytypeform, productimageioninform;

document.querySelectorAll('input[name="checkproduct"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function(e) {
        if (e.target.checked) {
            // If the checkbox is checked, uncheck all other checkboxes
            document.querySelectorAll('input[name="checkproduct"]').forEach(function(otherCheckbox) {
                if (otherCheckbox !== e.target) {
                    otherCheckbox.checked = false;
                }
            });
            var row = e.target.parentNode.parentNode;
            productnameinform = row.cells[1].innerText;
            producytypeform = row.cells[2].innerText;
            productimageioninform = row.cells[3].innerText;
            console.log(productnameinform, producytypeform, productimageioninform);
        }
    })
})

//🠗🠗🠗將匯入的資料貼到欄位裡🠗🠗🠗
var inputProducts = document.getElementById('inputProducts');
inputProducts.onclick = function(e){
    e.preventDefault();

    if (productnameinform && producytypeform && productimageioninform) {
        var productName = document.getElementById('productName'); //產品名稱
        var producttypetext = document.getElementById('producttypetext'); //產品類型
        var productImage = document.getElementById('productImage'); //產品形象
        var productFeature = document.getElementById('productFeature'); //產品特徵
        var productDiscount = document.getElementById('productDiscount'); //產品描述
        var activityMethod = document.getElementById('activityMethod'); //活動辦法
        var productAdvantage = document.getElementById('productAdvantage'); //優勢
        var productDisadvantage = document.getElementById('productDisadvantage'); //劣勢
        var productStory = document.getElementById('productStory'); //產品故事
        var productPurchase = document.getElementById('productPurchase'); //如何購買
        var purchaseRule = document.getElementById('purchaseRule'); //購買條件

        if(productnameinform =='優質債券基金'){
            var productfeatureinform = `投資人用較低的資金就可以投資由專業基金經理人所管理的多元資產組合。 不一樣的基金類型，有不同的投資標的及風格，主要可以依照發行國家、投資的市場、主被動操作方式以及投資標的類型等幾種方式劃分。`;
            var productdiscountinform = `1.電子化交易通路申購境內外基金(不含ETF、貨幣型及後收型)，享單筆7折、定期(不)定額6折。
            2.限時優質基金定期(不)定額3折。`;
            var acticitymethodinform = `1.提供穩定收息的基金清單
            2.提供具橬力的基金清單`;
            var productadvinform = ``;
            var producydisadinform = ``;
            var productstoryinform = ``;
            var productpurchaseinform = `線上申請`;
            var purchaseruleinform = `已開通網路銀行`;
        }else if(productnameinform =='2023年信貸活動'){
            var productfeatureinform = `信用貸款是以借款人的信用為依據申請的貸款，不需提供抵押品，銀行會根據個人的信用狀況及還款能力綜合評估後，提供一筆資金`;
            var productdiscountinform = `1.首期利率0.01%
            2.手續費僅5000~9000元`;
            var acticitymethodinform = `線上申貸，輕鬆核貸`;
            var productadvinform = `總費用年百分率為3.17%~15.8%`;
            var producydisadinform = ``;
            var productstoryinform = ``;
            var productpurchaseinform = `線上申請`;
            var purchaseruleinform = `提供2022年度的扣繳慼單、所得清單、所得稅申報書等任一文件`;
        }else if(productnameinform =='數位理財奈米投'){
            var productfeatureinform = `定時定額投資`;
            var productdiscountinform = `優惠方案1	只要1000元台幣可投資10-15檔ETF
            優惠方案2	申購贖回免手續費,只收信託管理費
            優惠方案3	專家每日觀察市場變化,主動平衡投資組合
            優惠方案4	申購奈米投滿六個月且為負報酬者，可享六個月免信託管理費！
            3.新戶申購奈米投2號，可享六個月免信託管理費！
            4.舊戶申購奈米投滿六個月且為負報酬者，可享六個月免信託管理費！`;
            var acticitymethodinform = `可以自行選擇外債ETF、台灣股票ETF組合，共4種組合。`;
            var productadvinform = `2022年榮獲9項國內外獎項肯定`;
            var producydisadinform = `基金投資免手續費且免信託管理費`;
            var productstoryinform = `北漂青年打拼`;
            var productpurchaseinform = `有富邦網路銀行帳號即可線上申購`;
            var purchaseruleinform = `只到2023/12/31`;
        }
        //🠗🠗🠗將值放進對應欄位🠗🠗🠗
        productName.value = productnameinform;
        producttypetext.value = producytypeform;
        productImage.value = productimageioninform;
        productFeature.value = productfeatureinform;
        productDiscount.value = productdiscountinform;
        activityMethod.value = acticitymethodinform;
        productAdvantage.value = productadvinform;
        productDisadvantage.value = producydisadinform;
        productStory.value = productstoryinform;
        productPurchase.value = productpurchaseinform;
        purchaseRule.value = purchaseruleinform;

         //🠗🠗🠗關閉模態視窗🠗🠗🠗
        var modal = document.getElementById('ProductsForm');
        modal.style.display = 'none';
    }else {
        console.log('No checkbox selected');
    }
}
var result = localStorage.getItem('result');
console.log(result);
var result1 = localStorage.getItem('result1');
console.log(result1);

var urlParams = new URLSearchParams(window.location.search);
var styleValue = urlParams.get('style');//風格
var keywordValue = urlParams.get('keyword');//關鍵字
var contentstyleValue = urlParams.get('contentstyle');//前頁圈選風格
var proposolValue = urlParams.get('proposol');//提案框架//行銷框架 //pas||aida
var showOutput = urlParams.get('showOutput');//呈現方式 //edm||mbn||line
var features = urlParams.get('features');
if(!features){
    console.log("Features not found");
}

var Investment = localStorage.getItem('uploadedFileContent');
// Parse the string back into a JavaScript object
var productObj = JSON.parse(result);
var productObj1 = JSON.parse(result1);
var step1_big_title = productObj['Step 1']['Main_slogan'];
var step1_main_list = productObj['Step 1']['Main_list'];
var step1_point1 = productObj['Step 1']['Point1'];
var step1_point_desc1 = productObj['Step 1']['Point_desc1'];
var step1_point2 = productObj['Step 1']['Point2'];
var step1_point_desc2 = productObj['Step 1']['Point_desc2'];
var step1_point3 = productObj['Step 1']['Point3'];
var step1_point_desc3 = productObj['Step 1']['Point_desc3'];
var step1_product = productObj['Step 1']['Product'];
var step1_preferential = productObj['Step 1']['Preferential'];
var step1_content = productObj['Step 1']['Content'];
var step1_extra_information = productObj['Step 1']['Extra information'];
var step1_content_1 = productObj['Step 1']['Content_1'];
var step1_content_2 = productObj['Step 1']['Content_2'];

//此限制是因為自訂框架只有一步驟
if (productObj['Step 2']){
    var step2_big_title = productObj['Step 2']['Main_slogan'];
    var step2_main_list = productObj['Step 2']['Main_list'];
    var step2_point1 = productObj['Step 2']['Point1'];
    var step2_point_desc1 = productObj['Step 2']['Point_desc1'];
    var step2_point2 = productObj['Step 2']['Point2'];
    var step2_point_desc2 = productObj['Step 2']['Point_desc2'];
    var step2_point3 = productObj['Step 2']['Point3'];
    var step2_point_desc3 = productObj['Step 2']['Point_desc3'];
    var step2_product = productObj['Step 2']['Product'];
    var step2_preferential = productObj['Step 2']['Preferential'];
    var step2_content = productObj['Step 2']['Content'];
    var step2_extra_information = productObj['Step 2']['Extra information'];
    var step2_content_1 = productObj['Step 2']['Content_1'];
    var step2_content_2 = productObj['Step 2']['Content_2'];
}

if(proposolValue==='pas'){
    if (productObj['Step 3']) {
        var step3_big_title = productObj['Step 3']['Main_slogan'];
        var step3_main_list = productObj['Step 3']['Main_list'];
        var step3_point1 = productObj['Step 3']['Point1'];
        var step3_point_desc1 = productObj['Step 3']['Point_desc1'];
        var step3_point2 = productObj['Step 3']['Point2'];
        var step3_point_desc2 = productObj['Step 3']['Point_desc2'];
        var step3_point3 = productObj['Step 3']['Point3'];
        var step3_point_desc3 = productObj['Step 3']['Point_desc3'];
        var step3_preferential = productObj['Step 3']['Preferential'];
        var step3_content = productObj['Step 3']['Content'];
        var step3_product = productObj['Step 3']['Product'];
        var step3_extra_information = productObj['Step 3']['Extra information'];
        var step3_content_1 = productObj['Step 3']['Content_1'];
        var step3_content_2 = productObj['Step 3']['Content_2'];
    }
}else if(proposolValue==='aida'){
    if (productObj1 && productObj1['Step 3']) {
        var step3_big_title = productObj1['Step 3']['Main_slogan'];
        var step3_main_list = productObj1['Step 3']['Main_list'];
        var step3_point1 = productObj1['Step 3']['Point1'];
        var step3_point_desc1 = productObj1['Step 3']['Point_desc1'];
        var step3_point2 = productObj1['Step 3']['Point2'];
        var step3_point_desc2 = productObj1['Step 3']['Point_desc2'];
        var step3_point3 = productObj1['Step 3']['Point3'];
        var step3_point_desc3 = productObj1['Step 3']['Point_desc3'];
        var step3_product = productObj1['Step 3']['Product'];
        var step3_preferential = productObj1['Step 3']['Preferential'];
        var step3_content = productObj1['Step 3']['Content'];
        var step3_extra_information = productObj1['Step 3']['Extra information'];
        var step3_content_1 = productObj1['Step 3']['Content_1'];
        var step3_content_2 = productObj1['Step 3']['Content_2'];
    }
}


var step4_big_title = "", step4_main_list = "", step4_point1 = "", step4_point_desc1 = "", step4_point2 = "", step4_point_desc2 = "", step4_point3 = "", step4_point_desc3 = "", step4_product = "", step4_preferential = "", step4_content = "", step4_extra_information = "", step4_content_1 = "", step4_content_2 = "";

if (productObj1 && productObj1['Step 4']) {
    step4_big_title = productObj1['Step 4']['Main_slogan'];
    step4_main_list = productObj1['Step 4']['Main_list'];
    step4_point1 = productObj1['Step 4']['Point1'];
    step4_point_desc1 = productObj1['Step 4']['Point_desc1'];
    step4_point2 = productObj1['Step 4']['Point2'];
    step4_point_desc2 = productObj1['Step 4']['Point_desc2'];
    step4_point3 = productObj1['Step 4']['Point3'];
    step4_point_desc3 = productObj1['Step 4']['Point_desc3'];
    step4_product = productObj1['Step 4']['Product'];
    step4_preferential = productObj1['Step 4']['Preferential'];
    step4_content = productObj1['Step 4']['Content'];
    step4_extra_information = productObj1['Step 4']['Extra information'];
    step4_content_1 = productObj1['Step 4']['Content_1'];
    step4_content_2 = productObj1['Step 4']['Content_2'];
}

var edm_mainview = document.getElementById("edm_mainview");
var edm_mainlist = document.getElementById("edm_mainlist");
var edm_point1 = document.getElementById("edm_point1");
var edm_disc1 = document.getElementById("edm_disc1");
var edm_point2 = document.getElementById("edm_point2");
var edm_disc2 = document.getElementById("edm_disc2");
var edm_point3 = document.getElementById("edm_point3");
var edm_disc3 = document.getElementById("edm_disc3");
var edm_production = document.getElementById("edm_production");
var edm_preferential = document.getElementById("edm_discount");
var edm_show = document.getElementById("edm_show");

var line_mainview = document.getElementById("line_mainview");
var line_content1 = document.getElementById("line_content1");
var line_content2 = document.getElementById("line_content2");
var line_mainpoint = document.getElementById("line_mainpoint");
var line_extra = document.getElementById("line_extra");

var mbn_mainview = document.getElementById("mbn_mainview");
var mbn_content = document.getElementById("mbn_content");
var mbn_mainlist = document.getElementById("mbn_mainlist");
var mbn_extra = document.getElementById("mbn_extra");


let steps_Container = document.getElementById('steps_Container');
document.getElementById('GENERAL_EDM').style.display = 'none';
document.getElementById('GENERAL_LINE').style.display = 'none';
document.getElementById('GENERAL_MBN').style.display = 'none';


steps_Container.innerHTML = '';

//抓取風格，關鍵字，造句模板元素
var style = document.getElementById('style');
style.value = styleValue;
var keyword = document.getElementById('keyword');
keyword.value = keywordValue;
var sentences = document.getElementById('sentences');


//定義造句模板
if(contentstyleValue){
    var options = getOptionsBasedOnSelection(contentstyleValue);
    options.forEach(function(option){
        var optionElement1 = document.createElement('option');
        optionElement1.value = option.value;
        optionElement1.textContent = option.label;
        sentences.appendChild(optionElement1);
    })
}
let ai6103vm03yk6 = document.getElementById('ai6103vm03yk6');
// 確認元素存在並可以被選擇
if(ai6103vm03yk6) {
    ai6103vm03yk6.value = showOutput;
} else {
    console.log("無法找到元素 ai6103vm03yk6");
}


let buttons = [];


// 先前定義的框架
const predefinedFrameworks = {
    pas: [
        `Problem or pain-問題`,
        `Agitate-激勵`,
        `Solution-解決方案`
    ],
    aida: [
        `Awareness & Interest吸引注意`,
        `Consideration & Intent引起興趣`,
        `Evaluation & Purchase 考慮`,
        `Loyalty & Advocacy開始行動`
    ]
};

const otherFrameworkName = localStorage.getItem('otherFrameworkName');
//const otherFrameworkContent = localStorage.getItem('otherFrameworkContent');
const otherFrameworkContent = JSON.parse(localStorage.getItem('otherFrameworkContent'));


if (otherFrameworkContent && Array.isArray(otherFrameworkContent)) {
    if (predefinedFrameworks.hasOwnProperty(otherFrameworkName)) {
        console.warn(`${otherFrameworkName} already exists in predefinedFrameworks. Skipping...`);
    } else {
        predefinedFrameworks[otherFrameworkName] = otherFrameworkContent;
    }
}

initProposol(proposolValue, showOutput);

function initProposol(proposolValue, showOutput){
    // Main logic
    const retrievedSteps  = predefinedFrameworks[proposolValue];
    const steps = (typeof retrievedSteps === 'string') ? [retrievedSteps] : retrievedSteps;
    if (steps) {
        for (let i = 0; i < steps.length; i++) {
            console.log(steps[i]); 
            console.log(steps.length);
            console.log(i);
            createStepButton(i + 1, showOutput, proposolValue);
            switch (showOutput) {
                case 'EDM':
                    updateEDMContent(i + 1, proposolValue);
                    document.getElementById(`GENERAL_EDM`).style.display = 'block';
                    break;
                case 'LINE':
                    updateLINEContent(i + 1, proposolValue);
                    document.getElementById(`GENERAL_LINE`).style.display = 'block';
                    break;
                case 'MBN':
                    updateMBNContent(i + 1, proposolValue);
                    document.getElementById(`GENERAL_MBN`).style.display = 'block';
                    break;
            }
        }
    }else {
        console.error(`No framework found for ${proposolValue}`);
    }

    if(buttons.length > 0) {
        buttons[0].click();
    }
}

//stepIndex：步驟的序號;
//actionType： "EDM"、"LINE" 或 "MBN";
//showOutput："aida" 或 "pas"
function createStepButton(stepIndex, actionType, proposolValue) { 
    let originalColor = "#FFFFFF";
    let color = "#323F6B";
    let stepBtn = document.createElement('button');
    stepBtn.textContent = `Step ${stepIndex}`;
    stepBtn.value = `${proposolValue}${stepIndex}`; // 按鈕儲存的值
    stepBtn.classList.add('stepsBtn'); // 添加預定義的 CSS class

    // 使用stepIndex動態設定按鈕的ID
    stepBtn.id = `step${stepIndex}ButtonId`;

    steps_Container.appendChild(stepBtn);
    buttons.push(stepBtn); // 把新創建的按鈕添加到按鈕列表中

    stepBtn.addEventListener('click', function () {
        resetButtonStyles(buttons, originalColor, color); // Reset the background color for all buttons
        
        this.style.backgroundColor = "#6a99f7";
        this.style.color = "#FFFFFF";

        const stepContent = predefinedFrameworks[proposolValue][stepIndex - 1]; // 從框架中動態獲取內容
        console.log(predefinedFrameworks);
        console.log(proposolValue, stepIndex);
        if (stepContent) {
            let showStep = document.getElementById('showStep');
            showStep.textContent = stepContent;
        }else {
            console.warn(`No content found for ${proposolValue}_step${stepIndex}`);
        }

        switch (actionType) {
            case 'EDM':
                updateEDMContent(stepIndex, actionType, proposolValue);
                break;
            case 'LINE':
                updateLINEContent(stepIndex, actionType, proposolValue);
                break;
            case 'MBN':
                updateMBNContent(stepIndex, actionType, proposolValue);
                break;
            default:
                console.log('Unknown action type');
        }
    });
}


function resetButtonStyles(buttons, bgColor, textColor) {
    for (let btn of buttons) {
        btn.style.backgroundColor = bgColor;
        btn.style.color = textColor;
    }
}



function updateEDMContent(stepIndex, actionType, proposolValue) {
    if(proposolValue === 'aida'){
        // Place your action for aida1 here
        edm_mainview.textContent = window[`step${stepIndex}_big_title`];
        var parts = window[`step${stepIndex}_main_list`].split(/(\d+\.)/);
        edm_mainlist.textContent = '';
        for(let i=0; i<parts.length; i++){
            // 如果当前部分为数字和点，则在前面添加换行符
            if (parts[i].match(/\d+\./)) {
                edm_mainlist.innerHTML += '<br>' + parts[i];
            } else {
                // 其他部分直接添加
                edm_mainlist.innerHTML += parts[i];
            }
        }
        edm_point1.textContent = window[`step${stepIndex}_point1`];
        edm_disc1.textContent = window[`step${stepIndex}_point_desc1`];
        edm_point2.textContent = window[`step${stepIndex}_point2`];
        edm_disc2.textContent = window[`step${stepIndex}_point_desc2`];
        edm_point3.textContent = window[`step${stepIndex}_point3`];
        edm_disc3.textContent = window[`step${stepIndex}_point_desc3`];
        edm_production.textContent = window[`step${stepIndex}_product`];
        edm_preferential.textContent = window[`step${stepIndex}_preferential`];
        edm_show.textContent = Investment;
    }else if(proposolValue === 'pas'){
        edm_mainview.textContent = window[`step${stepIndex}_big_title`];
        var parts = window[`step${stepIndex}_main_list`].split(/(\d+\.)/);
        edm_mainlist.textContent = '';
        for(var i=0; i<parts.length; i++){
            // 如果当前部分为数字和点，则在前面添加换行符
            if (parts[i].match(/\d+\./)) {
                edm_mainlist.innerHTML += '<br>' + parts[i];
            } else {
                // 其他部分直接添加
                edm_mainlist.innerHTML += parts[i];
            }
        }
        edm_point1.textContent = window[`step${stepIndex}_point1`];
        edm_disc1.textContent = window[`step${stepIndex}_point_desc1`];
        edm_point2.textContent = window[`step${stepIndex}_point2`];
        edm_disc2.textContent = window[`step${stepIndex}_point_desc2`];
        edm_point3.textContent = window[`step${stepIndex}_point3`];
        edm_disc3.textContent = window[`step${stepIndex}_point_desc3`];
        edm_production.textContent = window[`step${stepIndex}_product`];
        edm_preferential.textContent = window[`step${stepIndex}_preferential`];
        edm_show.textContent = Investment;
    }else{
        edm_mainview.textContent = window[`step${stepIndex}_big_title`];
        var parts = window[`step${stepIndex}_main_list`].split(/(\d+\.)/);
        edm_mainlist.textContent = '';
        for(var i=0; i<parts.length; i++){
            // 如果当前部分为数字和点，则在前面添加换行符
            if (parts[i].match(/\d+\./)) {
                edm_mainlist.innerHTML += '<br>' + parts[i];
            } else {
                // 其他部分直接添加
                edm_mainlist.innerHTML += parts[i];
            }
        }
        edm_point1.textContent = window[`step${stepIndex}_point1`];
        edm_disc1.textContent = window[`step${stepIndex}_point_desc1`];
        edm_point2.textContent = window[`step${stepIndex}_point2`];
        edm_disc2.textContent = window[`step${stepIndex}_point_desc2`];
        edm_point3.textContent = window[`step${stepIndex}_point3`];
        edm_disc3.textContent = window[`step${stepIndex}_point_desc3`];
        edm_production.textContent = window[`step${stepIndex}_product`];
        edm_preferential.textContent = window[`step${stepIndex}_preferential`];
        edm_show.textContent = Investment;
    }
}

function updateLINEContent(stepIndex, actionType, proposolValue) {
    if(proposolValue === 'aida'){
        line_mainview.textContent = window[`step${stepIndex}_big_title`];
        line_content1.textContent = window[`step${stepIndex}_content_1`];
        line_content2.textContent = window[`step${stepIndex}_content_2`];
        line_mainpoint.textContent = window[`step${stepIndex}_main_list`];
        line_extra.textContent = window[`step${stepIndex}_extra_information`];
    }else if(proposolValue === 'pas'){
        line_mainview.textContent = window[`step${stepIndex}_big_title`];
        line_content1.textContent = window[`step${stepIndex}_content_1`];
        line_content2.textContent = window[`step${stepIndex}_content_2`];
        line_mainpoint.textContent = window[`step${stepIndex}_main_list`];
        line_extra.textContent = window[`step${stepIndex}_extra_information`];
    }else{
        line_mainview.textContent = window[`step${stepIndex}_big_title`];
        line_content1.textContent = window[`step${stepIndex}_content_1`];
        line_content2.textContent = window[`step${stepIndex}_content_2`];
        line_mainpoint.textContent = window[`step${stepIndex}_main_list`];
        line_extra.textContent = window[`step${stepIndex}_extra_information`];
    }
}


function updateMBNContent(stepIndex, actionType, proposolValue) {
    if(proposolValue === 'aida'){
        mbn_mainview.textContent = window[`step${stepIndex}_big_title`];
        mbn_content.textContent = window[`step${stepIndex}_content`];
        mbn_mainlist.textContent = window[`step${stepIndex}_main_list`];
        mbn_extra.textContent = window[`step${stepIndex}_extra_information`];
    }else if(proposolValue === 'pas'){
        mbn_mainview.textContent = window[`step${stepIndex}_big_title`];
        mbn_content.textContent = window[`step${stepIndex}_content`];
        mbn_mainlist.textContent = window[`step${stepIndex}_main_list`];
        mbn_extra.textContent = window[`step${stepIndex}_extra_information`];
    }else{
        mbn_mainview.textContent = window[`step${stepIndex}_big_title`];
        mbn_content.textContent = window[`step${stepIndex}_content`];
        mbn_mainlist.textContent = window[`step${stepIndex}_main_list`];
        mbn_extra.textContent = window[`step${stepIndex}_extra_information`];
    }
}


function generateRequestBody(text) {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'inputtext': text })
    };
  }
  
function sendRequest(requestBody) {
    return fetch('/get_answer', requestBody)
        .then(response => response.json())
        .catch(error => console.error('Error during response processing:', error))
        .catch(error => console.error('Error during fetch:', error));
}

var loading = false;

function setLoading(value) {
    loading = value;
    var loadingContainer = document.getElementById('loadingContainer');
    if (loading) {
        loadingContainer.classList.remove('hidden');
    } else {
        loadingContainer.classList.add('hidden');
    }
}

$(document).ready(function() {
    $('#features').select2();

    //編輯鈕
    var edit = document.getElementById('edit');
    edit.onclick = function(){
        function settonone(){
            document.getElementById('GENERAL_EDM').style.display = 'none';
            document.getElementById('GENERAL_LINE').style.display = 'none';
            document.getElementById('GENERAL_MBN').style.display = 'none';

            steps_Container.innerHTML = '';
        }

        var urlParams = new URLSearchParams(window.location.search);
        var proposolValue = urlParams.get('proposol'); //框架
        var contentstyleValue = urlParams.get('contentstyle');//前頁圈選風格

        //重新創作抓值
        var ai6103vm03yk6 = document.getElementById('ai6103vm03yk6');
        var selectedai6103vm03yk6Temp3 = ai6103vm03yk6.options[ai6103vm03yk6.selectedIndex].value; //模板
        var style = document.getElementById('style').value;
        var keyword = document.getElementById('keyword').value;
        var features = $('#features').val();
        var features_txt = "";  // 初始化一個空字串來存放所有選中的描述
        for (var i = 0; i < features.length; i++) {
            var myfeature = features[i];

            switch (myfeature) {
                case '1':
                    features_txt += `points內其中一個要含數字呈現(例:幾%/幾成)，含使用者體驗感想\n`;
                    break;
                case '2':
                    features_txt += `Main_slogan內要依Main_list內容，含數字呈現(例:幾要點/原則/步驟/個/大/方法)\n`;
                    break;
                case '3':
                    features_txt += `Main_list加入產品優勢\n`;
                    break;
                case '4':
                    features_txt += `Preferential加入「媒體參與度」特徵\n`;
                    break;
                case '5':
                    features_txt += `文案內容不能用"穩/最等"最高級用詞,且不能含有「正報酬/安心/無風險」類似意思保證的用詞\n`;
                    break;
                case '6':
                    features_txt += `內容提到有定期報酬也要提到會有投資風險\n`;
                    break;
                case '7':
                    features_txt += `Main_list內其中一個要含數字呈現(例:幾%/幾成)\n`;
                    break;
            }
        }


        var sentences = document.getElementById('sentences');
        if (sentences && sentences.options.length > 0){
            var mysentences = sentences.options[sentences.selectedIndex].text;
        }else{
            var mysentences = '';
        }

        var maintitlenum = document.getElementById('maintitlenum').value;
        var maintitledescnum = document.getElementById('maintitledescnum').value;
        var smalltitlecnum = document.getElementById('smalltitlecnum').value;
        var smalltitledescnum = document.getElementById('smalltitledescnum').value;
        var productInformation = localStorage.getItem('productInformation');

        if (proposolValue && selectedai6103vm03yk6Temp3) {
            if (proposolValue == "pas"){
                var step1text=`Problem or pain-問題 ：根據商品特徵去設想目標客群可能會遇到的痛點，以及這些問題會造成的痛苦，營造感同身受的氛圍。強調問題的急迫性以及重要性，盡量使顧客產生好奇心及疑問。`;
                var step2text=`Agitate-激勵：透過描述問題的影響、加劇問題帶來的困擾和負面後果，加強顧客對於問題帶來的情感反應。讓顧客意識到問題的嚴重性並感受到對於我們的商品迫切的需求，加劇疑問的敘述使顧客繼續產生好奇心及疑問。`;
                var step3text=`Solution-解決方案：呈現以我們提供產品或服務作為解決問題的方案。強調該解方如何有效地解決觀眾面臨的問題。提供方法的好處與價值。`;
            }else if (proposolValue == "aida") {
                var step1text = `Awareness & Interest：目的為盡可能觸及更多潛在消費者，以「廣」為目標，顧客與品牌初次見面並留下不錯的印象，透過各種行銷手法繼續推播資訊，像是社群行銷等，並找到顧客的痛點與利益因素，讓顧客對商品或服務感興趣。`;
                var step2text= `Consideration & Intent：行銷目的轉為去思考該如何讓消費者願意購買？如何提升購買意願？`;
                var step3text = `Evaluation & Purchase 考慮：目的就是盡快促使消費者執行購買的動作，此時消費者通常心中會有「要買哪家？」的疑問，因此在這一層告訴顧客自己的優勢就非常重要`;
                var step4text = `Loyalty & Advocacy：長期經營品牌至關重要的一步，在消費者購買完商品之後，如果可以建立會員制度，或是透過顧客關係管理（CRM)做到自動化和個人化行銷，並致力於提升商品與服務體驗，就可以大大提升將初次消費者變成忠誠顧客的機會`;
            }else{
                var step1text = `${otherFrameworkContent}`;
            }

            if (selectedai6103vm03yk6Temp3 == "EDM"){
                var opening_text =`step_:
                Main_list：依主要述求及關鍵字及活動主題提供2~4個生活化的條列描述(不可敘述優惠方案及產品資訊)，each step內容皆不重覆且差異大，[請務必以條列式1./2./3./4.呈現]。
                Main_slogan：依Main_list生成吸引人標題
                Point1/2/3：根據Main_slogan敘述及配合step文案方向且含引起話題或產品故事，產生三個客群認可的生活化議題如提供step1，只需產生step1，如提供的參數資訊有到step5就依序 產出五個step，每個step皆須提供三個point，each step內容皆不重覆（e.g., Point1/2/3：
                Point_desc1/2/3: 大約${smalltitledescnum}個字
                Product：依客群特徵重新描述"產品資訊"具說服力的產品優勢、需一個小標題 
                Preferential：依客群對產品知識認知，重新改寫吸引人的優惠方案`;
            }else if (selectedai6103vm03yk6Temp3 == "LINE"){
                var opening_text =`
                step_:  
                Main_slogan：依主要述求關鍵字生成，3個獲利的投資原則
                Main_list：明確敘去目標客群目標夢想 
                Content_1（每個step的產出的3項需不同）：根據文案重點提出的引言明確列出將提供與產品資訊相關的3項e.g., 1. 2. 3. …來實現想或目標，每個step的產出的3項需不同。
                Content_2：產品資訊的優勢 
                Extra information：一句話說服客戶前往網址了結更詳細的資訊--> [網址] `;
            }else if (selectedai6103vm03yk6Temp3 == "MBN"){
                var opening_text =`
                step_: 
                Main_slogan：3點吸引投資人的論點
                Main_list：根據主標題敘述及配合step1文案方向產生三個對目標客群有利的投資策略或疑問句，如提供step1，只需產生step1，如提供的參數資訊有到step5就依序產出五個step（e.g., 1/2/3)
                Content：以產品資訊的優勢來回覆Main_list上的疑問
                Extra information：一句話說服客戶前往網址了結更詳細的資訊--> [網址]
                總共最多70字，絕對不可以超過`;
            }

            var step1_total =   
            `
            Step 1：   
            文案方向：${step1text}
            整體風格：${style}
            文案風格：${contentstyleValue}
            關鍵字：${keyword}
            Main_slogan造句模板：${mysentences}
            Main_slogan字數：${maintitlenum}字以內
            Main_list字數：${maintitledescnum}字以內
            Point字數：${smalltitlecnum}字以內
            Point_desc字數：${smalltitledescnum}字以內
            Tone：直接的 
            Temperature：0.8 
            `;

            var step2_total =   
            `
            Step 2：
            文案方向：${step2text}
            整體風格：${style}
            文案風格：${contentstyleValue}
            關鍵字：${keyword}
            Main_slogan造句模板：${mysentences}
            Main_slogan字數：${maintitlenum}字以內
            Main_list字數：${maintitledescnum}字以內
            Point字數：${smalltitlecnum}字以內
            Point_desc字數：${smalltitledescnum}字以內
            Tone: 直接的 
            Temperature: 0.8
            `;  

            var step3_total = 
            `
            Step 3：   
            文案方向：${step3text}
            整體風格：${style}
            文案風格：${contentstyleValue}
            關鍵字：${keyword}
            Main_slogan造句模板：${mysentences}
            Main_slogan字數：${maintitlenum}字以內
            Main_list字數：${maintitledescnum}字以內
            Point字數：${smalltitlecnum}字以內
            Point_desc字數：${smalltitledescnum}字以內
            Tone: 直接的 
            Temperature: 0.8
            `  

            var step4_total =
            `
            Step 4：   
            文案方向：${step4text}
            整體風格：${style}
            文案風格：${contentstyleValue}
            關鍵字：${keyword}
            Main_slogan造句模板：${mysentences}
            Main_slogan字數：${maintitlenum}字以內
            Main_list字數：${maintitledescnum}字以內
            Point字數：${smalltitlecnum}字以內
            Point_desc字數：${smalltitledescnum}字以內
            Tone: 直接的 
            Temperature: 0.8
            `;


            var proposol = proposolValue;
            var showmeOutput = selectedai6103vm03yk6Temp3;

            if (showmeOutput == "EDM" || showmeOutput == "LINE" || showmeOutput == "MBN") {
                setLoading(true);

                if (proposol == "aida") {
                    const text = generateTextForRequest(`${step1_total}\n---\n${step2_total}`, opening_text, productInformation, features_txt);
                    const text1 = generateTextForRequest(`${step3_total}\n---\n${step4_total}`, opening_text, productInformation, features_txt);

                    console.log(text);
                    console.log(text1);

                    Promise.all([
                        sendRequest(generateRequestBody(text)),
                        sendRequest(generateRequestBody(text1))
                    ])
                    .then(results => {
                        localStorage.setItem('result', JSON.stringify(results[0]['response']));
                        localStorage.setItem('result1', JSON.stringify(results[1]['response']));
                        console.log(results);
                        settonone();
                        console.log(showmeOutput, proposolValue, contentstyleValue, style, keyword);
                        changePage(showmeOutput, proposolValue, contentstyleValue, style, keyword);
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
                }else if (proposol == "pas") {
                    const text = generateTextForRequest(`${step1_total}\n---\n${step2_total}\n---\n${step3_total}`, opening_text, productInformation, features_txt);
                    console.log(text);
                    handleGenerateRequest(text);
                }else {
                    const text = generateTextForRequest(`${step1_total}`, opening_text, productInformation, features_txt);
                    console.log(text);
                    handleGenerateRequest(text);
                }
            }else {
                alert('請選擇提案框架和呈現方式！');
            }
        }
        //內嵌式function

        function generateTextForRequest(stepsInfo, opening_text, productInformation, features_txt) {
            return `根據我提供的產品資訊和參數資訊生成一個理財行銷文案， 字數以精簡為主，每個step需有連貫性並且以以下格式輸出： 
            —————- 
            ${opening_text}
            —————- 
            ${productInformation}
            —————- 
            參數資訊： 
            ${stepsInfo}
            —————- 
            ${opening_text}
            —————- 
            請一定要依照我的格式回答，中間不要以任何形式的橫槓間隔，只以換行鍵來區隔就好
            ${features_txt}`;
        }

        function handleGenerateRequest(text) {
            localStorage.setItem('ji3g4text',text);
            sendRequest(generateRequestBody(text))
                .then(result => {
                    localStorage.setItem('result', JSON.stringify(result['response']));
                    settonone();
                    console.log(result);
                    console.log(showmeOutput, proposolValue, contentstyleValue, style, keyword);
                    changePage(showmeOutput, proposolValue, contentstyleValue, style, keyword);
                })
                .catch(error => {
                    console.error("Error:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
          }
    }
});


function changePage(showmeOutput, proposolValue, contentstyleValue, style, keyword) {
    if (confirm('確定填寫完畢？')) {
        let currentURL = window.location.href.split('?')[0];  // 取得基本URL，不帶任何參數
        window.location.href = 
        `${currentURL}?proposol=${proposolValue}&showOutput=${showmeOutput}&contentstyle=${contentstyleValue}&style=${style}&keyword=${keyword}`;
    }else {
      alert('您已取消操作。');
    }
}

var backto = document.getElementById('backto');
backto.onclick = function(){
    // 在換頁之前進行一些驗證
    if (confirm('確定離開此頁嗎？')) {
        window.location.assign ('home.html?') ;
         }else {
      alert('您已取消操作。');
    }
}

document.getElementById('ai6103vm03yk6').addEventListener('change', function() {
    let selectValue = this.value;
    if (selectValue === 'LINE' || selectValue === 'MBN') {
        document.getElementById('smalltitlecnum').disabled = true;
        document.getElementById('smalltitledescnum').disabled = true;
    } else {
        document.getElementById('smalltitlecnum').disabled = false;
        document.getElementById('smalltitledescnum').disabled = false;
    }
});
//造句模板
function getOptionsBasedOnSelection(selection) {
    // 根據選項值返回符合條件的下拉式選單選項
    // 這裡可以根據不同的選項值返回不同的選項
    // 返回的選項應該是一個包含 value 和 label 屬性的物件陣列
    // 例如：
    if (selection === '嘿！看這裡！') {
        return [
          { value: 'option1', label: '沒有…只有…'},
          { value: 'option2', label: '沒有…只是…'},
          { value: 'option3', label: '沒有…就…'},
          { value: 'option4', label: '沒有…就沒有…'},
          { value: 'option5', label: '不是…是…'},
          { value: 'option6', label: '是…不是…'},
          { value: 'option7', label: '雖…但/卻/可'},
          { value: 'option8', label: '為了…你…'},
          { value: 'option9', label: '只…卻/但…'},
          { value: 'option10', label: '還是…好'},
          { value: 'option11', label: '不一定…也可以…'},
          { value: 'option12', label: '哪有…'},
          { value: 'option13', label: '如果若…就/那麼…'},
          { value: 'option14', label: '也能/也可以…'},
          { value: 'option15', label: '尤其…'},
          { value: 'option16', label: '有點(兒)…'},
          { value: 'option17', label: '只有…'},
          { value: 'option18', label: '至少…'},
          { value: 'option19', label: '第一次…'},
          { value: 'option20', label: '或許…'},
          { value: 'option21', label: '人人都…'},
          { value: 'option22', label: '任何人…'},
          { value: 'option23', label: '男人…女人…'},
          { value: 'option24', label: '男人…'},
          { value: 'option25', label: '女人…'},
          { value: 'option26', label: '女人…男人…'},
          { value: 'option27', label: '偏見…'},
          { value: 'option28', label: '是一種…'},
          { value: 'option29', label: '為什麼…'},
          { value: 'option30', label: '無限/無盡/皆有可能…'},
          { value: 'option31', label: '不凡/非凡/不平凡…'},
          { value: 'option32', label: '上天…'},
          { value: 'option33', label: '…歲' },
          { value: 'option34', label: '最大的…'},
          { value: 'option35', label: '十年…'},
          { value: 'option36', label: '3分鐘…'},
          { value: 'option37', label: '5分鐘…'}
        ];
      } else if (selection === '全世界我最強') {
        return [
          { value: 'option38', label: '比…更…'},
          { value: 'option39', label: '不…才…'},
          { value: 'option40', label: '不…只…'},
          { value: 'option41', label: '對…來說…'},
          { value: 'option42', label: '為…而…'},
          { value: 'option44', label: '非…'},
          { value: 'option44', label: '從不…'},
          { value: 'option45', label: '沒有…'},
          { value: 'option46', label: '不配得上…'},
          { value: 'option47', label: '配不上…'},
          { value: 'option48', label: '（以)人為…'},
          { value: 'option49', label: '沒人/沒有人…'},
          { value: 'option50', label: '少數人…'},
          { value: 'option51', label: '（世界上有）兩種／兩樣…'},
          { value: 'option52', label: '世界…我…'},
          { value: 'option53', label: '（這個)時代…'},
          { value: 'option54', label: '…的世界'},
          { value: 'option55', label: '世界再大／路再長…'},
          { value: 'option56', label: '超能（力)…'},
          { value: 'option57', label: '是最好的／最好的是…'},
          { value: 'option58', label: '所有／凡／但凡／多少／任何…都…'},
          { value: 'option59', label: '（人生）天生…'},
          { value: 'option60', label: '英雄…'},
          { value: 'option61', label: '與眾不同／不同尋常…'},
          { value: 'option62', label: '唯一／唯有／不可取代…'},
          { value: 'option63', label: '選擇…'},
          { value: 'option64', label: '一切…'},
          { value: 'option65', label: '真正的…'},
          { value: 'option66', label: '最好的…'}
        ];
    } else if (selection === '聽我的準沒錯！') {
        return [
          { value: 'option67', label: '要…先…'},
          { value: 'option68', label: '只有／捨去…才能／方…'},
          { value: 'option69', label: '重要的是…不是…'},
          { value: 'option70', label: '與其…不如…'},
          { value: 'option71', label: '既然…就…'},
          { value: 'option72', label: '把／將…'},
          { value: 'option73', label: '別／不要／戒…'},
          { value: 'option74', label: '絕／絕非／永平／絕不／永遠不…'},
          { value: 'option75', label: '讓…'},
          { value: 'option76', label: '用…'},
          { value: 'option77', label: '相信…'},
          { value: 'option78', label: '（不）要／應／該／應該／適合…'},
          { value: 'option79', label: '就／就要…'},
          { value: 'option80', label: '要麼／或者…'},
          { value: 'option81', label: '值得…'},
          { value: 'option82', label: '決定了／取決於…'},
          { value: 'option83', label: '試試／看看／數數／考慮…'},
          { value: 'option84', label: '除了…'},
          { value: 'option85', label: '發現…'},
          { value: 'option86', label: '改變…'},
          { value: 'option87', label: '改變世界…'},
          { value: 'option88', label: '你…世界…'},
          { value: 'option89', label: '就得／需要…'},
          { value: 'option90', label: '你更／比／超乎…'},
          { value: 'option91', label: '做自己…'},
          { value: 'option92', label: '永／永遠…'}
        ];
    } else if (selection === '我懂你在想什麼') {
        return [
          { value: 'option93', label: '所謂…就是／都是／不是…'},
          { value: 'option94', label: '不管／不論／無論…'},
          { value: 'option95', label: '不再／再也不…'},
          { value: 'option96', label: '愈來愈…'},
          { value: 'option97', label: '不必…'},
          { value: 'option98', label: '從來…'},
          { value: 'option99', label: '就算／即使／縱使…也…'},
          { value: 'option100', label: '才（是／能)…'},
          { value: 'option101', label: '各／各自…'},
          { value: 'option102', label: '別人…（我／自己）…'},
          { value: 'option103', label: '只怕／最怕／不怕…'},
          { value: 'option104', label: '終究／最終／總會…'},
          { value: 'option105', label: '原來／本來…'},
          { value: 'option106', label: '那些…'},
          { value: 'option107', label: '難忘／忘不了／忘不掉…'},
          { value: 'option108', label: '陪你…'},
          { value: 'option109', label: '成長…'},
          { value: 'option110', label: '每天／每一天…'},
          { value: 'option111', label: '青春…'},
          { value: 'option112', label: '大人…'},
          { value: 'option113', label: '…的孩子'},
          { value: 'option114', label: '…的人'},
          { value: 'option115', label: '…的味道'},
          { value: 'option116', label: '…的意義'},
          { value: 'option117', label: '小孩…大人／成年人…'},
          { value: 'option118', label: '小時候…長大／現在…'},
          { value: 'option119', label: '想…'},
          { value: 'option120', label: '故鄉…'},
          { value: 'option121', label: '自由…'},
          { value: 'option122', label: '自己…'},
          { value: 'option123', label: '自有／自在／自己會…'}
        ];
    } else if (selection === '真心話大聲說！') {
        return [
            { value: 'option124', label: '讓…成為／變成／變得／改變…'},
            { value: 'option125', label: '不是所有的…都…'},
            { value: 'option126', label: '不讓／不能讓…'},
            { value: 'option127', label: '並不…'},
            { value: 'option128', label: '不得不…'},
            { value: 'option129', label: '過／好過／勝過…'},
            { value: 'option130', label: '總會／終將過去…'},
            { value: 'option131', label: '就像…'},
            { value: 'option132', label: '其實／事實上…'},
            { value: 'option133', label: '是為了／不是為了…'},
            { value: 'option134', label: '說不清／誰知道…'},
            { value: 'option135', label: '往往…'},
            { value: 'option136', label: '幸虧／幸好／多虧／慶幸…'},
            { value: 'option137', label: '獻給／留給…'},
            { value: 'option138', label: '愛…'},
            { value: 'option139', label: '所有人…我…'},
            { value: 'option140', label: '你…你…'},
            { value: 'option141', label: '喜歡你…'},
            { value: 'option142', label: '夢／夢想…'},
            { value: 'option143', label: '理想…現實…'},
            { value: 'option144', label: '記得／希望…'},
            { value: 'option145', label: '一生／一輩子…'},
            { value: 'option146', label: '有時候…'},
            { value: 'option147', label: '再來／再一次／下次／再出發…'},
            { value: 'option148', label: '總是…'},
            { value: 'option149', label: '總有…'},
            { value: 'option150', label: '每個人…'},
            { value: 'option151', label: '回家…'},
            { value: 'option152', label: '旅行…'},
            { value: 'option153', label: '故事…'}
        ];
    } else if (selection === '這也太洗腦了') {
        return [
            { value: 'option154', label: '因為…所以…'},
            { value: 'option155', label: '之所以…是因為…'},
            { value: 'option156', label: '愈…愈…'},
            { value: 'option157', label: '愈…愈會…'},
            { value: 'option158', label: '再…也…'},
            { value: 'option159', label: '只要…就能…'},
            { value: 'option160', label: '最…是…／是最…'},
            { value: 'option161', label: '有…（也／還／更／才)有…'},
            { value: 'option162', label: '有…就有…'},
            { value: 'option163', label: '現在…未來…'},
            { value: 'option164', label: '未來…現在'},
            { value: 'option165', label: '從前／以前／那時／曾／古…今／如今／現在…'},
            { value: 'option166', label: '當／在…時'},
            { value: 'option167', label: '今天…明天…'},
            { value: 'option168', label: '每…都…'},
            { value: 'option169', label: '如此／多麼／那麼…竟然／居都／都…'},
            { value: 'option170', label: '什麼樣的…什麼樣的…'},
            { value: 'option171', label: '是…是…'},
            { value: 'option172', label: '你…我…我…你…'},
            { value: 'option173', label: 'xx你／我xx'},
            { value: 'option174', label: 'xx就是xx'},
            { value: 'option175', label: 'xx，才xx'},
            { value: 'option176', label: 'xx，非xx'},
            { value: 'option177', label: 'xx…xx…'},
            { value: 'option178', label: 'xx…, …xx (回環)'},
            { value: 'option179', label: '（提問句）'},
            { value: 'option180', label: '（反問句）'},
            { value: 'option181', label: '（語義雙關)'}
        ];
      } else {
        return [];
    }
}


//送進廣宣
var checkList = document.getElementById('checkList');
checkList.onclick = function(){
    let text = "";
    if(proposolValue==='pas'){
        switch(showOutput){
            case 'EDM':
                text = `STEP1
${step1_big_title}
${step1_main_list}
${step1_point1}
${step1_point_desc1}
${step1_point2}
${step1_point_desc2}
${step1_point3}
${step1_point_desc3}
${step1_preferential}
${step1_product}
                
STEP2
${step2_big_title}
${step2_main_list}
${step2_point1}
${step2_point_desc1}
${step2_point2}
${step2_point_desc2}
${step2_point3}
${step2_point_desc3}
${step2_preferential}
${step2_product}
                
STEP3
${step3_big_title}
${step3_main_list}
${step3_point1}
${step3_point_desc1}
${step3_point2}
${step3_point_desc2}
${step3_point3}
${step3_point_desc3}
${step3_preferential}
${step3_product}`
                    break;
                case 'LINE':
                    text =`STEP1
${step1_big_title}
${step1_main_list}
${step1_content_1}
${step1_content_2}
${step1_extra_information}
                
STEP2
${step2_big_title}
${step2_main_list}
${step2_content_1}
${step2_content_2}
${step2_extra_information}
                
STEP3
${step3_big_title}
${step3_main_list}
${step3_content_1}
${step3_content_2}
${step3_extra_information}`
                    break;
                case 'MBN':
                    text =`STEP1
${step1_big_title}
${step1_main_list}
${step1_content}
${step1_extra_information}
                
STEP2
${step2_big_title}
${step2_main_list}
${step2_content}
${step2_extra_information}
                
STEP3
${step3_big_title}
${step3_main_list}
${step3_content}
${step3_extra_information}`
                    break;
        }
    }else if(proposolValue ==='aida'){
        switch(showOutput){
            case 'EDM':
                text =`STEP1
${step1_big_title}
${step1_main_list}
${step1_point1}
${step1_point_desc1}
${step1_point2}
${step1_point_desc2}
${step1_point3}
${step1_point_desc3}
${step1_preferential}
${step1_product}

STEP2
${step2_big_title}
${step2_main_list}
${step2_point1}
${step2_point_desc1}
${step2_point2}
${step2_point_desc2}
${step2_point3}
${step2_point_desc3}
${step2_preferential}
${step2_product}

STEP3
${step3_big_title}
${step3_main_list}
${step3_point1}
${step3_point_desc1}
${step3_point2}
${step3_point_desc2}
${step3_point3}
${step3_point_desc3}
${step3_preferential}
${step3_product}

STEP4
${step4_big_title}
${step4_main_list}
${step4_point1}
${step4_point_desc1}
${step4_point2}
${step4_point_desc2}
${step4_point3}
${step4_point_desc3}
${step4_preferential}
${step4_product}`
                break;

            case 'LINE':
                text =`STEP1
${step1_big_title}
${step1_main_list}
${step1_content_1}
${step1_content_2}
${step1_extra_information}

STEP2
${step2_big_title}
${step2_main_list}
${step2_content_1}
${step2_content_2}
${step2_extra_information}

STEP3
${step3_big_title}
${step3_main_list}
${step3_content_1}
${step3_content_2}
${step3_extra_information}

STEP4
${step4_big_title}
${step4_main_list}
${step4_content_1}
${step4_content_2}
${step4_extra_information}`
                break;
            case 'MBN':
                text =`STEP1
${step1_big_title}
${step1_main_list}
${step1_content}
${step1_extra_information}

STEP2
${step2_big_title}
${step2_main_list}
${step2_content}
${step2_extra_information}

STEP3
${step3_big_title}
${step3_main_list}
${step3_content}
${step3_extra_information}

STEP4
${step4_big_title}
${step4_main_list}
${step4_content}
${step4_extra_information}`
                break;
        }
    }else{
        switch(showOutput){
            case 'EDM':
                text =`STEP1
${step1_big_title}
${step1_main_list}
${step1_point1}
${step1_point_desc1}
${step1_point2}
${step1_point_desc2}
${step1_point3}
${step1_point_desc3}
${step1_preferential}
${step1_product}`
                break;

            case 'LINE':
                text =`STEP1
${step1_big_title}
${step1_main_list}
${step1_content_1}
${step1_content_2}
${step1_extra_information}`
                break;
            case 'MBN':
                text =`STEP1
${step1_big_title}
${step1_main_list}
${step1_content}
${step1_extra_information}`
                break;
        }
    }
    localStorage.setItem('editText',text);
    if (confirm('確定要換頁嗎？')) {
        window.location.href = 'editable.html'
    }
}


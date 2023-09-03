//🠗🠗🠗抓localstorage產品資訊🠗🠗🠗
var productInformation = localStorage.getItem('productInformation');

//🠗🠗🠗標籤/關鍵字🠗🠗🠗
$(document).ready(function() {
    $('#keyword').tagsinput();
})

//🠗🠗🠗關鍵字🠗🠗🠗
var tags = [];
document.querySelector('#keyword').addEventListener("change", function(event){
    var inputTag = event.target.value;
    tags.push(inputTag);
    console.log(tags);
})

//🠗🠗🠗滑鼠懸停🠗🠗🠗
const tooltip = document.querySelector('.tooltip');

tooltip.addEventListener('mousemove', (event) => {
    const tooltipText = tooltip.querySelector('.tooltip-text');
    const x = event.clientX - tooltip.offsetLeft;
    const y = event.clientY - tooltip.offsetTop;
    tooltipText.style.transform = `translate(${x}px, ${y}px)`;
})

//🠗🠗🠗送後端的function🠗🠗🠗
function generateRequestBody(text) {
    return {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'inputtext': text })
    }
}
//🠗🠗🠗送後端的function🠗🠗🠗
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


//🠗🠗🠗文案風格的"其他"選項顯示input🠗🠗🠗
document.getElementById("other").addEventListener("change", function() {
    var otherInput = document.getElementById("otherInput");
    if(this.checked) {
        otherInput.style.display = "inline-block";
    }else {
        otherInput.style.display = "none";
    }
})

//🠗🠗🠗文案風格的"其他"的值🠗🠗🠗
function getContentStyleValue() {
    let contentstyle_selectedbtn = document.querySelector('input[name="contentstyle"]:checked');
    if (contentstyle_selectedbtn && contentstyle_selectedbtn.id === 'other') {
        let inputVal = document.getElementById('otherInput').value;
        if (inputVal) {
            return inputVal;
        }
    }
    return contentstyle_selectedbtn ? contentstyle_selectedbtn.nextElementSibling.textContent : '';
}


//🠗🠗🠗行銷框架的"其他"選項顯示input🠗🠗🠗
document.getElementById("otherproposol").addEventListener("change", function() {
    var otherproposolnameInput = document.getElementById("otherproposolnameInput");
    var otherproposolcontentInput = document.getElementById("otherproposolcontentInput");

    if(this.checked) {
        otherproposolnameInput.style.display = "inline-block";
        otherproposolcontentInput.style.display = "inline-block";
    }else {
        otherproposolnameInput.style.display = "none";
        otherproposolcontentInput.style.display = "none-block";
    }
})
//🠗🠗🠗行銷框架的"其他"的值🠗🠗🠗
function getProposolValue() {
    let proposol_selectedbtn = document.querySelector('input[name="proposol"]:checked');
    
    if (!proposol_selectedbtn) {
        alert("请选择一个提案框架！");
        return;
    }

    //🠗🠗🠗判斷如果是選擇"其他"🠗🠗🠗
    if (proposol_selectedbtn.id === 'otherproposol') {
        let inputPorposolnameVal = document.getElementById('otherproposolnameInput').value;
        let inputPorposolcontentVal = document.getElementById('otherproposolcontentInput').value;

        if (!inputPorposolnameVal && !inputPorposolcontentVal) {
            alert("请提供完整的提案框架信息！");
        }else{
            return [inputPorposolnameVal, inputPorposolcontentVal];
        }
    }else{
        return [proposol_selectedbtn.nextElementSibling.textContent, ''];
    }
}


//🠗🠗🠗決定下一頁行銷方案/模板🠗🠗🠗
var submitSTYLE = document.getElementById('submitSTYLE');
submitSTYLE.onclick = function(){ 
    //🠗🠗🠗整體風格🠗🠗🠗
    let style = document.getElementById('style').value;
    //🠗🠗🠗關鍵字🠗🠗🠗
    let keyword = document.getElementById('keyword').value;
    //🠗🠗🠗文案風格🠗🠗🠗
    let contentstyle = getContentStyleValue();
    //🠗🠗🠗提案框架🠗🠗🠗
    let [selectedProposol, proposolContent] = getProposolValue();
    //🠗🠗🠗呈現方式🠗🠗🠗
    let selectedshowOutput = document.querySelector('input[name="showOutput"]:checked');


    //🠗🠗🠗定義框架的prompt🠗🠗🠗
    if (selectedProposol && selectedshowOutput) {
        if (selectedProposol == "aida"){
            var step1text=`Problem or pain-問題 ：根據商品特徵去設想目標客群可能會遇到的痛點，以及這些問題會造成的痛苦，營造感同身受的氛圍。強調問題的急迫性以及重要性，盡量使顧客產生好奇心及疑問。`;
            var step2text=`Agitate-激勵：透過描述問題的影響、加劇問題帶來的困擾和負面後果，加強顧客對於問題帶來的情感反應。讓顧客意識到問題的嚴重性並感受到對於我們的商品迫切的需求，加劇疑問的敘述使顧客繼續產生好奇心及疑問。`;
            var step3text=`Solution-解決方案：呈現以我們提供產品或服務作為解決問題的方案。強調該解方如何有效地解決觀眾面臨的問題。提供方法的好處與價值。`;
            var step4text = `Loyalty & Advocacy：長期經營品牌至關重要的一步，在消費者購買完商品之後，如果可以建立會員制度，或是透過顧客關係管理（CRM)做到自動化和個人化行銷，並致力於提升商品與服務體驗，就可以大大提升將初次消費者變成忠誠顧客的機會`;
        }else if(selectedProposol == "pas"){
            var step1text=`Problem or pain-問題 ：根據商品特徵去設想目標客群可能會遇到的痛點，以及這些問題會造成的痛苦，營造感同身受的氛圍。強調問題的急迫性以及重要性，盡量使顧客產生好奇心及疑問。`;
            var step2text=`Agitate-激勵：透過描述問題的影響、加劇問題帶來的困擾和負面後果，加強顧客對於問題帶來的情感反應。讓顧客意識到問題的嚴重性並感受到對於我們的商品迫切的需求，加劇疑問的敘述使顧客繼續產生好奇心及疑問。`;
            var step3text=`Solution-解決方案：呈現以我們提供產品或服務作為解決問題的方案。強調該解方如何有效地解決觀眾面臨的問題。提供方法的好處與價值。`;
        }else if(selectedProposol !== "aida" && selectedProposol !== "pas"){
            var step1text = `${proposolContent}`;
        }
    }

    //🠗🠗🠗定義呈現方式的prompt🠗🠗🠗
    if (selectedshowOutput.value == "EDM"){
        var opening_text =
    `
    step_:
    Main_slogan：依Main_list生成吸引人標題（內容15個字以內）
    Main_list：依主要述求及關鍵字及活動理念及產品故事性提供2~4個生活化的條列描述(不可敘述優惠方案及產品資訊)，each step內容皆不重覆且差異大（30個字以內），[請務必以條列式1./2./3./4.呈現]。
    Point：根據Main_slogan敘述及配合step文案方向產生三個客群認可的生活化議題如提供step1，只需產生step1，如提供的參數資訊有到step5就依序 產出五個step，每個step皆須提供三個point，each step內容皆不重覆（e.g., Point1/2/3：（15個字以內）
    Point_desc1/2/3: 描述Point（50個字以內)
    Product：依客群特徵重新描述"產品資訊"具說服力的產品優勢(小標題，內容)（50個字以內） 
    Preferential：依客群對產品知識認知，重新改寫吸引人的優惠方案(50字以內)
    ------
    輸出格式欄位順序：
    Main_slogan
    Main_list
    Point1
    Point2
    Point3
    Point_desc1
    Point_desc2
    Point_desc3
    Product
    Preferential
    `;
    }else if(selectedshowOutput.value == "LINE"){
        var opening_text =
    `
    step_:  
    Main_slogan：依主要述求及關鍵字,提供3個獲利的投資原則（字數上限15個字） 
    Main_list：明確敘去目標客群目標夢想 （字數上限50個字）
    Content_1（每個step的產出的3項需不同）：根據文案重點提出的引言明確列出將提供與產品資訊相關的3項e.g., 1. 2. 3. …來實現想或目標，每個step的產出的3項需不同。
    Content_2：產品資訊的優勢 
    Extra information：一句話說服客戶前往網址了解更詳細的資訊--> [網址] (10字內)
    `;
    }else if (selectedshowOutput.value == "MBN"){
        var opening_text =
    `
    step_: 
    Main_slogan：依主要述求及關鍵字,提供3點吸引投資人的論點（字數上限15個字）
    Main_list：根據Main_slogan敘述及配合step文案方向產生三個對目標客群有利的投資策略或疑問句，如提供step1，只需產生step1，如提供的參數資訊有到step5就依序產出五個step（e.g., 1/2/3（10個字以內）
    Content：以產品資訊的優勢來回覆Main_list上的疑問(15字以內)
    Extra information：一句話說服客戶前往網址了解更詳細的資訊--> [網址](10字內)
    總共生成70字以內
    `;
    }


    //🠗🠗🠗組每個STEP的prompt🠗🠗🠗
    var step1_total =   
  `
  Step 1：   
  文案方向：${step1text}
  文案風格：${contentstyle}
  主要述求：${style}
  關鍵字：${keyword}
  Tone: 直接的 
  Temperature: 0.8 
  `;

    var step2_total =   
  `
  Step 2：
  文案方向：${step2text}
  文案風格：${contentstyle}
  主要述求：${style}
  關鍵字：${keyword}
  Tone: 直接的 
  Temperature: 0.8 
  `;

    var step3_total = 
  `
  Step 3：   
  文案方向：${step3text}
  文案風格：${contentstyle}
  主要述求：${style}
  關鍵字：${keyword}
  Tone: 直接的 
  Temperature: 0.8
  `;

    var step4_total =
  `
  Step 4：   
  文案方向：${step4text}
  文案風格：${contentstyle}
  主要述求：${style}
  關鍵字：${keyword}
  Tone: 直接的 
  Temperature: 0.8 
  `;

    let proposol = selectedProposol;
    let showOutput = selectedshowOutput.value;
    //🠗🠗🠗將框架內容作處理，不然字會被切割🠗🠗🠗
    let improposolContent = [proposolContent];
    localStorage.setItem('otherFrameworkName', selectedProposol);
    localStorage.setItem('otherFrameworkContent', JSON.stringify(improposolContent));


    if (showOutput == "EDM" || showOutput == "LINE" || showOutput == "MBN") {
        setLoading(true);

        if (proposol == "aida") {
            const text = generateTextForRequest(`${step1_total}\n---\n${step2_total}`, opening_text, productInformation);
            const text1 = generateTextForRequest(`${step3_total}\n---\n${step4_total}`, opening_text, productInformation);

            console.log(text);
            console.log(text1);

            if (confirm('確定填寫完畢？')) {
                Promise.all([
                    sendRequest(generateRequestBody(text)),
                    sendRequest(generateRequestBody(text1))
                ])
                .then(results => {
                    changePage();
                    localStorage.setItem('result', JSON.stringify(results[0]['response']));
                    localStorage.setItem('result1', JSON.stringify(results[1]['response']));
                    console.log(results);
                })
                .catch(error => {
                    console.error("Error:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
            }else{
                alert('您已取消操作。');
            }

        }else if (proposol == "pas") {
            const text = generateTextForRequest(`${step1_total}\n---\n${step2_total}\n---\n${step3_total}`, opening_text, productInformation);
            console.log(text);
            handleGenerateRequest(text);
        }else {
            const text = generateTextForRequest(`${step1_total}`, opening_text, productInformation);
            console.log(text);
            handleGenerateRequest(text);
        }
    }else {
        alert('請選擇提案框架和呈現方式！');
    }

    //內嵌式function

    //組完整的prompt
    function generateTextForRequest(stepsInfo, opening_text, productInformation) {

        return `根據我提供的產品資訊和參數資訊生成一個理財行銷文案， 字數以精簡為主，每個step需有連貫性並且以以下格式輸出： 
        ——————— 
        ${opening_text}
        ———————
        ${productInformation}
        ——————— 
        參數資訊： 
        ${stepsInfo}
        ———————
        ${opening_text}
        請一定要依照我的格式回答，中間不要以任何形式的橫槓間隔，只以換行鍵來區隔就好`;
    }

    //for pas和其他的送後端流程
    function handleGenerateRequest(text) {
        if (confirm('確定填寫完畢？')) {
            sendRequest(generateRequestBody(text))
            .then(result => {
                changePage();
                localStorage.setItem('result', JSON.stringify(result['response']));
                console.log(result);
            })
            .catch(error => {
                console.error("Error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
        }else {
            alert('您已取消操作。');
        }
    }

    //換頁
    function changePage() {
        window.location.href = 'output.html?style=' + encodeURIComponent(style) 
        +'&keyword='+ encodeURIComponent(keyword)
        +'&contentstyle='+ encodeURIComponent(contentstyle)  
        +'&proposol='+ encodeURIComponent(proposol)
        +'&showOutput='+ encodeURIComponent(showOutput);
    }
}
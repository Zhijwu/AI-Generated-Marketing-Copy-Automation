var imstepEditable = document.getElementById('imstepEditable');
var imprompt = localStorage.getItem('editText');
imstepEditable.value = imprompt;

/*
document.getElementById("saveButton").addEventListener("click", function() {
    if (confirm('存檔嗎？')) {
        var text = document.getElementById("imstepEditable").value;
        var fileName = document.getElementById("fileName").value || "output"; // 如果用戶未輸入檔名，則預設為'output'
        

        // Store the file content and name in localStorage
        localStorage.setItem('tempFileName', fileName + ".txt");
        localStorage.setItem('tempFileContent', text);


        var blob = new Blob([text], { type: "text/plain;charset=utf-8"});
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = fileName + ".txt"; // 添加.txt副檔名
        a.click();
    }
});
*/
var goOnNextPage = document.getElementById('goOnNextPage');
goOnNextPage.onclick = function(){
    if (confirm('此頁編輯完成後，將送進法遵Paralegal，確定編輯完成嗎？')) {
        var text = document.getElementById("imstepEditable").value;
        var fileName = document.getElementById("fileName").value || "output"; // 如果用戶未輸入檔名，則預設為'output'
        

        // Store the file content and name in localStorage
        localStorage.setItem('tempFileName', fileName + ".txt");
        localStorage.setItem('tempFileContent', text);

        
        var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = fileName + ".txt"; // 添加.txt副檔名
        a.click();
        window.location.href = 'checklist_index.html'
    }
}
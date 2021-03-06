var _validFileExtensions = [".txt"];
function validateFile(oInput) {
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            document.getElementById("errorText").innerHTML = "";
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }

            if (!blnValid) {
                oInput.value = "";
                document.getElementById("errorText").innerHTML = "* Please insert a valid .txt file!";
                document.getElementById("resetButton").click();
                return false;
            }
        }
    }
    return true;
}

function clearError() {
    document.getElementById("errorText").innerHTML = "";
}

window.reset = function (e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}
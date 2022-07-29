export const addToClipboard = (input) => {
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText(input).then(function() {
                alert("Скопировано в буфер обмена")
            }, function() {
                alert("не удалось скопировать в буфер обмена")
            });
        }
    });

}
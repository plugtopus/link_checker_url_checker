function save_options() {
  chrome.storage.sync.set({
    unclickable: unclickable.checked,
    strikethrough: strikethrough.checked,
    greenBox: greenBox.checked,
    greenBoxTime: greenBoxTime.value
  })
}

function restore_options() {
  chrome.storage.sync.get({
    unclickable: !1,
    strikethrough: !1,
    greenBox: !1,
    greenBoxTime: "2"
  }, function (e) {
    unclickable.checked = e.unclickable, strikethrough.checked = e.strikethrough, greenBox.checked = e.greenBox, greenBoxTime.value = e.greenBoxTime
  })
}
document.addEventListener("DOMContentLoaded", restore_options), unclickable.addEventListener("change", function () {
  save_options()
}), strikethrough.addEventListener("change", function () {
  save_options()
}), greenBox.addEventListener("change", function () {
  save_options()
}), greenBoxTime.addEventListener("change", function () {
  save_options()
});
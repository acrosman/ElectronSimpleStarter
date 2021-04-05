// When the content of the page is ready, fire off the sample IPC message.
document.addEventListener("DOMContentLoaded", (event) => {
  window.api.send("sample_message", {
    message_content: "Stuff and Things",
  });
});

// Sample Response Handler.
window.api.receive("sample_response", (data) => {
  alert(data.message);
});

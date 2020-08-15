document.addEventListener("DOMContentLoaded", (event) => {
    window.api.send('sample_message', {
        message_content: 'Stuff and Things',
    });
});

  // Org Limits Response Handler.
window.api.receive('sample_response', (data) => {
    alert(data.message);
});

document.getElementById('webhookForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const randomInput = document.getElementById('randomInput').value;
    const responseMessage = document.getElementById('responseMessage');

    if (randomInput) {
        try {
            const response = await fetch('https://discord.com/api/webhooks/1333612145115664394/qAG8XiHS0hI9TfNqR2jKViMZ4vZDd_H0Dr7caazZ0Y0LNL_sA9P2rfPvtRgqhr2ZtvYN', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: randomInput
                })
            });

            if (response.ok) {
                responseMessage.textContent = 'Your input has been sent successfully!';
                responseMessage.style.color = 'green';
            } else {
                responseMessage.textContent = 'Error sending data. Please try again.';
                responseMessage.style.color = 'red';
            }
        } catch (error) {
            responseMessage.textContent = 'Network error. Please try again.';
            responseMessage.style.color = 'red';
        }
    } else {
        responseMessage.textContent = 'Please enter a valid input.';
        responseMessage.style.color = 'red';
    }
});

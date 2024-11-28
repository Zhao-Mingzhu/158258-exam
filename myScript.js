document.addEventListener('DOMContentLoaded', function() {
    fetch('file.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('activityTable').getElementsByTagName('tbody')[0];
            data.Users.forEach(user => {
                user.Activities.forEach(activity => {
                    let row = tableBody.insertRow();
                    let cellLoginTime = row.insertCell(0);
                    let cellPagesVisited = row.insertCell(1);
                    let cellDuration = row.insertCell(2);
                    cellLoginTime.textContent = activity.LoginTime;
                    cellPagesVisited.textContent = activity.PagesVisited.join(', ');
                    cellDuration.textContent = activity.Duration;
                });
            });
        })
        .catch(error => console.error('Error fetching data: ', error));
});

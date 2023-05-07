
// this code doesn't work but I'm keeping it here for reference


// const renderLinkIcon = async () => {
//     // if there is a link in the database for this account name, render the link icon
  
//     try {
//         const response = await fetch(`/api/accounts/url`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
  
//         if (response.ok) { // if the response is ok, render the link icon
//             const icon = document.createElement('i');
//             icon.className = 'fa-solid fa-link fa-2xs';
//             document.querySelector('.account-name-link').appendChild(icon);
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };
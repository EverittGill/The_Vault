const deleteButtons = document.querySelectorAll('.delete-tool');

deleteButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const account_id = button.getAttribute('data-account_id');
    console.log('im working')
    try {
      const response = await fetch(`/api/accounts/${account_id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete account');
      }
      window.location.reload('/homepage');
    } catch (err) {
      console.error(err);
    }
  });
});

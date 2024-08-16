
const updatePasswordForm = document.getElementById('updatePasswordForm');
const newPasswordInput = document.getElementById('newPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const newPasswordErrMsg = document.getElementById('newPasswordErrMsg');
const confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');

function validateNewPassword() {
    if (newPasswordInput.value.trim() === '') {
        newPasswordErrMsg.textContent = 'New password cannot be empty';
    } else {
        newPasswordErrMsg.textContent = '';
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value.trim() === '') {
        confirmPasswordErrMsg.textContent = 'Please confirm your password';
    } else if (confirmPasswordInput.value !== newPasswordInput.value) {
        confirmPasswordErrMsg.textContent = 'Passwords do not match';
    } else {
        confirmPasswordErrMsg.textContent = '';
    }
}

newPasswordInput.addEventListener('blur', validateNewPassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

updatePasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    validateNewPassword();
    validateConfirmPassword();

    if (newPasswordInput.value.trim() !== '' && 
        confirmPasswordInput.value.trim() !== '' && 
        newPasswordInput.value === confirmPasswordInput.value) {
        alert('Password updated successfully!');
  
    }
});

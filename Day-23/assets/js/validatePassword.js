const validatePassword = (password) => {
    // Validate password
    if (password.length < 6) {
        return false;
    }
    return true;
};

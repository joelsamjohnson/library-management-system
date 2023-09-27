function logout() {
    // Send a POST request to the logout URL
    fetch("{% url 'logout' %}", {
        method: "POST",
        headers: {
            "X-CSRFToken": "{{ csrf_token }}", // Include CSRF token
        },
    })
    .then(() => {
        // Redirect to the desired logout destination
        window.location.href = "{% url '' %}"; // Change this URL to your desired logout destination
    })
    .catch(error => {
        console.error("Logout failed: ", error);
    });
}

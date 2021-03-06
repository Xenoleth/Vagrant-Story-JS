const run = (router) => {
    $('.submit-form').on('click', () => {
        const credentials = {
            username: $('#username').val().toLowerCase(),
            password: $('#password').val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/auth/sign-in',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(credentials),                
            complete: (res) => {                
                const userId = res.responseJSON.id;
                const userName = res.responseJSON.username;
                sessionStorage.setItem('userId', userId);
                sessionStorage.setItem('userName', userName);
                router.navigate('/home');
            }
        });
    });
};

export { run };
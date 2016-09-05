import * as types from '../constants/ActionTypes';

export function loginSuccess(response) {
    return dispatch => {
    dispatch({ response, type: types.FB_LOGIN });
  };
}


export function login() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1637883039855636',
      cookie     : true, 
      xfbml      : true, 
      version    : 'v2.7'
    });


    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
      }.bind(this));
    }.bind(this);

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

  function fetchUser() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    });
  };

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    if (response.status === 'connected') {
      console.log(response.authResponse.accessToken);
      this.fetchUser();
    } else if (response.status === 'not_authorized') {
      console.log("Not authorised");
    } else {
      console.log("Please log in to facebook");
    }
  };

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
    }.bind(this));
    dispatch(loginSuccess(response))
  };

  function handleLogin() {
    FB.login(this.checkLoginState());
  };

  function handleLogout(){
    FB.logout(function(response) {});
  };
}

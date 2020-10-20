import cookie from 'js-cookie';


// set in cookie -- save cookie in browser cookie
export const setCookie = (key, value) => {
    // this func get name and value and save in cookie
    if(process.browser){  //on client side
        cookie.set(key, value, {
            expires: 1
        })

    }
}


// remove from cookie -- when user signout we have to remove cookie from browser cookie
export const deleteCookie = (key) => {
    if(process.browser){ 
        cookie.set(key)
    }
}


// get from cookie -- grab cookie from browser cookie and send it to server side
// will be useful when we need to make request to servre with auth token
export const getCookie = key => {
    if(process.browser){
        return cookie.get(key)
    }
}


// set in localstorage
export const setLocalStorage = (key, value) => {
    if(process.browser){  //on client side
        localStorage.setItem(key, JSON.stringify(value))
    }
}

// remove from localstorage
export const removeLocalStorage = (key, value) => {
  
    if(process.browser){  //on client side
        localStorage.removeItem(key)
    }
}

// authenticate user by passing data to cookie and localstorage during signin -- keep track of user in client side
export const authenticate = (response, next) =>{
    setCookie('token', response.data.token)
    setLocalStorage('user', response.data.user)
    next()
}


// access user info from localStorage
export const isAuth = () =>{
    if (process.browser) {
        const cookieChecked = getCookie('token')
        if(cookieChecked){
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            }else{
                return false;
            }
        }
    }
}
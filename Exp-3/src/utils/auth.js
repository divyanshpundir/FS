export function generateToken(username, role){

 const payload = {

    user: username,

    role: role,

    loginTime: new Date().toLocaleString()

};

    return btoa(JSON.stringify(payload));

}

export function decodeToken(token){

    return JSON.parse(atob(token));

}
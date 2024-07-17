export const userLogin = async (logindata) => {
    try {
        const response = await fetch('http://localhost:3001/v1/users/login', {
            method: 'POST',
            headers: {
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoieWFzaG5pdGlud2FuaUBnbWFpbC5jb20ifSwiaWF0IjoxNzIwNzAxOTUwLCJleHAiOjE3MjEzMDY3NTB9.kFUCxixexb7rhYycb-u8EIhfm749K5ccs1TJftSmzCY',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(logindata)
        });
        if(!response.ok)
        {
            let obj=await response.json();
            obj={...obj,success:false}
            return obj

        }
        else{
            let obj=await response.json();
            //console.log(obj);
            sessionStorage.setItem("CRM_accessJWT",obj.accessJWT);
            localStorage.setItem("CRM_refreshJWT",obj.refreshJWT);
            obj={...obj,success:true}
            return obj
        }

        
    } catch (error) {
        
        throw new Error(error.message);
    }
};

export const fetchUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const accessJWT = sessionStorage.getItem('CRM_accessJWT');
            if (!accessJWT) {
                return reject("Token not found");
            }
            const response = await fetch('http://localhost:3001/v1/users', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessJWT}`,
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                return reject("error");
            }
            const resp = await response.json();
           // console.log(resp);
            resolve(resp);
        } catch (error) {
            reject(error.message);
        }
    });
};

export const logoutUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const accessJWT = sessionStorage.getItem('CRM_accessJWT');
            if (!accessJWT) {
                return reject("Token not found");
            }
            const response = await fetch('http://localhost:3001/v1/users/logout', {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessJWT}`,
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                return reject("error");
            }
            const resp = await response.json();
            //console.log(resp);
            resolve(resp);
        } catch (error) {
            reject(error.message);
        }
    });
};

export const fetchNewAccessToken = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const refreshJWT = localStorage.getItem('CRM_refreshJWT');
            if (!refreshJWT) {
                return reject("Token not found");
            }
            const response = await fetch('http://localhost:3001/v1/token', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${refreshJWT}`,
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                return reject("error");
            }
            const resp = await response.json();
            console.log(resp.message);
            if(resp.message==="success")
            {
                sessionStorage.setItem("CRM_accessJWT",resp.accessToken);
            }
            resolve(true);
        } catch (error) {
            console.log(error.message);
            console.log("hi")
            reject(error.message);
        }
    });
};


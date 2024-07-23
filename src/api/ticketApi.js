// src/api/ticketApi.js
export const getAllTickets = async () => {
    try {
        const accessJWT = sessionStorage.getItem('CRM_accessJWT');
        
        const response = await fetch('http://localhost:3001/v1/tickets/alltickets', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessJWT}`,
                'Content-Type': 'application/json'
            }
        });

        // if (!response.ok) {
        //     //alert(response.status);
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getSingleTicket = async (_id) => {
    try {
        const accessJWT = sessionStorage.getItem('CRM_accessJWT');
        
        const response = await fetch(`http://localhost:3001/v1/tickets/${_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessJWT}`,
                'Content-Type': 'application/json'
            }
        });
        
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateTicketMessage = async (_id,sentby,message) => {
    return new Promise(async(resolve,reject)=>{
        try {
            const accessJWT = sessionStorage.getItem('CRM_accessJWT');
            
            const response = await fetch(`http://localhost:3001/v1/tickets/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessJWT}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({"sentby":sentby,"messagebody":message})
            });
            if(!response.ok)
            {
                const errorResponse = await response.json(); // Capture the error response
                console.error('Error response:', errorResponse); // Log the error response
                reject(errorResponse)
                //throw new Error(errorResponse.message || 'Something went wrong');
            }
            const resp= await response.json();
            //alert(resp);
            console.log(resp);
            resolve(resp);
        } catch (error) {
            reject(error.message);
        }

    })
};

export const closeTicket = async (_id) => {
    return new Promise(async(resolve,reject)=>{
        try {
            const accessJWT = sessionStorage.getItem('CRM_accessJWT');
            
            const response = await fetch(`http://localhost:3001/v1/tickets/close/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessJWT}`,
                    'Content-Type': 'application/json'
                },
            });
            if(!response.ok)
            {
                const errorResponse = await response.json(); // Capture the error response
                console.error('Error response:', errorResponse); // Log the error response
                reject(errorResponse)
                //throw new Error(errorResponse.message || 'Something went wrong');
            }
            const resp= await response.json();
            //alert(resp);
            console.log(resp);
            resolve(resp);
        } catch (error) {
            reject(error.message);
        }

    })
};

export const openNewTicket = async (formData) => {
    return new Promise(async(resolve,reject)=>{
        try {
            const accessJWT = sessionStorage.getItem('CRM_accessJWT');
            
            const response = await fetch(`http://localhost:3001/v1/tickets/newticket`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessJWT}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(formData)
            });
            if(!response.ok)
            {
                const errorResponse = await response.json(); 
                console.error('Error response:', errorResponse); 
                reject(errorResponse)
            }
            const resp= await response.json();
            console.log(resp);
            resolve(resp);
        } catch (error) {
            reject(error.message);
        }

    })
};

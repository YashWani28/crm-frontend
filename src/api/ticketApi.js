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

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

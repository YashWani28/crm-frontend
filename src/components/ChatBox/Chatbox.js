import React,{useEffect, useState} from 'react'
import { Col, Container, Row, Button, Form, FormControl } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { updateTicketMessageAction } from '../../pages/ClientTicketListingPage/ticketsAction';
import { useDispatch,useSelector } from 'react-redux';

export const Chatbox = ({messages,setmessages}) => {
    const [replytext,setreplytext] = useState("");
    const {Tid} = useParams();
    const [isFormDisabled,setisFormDisabled]=useState(false)
    const {selectedTicket}=useSelector(state=>state.tickets)
    const dispatch = useDispatch();

    useEffect(()=>{

        if(selectedTicket.status==="Issue Resolved"){
            setisFormDisabled(true);
        }
        else{
            setisFormDisabled(false);
        }
    },[selectedTicket])

    const handleOnChange = (e)=>{
        const {name,value} = e.target;
        setreplytext(value);
    }

    const handleOnClick = ()=>{
        // if reply is empty then log nothing
        if (!replytext.trim()) {
            return;
        }
        else{
            setmessages([...messages,{
                "sentby":"client",
                "messagedate":new Date().toLocaleDateString(),
                "messagetime":new Date().toLocaleTimeString(),
                "messagebody":replytext
            }])
            dispatch(updateTicketMessageAction(Tid,"client",replytext));
            setreplytext("");
        }
        
        
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>
                    Reply here...
                </Form.Label>
                {
                    !isFormDisabled && 
                    <FormControl
                        as="textarea"
                        onChange={handleOnChange}
                        value={replytext}
                        rows="5"
                        name="reply"
                        disabled={isFormDisabled}
                    />
}
                   { isFormDisabled && 
                    <FormControl
                        as="textarea"
                        onChange={handleOnChange}
                        value="Ticket is Closed"
                        rows="5"
                        name="reply"
                        disabled={isFormDisabled}
                    />

                }


            </Form.Group>
            <br />
            <Row className='text-end'>
                <Col>
                    <Button onClick={handleOnClick} disabled={isFormDisabled}>Reply</Button>
                </Col>

            </Row>
        </Form>
    )
}

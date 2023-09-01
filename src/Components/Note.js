import { firestore } from "@/Lib/Firebase";
import { UserContext } from "@/Lib/UserContext";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { toast } from "react-hot-toast";



export default function Note({ note }){

    const { user } = useContext(UserContext)
    const deleteNote = async (email,id) => {
        try{

            await firestore.collection('AllNotes').doc(email).collection('notes').doc(id).delete();
            toast.success('Note deleted successfully');

        }catch(err){
            console.log('error',err);
            toast.error('Something went wrong');
        }
    }

    return(
        <Card
            bg='primary'
            key='primary'
            text='light'
            style={{ width: '18rem' }}
            className="m-2 d-inline-block"
        >
            <Card.Header className='lead d-flex justify-content-around'>
                {note.title}
                {user && <button className="btn btn-danger" onClick={() => deleteNote(user.email,note.id)}>Delete</button>}
            </Card.Header>
            <Card.Body>
                <Card.Text className='lead'>{note.body}</Card.Text>
            </Card.Body>
        </Card>
    );
}
import { firestore } from '@/Lib/Firebase';
import { UserContext } from '@/Lib/UserContext';
import { useContext, useRef } from 'react';
import { toast } from 'react-hot-toast';

export default function AddNotesForm(){

    const { user } = useContext(UserContext)
    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    const buttonClickhandler = async (email) => {

        try{
            const title = titleRef.current.value;
            const body = bodyRef.current.value;
            if (title !== '' && body !== '') {
                await firestore.collection('AllNotes').doc(email).collection('notes').add({
                    title,
                    body
                })

                toast.success('Note added successfully');
                titleRef.current.value = '';
                bodyRef.current.value = '';
            }
            else{
                toast.error('Please fill all the fields');
            }
        }catch(err){
            console.log('error',err);
            toast.error('Something went wrong');
        }
    }

    return(
        <div className="form-control d-flex flex-column">
            <label htmlFor="title">Title</label>
            <input ref={titleRef} type="text" name="title" />

            <label htmlFor="body">body</label>
            <textarea ref={bodyRef} name = 'body' type = 'text' rows = '5' cols = '50' />
            {
                user?
                    <button className="btn btn-primary" onClick={()=> buttonClickhandler(user.email)}>Add Note</button>
                :
                    <button className="btn btn-primary disabled" >Login to add notes</button>
            }
        </div>
    )
}

import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function AddResume() {

    const [openDialog , setOpenDialog] = useState(false);
    const [resumeTitle,setResumeTitle] = useState("");

    const onCreate=()=>{
        const uuid =uuidv4(); 
        console.log(resumeTitle, uuid);
        
    };

  return (
    <div className=''>
        <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dotted ' 
        onClick={()=>setOpenDialog(true)}> 
            <PlusSquare/>
        </div>
        <Dialog open = {openDialog}>
        
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add a Title for your New Resume</p>
                <Input className="mt-4" placeholder="eg. Full Stack Resume"
                onChange={(e)=>setResumeTitle(e.target.value)}/>
            </DialogDescription>
            <div className=' flex justify-end gap-5'>
                <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
                <Button
                    disabled={!resumeTitle}
                onClick={()=>onCreate()}>Create</Button>
            </div>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddResume
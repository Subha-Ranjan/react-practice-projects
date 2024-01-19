import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal"

export default function NewProject({onAdd}) {
  const modalRef = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription= description.current.value;
    const enteredDueDate = dueDate.current.value;
    //Validation
    if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDueDate===''){
      //Error Modal
      modalRef.current.open();
      return;
    }

  onAdd(
    {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    }
  )
    // console.log(enteredTitle, enteredDescription,enteredDueDate)


  }

  return (
   <>
   <Modal ref={modalRef} buttonCaption='Close'>
     <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Inout</h2>
     <p className='text-stone-400 mb-4'>Oops ... looks like you forgot to enter a value</p>
     <p className='text-stone-400 mb-4'>Please make sure you provide a valid value fro every input value</p>
   </Modal>
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}>Save</button>
        </li>
      </menu>
     <div>
        {/* <Input ref={title} label="Title: " /> ----------> just this wont work being a CUSTOM Component| ForwardRef needed Inside this CHILD CUSTOM comp*/}
        <Input ref={title} label="Title: " />
        <Input ref={description} label="Description: " textarea={true}/>
        <Input type='date' ref={dueDate} label="Due Date: "/>
     </div>
    </div>
   </>
  );
}

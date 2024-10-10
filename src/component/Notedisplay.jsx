import React, { useEffect, useState } from 'react'
import { deleteNotes, deletePasswords,editNotes,editPasswords } from './Api/Api';
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import axios from 'axios';
import moment from "moment"
import Form from './Form';
import Demoform from './Demoform';
import Demonotesform from './Demonotesform';

function Notedisplay(props) {
  const options = ["Google","Facebook","Instagram"];
  // const type = ["Credit", "Expense"];
  const [password, setpassword] = useState([]);
  const [editingNotes ,setEditingPassword] = useState(null);
  const [currId, setCurrId] = useState(null);
  const [show, setShow] = useState(false)
  const [user, setUser] = useState(null);
  const[click,setclick]=useState(false)
  const[updatedetails,setdetails]=useState({
    
  })
  const handleEditClick =async (itemKey) => {
    // const buttonId = e.target.id;
    console.log(itemKey);
    console.log(user._id);
    console.log("Clicked button IDv delete:", itemKey);
    setCurrId(itemKey);
    const {data} = await axios.put(`${editNotes}/${itemKey}`,{
      userId: props.user._id,
    });
    console.log(data);
    if(data.success === true){
      console.log(data);

    }
    else{
      console.log("error");
    }
  };
  const handleEditSubmit = async (e) => {
    // e.preventDefault();
      setShow(true)
    const {data} = await axios.put(`${editNotes}/${currId}`, {
      ...values,
    });

    if(data.success === true){
      const updatedpassword = props.data.map((item) => {
        if (item._id === currId) {
          return { ...item, ...values };
        }
        return item;
      });
      setpassword(updatedpassword);
      handleClose();
      
    }
    else{
      console.log("error");
    }

  }
  const handleDeleteClick = async (itemKey) => {
    console.log(itemKey);
    console.log(user._id);
    console.log("Clicked button IDv delete:", itemKey);
    setCurrId(itemKey);
    const {data} = await axios.post(`${deleteNotes}/${itemKey}`,{
      userId: props.user._id,
    });

    if(data.success === true){
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.reload()

    }
    else{
      console.log("error");
    }

  }

  const [values, setValues] = useState({
    description: "",
    title: "",
   
    category: "",
  
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  useEffect(() => {
    setUser(props.user);
    setpassword(props.data);
  }, [props.data,props.user,handleDeleteClick,handleEditClick]);

  const[i,setI]=useState({itemkey:""});

  return (
    <>
    {click?<Demonotesform click={click} setClick={setclick} Clicked={()=>setclick(!click)} userId={ props.user._id} itemKey={i.itemkey}/>:

<section class="container px-4 mx-auto mt-10 text-gray-800">
<div class="flex flex-col">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 :border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 :divide-gray-700">
                    <thead class="bg-gray-50  px-10  :bg-gray-800">
                        <tr className=''>
                            <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900 :text-gray-400">
                                <div class="flex items-center gap-x-3">
                               
                                    <button class="flex items-center gap-x-2">
                                        <span>Title</span>

                                        <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                            <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                            <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                        </svg>
                                    </button>
                                </div>
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-md font-normal text-left rtl:text-right text-gray-900 :text-gray-400 pl-10">
                                Date
                            </th>

                           

                            <th scope="col" class="px-4 py-3.5 text-md font-normal text-left rtl:text-right text-gray-900 :text-gray-400">
                              Category
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-md font-normal text-left rtl:text-right text-gray-900 :text-gray-400 pl-8">
                              Description
                            </th>

                            <th scope="col" class="relative py-3.5 px-4">
                                <span class="sr-oly">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 :divide-gray-700 :bg-gray-900">
                    {password.map((item, index) => (
                        <tr>
                            <td class="px-4 py-4 text-sm font-medium text-gray-700 :text-gray-200 whitespace-nowrap">
                                <div class="inline-flex items-center gap-x-3">
                                   

                                    <span>{item.title}</span>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm text-gray-900 :text-gray-300 whitespace-nowrap">{moment(item.date).format("YYYY-MM-DD")}</td>
                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                               { item.category=="Important"?<div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-900 bg-emerald-100/60 :bg-gray-800">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <h2 class="text-sm font-normal">{item.category}</h2>
                                </div>:
                                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-900 bg-red-100/60  :bg-gray-800">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <h2 class="text-sm font-normal">{item.category}</h2>
                                </div>
                                    }
                            </td>
                            <td class="px-4 py-4 text-sm text-gray-900 :text-gray-300 whitespace-nowrap">
                                <div class="flex items-center gap-x-2">
                                  
                                    <div>
                                        <h2 class="text-sm font-medium text-gray-800 :text-white ">{item.description}</h2>
                                    </div>
                                </div>
                            </td>
                            {/* <td class="px-4 py-4 text-sm text-gray-900 :text-gray-300 whitespace-nowrap">{item.title}</td> */}
                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                <div class="flex items-center gap-x-6">
                                    <button class="text-red-900 transition-colors duration-200 :hover:text-indigo-900 :text-gray-300 hover:text-indigo-900 focus:outline-none" onClick={() => handleDeleteClick(item._id)}>
                                        Delete
                                    </button>

                                    <button class="text-blue-900 transition-colors duration-200 hover:text-indigo-900 focus:outline-none"
                                     onClick={() =>{setclick(!click),setI({itemkey:item._id})}}>
                                        Edit
                                    </button>
                                </div>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>
                {editingNotes && show? (
                      <>
                         <div className="px-4">
         <div className="bg-white rounded ">
           <div className="p-4 mt-10">
             <h2 className="text-gray-700 text-xl mb-4">Edit Note
             <h2 className="w-full h-0.5 bg-slate-200"></h2>
             </h2>
            
             <form className="w-full">
               <div className="mb-4">
                 <label
                   className="block text-gray-700 text-sm font-bold mb-2"
                   htmlFor="name"
                 >
                  Description
                 </label>
                 <input
                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                   id="name"
                   type="text"
                   placeholder="enter username"
                   onChange={handleChange}
                   name="description"
                 />
              </div>
              
               <div className="mb-4">
                 <label
                   className="block text-gray-700 text-sm font-bold mb-2"
                   htmlFor="amount"
                 >
                   Category
                 </label>
                 <div className="md:w-32">
                   <select className="rounded-md font-karla h-10 max-sm:w-32" name="category"    onChange={handleChange}>
                     <option>Please choose one option</option>
                     {options.map((option, index) => {
                       return <option key={index} value={option}>{option}</option>;
                     })}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="amount"
               >
                 Title
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading"
                  placeholder="enter description"
                  onChange={handleChange}
                   name="title"
                 />
               </div>
             
               <div className="mb-10">
               <div className="absolute right-5 pb-5 ">
                 <button className="mr-5 text-white bg-red-900 px-4 rounded py-1 hover:bg-transparent hover:text-red-900 hover:font-bold" onClick={handleClose}>Close</button>
                 <button className="mr-10  text-white bg-blue-900 px-4 rounded py-1 hover:bg-transparent hover:text-blue-900 hover:font-bold" onClick={handleEditSubmit}>Submit</button>
               </div>
               </div>
             </form>
           </div>
         </div>
       </div>
                       </>
                     ) : (
                       <></>
                    )}
            </div>
        </div>
    </div>
</div>


</section>
      }
    </>
  )
}

export default Notedisplay
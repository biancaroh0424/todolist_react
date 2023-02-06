import {db} from './firebase';
import {collection, connectFirestoreEmulator, doc, getDocs, addDoc, updateDoc, deleteDoc, query, orderBy} from 'firebase/firestore';
import './App.css';
import {useEffect, useState} from 'react'
import { toHandlers } from 'vue';


//파이어베이스에서 데이터 가져오기


function App() {

  const [changed, setChanged] = useState(false)

  const [todos, setList] = useState([]);
  const todosCollectionRef = collection(db, "todolist-react-bianca");
  const [newList, setNewList] = useState("")
  console.log(newList)


  useEffect( ()=>{
    const getLists = async()=>{
      const data = await getDocs(
        query(todosCollectionRef, orderBy("timeStamp", "desc"))
        );
      //console.log(data)
      setList(data.docs.map(
          (doc)=>(
          {...doc.data(), id:doc.id}
          ))
      )}

    getLists();
    setChanged(false)
  }, [changed])

var date = new Date();
const now_date = date.getFullYear()+"-"+(date.getMonth()+1)+
"-"+date.getDate();


  const createList = async ()=>{
    //await addDoc(연결객체, 전달할 값)
    await addDoc(todosCollectionRef,{things:newList, d_date:now_date, timeStamp:date})
    // alert(now_date)
    setChanged(true);
  }



const updateList = async (id,things)=>{
console.log(id + '/' + things)
const msg = window.prompt("TODO",things)

if(msg){
  // id 를 이용하여 업데이트 할 데이터 검색
  const listDoc = doc(db, "todolist-react-bianca", id);
  const editField = {
    things:msg,  d_date:now_date, 
    timeStamp:new Date()}
  //updateDoc(어떤 데이터, 어떤 값) 데이터 업데이트
  await updateDoc(listDoc, editField)
  setChanged(true);
}

}

const deleteList = async (id)=>{
  const confirmMessage = window.confirm("Are you sure you want to delete this list?");
  
  if(confirmMessage){
    const listDoc = doc(db, "todolist-react-bianca", id);
    await deleteDoc(listDoc)
    setChanged(true);
  }
}



const showList = todos.map(
  (values) => (
    <div key={values.id} className="row">
        <h2>{values.things}</h2>
            <span className="date">
                {values.d_date}
            </span>
            <button onClick={()=>{updateList(values.id, values.content)}}>수정</button>
            <button onClick={()=>{deleteList(values.id)}}>삭제</button>
    </div>
))


  return (
    <div className="App">
      <input type="text" placeholder="todos..." onChange={
        (event)=>{setNewList(event.target.value)}
      }/>
      <button onClick={createList}>Add List</button>
      <hr />
      {showList}
    </div>
  );
}

export default App;

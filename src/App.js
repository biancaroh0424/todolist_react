import './App.css';
import {db} from './firebase';
import {collection, getDocs} from 'firebase/firestore';
import {useEffect, useState} from 'react'


//파이어베이스에서 데이터 가져오기


function App() {
  const [todos, setLists] = useState([]);
  const todosCollectionRef = collection(db, "todos");

  useEffect( ()=>{

    const getLists = async()=>{
      const data = await getDocs(todosCollectionRef);
      //console.log(data)
      setList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }

    getLists()
  }, [])



  return (
    <div className="App">
    </div>
  );
}

export default App;

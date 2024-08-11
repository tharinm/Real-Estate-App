import "./list.scss";
import Card from "../card/Card";
import { listData } from "../../lib/dumpdata";


function List({posts}){
  return (
    <div className='list'>
      {posts.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}


export default List;

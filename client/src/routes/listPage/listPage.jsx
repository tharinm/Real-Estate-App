import "./listPage.scss";
import { listData } from "../../lib/dumpdata";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/map";

function ListPage() {
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {listData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map />
      </div>
    </div>
  );
}

export default ListPage;

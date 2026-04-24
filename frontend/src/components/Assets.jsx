import { useEffect, useState } from "react";
import { getDevices, deleteDevice } from "../api";

function Assets() {
  const [devices, setDevices] = useState([]);

  const loadData = () => {
    getDevices()
      .then(res => setDevices(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id) => {
    deleteDevice(id).then(() => loadData());
  };

  return (
    <>
      <h1>Danh sách tài sản</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {devices.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.price}</td>
              <td>
                <button onClick={() => handleDelete(d.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Assets;
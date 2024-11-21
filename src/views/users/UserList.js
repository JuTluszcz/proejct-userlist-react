import { useEffect, useState } from "react";
import UserService from "./UserService";
import Pagination from "../../components/Pagination";

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(6);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    UserService.getAll(page, size)
      .then((response) => {
        console.log("UserList:", response);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao obter a lista de usuarios");
      });
  }, [page, size]);

  const handleChangeSize = (event) => setSize(event.target.value);

  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <img src={user.avatar} style={{ width: 80 }} />
              </td>
              <td>
                {user.first_name}
                {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-secondary">Del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination totalPages={totalPages} activePage={page} changePage={setPage} changeSize={handleChangeSize}/>
    </>
  );
}

export default UserList;

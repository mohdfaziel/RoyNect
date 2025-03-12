import React from "react";
import { format } from "date-fns";
import { cpy } from "../../../assets/Images/Images";
function Users({ orders, users }) {
  return (
    <div className="w-full max-h-[35rem] h-full gap-1 flex flex-col justify-center items-start">
      <h1 className="text-3xl font-extrabold text-Aunactive">Users</h1>
      <div className="w-full h-full rounded-3xl overflow-hidden bg-Aunactive">
        <div className="overflow-auto h-full">
          <table className="w-full rounded-3xl buser-[1px] buser-Aunactive">
            <thead className="sticky top-0 shadow-md text-Adark1 bg-Aunactive uppercase text-bold text-base md:text-lg">
              <tr className="hidden md:table-row">
                <th className="px-4 py-2">S No.</th>
                <th className="px-4 py-2">user name</th>
                <th className="px-4 py-2">E-mail</th>
                <th className="px-4 py-2">User Id</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Joined Date</th>
              </tr>
              <tr className="md:hidden table-row">
                <th className="px-4 py-2">User name</th>
                <th className="px-4 py-2">E-mail</th>
                <th className="px-4 py-2">User Id</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, index) => (
                  <tr
                    key={index}
                    className="text-center cursor-pointer text-base md:text-lg font-semibold border-b border-gray-500"
                  >
                    <td className="hidden md:table-cell px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2">
                      {" "}
                      <span className="block md:hidden">
                        {user.name.length > 6
                          ? user.name.slice(0, 6) + " ..."
                          : user.name}
                      </span>
                      <span className="hidden md:block">
                        {user.name}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-full h-full flex justify-center items-center gap-2">
                        <span className="block md:hidden">
                          {user.email.length > 3
                            ? user.email.slice(0, 3) + " ..."
                            : user.email}
                        </span>
                        <span className="hidden md:block">
                          {user.email.length > 10
                            ? user.email.slice(0, 10) + " ..."
                            : user.email}
                        </span>
                        <img
                          onClick={() =>
                            navigator.clipboard.writeText(user.email)
                          }
                          className="w-4 cursor-pointer hover:scale-105 transition-all"
                          src={cpy}
                        ></img>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-full h-full flex justify-center items-center gap-2">
                        <span className="block md:hidden">
                          {user.id.length > 3
                            ? user.id.slice(0, 3) + " ..."
                            : user.id}
                        </span>
                        <span className="hidden md:block">
                          {user.id.length > 10
                            ? user.id.slice(0, 10) + " ..."
                            : user.id}
                        </span>
                        <img
                          onClick={() => navigator.clipboard.writeText(user.id)}
                          className="w-4 cursor-pointer hover:scale-105 transition-all"
                          src={cpy}
                        ></img>
                      </div>
                    </td>
                    <td className="hidden md:table-cell px-4 py-2">
                      {user.role}
                    </td>
                    <td className="hidden md:table-cell px-4 py-2">
                      {user.createdAt
                        ? format(
                            typeof user.createdAt === "string"
                              ? new Date(user.createdAt)
                              : new Date(user.createdAt?.seconds * 1000),
                            "dd MMM yyyy"
                          )
                        : "N/A"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;

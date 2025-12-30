// components/screens/EmployeeManagementScreen.tsx
export default function EmployeeManagementScreen() {
  return (
    <div className="p-6 bg-gray-50 h-full overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CENTVISE</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-gray-600">Dashboard</span>
              <span className="text-gray-600">Payrolls</span>
              <span className="text-gray-600 font-semibold">Employees</span>
              <span className="text-gray-600">Reports</span>
              <span className="text-gray-600">Admin</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Dashboard &gt; Employees</h2>
            <p className="text-sm text-gray-500 mt-1">Search employees by name, email</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl font-bold text-blue-600">31</span>
              <span className="text-gray-600">employees</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 h-[calc(100%-180px)]">
        {/* Employee List */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm border p-4">
          <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b">EMPLOYEE NAME</h3>
          <div className="space-y-2 overflow-auto max-h-[400px]">
            {[
              "HARPETT GAUR",
              "ONE ONE",
              "GURK N/A",
              "111 111",
              "AMANDEDE PAUR",
              "MATTHEW BONAS",
              "GEORGE MAGARAS",
              "SYDNEY BIGGS",
            ].map((name, index) => (
              <div
                key={index}
                className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-200"
              >
                <div className="font-medium text-gray-800">{name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Employee Panel */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Add New Employee</h3>
          <p className="text-sm text-gray-600 mb-4">
            Select a business to add an employee to:
          </p>

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search businesses..."
              className="w-full p-2 border rounded-lg text-sm"
            />
          </div>

          {/* Business List */}
          <div className="space-y-3 mb-6 overflow-auto max-h-[200px]">
            {[
              { name: "SSK", id: "60924a0c4b2f7e40f625647" },
              { name: "BENEFITS", id: "60929a978835d81a3c6490" },
              { name: "NEW TEST", id: "60939a8c6a4f792206a77fa" },
              { name: "MATTHEW BONAS YOGA INC.", id: "609a8785d0709e879a33a" },
            ].map((business, index) => (
              <div
                key={index}
                className="p-3 border rounded-lg hover:bg-blue-50 cursor-pointer"
              >
                <div className="font-medium">{business.name}</div>
                <div className="text-xs text-gray-500 mt-1">Business ID: {business.id}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 text-left">SCHEDULE</th>
                  <th className="p-2 text-left">STATUS</th>
                  <th className="p-2 text-left">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map((row) => (
                  <tr key={row} className="border-b">
                    <td className="p-2">Bi-weekly</td>
                    <td className="p-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        Active
                      </span>
                    </td>
                    <td className="p-2">
                      <button className="text-blue-600 hover:text-blue-800">✓</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Add Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// components/screens/DashboardScreen.tsx
export default function DashboardScreen() {
  return (
    <div className="p-6 bg-gray-50 h-full overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CENTVISE</h1>
            <h2 className="text-lg font-semibold text-gray-700 mt-1">Dashboard</h2>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-500">Businesses</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-500">Total Employees</div>
            <div className="text-2xl font-bold mt-1">31</div>
            <div className="text-xs text-gray-400 mt-1">Businesses with Employees</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-500">Pending Payrolls</div>
            <div className="text-2xl font-bold mt-1">21</div>
            <div className="text-xs text-gray-400 mt-1">Approval Rate</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-500">Add Employee</div>
            <div className="text-2xl font-bold mt-1">49</div>
            <div className="text-xs text-gray-400 mt-1">Total</div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mb-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            View All Businesses
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Admin Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-3">Admin</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active</span>
                <span className="font-bold">31</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Overlooker</span>
                <span className="font-bold">0</span>
              </div>
            </div>
          </div>

          {/* Payroll Timeline */}
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-3">Payroll Timeline</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex justify-between">
                <span className="text-gray-700">Day Today</span>
                <span className="text-blue-600 font-medium">View</span>
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex justify-between">
                <span className="text-gray-700">This Week</span>
                <span className="text-blue-600 font-medium">View</span>
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex justify-between">
                <span className="text-gray-700">This Month</span>
                <span className="text-blue-600 font-medium">View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Due Today */}
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-3">Due Today</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending Approvals</span>
                <span className="font-bold text-orange-600">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Upcoming Pay Dates</span>
                <span className="font-bold text-green-600">8</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="bg-gray-50 p-3 border-b">
              <div className="grid grid-cols-4 text-sm font-semibold text-gray-700">
                <div>BUSINESS</div>
                <div>EMPLOYEE</div>
                <div>PAY DATE</div>
                <div>ACTIONS</div>
              </div>
            </div>
            <div className="divide-y">
              <div className="grid grid-cols-4 p-3 text-sm items-center">
                <div className="font-medium">BENEFITS</div>
                <div>TIT I'll</div>
                <div>Nov 14, 2025</div>
                <div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Review
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 p-3 text-sm items-center">
                <div className="font-medium">BENEFITS</div>
                <div>AMANDEEP FAIR</div>
                <div>Oct 31, 2025</div>
                <div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
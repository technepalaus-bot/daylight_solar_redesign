"use client";

import { useEffect, useState } from "react";
import { Edit2, Trash2, Eye, X, Check } from "lucide-react";
import { toast } from "react-hot-toast";

interface SolarSubsidySubmission {
  id: string;
  fullName: string;
  homeAddress: string;
  contactNumber: string;
  averagePowerBill: string;
  property: string;
  existingSolar: string;
  solarCount: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function SolarSubsidyPage() {
  const [submissions, setSubmissions] = useState<SolarSubsidySubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] =
    useState<SolarSubsidySubmission | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    status: "pending",
    notes: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/solar-subsidy");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      toast.error("Failed to load submissions");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (submission: SolarSubsidySubmission) => {
    setSelectedSubmission(submission);
    setIsViewOpen(true);
  };

  const handleEdit = (submission: SolarSubsidySubmission) => {
    setSelectedSubmission(submission);
    setEditFormData({ status: submission.status, notes: submission.notes || "" });
    setIsEditOpen(true);
  };

  const handleSaveEdit = async () => {
    if (!selectedSubmission) return;
    try {
      const response = await fetch(`/api/solar-subsidy/${selectedSubmission.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFormData),
      });
      if (!response.ok) throw new Error("Failed to update");
      toast.success("Submission updated successfully");
      setIsEditOpen(false);
      fetchSubmissions();
    } catch (error) {
      toast.error("Failed to update submission");
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    try {
      const response = await fetch(`/api/solar-subsidy/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete");
      toast.success("Submission deleted successfully");
      fetchSubmissions();
    } catch (error) {
      toast.error("Failed to delete submission");
      console.error(error);
    }
  };

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.contactNumber.includes(searchTerm) ||
      submission.homeAddress.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || submission.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Solar Subsidy Submissions</h1>
        <p className="text-gray-600 mt-2">
          Manage and track all solar subsidy application submissions
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-primary">
          <p className="text-gray-600 text-sm font-medium">Total Submissions</p>
          <p className="text-3xl font-bold text-primary mt-2">{submissions.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-yellow-400">
          <p className="text-gray-600 text-sm font-medium">Pending</p>
          <p className="text-3xl font-bold text-yellow-500 mt-2">
            {submissions.filter((s) => s.status === "pending").length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-400">
          <p className="text-gray-600 text-sm font-medium">Approved</p>
          <p className="text-3xl font-bold text-green-500 mt-2">
            {submissions.filter((s) => s.status === "approved").length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-red-400">
          <p className="text-gray-600 text-sm font-medium">Rejected</p>
          <p className="text-3xl font-bold text-red-500 mt-2">
            {submissions.filter((s) => s.status === "rejected").length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name, phone, or address..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Power Bill
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Date
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSubmissions.length > 0 ? (
                filteredSubmissions.map((submission) => (
                  <tr
                    key={submission.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {submission.fullName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {submission.contactNumber}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      ${submission.averagePowerBill}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          submission.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : submission.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {submission.status.charAt(0).toUpperCase() +
                          submission.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(submission.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleView(submission)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(submission)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(submission.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No submissions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {isViewOpen && selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Submission Details</h2>
              <button
                onClick={() => setIsViewOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-600">Full Name</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {selectedSubmission.fullName}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Phone Number</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {selectedSubmission.contactNumber}
                  </p>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-semibold text-gray-600">Home Address</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {selectedSubmission.homeAddress}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Average Power Bill</label>
                  <p className="text-gray-900 font-medium mt-1">
                    ${selectedSubmission.averagePowerBill}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Own Property</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {selectedSubmission.property === "yes" ? "Yes" : "No"}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Existing Solar</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {selectedSubmission.existingSolar === "yes" ? "Yes" : "No"}
                  </p>
                </div>
                {selectedSubmission.solarCount && (
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Number of Panels</label>
                    <p className="text-gray-900 font-medium mt-1">
                      {selectedSubmission.solarCount}
                    </p>
                  </div>
                )}
                <div>
                  <label className="text-sm font-semibold text-gray-600">Status</label>
                  <p className="text-gray-900 font-medium mt-1 capitalize">
                    {selectedSubmission.status}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Submission Date</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {new Date(selectedSubmission.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {selectedSubmission.notes && (
                <div>
                  <label className="text-sm font-semibold text-gray-600">Notes</label>
                  <p className="text-gray-900 mt-1">{selectedSubmission.notes}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(selectedSubmission)}
                  className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Edit Status
                </button>
                <button
                  onClick={() => setIsViewOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditOpen && selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Update Status & Notes</h2>
              <button
                onClick={() => setIsEditOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Status
                </label>
                <select
                  value={editFormData.status}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, status: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  value={editFormData.notes}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, notes: e.target.value })
                  }
                  placeholder="Add notes about this application..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary h-24 resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

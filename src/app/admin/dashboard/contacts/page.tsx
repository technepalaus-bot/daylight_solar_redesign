"use client";
import { useEffect, useState } from "react";
import { Search, Trash2, Eye, Mail, Phone, MapPin, Calendar } from "lucide-react";
import toast from "react-hot-toast";

interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string | null;
  powerBill: string | null;
  hasSolar: boolean;
  message: string | null;
  preferredDate: string | null;
  preferredTime: string | null;
  status: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setContacts(data);
    } catch {
      toast.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      toast.success("Status updated!");
      fetchContacts();
      if (selectedContact?.id === id) {
        setSelectedContact({ ...selectedContact, status });
      }
    } catch {
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;
    try {
      const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete contact");
      toast.success("Contact deleted!");
      fetchContacts();
      if (selectedContact?.id === id) {
        setSelectedContact(null);
      }
    } catch {
      toast.error("Failed to delete contact");
    }
  };

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusColors: { [key: string]: string } = {
    new: "bg-blue-100 text-blue-700",
    contacted: "bg-yellow-100 text-yellow-700",
    scheduled: "bg-purple-100 text-purple-700",
    completed: "bg-green-100 text-green-700",
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="text-sm text-gray-500">
          {filteredContacts.length} contact{filteredContacts.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contacts List */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Contact</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                      </div>
                    </td>
                  </tr>
                ) : filteredContacts.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      No contacts found
                    </td>
                  </tr>
                ) : (
                  filteredContacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className={`hover:bg-gray-50 cursor-pointer ${
                        selectedContact?.id === contact.id ? "bg-primary/5" : ""
                      }`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{contact.fullName}</p>
                          <p className="text-sm text-gray-500">{contact.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={contact.status}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleStatusChange(contact.id, e.target.value);
                          }}
                          className={`px-3 py-1 text-sm rounded-full border-0 ${
                            statusColors[contact.status]
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="scheduled">Scheduled</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(contact.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedContact(contact);
                            }}
                            className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(contact.id);
                            }}
                            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {selectedContact ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Contact Details</h3>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    statusColors[selectedContact.status]
                  }`}
                >
                  {selectedContact.status.charAt(0).toUpperCase() + selectedContact.status.slice(1)}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">
                      {selectedContact.fullName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{selectedContact.fullName}</p>
                    <p className="text-sm text-gray-500">
                      Submitted {formatDate(selectedContact.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <a href={`mailto:${selectedContact.email}`} className="hover:text-primary">
                      {selectedContact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <a href={`tel:${selectedContact.phone}`} className="hover:text-primary">
                      {selectedContact.phone}
                    </a>
                  </div>
                  {selectedContact.address && (
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{selectedContact.address}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t">
                  {selectedContact.powerBill && (
                    <div>
                      <p className="text-sm text-gray-500">Quarterly Power Bill</p>
                      <p className="font-medium text-gray-900">${selectedContact.powerBill}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-500">Has Existing Solar</p>
                    <p className="font-medium text-gray-900">
                      {selectedContact.hasSolar ? "Yes" : "No"}
                    </p>
                  </div>
                  {selectedContact.preferredDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Preferred: {selectedContact.preferredDate}
                        {selectedContact.preferredTime && ` at ${selectedContact.preferredTime}`}
                      </span>
                    </div>
                  )}
                </div>

                {selectedContact.message && (
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-2">Message</p>
                    <p className="text-gray-600 text-sm">{selectedContact.message}</p>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500 mb-2">Update Status</p>
                  <select
                    value={selectedContact.status}
                    onChange={(e) => handleStatusChange(selectedContact.id, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Select a contact to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

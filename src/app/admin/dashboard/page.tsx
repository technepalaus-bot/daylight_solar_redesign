"use client";
import { useEffect, useState } from "react";
import { FileText, MessageSquare, Mail, TrendingUp } from "lucide-react";

interface Stats {
  blogs: number;
  testimonials: number;
  contacts: { total: number; new: number };
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    blogs: 0,
    testimonials: 0,
    contacts: { total: 0, new: 0 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [blogsRes, testimonialsRes, contactsRes] = await Promise.all([
        fetch("/api/blogs"),
        fetch("/api/testimonials"),
        fetch("/api/contacts"),
      ]);

      const [blogs, testimonials, contacts] = await Promise.all([
        blogsRes.json(),
        testimonialsRes.json(),
        contactsRes.json(),
      ]);

      setStats({
        blogs: blogs.length,
        testimonials: testimonials.length,
        contacts: {
          total: contacts.length,
          new: contacts.filter((c: { status: string }) => c.status === "new").length,
        },
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Blogs",
      value: stats.blogs,
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Testimonials",
      value: stats.testimonials,
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Total Contacts",
      value: stats.contacts.total,
      icon: Mail,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
      badge: stats.contacts.new > 0 ? `${stats.contacts.new} new` : null,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">{card.title}</p>
                <div className="flex items-baseline gap-2 mt-2">
                  {loading ? (
                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">{card.value}</span>
                  )}
                  {card.badge && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                      {card.badge}
                    </span>
                  )}
                </div>
              </div>
              <div className={`p-3 rounded-xl ${card.bgColor}`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="/admin/dashboard/blogs"
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl hover:shadow-lg transition-all"
          >
            <FileText className="w-5 h-5" />
            <span>Add New Blog</span>
          </a>
          <a
            href="/admin/dashboard/testimonials"
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Add Testimonial</span>
          </a>
          <a
            href="/admin/dashboard/contacts"
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg transition-all"
          >
            <Mail className="w-5 h-5" />
            <span>View Contacts</span>
          </a>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome to Daylight Solar Admin</h2>
            <p className="text-white/80 max-w-xl">
              Manage your website content including blogs, testimonials, contacts, and solar subsidy submissions. Use the sidebar to navigate between different sections.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

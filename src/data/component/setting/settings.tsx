import React, { useState } from "react";
import { User, Lock, Bell, Settings, Check } from "lucide-react";

type SettingsTab = "profile" | "security" | "notifications" | "preferences";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
}

interface SecurityData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  twoFA: boolean;
}

interface NotificationData {
  emailAlerts: boolean;
  pushNotifications: boolean;
  smsAlerts: boolean;
  weeklyReport: boolean;
  monthlyReport: boolean;
}

interface PreferenceData {
  theme: "dark" | "light";
  timezone: string;
  currency: string;
  dateFormat: string;
}

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");
  const [saveSuccess, setSaveSuccess] = useState("");

  const [profile, setProfile] = useState<ProfileData>({
    name: "John Doe",
    email: "john@example.com",
    phone: "08012345678",
    businessName: "ABC Enterprises",
    industry: "Retail",
  });

  const [security, setSecurity] = useState<SecurityData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFA: false,
  });

  const [notifications, setNotifications] = useState<NotificationData>({
    emailAlerts: true,
    pushNotifications: true,
    smsAlerts: false,
    weeklyReport: true,
    monthlyReport: true,
  });

  const [preferences, setPreferences] = useState<PreferenceData>({
    theme: "dark",
    timezone: "GMT+1",
    currency: "NGN",
    dateFormat: "DD/MM/YYYY",
  });

  const handleSave = (type: string) => {
    setSaveSuccess(type);
    setTimeout(() => setSaveSuccess(""), 3000);
  };

  const tabs: Array<{ id: SettingsTab; label: string; icon: React.ReactNode }> =
    [
      { id: "profile", label: "Profile", icon: <User size={18} /> },
      { id: "security", label: "Security", icon: <Lock size={18} /> },
      { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
      { id: "preferences", label: "Preferences", icon: <Settings size={18} /> },
    ];

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-slate-400">Manage your account and preferences</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-800 mb-8">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-blue-600 text-white"
                    : "border-transparent text-slate-400 hover:text-slate-300"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center gap-2">
            <Check size={20} className="text-emerald-400" />
            <span className="text-emerald-300 text-sm">
              Settings saved successfully!
            </span>
          </div>
        )}

        {/* Tab Content */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={profile.businessName}
                    onChange={(e) =>
                      setProfile({ ...profile, businessName: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={profile.industry}
                    onChange={(e) =>
                      setProfile({ ...profile, industry: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={() => handleSave("profile")}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-300">
                  Keep your account secure by using a strong password and
                  enabling two-factor authentication.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={security.currentPassword}
                  onChange={(e) =>
                    setSecurity({
                      ...security,
                      currentPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={security.newPassword}
                  onChange={(e) =>
                    setSecurity({ ...security, newPassword: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={security.confirmPassword}
                  onChange={(e) =>
                    setSecurity({
                      ...security,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input
                  type="checkbox"
                  id="twoFA"
                  checked={security.twoFA}
                  onChange={(e) =>
                    setSecurity({ ...security, twoFA: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-slate-700 bg-slate-800 accent-blue-600 cursor-pointer"
                />
                <label
                  htmlFor="twoFA"
                  className="text-sm text-slate-300 cursor-pointer"
                >
                  Enable Two-Factor Authentication
                </label>
              </div>

              <button
                onClick={() => handleSave("security")}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Update Security
              </button>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-300">
                  Choose how you want to receive important alerts and reports.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    key: "emailAlerts",
                    label: "Email Alerts",
                    desc: "Receive alerts via email",
                  },
                  {
                    key: "pushNotifications",
                    label: "Push Notifications",
                    desc: "Receive app notifications",
                  },
                  {
                    key: "smsAlerts",
                    label: "SMS Alerts",
                    desc: "Receive critical alerts via SMS",
                  },
                  {
                    key: "weeklyReport",
                    label: "Weekly Report",
                    desc: "Get weekly financial summary",
                  },
                  {
                    key: "monthlyReport",
                    label: "Monthly Report",
                    desc: "Get monthly financial summary",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-white text-sm">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={
                        notifications[
                          item.key as keyof NotificationData
                        ] as boolean
                      }
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          [item.key]: e.target.checked,
                        })
                      }
                      className="w-4 h-4 rounded border-slate-700 bg-slate-800 accent-blue-600 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleSave("notifications")}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Save Preferences
              </button>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Theme
                  </label>
                  <select
                    value={preferences.theme}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        theme: e.target.value as "dark" | "light",
                      })
                    }
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                  >
                    <option value="dark">Dark Mode</option>
                    <option value="light">Light Mode</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Timezone
                  </label>
                  <select
                    value={preferences.timezone}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        timezone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                  >
                    <option value="GMT+1">GMT+1 (West Africa)</option>
                    <option value="GMT+2">GMT+2 (East Africa)</option>
                    <option value="UTC">UTC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Currency
                  </label>
                  <select
                    value={preferences.currency}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        currency: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                  >
                    <option value="NGN">NGN (Nigerian Naira)</option>
                    <option value="USD">USD (US Dollar)</option>
                    <option value="EUR">EUR (Euro)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Date Format
                  </label>
                  <select
                    value={preferences.dateFormat}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        dateFormat: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-blue-600 focus:outline-none transition-colors"
                  >
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => handleSave("preferences")}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

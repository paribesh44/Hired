import React from "react";

export const CompanyNavbarData = [
  {
    title: "Home",
    selected: true,
    link: ["/CompanyHome", "/AppliedEmployeesList", "/CompanyApplied"],
  },
  {
    title: "Add a Post",
    selected: false,
    link: ["/CompanyAddPost"],
  },
  {
    title: "Analytics",
    selected: false,
    link: ["/CompanyAnalytics"],
  },
  {
    title: "Reminders",
    selected: false,
    link: ["/CompanyReminderPage", "/CompanyAddReminder"],
  },
];

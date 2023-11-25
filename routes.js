// @material-ui/icons
import Dashboard from "@mui/icons-material/Dashboard";
import Person from "@mui/icons-material/Person";
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import BubbleChart from "@mui/icons-material/BubbleChart";
import LocationOn from "@mui/icons-material/LocationOn";
import Notifications from "@mui/icons-material/Notifications";
import Unarchive from "@mui/icons-material/Unarchive";
import Language from "@mui/icons-material/Language";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,

    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",

    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,

    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,

    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,

    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,

    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,

    layout: "/rtl",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,

    layout: "/admin",
  },
];

export default dashboardRoutes;

import React from "react"
import {
  CodeOutlined,
  UserOutlined,
  ToolOutlined,
  FileTextOutlined,
  ContactsOutlined,
} from "@ant-design/icons"

export default [
  {
    title: " About",
    icon: <UserOutlined />,
    link: "/about",
  },
  {
    title: " Skills",
    icon: <ToolOutlined />,
    link: "/#skills",
  },
  {
    title: " Projects",
    icon: <CodeOutlined />,
    link: "/#projects",
  },
  {
    title: " Resume",
    icon: <FileTextOutlined />,
    link:
      "https://drive.google.com/file/d/1ER8UAO7J8Xbm_XlCyZ9H1xBhDlJyhEx3/view?usp=sharing",
    /* If update url, also update url in src/components/about && src/pages/about */
  },
  {
    title: " Contact",
    icon: <ContactsOutlined />,
    link: "/contact",
  },
]

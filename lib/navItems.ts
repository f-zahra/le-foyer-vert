interface NavItem {
  name: string;
  href: string;
}
export const revalidate = 30;
export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Service", href: "#services" },
  { name: "Contact", href: "#contact" },
];

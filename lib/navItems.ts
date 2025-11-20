interface NavItem {
  name: string;
  href: string;
}
export const revalidate = 30;
export const navItems: NavItem[] = [
  { name: "navigation.about", href: "#about" },
  { name: "navigation.service", href: "#services" },
  { name: "navigation.projects", href: "#projects" },
  { name: "navigation.contact", href: "#contact" },
  { name: "navigation.quote", href: "#quote-form" },
];

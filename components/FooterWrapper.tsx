// components/FooterWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

const FooterWrapper = () => {
  const pathname = usePathname();
  const hideFooterRoutes = ['/admin', '/dashboard'];

  const shouldHideFooter = hideFooterRoutes.some((route) => pathname.startsWith(route));

  if (shouldHideFooter) return null;

  return <Footer />;
};

export default FooterWrapper;

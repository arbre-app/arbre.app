import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { defaultLocale } from '../i18n';

export default function PageHome() {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') {
      router.replace('/' + defaultLocale);
    }
  });

  return null;
}

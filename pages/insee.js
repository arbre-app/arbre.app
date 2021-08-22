import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { defaultLocale } from '../i18n';

export default function PageInseeDefault() {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/insee') {
      router.replace('/' + defaultLocale + '/insee');
    }
  });

  return null;
}

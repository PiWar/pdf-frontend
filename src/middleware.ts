import { middlewareChain } from '@/middlewares/middlewareChain';
import { redirectFromUnknownConvert } from '@/middlewares/redirectFromUnknownConvert';

export const middleware = middlewareChain([redirectFromUnknownConvert]);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

import { MiddlewareFactory } from '@/shared/types/middlewareFactory';
import { NextResponse } from 'next/server';
import { ROUTES } from '@/shared/constants/routes';
import { CONVERTS_INFO } from '@/shared/constants/convertsInfo';

// todo: возможно надо вынести куда-то (shared/constants)
const availableConverts = Object.keys(CONVERTS_INFO).join('|');
const availableConvertPathsTester = new RegExp(
  `${ROUTES.convert}/(${availableConverts}).*`
);

export const redirectFromUnknownConvert: MiddlewareFactory = (next) => {
  return (request, event) => {
    const { pathname } = request.nextUrl;

    if (
      pathname.startsWith(ROUTES.convert) &&
      !availableConvertPathsTester.test(pathname)
    ) {
      return NextResponse.redirect(new URL(ROUTES.home, request.url));
    }
    return next(request, event);
  };
};

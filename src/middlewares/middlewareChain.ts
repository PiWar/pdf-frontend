import { MiddlewareFactory } from '@/shared/types/middlewareFactory';
import { NextMiddleware, NextResponse } from 'next/server';

export function middlewareChain(
  middlewares: MiddlewareFactory[],
  index = 0
): NextMiddleware {
  const current = middlewares[index] as MiddlewareFactory | undefined;
  if (current) {
    const next = middlewareChain(middlewares, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
}

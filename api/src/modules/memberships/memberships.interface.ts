// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { MembershipRole } from '@prisma/client';

export interface CreateMembershipInput {
  email: string;
  name?: string;
  role?: MembershipRole;
}

import { IMember } from './auth';

export interface ICall {
  url: string;
  title: string;
  admin: IMember;
  members?: IMember[];
  ended?: boolean;
  isLive?: boolean;
  scheduledAt: string;
}

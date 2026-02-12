import { createContext } from 'react';
import type { IData } from '../entities/category/card/model/card.type';
import type { ICourse } from '../entities/course/card-compact/modul/course.type';
import type { IStatus } from '../entities/status/model/status.type';
import type { IUser } from '../entities/user/card/model/card.type';

interface LevelContextType {
  cards: IData[];
  courses: ICourse[];
  status: IStatus[];
  user: IUser[];
}

export const LevelContext = createContext<LevelContextType | undefined>(
  undefined
);

import type { ReactNode } from 'react';
import { LevelContext } from './LevelContext';
import { Data } from '../entities/category/card/ui/card.data';
import { CourseData } from '../entities/course/card-compact/ui/course.data';
import { Stat } from '../entities/status/ui/status.data';
import { User } from '../entities/user/card/ui/user.data';

export const LevelProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LevelContext.Provider
      value={{ cards: Data, courses: CourseData, status: Stat, user: User }}
    >
      {children}
    </LevelContext.Provider>
  );
};

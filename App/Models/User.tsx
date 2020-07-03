import {schema} from 'normalizr';

export const USER_ENTITY = 'user';

export interface User {
  id: string;
  name: string;
}

// Define a users schema
export const userSchema = new schema.Entity(USER_ENTITY);

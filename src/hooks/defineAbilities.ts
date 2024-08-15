import {  AbilityBuilder, createMongoAbility } from '@casl/ability';

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
export type Subjects = 'Categories' | 'Books' | 'Users' | 'all';

export type AppAbility = ReturnType<typeof createMongoAbility>;

export function defineAbilitiesFor(role: string): AppAbility {
  const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);
  console.log("Role is: ", role); 
  if (role === 'admin') {
    can('manage', 'all'); 
  } else if (role === 'owner') {
    can('manages', 'Books');
    can("read", "Categories");
  } else if (role === 'user') {
    can('read', 'Books');
  }

  return build();
}

import AppDataSource from "../../config/dbconfig";
import { masterMenuSeeder } from "./MasterMenuSeeder";
import { masterModuleSeeder } from "./MasterModuleSeeder";
import { rolesSeeder } from "./RoleSeeder";
import { usersSeeder } from "./UserSeeder";

const runSeeders = async () => {
  await AppDataSource.initialize();
  console.log('Database connection established');

  /** Roles */
  console.log('Seeding Roles...');
  await rolesSeeder();
  console.log('Roles seeded successfully');

  /** Roles */
  console.log('Seeding Users...');
  await usersSeeder();
  console.log('Users seeded successfully');

  /** Master Module */
  console.log('Seeding Master Module...');
  await masterModuleSeeder();
  console.log('Master Module seeded successfully');


  /** Master Menu */
  console.log('Seeding Master Menu...');
  await masterMenuSeeder();
  console.log('Master Module menu successfully');
}


runSeeders()
  .then(() => console.log('Seeders executed successfully'))
  .catch((error) => console.error('Error running seeders:', error));

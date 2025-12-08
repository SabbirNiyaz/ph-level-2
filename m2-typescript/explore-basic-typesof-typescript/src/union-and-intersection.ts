// Union |
// Intersection &

type UserRole = 'admin' | 'editor' | 'viewer'; // Union |

const assignRole = (role: UserRole) => {
    if (role === 'admin') {
        console.log('You have full access.');
    } else if (role === 'editor') {
        console.log('You can edit content.');
    } else {
        console.log('You can view content.');
    }
}

assignRole('admin');
assignRole('editor');
assignRole('viewer');

// -------------------------------------------------------------------
type Employee = {
    id: number;
    name: string;
    phoneNumber: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager; // Intersection &

const SabbirNiyaz: EmployeeManager = {
    id: 1,
    name: 'Sabbir Niyaz',
    phoneNumber: '123-456-7890',
    designation: 'Team Lead',
    teamSize: 10
};

console.log(SabbirNiyaz);
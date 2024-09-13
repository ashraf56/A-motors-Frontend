
import overview from '@/assets/file.png'
import mallbooking from '@/assets/bookings.png'
import manageCar from '@/assets/management.png'
import manageReturnCar from '@/assets/productreturn.png'
import userMange from '@/assets/profile.png'
export const adminroutes = [
    {
        id: 1,
        icon:`${overview}`,
        name: 'Overview',
        route: 'admin/overview',

    },
    {
        id: 2,
        icon:`${mallbooking}`,
        name: 'Manage all Bookings',
        route: 'admin/manage-booking',

    },
    {
        id: 3,
        icon:`${manageCar}`,
        name: 'Manage Car',
        route: 'admin/manage-car',

    },
    {
        id: 4,
        icon:`${manageReturnCar}`,
        name: 'Manage Return Car',
        route: 'admin/manage-return-car',
    },
    {
        id: 5,
        icon:`${userMange}`,
        name: 'User management',
        route: 'admin/user-management',

    },
]
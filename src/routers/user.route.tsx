
import overview from '@/assets/file.png'
import bookings from '@/assets/book.png'
import payments from '@/assets/creditcard.png'

export const userRoutes = [
    {
        id: 1,
        icon:`${overview}`,
        name: 'Overview',
        route: 'user/overview',

    },
    {
        id: 2,
        icon:`${bookings}`,
        name: 'Manage your Booking',
        route: 'user/user-booking',

    },
    {
        id: 3,
        icon:`${payments}`,
        name: 'Manage your Payment',
        route: 'user/manage-payment',

    },
    
]
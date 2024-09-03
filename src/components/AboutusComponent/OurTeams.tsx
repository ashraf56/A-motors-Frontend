import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import profile1 from '@/assets/profile3.jpg'
import profile2 from '@/assets/profile2.jpg'
import profile3 from '@/assets/profile4.jpg'
import Title from "../Reusable/Title";


const team = [
    {
        name: "Liam Archer",
        role: "CEO & Founder",
        photo: `${profile1}`
    },
    {
        name: "Olivia Hayes",
        role: "Chief Operating Officer",
        photo: `${profile2}`
    },
    {
        name: "Ethan Brooks",
        role: "Head of Sales",
        photo: `${profile3}`
    }
];

const OurTeams = () => {
    return (
        <div className="container  font-CustomFont my-10 mx-auto">
            <Title name='Our Key Members' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-4 py-5">
                {
                    team.map(t => (
                        <Card className=' w-[350px] mx-auto   h-auto text-center'>

                            <CardHeader>
                                <Avatar className="w-full ">
                                    <AvatarImage src={t.photo} className="mx-auto rounded-3xl w-24" alt="@shadcn" />
                                </Avatar>
                                <CardTitle>
                                    {t.name}
                                </CardTitle>
                                <CardDescription>{t.role}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default OurTeams;
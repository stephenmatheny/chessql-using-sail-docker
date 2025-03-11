import { Link } from '@inertiajs/react';
import { IconTournament, IconHome, IconUsersGroup, IconTool } from '@tabler/icons-react';

const NavigationIcons = () => {
    const rgb = "rgb(114, 238, 255)";

    return (
        <>
                <IconContainer href="/dashboard">
                    <IconHome color={rgb} />
                    <span className={'text-logo-rgb'}>
                        Home
                    </span>
                </IconContainer>

                <IconContainer href="/clubs">
                    <IconUsersGroup color={rgb} />
                    <span className={'text-logo-rgb'}>
                        Club
                    </span>
                </IconContainer>

                <IconContainer href="/tournament">
                    <IconTournament color={rgb} />
                    <span className={'text-logo-rgb'}>
                        Tournament
                    </span>
                </IconContainer>

                <IconContainer href="/tools">
                    <IconTool color={rgb} />
                    <span className={'text-logo-rgb'}>
                        Tools
                    </span>
                </IconContainer>
        </>
    );
}

const IconContainer = ({ children, href }) => {
    return (
        <Link href={href} className="flex flex-col justify-center content-center items-center size-20 rounded-md hover:bg-cyan-700">
            {children}
        </Link>
    );
}

export default NavigationIcons;
